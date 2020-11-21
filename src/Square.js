import React from 'react'
import './Square.css'

function Square() {
    return (
         <div className="square">
            <div className="square__row">
                <button className="square__cell"></button>
                <button className="square__cell"></button>
                <button className="square__cell"></button>
            </div>
            <div className="square__row">
                <button className="square__cell"></button>
                <button className="square__cell"></button>
                <button className="square__cell"></button>
            </div>
            <div className="square__row">
                <button className="square__cell"></button>
                <button className="square__cell"></button>
                <button className="square__cell"></button>
            </div>
        </div>
    )
}

export default Square
