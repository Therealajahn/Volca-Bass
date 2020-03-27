import React,{useEffect} from 'react';
import './bottom.css';




function Bottom(props) {
  const {buttonType, buttonClicked} = props;
  useEffect(()=>{
    console.log('buttonClicked', buttonClicked);
    console.log('buttonType', buttonType)
  },[buttonClicked, buttonType])
  return (
    <section id="buttons">
            {/* SCREEN */}
            <svg id="screen" width="94" height="45" viewBox="0 0 94 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="94" height="45" rx="5" fill="black"/>
              </svg>
              {/* BUTTONS */}
              <div className="memory-write over button"></div>
              <svg className="memory-write button" width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect className="button-border button" width="40" height="20" rx="2"/>
                  <rect x="3" y="3" width="34" height="14" rx="2" fill="#C4C4C4"/>
                </svg>
              <div className="step-slide over button"></div>
              <svg className="step-slide button" width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect className="button-border button" width="40" height="20" rx="2"/>
                  <rect x="3" y="3" width="34" height="14" rx="2" fill="#C4C4C4"/>
                </svg>
              <div className="play-active-step over button"></div>  
              <svg className="play-active-step button" width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className="button-border button" width="40" height="20" rx="2"/>
                  <rect x="3" y="3" width="34" height="14" rx="2" fill="#C4C4C4"/>
                </svg>
             
             <div className="stop-step-rec over button"></div> 
             <svg className="stop-step-rec button" width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className="button-border button" width="40" height="20" rx="2"/>
                  <rect x="3" y="3" width="34" height="14" rx="2" fill="#C4C4C4"/>
                </svg>
             
             <div className="vco1-mute over button"></div> 
             <svg className="vco1-mute button" width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className="button-border button" width="40" height="20" rx="2"/>
                  <rect x="3" y="3" width="34" height="14" rx="2" fill="#C4C4C4"/>
                </svg>
             
             <div className="vco2-mute over button"></div>
             <svg className="vco2-mute button" width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className="button-border button" width="40" height="20" rx="2"/>
                  <rect x="3" y="3" width="34" height="14" rx="2" fill="#C4C4C4"/>
                </svg>
             
             <div className="vco3-mute over button"></div> 
             <svg className="vco3-mute button" width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className="button-border button" width="40" height="20" rx="2"/>
                  <rect x="3" y="3" width="34" height="14" rx="2" fill="#C4C4C4"/>
                </svg>
              
             <div className="func over button"></div> 
             <svg className="func button" width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect className="button-border button" width="40" height="20" rx="2"/>
                  <rect x="3" y="3" width="34" height="14" rx="2" fill="#C4C4C4"/>
                </svg>
             
            
          </section>
  );
}

export default Bottom;