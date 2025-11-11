import Starfield from "./components/Starfield";
import Footer from "./components/Footer"
import AsteroidCarousel from "./components/AsteroidCarousel";

function App() {
  return (
    <div className="fixed w-screen h-screen bg-midnight text-white flex font-sans justify-center">
      <Starfield/>
      
      <h1 className="m-5 text-4xl font-serif">Asteroid Watcher</h1>
      
      <div className="flex bg-pink items-center justify-center z-10 min-h-screen">
        <AsteroidCarousel/>
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;