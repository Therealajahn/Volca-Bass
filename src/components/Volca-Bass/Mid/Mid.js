import React, { useEffect, useRef, useState } from 'react';
import "./mid.css";
import Knob from '../Controls/Knob';





function Mid() {

const { mousePosition } = props;

  return (
    <div className="Mid">
        <section id="main-knobs">
            {/* Grey Knobs  */}
            <Knob size='medium' type='octave'/>
            <Knob size='medium' type='peak'/>
            <Knob size='big' type='filter'/>
            <Knob size='medium' type='lfo-rate'/>
            <Knob size='medium' type='lfo-int'/>
            
             {/* Osc Tune Knobs  */}
             <Knob size='small' type='tune1'/>
             <Knob size='small' type='tune2'/>
             <Knob size='small' type='tune3'/>
           
             <Knob size='medium' type='volumes'/>
          </section>
    </div>
  );
}

export default Mid;
