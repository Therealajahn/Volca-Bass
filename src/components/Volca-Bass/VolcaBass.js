import React from 'react';
// import Top from './Top/Top';
// import Mid from './Mid/Mid';
// import Bottom from './Bottom/Bottom';
import Keyboard from './Keyboard/Keyboard';
import './volca-bass.css';





function Bass() {
  return (
    <div className="Bass">
      <section id="volca-bass-container">
          <section id="volca-bass">
            <svg id="volca-base" width="572" height="334">
              <rect width="572" height="334" fill="#010101"/>
            </svg>
          <section id="face-plate">
            {/* <Top />
            <Mid />
            <Bottom /> */}
          </section>  
            <Keyboard />
        </section>
      </section>  
    </div>
  );
}

export default Bass;
