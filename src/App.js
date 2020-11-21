import React,{useState} from 'react'
import './App.css';
import Square from './Square'


function App() {
  const [squareValues,setSquareValues] = useState([null,null,null,null,null,null,null,null,null])

  const checkAnswer = () => {
    const answerOptions = [
      [0,1,2],
      [0,3,6],
      [0,4,8],
      [1,4,7],
      [2,5,8],
      [2,4,6],
      [3,4,5],
      [6,7,8]
    ]
    answerOptions.map((answer)=>{
      const [a,b,c] = answer;
      if(squareValues[a] && squareValues[a]===squareValues[b] && squareValues[a]===squareValues[c])
        return squareValues[a];
      else
      return null;
    })
  }

  function handleClick(id){
    console.log(id)
    console.log(`Element ${id} has been clicked`)
  }

  return (
    <div className="App">
      <h1>Welcome to TIC-TAC-TOE</h1>
      <div className="square">
        {squareValues.map((squareValue,index)=>(
          <Square key={index} id={index} squareValue={squareValue} onClick={()=> handleClick(index)}/>
        ))}
      </div>
    </div>
  );
}

export default App;