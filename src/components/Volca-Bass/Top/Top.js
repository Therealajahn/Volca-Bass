import React, {useEffect} from 'react';
import './top.css';




function Top(props) {
  
const {smallKnobType, smallKnobClicked} = props;

// useEffect(()=>{
//   console.log('topKnobType:',topKnobType);
//   console.log('topKnobClicked:',topKnobClicked);
// },[topKnobClicked, topKnobType]);
  
  
  return (
    <section id="top">
        <svg  id="plate" width="560" height="205">
              <rect width="560" height="205" fill="#9D9D9D"/>
            </svg>
            <section id="power">
              
            </section>
            
            <section id="envelope">
              <svg id="left-line" width="2" height="56" viewBox="0 0 2 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="0.884521" x2="1" y2="55.1155" stroke="black"/>
              </svg>
              <div className="tempo over knob"></div>
              <svg className="tempo knob"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#FF3131"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M0.96233 5.71428C0.345273 7.01322 0 8.46628 0 9.99999C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 9.99999C20 8.46628 19.6547 7.01322 19.0377 5.71428H0.96233Z" fill="#CE0202"/>
              </svg>
              <div className="attack over knob"></div>
              <svg className="attack knob"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#FF3131"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M0.96233 5.71428C0.345273 7.01322 0 8.46628 0 9.99999C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 9.99999C20 8.46628 19.6547 7.01322 19.0377 5.71428H0.96233Z" fill="#CE0202"/>
              </svg>
              <div className="decay over knob"></div>
              <svg className="decay knob"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#FF3131"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M0.96233 5.71428C0.345273 7.01322 0 8.46628 0 9.99999C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 9.99999C20 8.46628 19.6547 7.01322 19.0377 5.71428H0.96233Z" fill="#CE0202"/>
              </svg>
              <div className="eg-int over knob"></div>
              <svg className="eg-int knob"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#FF3131"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M0.96233 5.71428C0.345273 7.01322 0 8.46628 0 9.99999C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 9.99999C20 8.46628 19.6547 7.01322 19.0377 5.71428H0.96233Z" fill="#CE0202"/>
              </svg>
              <svg id="right-line" width="2" height="56" viewBox="0 0 2 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="0.884521" x2="1" y2="55.1155" stroke="black"/>
                </svg>
            </section>
            <section id="midi">
              
            </section>
          </section>  
    
  );
}

export default Top;
