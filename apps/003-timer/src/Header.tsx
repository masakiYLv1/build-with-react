import type { statusTime } from "./App";

type HeaderProps = {
  status: statusTime;
};

export const Header = ({ status }: HeaderProps) => {
  const statusText =
    status === "running"
      ? "計測中"
      : status === "stopped"
      ? "停止中"
      : "待機中";

  return (
    <div className="flex justify-between items-center px-2">
      <h1 className="text-lg">タイマー</h1>
      <span className="text-sm text-gray-600">{statusText}</span>
    </div>
  );
};
