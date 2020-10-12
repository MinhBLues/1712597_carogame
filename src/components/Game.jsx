import React, { Component } from 'react'
import Board from "./Board";
import './game.css';


export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{ squares: Array(9).fill(null) }],
            xIsNext: true,
            stepNumber: 0,
            historyIndex: [{ index: null }],
        };
    }
    playAgain = () => {
        this.setState({
            history: [{ squares: Array(9).fill(null) }],
            xIsNext: true,
            stepNumber: 0,
            historyIndex: [{ index: null }],
        });
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const historyIndex = this.state.historyIndex.slice(0, this.state.stepNumber + 1);

        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{ squares: squares }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
            historyIndex: historyIndex.concat([{ index: i }]),
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const index = this.state.historyIndex[move].index;
            const desc = move ?
                'Go to move #' + move + ` (${Math.floor(index/3)}:${index%3})` :
                'Go to game start';
            return (
                <li>
                    <button className="move" onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <div>
                <div className="game">
                    <div className="game-board">
                        <div className="status">{status}</div>
                        <div>
                            <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
                            <button className="playagain mt-3" onClick={this.playAgain}> Play Again</button>
                        </div>
                    </div>
                    <div className="game-info">
                        <ol>{moves}</ol>
                    </div>
                </div>

            </div>
        )
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
    if (j === 9) return "Equal";
    return null;
}