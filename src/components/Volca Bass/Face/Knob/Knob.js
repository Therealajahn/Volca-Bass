import React from 'react';



function Knob() {
  const knobType = props.knob ==="mid-knob" ?
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="10" fill="#FF3131"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.96233 5.71428C0.345273 7.01322 0 8.46628 0 9.99999C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 9.99999C20 8.46628 19.6547 7.01322 19.0377 5.71428H0.96233Z" fill="#CE0202"/> : null;
</svg>}
    return (
    <div className="Knob">
        {knobType}
    </div>
  );
}

export default Knob;