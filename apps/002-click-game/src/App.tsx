import { useState } from "react";

import { Start } from "./components/Start";
import { Playing } from "./components/Playing";
import { Resutl } from "./components/Resutl";

type GamePhase = "start" | "playing" | "result";

function App() {
  const [phase, setPhase] = useState<GamePhase>("start");

  return (
    <div>
      <div>
        <h1>クリック連打ゲーム</h1>
      </div>
      <div>
        {phase === "start" && <Start />}
        {phase === "playing" && <Playing />}
        {phase === "result" && <Resutl />}
      </div>
    </div>
  );
}
export default App;
