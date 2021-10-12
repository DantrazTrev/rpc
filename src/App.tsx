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
  const [round, setRound] =useState(0)

  useEffect(()=>{
    setTimeout(()=>{
        setLoading(false)
    },1000)

    return (()=>{setLoading(true)})
},[round])

useEffect(()=>{
  const newScore = score + ScoreAdder(currentMove,houseMove)
  console.log(newScore)
  updateScore(newScore)
},[round])

  
  const NextMove = (move:string) =>{
    setMove(move)
    setHouseMove(houseMovePicker())
    setRound(round+1)
  }


  return (
   
    <div className="App">
    <Heading score={score} loading={loading}/>
    {start?(<><PlayArea house={houseMove} round={round} move={currentMove} loading={loading}/>
    <Controls setMove={NextMove}/></>):(<button className="btn-start" onClick={()=>setStart(true)}>Start</button>)}
    </div>
  );
}

export default App;
