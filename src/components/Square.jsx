export const Square = ({ value, onSquareClick }) => {
  return (
    <button
      className="aspect-square w-full border border-gray-400 text-lg md:text-2xl lg:text-3xl"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
};
