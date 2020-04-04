import React, {useEffect, useRef} from 'react';


function Button(props){
    const {type, buttonIsClicked} = props;
    const svg = `${type}`;
    const overlay = `${type} over button`;
    const ref = useRef();
    
    
    return(
        
            <div 
                className={ overlay } 
                onMouseDown={()=> buttonIsClicked(type, ref.current,'down')}
                onMouseUp={()=> buttonIsClicked(type, ref.current,'up')}>
                
                <svg className={ svg } width='40' height='20' viewBox='0 0 40 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect className='button-border' ref={ ref } fill= '#686868' width='40' height='20' rx='2'/>
                    <rect  x='3' y='3' width='34' height='14' rx='2' fill='#C4C4C4'/>
                </svg>
            </div>
               
    );
}

export default Button;