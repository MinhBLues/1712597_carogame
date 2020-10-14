import React, { Component } from 'react'
import './board.css';
import Square from './Square';

export default class Board extends Component {
    renderSquares = numbs => {

        return numbs.map(num => (
            <Square
                key={num}
                index={this.props.indexs != null && this.props.indexs.includes(num) ? num : null}
                value={this.props.squares[num]}
                onClick={() => this.props.onClick(num)} />
        ))
    }

    render() {
        const getBoard = nums => {
            let content = [];
            for (let i = 0; i < nums; i++) {
                content.push(<div key={i} className="board-row"> {this.renderSquares([i * 3, i * 3 + 1, i * 3 + 2])} </div>);
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




