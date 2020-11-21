import React,{useState} from 'react'
import './Square.css'


function Square({squareValue,onClick,id}) {
    return (
        <>
        {console.log(id)}
            <button value={squareValue} onClick={onClick} className="square__cell"></button>
            {/* <button value={squareValues[1]} className="square__cell"></button>
            <button value={squareValues[2]} className="square__cell"></button>
            <button value={squareValues[3]} className="square__cell"></button>
            <button value={squareValues[4]} className="square__cell"></button>
            <button value={squareValues[5]} className="square__cell"></button>
            <button value={squareValues[6]} className="square__cell"></button>
            <button value={squareValues[7]} className="square__cell"></button>
            <button value={squareValues[8]} className="square__cell"></button> */}
        </>
    )
}

export default Square
