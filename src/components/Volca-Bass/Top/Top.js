import React, {useEffect} from 'react';
import Knob from '../Controls/Knob';
import './top.css';




function Top() {
    
  return (
    <section id="top">
        <svg  id="plate" width="560" height="205">
              <rect width="560" height="205" fill="#9D9D9D"/>
            </svg>
            <section id="power">
              
            </section>
            
            <section id="envelope">
              <svg id="left-line" width="2" height="56" viewBox="0 0 2 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="0.884521" x2="1" y2="55.1155" stroke="black"/>
              </svg>
              <Knob size='small' type='tempo'/>
              <Knob size='small' type='attack'/>
              <Knob size='small' type='decay'/>
              <Knob size='small' type='eg-int'/>
              
              <svg id="right-line" width="2" height="56" viewBox="0 0 2 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="0.884521" x2="1" y2="55.1155" stroke="black"/>
                </svg>
            </section>
            <section id="midi">
              
            </section>
          </section>  
    
  );
}

export default Top;
