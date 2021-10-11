import React, { useState } from 'react';
import './App.css';
import Heading from './Heading';
import Controls from './Controls';
import PlayArea from './PlayArea';

function App() {
  const [currentMove,setMove]= useState("")
  return (
   
    <div className="App">
    <Heading/>
    <PlayArea move={currentMove}/>
    <Controls setMove={setMove}/>
    </div>
  );
}

export default App;
