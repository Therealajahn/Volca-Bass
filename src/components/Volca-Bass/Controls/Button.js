import React from 'react';


function Button(props){
    const overlay = `${props.type} over button`;
    const svg = `${props.type}`; 
    
    return(
        <section className='button-container'>
            <div className={ overlay }>
                <svg className={ svg } width='40' height='20' viewBox='0 0 40 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <rect className='button-border' fill= '#686868' width='40' height='20' rx='2'/>
                    <rect  x='3' y='3' width='34' height='14' rx='2' fill='#C4C4C4'/>
                </svg>
                </div>
        </section>        
    );
}

export default Button;