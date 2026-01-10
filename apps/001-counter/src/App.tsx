import { useState } from "react";

import { ActionButton } from "./components/ActionButton";

function App() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleIncrement = () => {
    if (count < 100) {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-teal-100">
      <div className="size-100 p-10 bg-white rounded-md">
        <h1 className="text-3xl text-center mb-10">Counter App</h1>
        <div className="text-9xl text-center font-bold mb-10">{count}</div>
        <div className="flex justify-around items-center">
          <ActionButton
            label="-"
            bgColor="bg-orange-500"
            onClick={handleDecrement}
          />
          <ActionButton
            label="reset"
            bgColor="bg-black"
            onClick={handleReset}
          />
          <ActionButton
            label="+"
            bgColor="bg-blue-500"
            onClick={handleIncrement}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
