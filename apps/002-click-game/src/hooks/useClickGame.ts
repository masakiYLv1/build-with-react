import { useEffect, useEffectEvent, useState } from "react";

export type GamePhase = "start" | "playing" | "result";

export const useClickGame = () => {
  const [phase, setPhase] = useState<GamePhase>("start");
  const [timeLeft, setTimeLeft] = useState<number>(10);
  const [count, setCount] = useState<number>(0);

  const startGame = () => {
    setCount(0);
    setTimeLeft(10);
    setPhase("playing");
  };

  const click = () => {
    setCount((prev) => prev + 1);
  };

  const resetGame = () => {
    setCount(0);
    setTimeLeft(10);
    setPhase("start");
  };

  const finishGame = useEffectEvent(() => {
    setPhase("result");
  });

  useEffect(() => {
    if (phase !== "playing") return;
    if (timeLeft === 0) {
      finishGame();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [phase, timeLeft]);

  return {
    phase,
    timeLeft,
    count,
    startGame,
    click,
    resetGame,
  };
};
