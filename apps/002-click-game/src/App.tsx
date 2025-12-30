function App() {
  return (
    <div className="flex justify-center items-center bg-white w-screen h-screen">
      <div className="bg-white w-md h-96 rounded-lg border border-gray-300 shadow-lg">
        <h1 className="p-4 text-xl font-bold">クリック連打ゲーム</h1>
        <div className="p-4 pt-0">
          <button className="bg-red-50 relative flex flex-col justify-center items-center p-4 w-full min-h-64 rounded-lg cursor-pointer">
            <div className="text-5xl font-bold">Click me!</div>
            <p className="text-gray-500">クリックしてスタート</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
