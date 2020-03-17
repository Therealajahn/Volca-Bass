import React, { useEffect, useRef, useState, useCallback } from 'react';
import Top from './Top/Top';
import Mid from './Mid/Mid';
import Bottom from './Bottom/Bottom';
import Keyboard from './Keyboard/Keyboard';
import './volca-bass.css';
import * as Tone from 'tone';
import axios from 'axios';
import gsap from 'gsap';



function VolcaBass() {
 
  //PROPS:
  //knobvalue(object)
  // const[notes, setNotes] = useState(['a1']);
  // const [key, setKey] = useState();
  const [sound] = useState(()=>{
    //setup Sound
    //Setup volume
    let gain = new Tone.Gain(0.05).toMaster();
    //Setup filter
        let filterFreq = 200;
        let filter = new Tone.Filter({
            type : 'lowpass',
            frequency : filterFreq,
            rolloff : -12,
            Q : 25,
            gain : 0
        }).connect(gain);
    //Setup env   
        let env = new Tone.AmplitudeEnvelope({
            'attack' : 0.01,
        'decay' : 1,
        'sustain' : 1,
        'release' : 5
        }).connect(filter);
      
     //Setup filter env      
        let filtEnv = new Tone.FrequencyEnvelope({
            'attack' : 0.01,
            'decay' : 0.1,
            'sustain' : 0.5,
            'release' : 5,
            'baseFrequency' : filterFreq,
            'octaves' : 1,
            'exponent' : 1,
        }).connect(filter.frequency);
    //Setup oscs
       
        let osc1 = new Tone.Oscillator(440,'square').connect(env);
        let osc2 = new Tone.Oscillator(440, 'square').connect(env);
        let osc3 = new Tone.Oscillator(440, 'square').connect(env);
  
       return { osc1:osc1,
                osc2:osc2,
                osc3:osc3,
                env:env,
                filtEnv:filtEnv }
      });
 
  const triggerOrRelease = useCallback((gate, note) => { 
      
      if(gate === 1){
        triggerSynth(note);
      }else if(gate === 0){
        releaseSynth();
      }else if(gate === 'loop'){
        attackAndRelease(arguments[1],note);
      };
      

      async function attackAndRelease(duration,note){
        const { env, filtEnv } = sound;
        updateOscs(note);
        env.triggerAttackRelease(duration);
        filtEnv.triggerAttackRelease(duration);
      }

      async function triggerSynth(note){
        console.log('trigger');
      const { env, filtEnv } = sound;
          updateOscs(note);
          env.triggerAttack();
          filtEnv.triggerAttack();
      };
        
      async function releaseSynth(){
        console.log('release');
      const { env, filtEnv } = sound;
          env.triggerRelease();
          filtEnv.triggerRelease();
      }
        
      async function updateOscs(note){
        const { osc1, osc2, osc3 } = sound;
      
          osc1.frequency.value = note;
          osc2.frequency.value = note;
          osc3.frequency.value = note;
          
          osc1.start();
          osc2.start();
          osc3.start();
        };
  },[sound]) 
  
  
  // const cors 
  
    async function getSequence(){
        axios.get('http://localhost:8080/api/database')
        .then(res => {
          let sequence = res.data[res.data.length -1].sequence;
          console.log(sequence);
          return sequence;
        })
        .then(sequence => {
          play.current.playNotes(sequence);
        })
    }
    
    async function postSequence(){
        let url = 'http://localhost:8080/api/database';
        let data = {
          name: 'sequence one',
          sequence : ['b0', 'c0', 'b0', 'd0']
      }
      axios.post(url,data)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
  
  //TODO: convert these to async functions
  const play = useRef({    
    playNotes:
      function playNotes(notes) {
        console.log('playnotes runs'); 
        console.log(notes);      

        let counter = 0;
        new Tone.Loop(() => {
          
          triggerOrRelease('loop','32n',notes[counter % 4]);
          
          counter = (counter + 1) % 16;
        },'16n').start(0);
        Tone.Transport.swing = 0;
        Tone.Transport.toggle().bpm.value = 30;
      }
    
  });

  useEffect(() => { 
      function startAudioContext(){    
          document.querySelector('.tempo').addEventListener('click', async (event) =>{
                event.preventDefault();  
                await Tone.start();
                  console.log('tone context started');
                  
          })
        }
        startAudioContext();

       
       //TODO: convert these to async functions
        function attackClicked(){
          document.querySelector('.attack').addEventListener('click',(event) =>{
            event.preventDefault();
            getSequence()
          }) 
        };
        attackClicked();

        function decayClicked(){
          document.querySelector('.decay').addEventListener('click',(event) =>{
            event.preventDefault();
            postSequence()
          }) 
        };
        decayClicked();
  },[]);
  
  //update when ui keys clicked
  const [keyClicked, setKeyClicked] = useState();
  const [clickedNum, setClickedNum] = useState();
  //update ui knobs clicked
  const [knobClicked, setKnobClicked] = useState();
  const [knobType, setKnobType] = useState();
   //update on keyboard input
   const [keyPressed, setKeyPressed] = useState();
   const [whichPressed, setWhichPressed] = useState();
  //update knob continuously with mouse movement
  const [knobPosition, setKnobPosition] = useState({
    filter: null
  });
 
  

  async function whenMouseMoves(event){
    event.preventDefault();
    const previousPosition = 0;
    const adjustedMouse = previousPosition + (((event.clientY / 2) - 100) * -1);
    console.log("mouse;", adjustedMouse);
    setKnobPosition({filter: adjustedMouse});
  }
//i neeeed to route the mouse info to the mid component then I need to filter it into something that sets
// the parameters for the synthesiszer so i need to set them in the 
useEffect(()=>{
    function whenElementClicked(){
    document.addEventListener('mousedown',(event) =>{
      let firstClass,thirdClass,fourthClass;
    
      if(typeof event.target.className === 'string'){
        firstClass = event.target.className.split(' ')[0];
        thirdClass = event.target.className.split(' ')[2];
        fourthClass = event.target.className.split(' ')[3];
      }
       
      if(fourthClass === 'key'){
        setKeyClicked(true);
        setClickedNum(firstClass);
      }
      
      if(thirdClass === 'knob' || fourthClass === 'knob'){
        document.addEventListener('mousemove',whenMouseMoves);
        setKnobClicked(true);
        setKnobType(firstClass);
      }
    });
    
    document.addEventListener('mouseup',() => {
      document.removeEventListener('mousemove',whenMouseMoves);
      setKeyClicked(false);
    });
  }
 whenElementClicked();
  
 function whenKeyPressed(){
    document.addEventListener('keydown',(event) => {
      setKeyPressed(true);
      setWhichPressed(event.key)
    });
    
    document.addEventListener('keyup',(event) => { 
      setKeyPressed(false);
    });
  }
 whenKeyPressed();       
}, []);

return (
      <section id='volca-bass-container'>
          <section id='volca-bass'>
  
            <svg id='volca-base' width='572' height='334'>
              <rect width='572' height='334' fill='#010101'/>
            </svg>
              <section id='face-plate'>
                <Top />
                <Mid 
                  knobClicked = {knobClicked}
                  knobType = {knobType}
                  knobPosition = {knobPosition}
                  />
                <Bottom />
              </section>  
          <Keyboard 
            keyClicked = {keyClicked}
            clickedNum  = {clickedNum}
            keyPressed = {keyPressed}
            whichPressed = {whichPressed}
            triggerOrRelease = {triggerOrRelease}
          />
        </section>
        
      </section>  
  );
}

export default VolcaBass;
