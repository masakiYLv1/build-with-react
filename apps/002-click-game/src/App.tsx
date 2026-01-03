import { useState } from "react";

import { Start } from "./components/Start";
import { Playing } from "./components/Playing";
import { Resutl } from "./components/Resutl";

type GamePhase = "start" | "playing" | "result";

function App() {
  const [phase, setPhase] = useState<GamePhase>("playing");

  return (
    <div className="flex justify-center items-center h-screen bg-blue-50">
      <div className="w-full max-w-md h-80 p-4 bg-white rounded-md">
        <div className="mb-4">
          <h1 className="text-xl">クリック連打ゲーム</h1>
        </div>
        <div className="h-48 p-4 bg-amber-50 rounded-md">
          {phase === "start" && <Start />}
          {phase === "playing" && <Playing />}
          {phase === "result" && <Resutl />}
        </div>
      </div>
    </div>
  );
}
export default App;
