export const Result = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="mb-2 text-xl">結果は…</p>
      <span className="mb-4 text-5xl font-bold">0回</span>
      <button className="px-4 py-2 text-slate-700 bg-slate-200 rounded-md cursor-pointer hover:bg-slate-500">
        もう一度挑戦する
      </button>
    </div>
  );
};
