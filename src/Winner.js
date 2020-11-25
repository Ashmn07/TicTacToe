import React,{useEffect} from 'react'

function Winner({winner}) {    
    return (
        <div className="winner__display">
           <h2>CONGRATSSS !!!</h2>
           <h3>Player {winner} is the winner</h3> 
        </div>
    )
}

export default Winner