import React from "react";
import Board from "./components/Board";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="container text-center">
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        </div>
    );
}

export default App;
