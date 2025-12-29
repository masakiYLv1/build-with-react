function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-teal-100">
      <div className="size-100 p-10 bg-white rounded-md">
        <h1 className="text-3xl text-center mb-10">Counter App</h1>
        <div className="text-9xl text-center font-bold mb-10">0</div>
        <div className="flex justify-around items-center">
          <button className="px-4 py-2 text-2xl text-white font-bold bg-orange-500 rounded">
            -
          </button>
          <button className="px-4 py-2 text-2xl text-white font-bold bg-black rounded">
            reset
          </button>
          <button className="px-4 py-2 text-2xl text-white font-bold bg-blue-500 rounded">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
