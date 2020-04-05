import React, { useEffect, useRef, useState } from 'react';
import "./mid.css";
import Knob from '../Controls/Knob';
import gsap from 'gsap';




function Mid(props) {

const { knobClicked, knobType, knobPosition, mousePosition } = props;
 
function knobIsClicked(knob, mouse){
  console.log('knob',knob);
  console.log('mouse', mouse);
  gsap.to(knob,{duration: .1, rotation: Number(mousePosition)}); 
}

//Choppy
// useEffect(()=>{
//   console.log('mouse:',mousePosition);
//   console.log('knobType:', knobType);
//   console.log('knobClicked:',knobClicked);
//   setFilter({
//      transform: `rotate(${mousePosition}deg)`
//   })
// },[mousePosition, knobType, knobClicked]);

  return (
    <div className="Mid">
        <section id="main-knobs">
            {/* Grey Knobs  */}
            <Knob size='medium' type='octave'/>
            
            <div className="peak over knob"></div>
            <svg className="peak knob"width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="19" cy="18.5" rx="19" ry="18.5" fill="#727272"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M1.82843 10.5714C0.656018 12.9745 0 15.6626 0 18.5C0 28.7173 8.50659 37 19 37C29.4934 37 38 28.7173 38 18.5C38 15.6626 37.344 12.9745 36.1716 10.5714H1.82843Z" fill="#C4C4C4"/>
            </svg>
            <Knob size='big' type='filter' knobIsClicked={ knobIsClicked }/>
            <div className="lfo-rate over knob"></div>
            <svg className="lfo-rate knob"width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="19" cy="18.5" rx="19" ry="18.5" fill="#727272"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M1.82843 10.5714C0.656018 12.9745 0 15.6626 0 18.5C0 28.7173 8.50659 37 19 37C29.4934 37 38 28.7173 38 18.5C38 15.6626 37.344 12.9745 36.1716 10.5714H1.82843Z" fill="#C4C4C4"/>
            </svg>
            <div className="lfo-int over knob"></div>
            <svg className="lfo-int knob"width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="19" cy="18.5" rx="19" ry="18.5" fill="#727272"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M1.82843 10.5714C0.656018 12.9745 0 15.6626 0 18.5C0 28.7173 8.50659 37 19 37C29.4934 37 38 28.7173 38 18.5C38 15.6626 37.344 12.9745 36.1716 10.5714H1.82843Z" fill="#C4C4C4"/>
            </svg>
             {/* Osc Tune Knobs  */}
            <div className="tune1 tune over small-knob"></div>
            <svg className="tune1 tune small-knob"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#FF3131"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M0.96233 5.71428C0.345273 7.01322 0 8.46628 0 9.99999C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 9.99999C20 8.46628 19.6547 7.01322 19.0377 5.71428H0.96233Z" fill="#CE0202"/>
            </svg>
            <div className="tune2 tune over small-knob"></div>
            <svg className="tune2 tune small-knob"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#FF3131"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M0.96233 5.71428C0.345273 7.01322 0 8.46628 0 9.99999C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 9.99999C20 8.46628 19.6547 7.01322 19.0377 5.71428H0.96233Z" fill="#CE0202"/>
            </svg>
            <div className="tune3 tune over small-knob"></div>
            <svg className="tune3 tune small-knob" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#FF3131"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M0.96233 5.71428C0.345273 7.01322 0 8.46628 0 9.99999C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 9.99999C20 8.46628 19.6547 7.01322 19.0377 5.71428H0.96233Z" fill="#CE0202"/>
            </svg>
            <div className="volume over knob"></div>
            <svg className="volume knob" width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="19" cy="18.5" rx="19" ry="18.5" fill="#727272"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M1.82843 10.5714C0.656018 12.9745 0 15.6626 0 18.5C0 28.7173 8.50659 37 19 37C29.4934 37 38 28.7173 38 18.5C38 15.6626 37.344 12.9745 36.1716 10.5714H1.82843Z" fill="#C4C4C4"/>
            </svg>
          </section>
    </div>
  );
}

export default Mid;
