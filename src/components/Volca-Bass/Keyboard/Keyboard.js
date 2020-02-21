import React from 'react';
import './keyboard.css'




function Keyboard() {
   
  

  //this goes to keyboard component
  function detectGUIKeyPress(){
    document.addEventListener("mousedown",(event) =>{
      // console.log(event.target.className);
      if(event.target.className.baseVal === "key"){
        
            //  buttonTriggerSynth(1,sound,event.target.id)
            // change state of gate and guiKey
        }
    });

    // document.addEventListener("mouseup",
    //   // ()=>buttonTriggerSynth(0,sound)
    //   // change state of gate to 0
    // );
  }
 detectGUIKeyPress();

  return (
       <section id="keyboard">
            <svg id="key-top" width="570" height="23" viewBox="0 0 570 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M267.5 0H570.531V8.5L556.516 23H15.5312L0.03125 9V0H267.5Z" fill="#414141"/>
            </svg>
            <svg id="key-right" width="19" height="110" viewBox="0 0 14 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.210449 16.5L14.5 0.5V109.5L0.210449 79.5V16.5Z" fill="#C4C4C4"/>
            </svg>
            <svg id="key-left" width="15" height="110" viewBox="0 0 15 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.210449 0.5L14.5 15.5V80.5L0.210449 109.5V0.5Z" fill="#C4C4C4"/>
            </svg>
            <svg id="key-bottom" width="571" height="32" viewBox="0 0 571 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M272 0.5L557 1.5L572 32H0.5L14.5 1.5L272 0.5Z" fill="#6F6F6F"/>
            </svg> 

            <section id="keys">
              <svg className="1 black key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="22" height="43" rx="3" fill="black" stroke="#DBB942" strokeWidth="2"/>
              </svg> 
              <svg className="2 gold key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="44" rx="3.5" fill="#DBB942" stroke="black"/>
              </svg>
              <svg className="3 black key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="22" height="43" rx="3" fill="black" stroke="#DBB942" strokeWidth="2"/>
              </svg> 
              <svg className="4 gold key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="44" rx="3.5" fill="#DBB942" stroke="black"/>
              </svg>
              <svg className="5 black key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="22" height="43" rx="3" fill="black" stroke="#DBB942" strokeWidth="2"/>
              </svg> 
              <svg className="6 black key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="22" height="43" rx="3" fill="black" stroke="#DBB942" strokeWidth="2"/>
              </svg> 
              <svg className="7 gold key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="44" rx="3.5" fill="#DBB942" stroke="black"/>
              </svg>
              <svg className="8 black key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="22" height="43" rx="3" fill="black" stroke="#DBB942" strokeWidth="2"/>
              </svg> 
              <svg className="9 gold key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="44" rx="3.5" fill="#DBB942" stroke="black"/>
              </svg>
              <svg className="10 black key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="22" height="43" rx="3" fill="black" stroke="#DBB942" strokeWidth="2"/>
              </svg> 
              <svg className="11 gold key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="44" rx="3.5" fill="#DBB942" stroke="black"/>
              </svg>
              <svg className="12 black key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="22" height="43" rx="3" fill="black" stroke="#DBB942" strokeWidth="2"/>
              </svg> 
              <svg className="13 black key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="22" height="43" rx="3" fill="black" stroke="#DBB942" strokeWidth="2"/>
              </svg> 
              <svg className="14 gold key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="44" rx="3.5" fill="#DBB942" stroke="black"/>
              </svg>
              <svg className="15 black key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="22" height="43" rx="3" fill="black" stroke="#DBB942" strokeWidth="2"/>
              </svg>
              <svg className="16 gold key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="44" rx="3.5" fill="#DBB942" stroke="black"/>
              </svg>
            </section>   
        </section> 
  );
}

export default Keyboard;
