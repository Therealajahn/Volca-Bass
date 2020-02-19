import React from 'react';
import VolcaBass from './components/Volca-Bass/VolcaBass';
import music from './inserts/synth-setup';



function App() {
  return (
    <div className="App">
       <VolcaBass />
       { music() }
    </div>
  );
}

export default App;
