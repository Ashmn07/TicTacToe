import React from 'react'
import './Square.css'


function Square({squareValue,onClick}) {
    return (
        <>
            <button value={squareValue} onClick={onClick} className="square__cell">{squareValue}</button>
        </>
    )
}

export default Square
