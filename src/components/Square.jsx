export default function Square({ value, onClick, isWinning }) {
  return (
    <button
      className={`square ${isWinning ? "winning" : ""}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
