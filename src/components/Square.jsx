import React from 'react'
import './square.css'

export default function Square({ onClick, value }) {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
}
