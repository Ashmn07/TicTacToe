import React,{useEffect} from 'react'

function Winner({winner}) {

    useEffect(()=>{
        <Winner winner={winner}/>
    },[winner])
    
    return (
        <div>
        {winner?
        <div className="winner__display">
           <h2>CONGRATSSS !!!</h2>
           <h3>Player {winner} is the winner</h3> 
        </div>:null}
        </div>
    )
}

export default Winner