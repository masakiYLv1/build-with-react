import { Start } from "./components/Start";
import { Playing } from "./components/Playing";
import { Result } from "./components/Resutl";
import { useClickGame } from "./hooks/useClickGame";

function App() {
  const { phase, timeLeft, count, startGame, click, resetGame } =
    useClickGame();

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="w-full max-w-md h-80 p-4 bg-white rounded-md">
        <div className="mb-4">
          <h1 className="text-xl">クリック連打ゲーム</h1>
        </div>
        <div className="h-48 p-4 bg-amber-50 rounded-md">
          {phase === "start" && <Start onClick={startGame} />}
          {phase === "playing" && (
            <Playing onClick={click} count={count} timeLeft={timeLeft} />
          )}
          {phase === "result" && <Result onClick={resetGame} count={count} />}
        </div>
      </div>
    </div>
  );
}
export default App;
