import React, { Component } from 'react'
import './board.css';
import Square from './Square';

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    playAgain = () => {
        this.setState({
            squares: Array(9).fill(null),
            xIsNext: true,
        });
    }

    renderSquares = numbs => {
        return numbs.map(num => (
            <Square
                key={num}
                value={this.state.squares[num]}
                onClick={() => this.handleClick(num)} />
        ))
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row"> {this.renderSquares([0, 1, 2])} </div>
                <div className="board-row"> {this.renderSquares([3, 4, 5])} </div>
                <div className="board-row"> {this.renderSquares([6, 7, 8])} </div>
                <div>
                    <button className="playagain mt-3" onClick={this.playAgain}> Play Again</button>
                </div>
            </div>

        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    var j = 0;
    for (let i = 0; i < 9; i++) {
        if (squares[i] != null) j++;
    }
    if (j === 8 ) return "Equal";
    return null;
}


