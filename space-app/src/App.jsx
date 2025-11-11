import Starfield from "./components/Starfield";
import Footer from "./components/Footer"
function App() {
  return (
    <div className="fixed w-screen h-screen bg-midnight text-white flex font-sans justify-center">
      <Starfield/>
      
      <h1 className="m-5 text-4xl font-serif">Asteroid Watcher</h1>

      <Footer/>
    </div>
  );
}

export default App;