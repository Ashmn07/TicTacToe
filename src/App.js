import React,{useState,useEffect,useRef} from 'react'
import './App.css';
import Square from './Square'
// import Winner from './Winner';

function App() {
  const [squareValues,setSquareValues] = useState([null,null,null,null,null,null,null,null,null])
  const [Xchance,setXchance] = useState(true)
  // const winner_temp = useRef(null)


  function handleClick(id){
    let temp = squareValues.slice();
    if(squareValues[id]!=null) {return;}
    temp[id] = Xchance?'X':'O'
    setSquareValues(temp)
    setXchance(!Xchance)
  }

  // const displayWinner = winner_temp.current?(<Winner winner={winner_temp.current}/>):null

  useEffect(()=>{
    const winner = checkAnswer()
    console.log(winner)
    // winner_temp.current= winner;
    if(winner==='draw'){
      setSquareValues([null,null,null,null,null,null,null,null,null])
      setXchance(true);
      alert('ITS A DRAWWW')
    }
    else if(winner==='X'|| winner==='O'){
      setSquareValues([null,null,null,null,null,null,null,null,null])
      setXchance(true);
      alert(`CONGRATSSS !!! The winner is ${winner}`)
    }
  },[squareValues])

  // useEffect(()=>{
  //   displayWinner
  // },[winner_temp.current])

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
    let draw = 0,null_count=0;
    for(let i=0;i<answerOptions.length;i++){
      let [a,b,c] = answerOptions[i];
      if(squareValues[a] && squareValues[a]===squareValues[b] && squareValues[a]===squareValues[c]){
        draw++;
        return squareValues[a];
      }
    }
    for(let i=0;i<squareValues.length;i++){
      if(squareValues[i]===null) null_count++;
    }
    if(null_count===0 && draw===0){
      return 'draw';
    }
    return null; 
  }

  return (
    <div className="App">
      <h1>TIC-TAC-TOE</h1>
      <h2>{Xchance?'Player X\'s Turn':'Player O\'s Turn'}</h2>
      {/* {displayWinner} */}
        <div className="square">
          {squareValues.map((squareValue,index)=>(
            <Square key={index} squareValue={squareValue} onClick={()=> handleClick(index)}/>
          ))}
        </div>
    </div>
  );
}

export default App;