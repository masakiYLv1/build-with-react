import { Controls } from "./Controls";
import { Header } from "./Header";
import { TimeDisplay } from "./TimeDisplay";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md h-80 p-4 bg-lime-100 rounded-md flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <TimeDisplay />
        </main>
        <Controls />
      </div>
    </div>
  );
}

export default App;
