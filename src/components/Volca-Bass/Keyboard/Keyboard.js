import React, { useEffect }from 'react';
import './keyboard.css'




function Keyboard(props) {
  const { keyClicked, clickedNum, keyPressed, whichPressed, triggerOrRelease } = props;

  useEffect(()=>{
    function whenGUIKeyClicked(){
      
      const numToLetter = {
        one: "c1", two: "c#1", three: "d1", four: "d#1", five: "e1", six: "f1",
        seven: "f#1", eight: "g1", nine: "g#1", ten: "a1", eleven: "a#1", twelve: "b1",
        thirteen: "c2", fourteen: "c#2", fifteen: "d2", sixteen: "d#2",
      }

      keyClicked ? triggerOrRelease(1, numToLetter[clickedNum]) : triggerOrRelease(0);
    }
    whenGUIKeyClicked();
  
  }, [keyClicked, clickedNum, triggerOrRelease])

  useEffect(()=>{
    function whenKeyPressed(){
    
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
      
      keyPressed ? triggerOrRelease(1, letterToNote[whichPressed]) : triggerOrRelease(0);
    }
    whenKeyPressed();
  }, [keyPressed, whichPressed, triggerOrRelease])
  
  

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
              <div className="one over black key" />
              
              <svg className="one black key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="22" height="43" rx="3" fill="black" stroke="#DBB942" strokeWidth="2"/>
              </svg> 
              
              <div className="two over gold key" />
              
              <svg className="two gold key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="44" rx="3.5" fill="#DBB942" stroke="black"/>
              </svg>
              
              <div className="three over black key" />
              
              <svg className="three black key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="22" height="43" rx="3" fill="black" stroke="#DBB942" strokeWidth="2"/>
              </svg> 
              
              <div className="four over gold key" />
              
              <svg className="four gold key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="44" rx="3.5" fill="#DBB942" stroke="black"/>
              </svg>
              
              <div className="five over black key" />
             
              <svg className="five black key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="22" height="43" rx="3" fill="black" stroke="#DBB942" strokeWidth="2"/>
              </svg> 
              
              <div className="six over black key" />
              
              <svg className="six black key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="22" height="43" rx="3" fill="black" stroke="#DBB942" strokeWidth="2"/>
              </svg> 
              
              <div className="seven over gold key" />
              
              <svg className="seven gold key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="44" rx="3.5" fill="#DBB942" stroke="black"/>
              </svg>
              
              <div className="eight over black key" />
              
              <svg className="eight black key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="22" height="43" rx="3" fill="black" stroke="#DBB942" strokeWidth="2"/>
              </svg> 
              
              <div className="nine over gold key" />
              
              <svg className="nine gold key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="44" rx="3.5" fill="#DBB942" stroke="black"/>
              </svg>
              
              <div className="ten over black key" />
              
              <svg className="ten black key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="22" height="43" rx="3" fill="black" stroke="#DBB942" strokeWidth="2"/>
              </svg> 
              
              <div className="eleven over gold key" />
              
              <svg className="eleven gold key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="44" rx="3.5" fill="#DBB942" stroke="black"/>
              </svg>
              
              <div className="twelve over black key" />
              
              <svg className="twelve black key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="22" height="43" rx="3" fill="black" stroke="#DBB942" strokeWidth="2"/>
              </svg> 
              
              <div className="thirteen over black key" />
              
              <svg className="thirteen black key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="22" height="43" rx="3" fill="black" stroke="#DBB942" strokeWidth="2"/>
              </svg> 
              
              <div className="fourteen over gold key" />
              
              <svg className="fourteen gold key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="44" rx="3.5" fill="#DBB942" stroke="black"/>
              </svg>
              
              <div className="fifteen over black key" />
              
              <svg className="fifteen black key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="22" height="43" rx="3" fill="black" stroke="#DBB942" strokeWidth="2"/>
              </svg>
              
              <div className="sixteen over gold key" />
            
              <svg className="sixteen gold key" width="24" height="45" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="44" rx="3.5" fill="#DBB942" stroke="black"/>
              </svg>
            </section> 
            
              
              
              
               
        </section> 
  );
}

export default Keyboard;
