import { useEffect, useState } from "react";
import { Controls } from "./Controls";
import { Header } from "./Header";
import { TimeDisplay } from "./TimeDisplay";

export type statusTime = "idle" | "running" | "stopped";

function App() {
  const [status, setStatus] = useState<statusTime>("idle");
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  const handleStart = () => {
    setStatus("running");
  };

  const handleStop = () => {
    setStatus("stopped");
  };

  const handleReset = () => {
    setElapsedTime(0);
    setStatus("idle");
  };

  useEffect(() => {
    if (status !== "running") return;

    const timeId = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timeId);
  }, [status]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md h-80 p-4 bg-lime-100 rounded-md flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <TimeDisplay elapsedTime={elapsedTime} />
        </main>
        <Controls
          status={status}
          onStart={handleStart}
          onStop={handleStop}
          onReset={handleReset}
        />
      </div>
    </div>
  );
}

export default App;
