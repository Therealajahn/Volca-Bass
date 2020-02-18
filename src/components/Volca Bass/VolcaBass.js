import React from 'react';
import Buttons from './Buttons/Buttons';
import Keyboard from './Keyboard/Keyboard';
import TopFace from './Face/Top-Face/TopFace';
import LowFace from './Face/Low-Face/LowFace';


function App() {
  return (
    <div className="App">
      <Buttons />
      <Keyboard />
      <TopFace />
      <LowFace />
    </div>
  );
}

export default App;
