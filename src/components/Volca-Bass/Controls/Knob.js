import React, {useEffect, useRef} from 'react';


function Knob(props){
    const {type, buttonIsClicked} = props;
    const svg = `${type}`;
    const overlay = `${type} over button`;
    const ref = useRef();
    
    
    return(
        
            <div 
                className={ overlay } 
                onMouseDown={()=> knobIsClicked(type, ref.current,'down')}
                onMouseUp={()=> knobIsClicked(type, ref.current,'up')}>
                
                {if(knobSize === "big"){
                    <svg className="octave knob" width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse  cx="19" cy="18.5" rx="19" ry="18.5" fill="#727272"/>
                    <path  fillRule="evenodd" clipRule="evenodd" d="M1.82843 10.5714C0.656018 12.9745 0 15.6626 0 18.5C0 28.7173 8.50659 37 19 37C29.4934 37 38 28.7173 38 18.5C38 15.6626 37.344 12.9745 36.1716 10.5714H1.82843Z" fill="#C4C4C4"/>
                </svg>}else if {knobSize === "small"}}
            </div>
               
    );
}

export default Knob;