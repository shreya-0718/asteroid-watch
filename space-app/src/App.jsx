import Starfield from "./components/Starfield";
import Footer from "./components/Footer";
import AsteroidCarousel from "./components/AsteroidCarousel";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-midnight text-white font-sans overflow-x-hidden">
      <Starfield />

      <main className="flex flex-col flex-grow justify-between items-center min-h-screen z-10 relative px-4 py-6 pt-10 pb-4">
        <div className="mb-2">
          <h1 className="text-4xl font-serif text-center">Asteroid Watcher</h1>
        </div>

       <div className="flex-grow flex items-stretch justify-center w-full max-w-6xl mx-auto h-[calc(100vh-100rem)] max-h-[400px]">
          <AsteroidCarousel />
       </div>


        <div className="mt-4 mb-4">
          <Footer/>
        </div>
      </main>
    </div>
  );
}

export default App;