import React from 'react';
import './keyboard.css'




function Keyboard() {
   
 //this goes to keyboard component  
  //Define keys to use for keyboard
  const keyboard = {
    //bottom row
    z: 1, s: 2, x: 3, d: 4, c: "e1", v: "f1",
    g: "f#1", b: "g1", h: "g#1", n: "a1", j: "a#1", m: "b1",
    ',': "c2", l: "c#2", '.': "d2", ';': "d#2",'/': "e2",
     //top row
     q: "c2",2: "c#2", w: "d2", 3: "d#2", e: "e2",r: "f2",
     5: "f#2",t: "g2", 6: "g#2", y: "a2", 7: "a#2", u: "b2",
     i: "c3", 9: "c#3", o: "d3", 0: "d#3", p: "e3",
  }
  
  const mton = {
    1: "c1", 2: "c#1", 3: "d1", 4: "d#1", 5: "e1",
    6: "f1", 7: "f#1", 8: "g1", 9: "g#1", 10: "a1",
    11: "a#1",12: "b1",13: "c2",14: "c#2",15: "d2",16: "d#2",
    17: "e2",18: "f2",19: "f#2",20: "g2",21: "g#2",22: "b2",
    24: "c3",25: "c#3",26: "d3",27: "d#3",28: "e3",29: "f3",
    30: "f#3",31: "g3",32: "g#3",33: "a3",34: "a#3",35: "b3",
    36: "c4",37: "c#4",38: "d4",39: "d#4",40: "e4",
  }

  //this goes to keyboard component
  function detectGUIKeyPress(){
    document.addEventListener("mousedown",(event) =>{
      console.log(event.target.className);
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
    <div className="Keyboard">
       <section id="keybed">
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
    </div>
  );
}

export default Keyboard;
