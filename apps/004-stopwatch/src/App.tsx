export default function App() {
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
            <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
            待機中
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
                    00
                  </span>
                  <span className="pb-2 text-2xl text-slate-300">:</span>
                  <span className="text-5xl font-semibold tracking-tight sm:text-6xl">
                    00
                  </span>
                  <span className="pb-2 text-2xl text-slate-300">:</span>
                  <span className="text-5xl font-semibold tracking-tight sm:text-6xl">
                    00
                  </span>
                  <span className="pb-2 text-2xl text-slate-300">.</span>
                  <span className="pb-2 text-2xl text-slate-200 sm:text-3xl">
                    000
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <button
                  type="button"
                  className="col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-500 px-4 py-3 text-sm font-semibold text-white shadow-sm shadow-indigo-500/20 ring-1 ring-inset ring-white/10 transition hover:bg-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/80 active:translate-y-px"
                >
                  スタート
                </button>

                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl bg-white/7 px-4 py-3 text-sm font-semibold text-slate-100 ring-1 ring-inset ring-white/10 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/60 active:translate-y-px disabled:cursor-not-allowed disabled:opacity-40"
                >
                  ラップ
                </button>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/7 hover:text-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/60 disabled:cursor-not-allowed disabled:opacity-40"
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
                  <tr className="bg-white/7">
                    <td className="px-6 py-3 text-left text-slate-200">1</td>
                    <td className="px-6 py-3 text-right font-mono tabular-nums text-slate-100">
                      00:00:00.000
                    </td>
                    <td className="px-6 py-3 text-right font-mono tabular-nums text-slate-100">
                      00:00:00.000
                    </td>
                  </tr>
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
