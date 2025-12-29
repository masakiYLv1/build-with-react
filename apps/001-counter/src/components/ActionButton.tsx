export const ActionButton = ({ label, bgColor, onClick }) => {
  return (
    <button
      className={`px-4 py-2 text-2xl text-white font-bold ${bgColor} rounded cursor-pointer hover:opacity-75`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
