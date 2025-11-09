import Starfield from "./components/Starfield";

function App() {
  return (
    <div className="fixed w-screen h-screen bg-midnight text-white flex items-center justify-center font-sans">
      <Starfield/>
      <h1 className="text-4xl font-serif"></h1>
    </div>
  );
}

export default App;