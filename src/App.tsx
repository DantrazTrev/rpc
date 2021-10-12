import React, { useEffect, useState } from 'react';
import './App.css';
import Heading from './Heading';
import Controls from './Controls';
import PlayArea from './PlayArea';
import { ScoreAdder,houseMovePicker } from './utils';
function App() {
  const [currentMove,setMove]= useState("")
  const [score,updateScore] = useState(0)
  const [houseMove,setHouseMove] = useState("")
  const [loading,setLoading] = useState(true)
  const [start,setStart] = useState(false)


  useEffect(()=>{
    setTimeout(()=>{
        setLoading(false)
        const newScore = score + ScoreAdder(currentMove,houseMove)
        updateScore(newScore)
    },1000)
    return (()=>{setLoading(true)})
},[currentMove])

  useEffect(()=>{
    setHouseMove(houseMovePicker())
  },[])


  return (
   
    <div className="App">
    <Heading score={score} loading={loading}/>
    {start?(<><PlayArea house={houseMove} move={currentMove} loading={loading}/>
    <Controls setMove={setMove}/></>):(<button className="btn-start" onClick={()=>setStart(true)}>Start</button>)}
    </div>
  );
}

export default App;
