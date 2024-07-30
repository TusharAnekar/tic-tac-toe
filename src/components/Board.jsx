import { useState } from "react";
import { Square } from "./Square";
import { calculateWinner } from "../utils/calculateWinner";

export const Board = () => {
  const [isXNext, setIsXNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (isXNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setIsXNext((prev) => !prev);
  }

  function handleReset() {
    setSquares(Array(9).fill(null));
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (squares.every((value) => value)) {
    status = "Draw";
  } else {
    status = "Next player: " + (isXNext ? "X" : "O");
  }

  return (
    <div className="flex flex-col gap-4">
      <p
        className={`text-center ${status.includes("Winner") && "text-lg font-semibold italic text-green-500"}`}
      >
        {status}
      </p>
      <div className="grid grid-cols-[48px_48px_48px] md:grid-cols-[64px_64px_64px] lg:md:grid-cols-[80px_80px_80px]">
        <>
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </>

        <>
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </>

        <>
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </>
      </div>

      <button
        className="rounded-lg bg-red-500 py-2 text-white"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};
