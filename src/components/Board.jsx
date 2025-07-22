import Square from "./Square";

export default function Board({ squares, onClick, winningLine = [] }) {
  return (
    <div className="board">
      {squares.map((value, i) => (
        <Square
          key={i}
          value={value}
          onClick={() => onClick(i)}
          isWinning={winningLine.includes(i)}
        />
      ))}
    </div>
  );
}
