import * as Tone from 'tone';

const music = () => {
//TODO: put sequnecer in different file. put event listeners in deffernt file.    


//Synthesizer interface
function TriOscSynth(){
    this.gain = new Tone.Gain(0.05).toMaster();
    this.oscOne = new Tone.Oscillator(440,"square").start();
    // this.oscTwo = osc2;
    // this.oscThree = osc3;
    // this.tuningOne = osc1.frequency.value; 
    // this.tuningTwo = tuningOne;
    // this.tuningThree = tuningThree;
    // this.filterCutoff = filterCutoff;
    // this.filterPeak = filterPeak;
    // this.envAttack = envAttack;
    // this.envDecay = envDecay;
    // this.envSustain = envSustain;
    // this.filterEnvelope = filterEnvelope; 
    
}
let volcaBass = new TriOscSynth();
console.log(volcaBass.gain);

};

export default music;
