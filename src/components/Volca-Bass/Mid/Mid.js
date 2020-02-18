import React from 'react';
import "./mid.css";




function Mid() {
  return (
    <div className="Mid">
        <section id="main-knobs">
            {/* Grey Knobs  */}
            <div class="octave over knob"></div>
            <svg class="octave knob" width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse  cx="19" cy="18.5" rx="19" ry="18.5" fill="#727272"/>
              <path  fill-rule="evenodd" clip-rule="evenodd" d="M1.82843 10.5714C0.656018 12.9745 0 15.6626 0 18.5C0 28.7173 8.50659 37 19 37C29.4934 37 38 28.7173 38 18.5C38 15.6626 37.344 12.9745 36.1716 10.5714H1.82843Z" fill="#C4C4C4"/>
            </svg>
            <div class="peak over knob"></div>
            <svg class="peak knob"width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="19" cy="18.5" rx="19" ry="18.5" fill="#727272"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.82843 10.5714C0.656018 12.9745 0 15.6626 0 18.5C0 28.7173 8.50659 37 19 37C29.4934 37 38 28.7173 38 18.5C38 15.6626 37.344 12.9745 36.1716 10.5714H1.82843Z" fill="#C4C4C4"/>
            </svg>
            <div class="filter over knob"></div>
            <svg class="filter knob" width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="37.5" cy="37.5" r="37.5" fill="#727272"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.60874 21.4286C1.29477 26.2996 0 31.7486 0 37.5C0 58.2107 16.7893 75 37.5 75C58.2107 75 75 58.2107 75 37.5C75 31.7486 73.7052 26.2996 71.3913 21.4286H3.60874Z" fill="#C4C4C4"/>
            </svg>
            <div class="lfo-rate over knob"></div>
            <svg class="lfo-rate knob"width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="19" cy="18.5" rx="19" ry="18.5" fill="#727272"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.82843 10.5714C0.656018 12.9745 0 15.6626 0 18.5C0 28.7173 8.50659 37 19 37C29.4934 37 38 28.7173 38 18.5C38 15.6626 37.344 12.9745 36.1716 10.5714H1.82843Z" fill="#C4C4C4"/>
            </svg>
            <div class="lfo-int over knob"></div>
            <svg class="lfo-int knob"width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="19" cy="18.5" rx="19" ry="18.5" fill="#727272"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.82843 10.5714C0.656018 12.9745 0 15.6626 0 18.5C0 28.7173 8.50659 37 19 37C29.4934 37 38 28.7173 38 18.5C38 15.6626 37.344 12.9745 36.1716 10.5714H1.82843Z" fill="#C4C4C4"/>
            </svg>
             {/* Osc Tune Knobs  */}
            <div class="tune1 tune over knob"></div>
            <svg class="tune1 tune knob"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#FF3131"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.96233 5.71428C0.345273 7.01322 0 8.46628 0 9.99999C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 9.99999C20 8.46628 19.6547 7.01322 19.0377 5.71428H0.96233Z" fill="#CE0202"/>
            </svg>
            <div class="tune2 tune over knob"></div>
            <svg class="tune2 tune knob"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#FF3131"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.96233 5.71428C0.345273 7.01322 0 8.46628 0 9.99999C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 9.99999C20 8.46628 19.6547 7.01322 19.0377 5.71428H0.96233Z" fill="#CE0202"/>
            </svg>
            <div class="tune3 tune over knob"></div>
            <svg class="tune3 tune knob" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#FF3131"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.96233 5.71428C0.345273 7.01322 0 8.46628 0 9.99999C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 9.99999C20 8.46628 19.6547 7.01322 19.0377 5.71428H0.96233Z" fill="#CE0202"/>
            </svg>
            <div class="volume over knob"></div>
            <svg class="volume knob" width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="19" cy="18.5" rx="19" ry="18.5" fill="#727272"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.82843 10.5714C0.656018 12.9745 0 15.6626 0 18.5C0 28.7173 8.50659 37 19 37C29.4934 37 38 28.7173 38 18.5C38 15.6626 37.344 12.9745 36.1716 10.5714H1.82843Z" fill="#C4C4C4"/>
            </svg>
          </section>
    </div>
  );
}

export default Mid;
