type PlayingProps = {
  onClick: () => void;
  count: number;
  timeLeft: number;
};

export const Playing = ({ onClick, count, timeLeft }: PlayingProps) => {
  return (
    <div className="w-full h-40 mb-4 bg-white rounded-md">
      <button
        className="w-full h-full flex flex-col justify-center items-center cursor-pointer"
        onClick={onClick}
      >
        <span className="md-1">{timeLeft}</span>
        <span className="mb-2 text-5xl font-bold">{count}</span>
        <span className="text-center">クリック！クリック！</span>
      </button>
    </div>
  );
};
