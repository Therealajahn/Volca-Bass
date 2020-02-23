import React, { useEffect, useRef, useState } from 'react';
import Top from './Top/Top';
import Mid from './Mid/Mid';
import Bottom from './Bottom/Bottom';
import Keyboard from './Keyboard/Keyboard';
import './volca-bass.css';
import * as Tone from 'tone';


function VolcaBass() {
  //PROPS:
  //knobvalue(object)
  let [gate,setGate] = useState(0);
  let key = useRef();
  let sound = useRef();
  let func = useRef();

  func.current =  function talon(){
    return 'yes';
  }
  
  
  console.log(func.current());
  
  
  
   
  //this goes to keyboard component  
  //Define keys to use for keyboard
  const letterToNote = {
    //bottom row
    z: "c1", s: "c#1", x: "d1", d: "d#1", c: "e1", v: "f1",
    g: "f#1", b: "g1", h: "g#1", n: "a1", j: "a#1", m: "b1",
    ',': "c2", l: "c#2", '.': "d2", ';': "d#2",'/': "e2",
     //top row
     q: "c2",2: "c#2", w: "d2", 3: "d#2", e: "e2",r: "f2",
     5: "f#2",t: "g2", 6: "g#2", y: "a2", 7: "a#2", u: "b2",
     i: "c3", 9: "c#3", o: "d3", 0: "d#3", p: "e3",
  }

  const classToLetter = {
      one: "c1", two: "c#1", three: "d1", four: "d#1", five: "e1", six: "f1",
    seven: "f#1", eight: "g1", nine: "g#1", ten: "a1", eleven: "a#1", twelve: "b1",
    thirteen: "c2", fourteen: "c#2", fifteen: "d2", sixteen: "d#2",
  }
  
  // const numToNote = {
  //   1: "c1", 2: "c#1", 3: "d1", 4: "d#1", 5: "e1",
  //   6: "f1", 7: "f#1", 8: "g1", 9: "g#1", 10: "a1",
  //   11: "a#1",12: "b1",13: "c2",14: "c#2",15: "d2",16: "d#2",
  //   17: "e2",18: "f2",19: "f#2",20: "g2",21: "g#2",22: "b2",
  //   24: "c3",25: "c#3",26: "d3",27: "d#3",28: "e3",29: "f3",
  //   30: "f#3",31: "g3",32: "g#3",33: "a3",34: "a#3",35: "b3",
  //   36: "c4",37: "c#4",38: "d4",39: "d#4",40: "e4",
  // }
  
  useEffect(() => {
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
        "decay" : 1,
        "sustain" : 1,
        "release" : 5
        }).connect(filter);
      
     //Setup filter env      
        let filtEnv = new Tone.FrequencyEnvelope({
            "attack" : 0.001,
            "decay" : 0.01,
            "sustain" : 0.5,
            "release" : 5,
            "baseFrequency" : 250,
            "octaves" : 2,
            "exponent" : 1,
        }).connect(filter.frequency);
    //Setup oscs
       
        let osc1 = new Tone.Oscillator(440,"square").connect(env);
        let osc2 = new Tone.Oscillator(440, "square").connect(env);
        let osc3 = new Tone.Oscillator(440, "square").connect(env);
     
       
        sound.current = {
            osc1:osc1,
            osc2:osc2,
            osc3:osc3,
            env: env,
            filtEnv: filtEnv
        }
       
  },[]);


  
useEffect(() => { 
  

    function startAudioContext(){    
      document.querySelector('.tempo').addEventListener('click', async () =>{
              await Tone.start()
      })
    }
    startAudioContext();
    
    function detectKeyboardPress(){
       document.addEventListener("keydown",(e) => {
          e.preventDefault();
          key.current = e.key;
          setGate(1);
          console.log(gate);
        });
       document.addEventListener("keyup",(e) => { 
          setGate(0);
          console.log(gate);
        });
      }
    detectKeyboardPress();
},[]); 
   
     
// store these functions using useRefs they will act as methods  
useEffect(() => {  
  const {osc1, osc2, osc3, env, filtEnv} = sound.current;
  
  function triggerSynth(){
    console.log(key.current,
      gate.current);
    updateOscs(key.current);
    env.triggerAttack();
    filtEnv.triggerAttack();
  };
  triggerSynth();

  function releaseSynth(){
    
    env.triggerRelease();
    filtEnv.triggerRelease();
  
  }
  releaseSynth();

  function updateOscs(key){
    const note = letterToNote[key];
    // console.log(note);
    osc1.frequency.value = note;
    osc2.frequency.value = note;
    osc3.frequency.value = note;
    
    osc1.start();
    osc2.start();
    osc3.start();
  };

});
  
  
function keyNum(firstClass){
  const note = classToLetter[firstClass];
  console.log(note);
}

function mouseDown(isIt){
  console.log(isIt);
}
  

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
            <Keyboard 
              keyNum = { keyNum }
              mouseDown = { mouseDown }
            />
        </section>
        
      </section>  
  );
}

export default VolcaBass;
