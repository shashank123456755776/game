import React, { useState } from 'react';
import "./tiktactao.css";
import circle_icon from "../Assets/211717_circle_icon.png";
import cross_icon from "../Assets/cross-16-16.png";

let data = ["", "", "", "", "", "", "", "", ""];

const TikTacTao = () => {
    const [count, setCount] = useState(1);
    const [lock, setLock] = useState(false);
    const [winner, setWinner] = useState("");

    const checkWinner = () => {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];

        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (data[a] && data[a] === data[b] && data[a] === data[c]) {
                setWinner(data[a]);
                setLock(true);
                return;
            }
        }

        if (count === 9) { // Fix: Change count === 10 to count === 9
            setWinner("Draw");
            setLock(true);
        }
    };

    const toggle = (num) => {
        if (lock || data[num] !== "") {
            return;
        }

        const updatedData = [...data];

        if (count % 2 === 1) {
            updatedData[num] = "x";
        } else {
            updatedData[num] = "o";
        }

        setCount(count + 1);
        setLock(false);
        data = updatedData;
        checkWinner();
    };

    const resetGame = () => {
        setCount(1);
        setLock(false);
        setWinner("");
        data = ["", "", "", "", "", "", "", "", ""];
    };

    return (
        <div className='container'>
            <h1 className='title'>Tic Tac Toe game in <span>React</span></h1>
            <div className='board'>
                <div className='row1'>
                    <div className='boxes' onClick={() => toggle(0)}>{data[0] === "x" ? <img src={cross_icon} alt="cross" /> : data[0] === "o" ? <img src={circle_icon} alt="circle" /> : null}</div>
                    <div className='boxes' onClick={() => toggle(1)}>{data[1] === "x" ? <img src={cross_icon} alt="cross" /> : data[1] === "o" ? <img src={circle_icon} alt="circle" /> : null}</div>
                    <div className='boxes' onClick={() => toggle(2)}>{data[2] === "x" ? <img src={cross_icon} alt="cross" /> : data[2] === "o" ? <img src={circle_icon} alt="circle" /> : null}</div>
                </div>
                <div className='row2'>
                    <div className='boxes' onClick={() => toggle(3)}>{data[3] === "x" ? <img src={cross_icon} alt="cross" /> : data[3] === "o" ? <img src={circle_icon} alt="circle" /> : null}</div>
                    <div className='boxes' onClick={() => toggle(4)}>{data[4] === "x" ? <img src={cross_icon} alt="cross" /> : data[4] === "o" ? <img src={circle_icon} alt="circle" /> : null}</div>
                    <div className='boxes' onClick={() => toggle(5)}>{data[5] === "x" ? <img src={cross_icon} alt="cross" /> : data[5] === "o" ? <img src={circle_icon} alt="circle" /> : null}</div>
                </div>
                <div className='row3'>
                    <div className='boxes' onClick={() => toggle(6)}>{data[6] === "x" ? <img src={cross_icon} alt="cross" /> : data[6] === "o" ? <img src={circle_icon} alt="circle" /> : null}</div>
                    <div className='boxes' onClick={() => toggle(7)}>{data[7] === "x" ? <img src={cross_icon} alt="cross" /> : data[7] === "o" ? <img src={circle_icon} alt="circle" /> : null}</div>
                    <div className='boxes' onClick={() => toggle(8)}>{data[8] === "x" ? <img src={cross_icon} alt="cross" /> : data[8] === "o" ? <img src={circle_icon} alt="circle" /> : null}</div>
                </div>
            </div>
            {winner && (
                <div className="winner-message">
                    {winner === "Draw" ? "Game  is  draw!" : `Player ${winner} wins!`}
                </div>
            )}
            <button className='reset' onClick={resetGame}>Reset</button>
        </div>
    );
}

export default TikTacTao;






