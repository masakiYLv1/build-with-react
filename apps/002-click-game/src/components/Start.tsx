type StartProps = {
  onClick: () => void;
};

export const Start = ({ onClick }: StartProps) => {
  return (
    <div>
      <div className="w-full h-32 mb-4 bg-white rounded-md">
        <button
          className="w-full h-full text-xl cursor-pointer"
          onClick={onClick}
        >
          クリックしてスタート
        </button>
      </div>
      <p className="text-sm text-center">
        10秒間で何回クリックできるか試してみよう
      </p>
    </div>
  );
};
