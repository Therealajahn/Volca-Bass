import Button from '../Controls/Button';
import React,{useEffect, useRef} from 'react';
import './bottom.css';




function Bottom(props) {
  const {buttonType, buttonClicked} = props;
  
  let memoryBorder = useRef();
  
  useEffect(()=>{
    
    let buttonColor = memoryBorder.current.getAttribute('fill');
    console.log(buttonColor);
    if(buttonClicked){
      if(buttonColor === '#686868'){
      memoryBorder.current.setAttribute('fill','#FF0000');
      }else if(buttonColor === '#FF0000'){
        memoryBorder.current.setAttribute('fill', '#686868');
        };
    }
    // buttonColor = document.getElementsByClassName(buttonType)[0].object ;
    // console.log(buttonColor);
    
    // if (buttonClicked === true && buttonColor === "#686868"){
    //   buttonColor = "#FF0000";
    // }else if (buttonClicked === true && buttonColor === "#FF0000"){
    //   buttonColor = "#686868";
    // }
    
  },[buttonClicked, buttonType])
  return (
    <section id="buttons">
            {/* SCREEN */}
            <svg id="screen" width="94" height="45" viewBox="0 0 94 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="94" height="45" rx="5" fill="black"/>
              </svg>
              {/* BUTTONS */}
              <Button type="memory-write" ref={ memoryBorder }/>
              <Button type="step-slide" />
              <Button type="play-active-step" />
              <Button type="stop-step-rec" />
              <Button type="vco1-mute" />
              <Button type="vco2-mute" />
              <Button type="vco3-mute" />
              <Button type="func" />  
          </section>
  );
}

export default Bottom;