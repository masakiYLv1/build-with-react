import { useRef, useState } from "react";

// 表示
type Status = "idle" | "running" | "stopped";

// ラップ
type Lap = {
  lap: number;
  lapTime: number; // ms
  totalTime: number; // ms
};

export default function App() {
  const [status, setStatus] = useState<Status>("idle");
  const [laps, setLaps] = useState<Lap[]>([]);
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  const startTimeRef = useRef<number>(0);
  const intervalRef = useRef<number | null>(null);

  const handleStart = () => {
    if (status === "running") return;
    setStatus("running");
    // 再開に対応するための処理
    startTimeRef.current = Date.now() - elapsedTime;

    // 0.01秒ごとに経過時間を計算する
    intervalRef.current = setInterval(() => {
      setElapsedTime(Date.now() - startTimeRef.current);
    }, 10);
  };

  const handleStop = () => {
    if (intervalRef.current === null) return;

    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setStatus("stopped");
  };

  const handleReset = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setElapsedTime(0);
    setLaps([]);
    setStatus("idle");
  };

  const handleLap = () => {
    if (status !== "running") return;

    // 前回ラップ時点の totalTime を覚えておき、今の elapsedTime との差を取る
    setLaps((prev) => {
      // 前回ラップ時点のtotalTime、存在しない場合は0
      const lastTotal = prev.at(-1)?.totalTime ?? 0;
      // その時点の合計時間
      const currentTotal = elapsedTime;

      //
      return [
        ...prev,
        {
          lap: prev.length + 1,
          lapTime: currentTotal - lastTotal,
          totalTime: currentTotal,
        },
      ];
    });
  };

  // 時間を表示するためのフォーマット関数
  const formatTime = (ms: number) => {
    const hours = Math.floor(ms / 1000 / 60 / 60)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((ms / 1000 / 60) % 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((ms / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const milliseconds = Math.floor(ms % 1000)
      .toString()
      .padStart(3, "0");

    return { hours, minutes, seconds, milliseconds };
  };

  // ラップ用のフォーマット
  const formatTimeText = (ms: number) => {
    const { hours, minutes, seconds, milliseconds } = formatTime(ms);
    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  // ボタン onclickとlabel
  const isRunning = status === "running";
  const mainButtonLabel = isRunning
    ? "ストップ"
    : status === "stopped"
      ? "再開"
      : "スタート";
  const mainButtonHandler = isRunning ? handleStop : handleStart;

  // 表示用のフォーマット
  const { hours, minutes, seconds, milliseconds } = formatTime(elapsedTime);

  // 状態用（「as const」でreadonlyにする）
  const statusConfig = {
    idle: {
      label: "待機中",
      dot: "bg-slate-400/90",
    },
    running: {
      label: "計測中",
      dot: "bg-emerald-400/90",
    },
    stopped: {
      label: "一時停止中",
      dot: "bg-amber-400/90",
    },
  } as const;

  const { label, dot } = statusConfig[status];

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-100">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              ストップウォッチ
            </h1>
            <p className="mt-1 text-sm text-slate-300">
              ラップ計測付きのシンプルなストップウォッチ
            </p>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/7 px-3 py-1 text-xs text-slate-200 sm:flex">
            <span className={`h-2 w-2 rounded-full ${dot}`} />
            {label}
          </div>
        </header>

        <main className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <section className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/7 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_80px_-40px_rgba(0,0,0,0.8)]">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-medium text-slate-200">
                  Elapsed Time
                </h2>
                <span className="text-sm text-slate-400">
                  HH : MM : SS . ms
                </span>
              </div>

              <div className="mt-5 rounded-2xl bg-linear-to-b from-white/10 to-white/5 p-5 ring-1 ring-white/10">
                <div className="flex items-end justify-center gap-2 font-mono tabular-nums">
                  <span className="text-5xl font-semibold tracking-tight sm:text-6xl">
                    {hours}
                  </span>
                  <span className="pb-2 text-2xl text-slate-300">:</span>
                  <span className="text-5xl font-semibold tracking-tight sm:text-6xl">
                    {minutes}
                  </span>
                  <span className="pb-2 text-2xl text-slate-300">:</span>
                  <span className="text-5xl font-semibold tracking-tight sm:text-6xl">
                    {seconds}
                  </span>
                  <span className="pb-2 text-2xl text-slate-300">.</span>
                  <span className="pb-2 text-2xl text-slate-200 sm:text-3xl">
                    {milliseconds}
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <button
                  type="button"
                  className="col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-4 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-500/20 ring-1 ring-inset ring-white/10 transition hover:bg-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/80 active:translate-y-px"
                  onClick={mainButtonHandler}
                >
                  {mainButtonLabel}
                </button>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl bg-white/7 px-4 py-3 text-sm font-semibold text-slate-100 ring-1 ring-inset ring-white/10 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/60 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-40"
                  onClick={handleLap}
                >
                  ラップ
                </button>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/7 hover:text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/60 disabled:cursor-not-allowed disabled:opacity-40"
                  onClick={handleReset}
                >
                  リセット
                </button>

                <span className="text-xs text-slate-400">No laps</span>
              </div>
            </div>
          </section>

          <section className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/7 shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_80px_-40px_rgba(0,0,0,0.8)]">
              <div className="flex items-center justify-between px-6 py-4">
                <h2 className="text-sm font-medium text-slate-200">Laps</h2>
                <div className="text-xs text-slate-400">
                  ラップはここに表示されます
                </div>
              </div>
            </div>

            <div className="max-h-88 overflow-auto border-t border-white/10">
              <table className="w-full text-sm">
                <thead className="sticky top-0 z-10 bg-slate-950/70">
                  <tr className="text-slate-300">
                    <th className="px-6 py-3 text-left font-medium">Lap</th>
                    <th className="px-6 py-3 text-right font-medium">
                      Lap Time
                    </th>
                    <th className="px-6 py-3 text-right font-medium">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {laps.map((lap) => (
                    <tr className="bg-white/7" key={lap.lap}>
                      <td className="px-6 py-3 text-left text-slate-200">
                        {lap.lap}
                      </td>
                      <td className="px-6 py-3 text-right font-mono tabular-nums text-slate-100">
                        {formatTimeText(lap.lapTime)}
                      </td>
                      <td className="px-6 py-3 text-right font-mono tabular-nums text-slate-100">
                        {formatTimeText(lap.totalTime)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>

        <footer className="mt-8 text-xs text-slate-500">
          ヒント：
          「スタート」→「ラップ」で記録、「一時停止」→「再開」で続きから計測できます。
        </footer>
      </div>
    </div>
  );
}
