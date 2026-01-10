import type { statusTime } from "./App";

type ControlsProps = {
  status: statusTime;
  onStart: () => void;
  onStop: () => void;
  onReset: () => void;
};

export const Controls = ({
  status,
  onStart,
  onStop,
  onReset,
}: ControlsProps) => {
  return (
    <>
      {status === "idle" && (
        <div className="flex justify-center">
          <button
            className="px-6 py-2 w-full bg-lime-500 text-white rounded cursor-pointer"
            onClick={onStart}
          >
            開始
          </button>
        </div>
      )}

      {status === "running" && (
        <div className="flex gap-2">
          <button
            onClick={onStop}
            className="flex-1 px-6 py-2 bg-lime-500 text-white rounded cursor-pointer"
          >
            停止
          </button>
          <button
            className="flex-1 px-6 py-2 bg-lime-500 text-white rounded cursor-pointer"
            onClick={onReset}
          >
            リセット
          </button>
        </div>
      )}

      {status === "stopped" && (
        <div className="flex gap-2">
          <button
            onClick={onStart}
            className="flex-1 px-6 py-2 bg-lime-500 text-white rounded cursor-pointer"
          >
            再生
          </button>
          <button
            className="flex-1 px-6 py-2 bg-lime-500 text-white rounded cursor-pointer"
            onClick={onReset}
          >
            リセット
          </button>
        </div>
      )}
    </>
  );
};
