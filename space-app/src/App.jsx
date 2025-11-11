import Starfield from "./components/Starfield";
import Footer from "./components/Footer";
import AsteroidCarousel from "./components/AsteroidCarousel";

function App() {
  return (
    <div className="relative min-h-screen bg-midnight text-white font-sans overflow-x-hidden">
      <Starfield />

      <main className="flex flex-col items-center justify-center min-h-screen z-10 relative">
        <h1 className="m-5 text-4xl font-serif">Asteroid Watcher</h1>

        <div className="w-full max-w-4xl px-4 m-5=">
          <AsteroidCarousel />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;