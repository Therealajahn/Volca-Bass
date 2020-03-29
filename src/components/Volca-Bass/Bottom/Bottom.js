import Button from '../Controls/Button';
import React from 'react';
import './bottom.css';




function Bottom(props) {
  const { playNotes } = props;
  function buttonIsClicked(type, button, mouse){
    if(mouse === 'down'){
      if(button.getAttribute('fill') === '#686868'){
        button.setAttribute('fill','#FF0000');
        }else if(button.getAttribute('fill') === '#FF0000'){
          button.setAttribute('fill','#686868')
          };
          playNotes();  
    }  
        
  }

  // const buttons = [ 'memory-WritableStream',
  //                   'step-slide',
  //                   'play-active-step',
  //                   'stop-step-rec',
  //                   'vco1-mute',
  //                   'vco2-mute',
  //                   'vco3-mute',
  //                   'func']

  return (
    <section id='buttons'>
            {/* SCREEN */}
            <svg id='screen' width='94' height='45' viewBox='0 0 94 45' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <rect width='94' height='45' rx='5' fill='black'/>
              </svg>
              {/* BUTTONS */}
              <Button type='memory-write' buttonIsClicked = {buttonIsClicked}/>
              <Button type='step-slide' buttonIsClicked = {buttonIsClicked}/>
              <Button type='play-active-step' buttonIsClicked = {buttonIsClicked}/>
              <Button type='stop-step-rec' buttonIsClicked = {buttonIsClicked}/>
              <Button type='vco1-mute' buttonIsClicked = {buttonIsClicked}/>
              <Button type='vco2-mute' buttonIsClicked = {buttonIsClicked}/>
              <Button type='vco3-mute' buttonIsClicked = {buttonIsClicked}/>
              <Button type='func' buttonIsClicked = {buttonIsClicked}/>  
          </section>
  );
}

export default Bottom;