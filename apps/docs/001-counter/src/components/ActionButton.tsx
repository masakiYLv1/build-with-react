type ActionButtonProps = {
  label: string;
  bgColor: string;
  onClick: () => void;
};

export const ActionButton = ({
  label,
  bgColor,
  onClick,
}: ActionButtonProps) => {
  return (
    <button
      className={`px-4 py-2 text-2xl text-white font-bold ${bgColor} rounded cursor-pointer hover:opacity-75`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
