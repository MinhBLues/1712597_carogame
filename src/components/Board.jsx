import React, { useState } from 'react'
import './board.css';
import Square from './Square';
export default function Board(props) {

    const renderSquares = numbs => {
        return numbs.map(num => (
            <Square
                key={num}
                index={props.indexs != null && props.indexs.includes(num) ? num : null}
                value={props.squares[num]}
                onClick={() => props.onClick(num)} />
        ))
    }
    const getBoard = nums => {
        let content = [];
        for (let i = 0; i < nums; i++) {
            content.push(<div key={i} className="board-row"> {renderSquares([i * 3, i * 3 + 1, i * 3 + 2])} </div>);
        }
        return content;
    };
    return (
        <div>
            {getBoard(3)}
        </div>
    );
}




