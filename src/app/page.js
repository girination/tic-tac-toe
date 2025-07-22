"use client";

import { useState, useEffect } from "react";
import Confetti from "react-confetti"; // 🎉 Import Confetti
import { useWindowSize } from "@react-hook/window-size"; // Optional helper for dynamic sizing
import Board from "../components/Board";

export default function Home() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(Boolean);
  const [width, height] = useWindowSize(); // For confetti full screen

  useEffect(() => {
    if (winner) {
      setShowConfetti(true);
      // Stop confetti after 4 seconds
      const timeout = setTimeout(() => setShowConfetti(false), 7000);
      return () => clearTimeout(timeout);
    }
  }, [winner]);

  const handleClick = (i) => {
    if (squares[i] || winner) return;

    const next = [...squares];
    next[i] = isXNext ? "X" : "O";

    setSquares(next);
    setIsXNext(!isXNext);
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setShowConfetti(false); // reset confetti
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  let status = winner
    ? `Winner: ${winner}`
    : isDraw
    ? "It's a draw!"
    : `Next player: ${isXNext ? "X" : "O"}`;

  return (
    <div className="game">
      {showConfetti && <Confetti width={width} height={height} />}
      
      <button className="toggle" onClick={toggleDarkMode}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <h1>Tic-Tac-Toe</h1>
      <div className="status">{status}</div>
      <Board squares={squares} onClick={handleClick} />

      {(winner || isDraw) && (
        <button className="restart" onClick={handleRestart}>
          Play Again
        </button>
      )}
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
