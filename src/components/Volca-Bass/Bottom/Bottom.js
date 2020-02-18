import React from 'react';
import './bottom.css';




function App() {
  return (
    <section id="buttons">
            {/* SCREEN */}
            <svg id="screen" width="94" height="45" viewBox="0 0 94 45" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="94" height="45" rx="5" fill="black"/>
              </svg>
              {/* BUTTONS */}
              <svg class="memory write button" width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="20" rx="2" fill="#FF0000"/>
                <rect x="3" y="3" width="34" height="14" rx="2" fill="#C4C4C4"/>
              </svg>
              <svg class="step slide button" width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="20" rx="2" fill="#FF0000"/>
                <rect x="3" y="3" width="34" height="14" rx="2" fill="#C4C4C4"/>
              </svg>
              <svg class="play active-step button" width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="20" rx="2" fill="#FF0000"/>
                <rect x="3" y="3" width="34" height="14" rx="2" fill="#C4C4C4"/>
              </svg>
              <svg class="stop step-rec button" width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="20" rx="2" fill="#FF0000"/>
                <rect x="3" y="3" width="34" height="14" rx="2" fill="#C4C4C4"/>
              </svg>
              <svg class="vco1 mute button" width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="20" rx="2" fill="#FF0000"/>
                <rect x="3" y="3" width="34" height="14" rx="2" fill="#C4C4C4"/>
              </svg>
              <svg class="vco2 mute button" width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="20" rx="2" fill="#FF0000"/>
                <rect x="3" y="3" width="34" height="14" rx="2" fill="#C4C4C4"/>
              </svg>
              <svg class="vco3 mute button" width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="20" rx="2" fill="#FF0000"/>
                <rect x="3" y="3" width="34" height="14" rx="2" fill="#C4C4C4"/>
              </svg>
              <svg class="func button" width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="20" rx="2" fill="#FF0000"/>
                <rect x="3" y="3" width="34" height="14" rx="2" fill="#C4C4C4"/>
              </svg>
          </section>
  );
}

export default App;