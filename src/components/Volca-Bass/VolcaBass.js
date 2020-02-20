import React, { useEffect } from 'react';
import Top from './Top/Top';
import Mid from './Mid/Mid';
import Bottom from './Bottom/Bottom';
import Keyboard from './Keyboard/Keyboard';
import './volca-bass.css';
import * as Tone from 'tone';



function VolcaBass() {
  //STATE:
  //keyboardGate
  //keyboard event
  //guiKeyGate
  //guiKeyEvent
  //knobvalue(object)
  
  
  useEffect(()=>{
    
    function startAudioContext(){    
      document.querySelector('.tempo').addEventListener('click', async () =>{
              await Tone.start()
      })
    }
    startAudioContext();
    
    //this needs to be in useEffect
    function detectKeyboardPress(){
       // document.addEventListener("keydown",
       //   // ()=>buttonTriggerSynth(1,sound,keyboard[event.key],event.key)
       //   // change state of gate to 1, 
       // );
     
       // document.addEventListener("keyup",
       //   // ()=>buttonTriggerSynth(0,sound,keyboard[event.key],event.key)
       // );
      }
      detectKeyboardPress();
     
 
 
  function setupAudio(){

//setup Sound
//Setup volume
    let gain = new Tone.Gain(0.05).toMaster();
//Setup filter
    let filter = new Tone.Filter({
        type : 'lowpass',
        frequency : 100,
        rolloff : -12,
        Q : 20,
        gain : 0
    }).connect(gain);
//Setup env   
    let env = new Tone.AmplitudeEnvelope({
        "attack" : 0.01,
		"decay" : 0.01,
		"sustain" : 1,
		"release" : 5
    }).connect(filter);
  
 //Setup filter env      
    let filtEnv = new Tone.FrequencyEnvelope({
        "attack" : 0.001,
		"decay" : 0.01,
		"sustain" : 0.5,
		"release" : 2,
        "baseFrequency" : 250,
        "octaves" : 2,
        "exponent" : 1,
    }).connect(filter.frequency);
//Setup oscs
   
    let osc1 = new Tone.Oscillator(440,"square").connect(env).start();
    let osc2 = new Tone.Oscillator(440, "square").connect(env).start();
    let osc3 = new Tone.Oscillator(440, "square").connect(env).start()
 
}
setupAudio();


function updateOscs(note,sound){
    const { osc1, osc2, osc3 } = sound;
    osc1.frequency.value = note;
    osc2.frequency.value = osc1.frequency.value + 1;
    osc3.frequency.value = osc1.frequency.value - 1;
};

function triggerSynth(gate,sound,note,key){
    const { env, filtEnv } = sound;
       
    if(gate){
      if(key){
          updateOscs(keyboard[key],sound)
      }
        updateOscs(note,sound);
      env.triggerAttack();
      filtEnv.triggerAttack();
    }else if (!gate){
        env.triggerRelease();
        filtEnv.triggerRelease();
    }
};

});

return (
      <section id="volca-bass-container">
          <section id="volca-bass">
            <svg id="volca-base" width="572" height="334">
              <rect width="572" height="334" fill="#010101"/>
            </svg>
          <section id="face-plate">
            <Top />
            <Mid />
            <Bottom />
          </section>  
            <Keyboard />
        </section>
      </section>  
  );
}

export default VolcaBass;
