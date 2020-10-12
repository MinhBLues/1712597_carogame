import React, { Component } from 'react'
import './board.css';
import Square from './Square';

export default class Board extends Component {
    renderSquares = numbs => {
        return numbs.map(num => (
            <Square
                key={num}
                value={this.props.squares[num]}
                onClick={() => this.props.onClick(num)} />
        ))
    }

    render() {
        const getBoard = nums => {
            let content = [];
            for (let i = 0; i < nums; i++) {
                content.push(<div className="board-row"> {this.renderSquares([i * 3, i * 3 + 1, i * 3 + 2])} </div>);
            }
            return content;
        };
        return (
            <div>
                {getBoard(3)}
            </div>
        );
    }
}




