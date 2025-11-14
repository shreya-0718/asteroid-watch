import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AsteroidCard from "./AsteroidCard";
import CustomDots from "./CustomDots"
import React, { useState, useEffect } from "react";
import Asteroid from "./Asteroid";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const apiKey = import.meta.env.VITE_NASA_API_KEY;
const auto = false;

function AsteroidCarousel() {
  const current = new Date();
  const today = current.toISOString().split("T")[0];

  const nextDay = new Date(current);
  nextDay.setDate(current.getDate() + 1);
  const tomorrow = nextDay.toISOString().split("T")[0];

  const [asteroids, setAsteroids] = useState([]);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${tomorrow}&api_key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        const allAsteroids = Object.values(data.near_earth_objects).flat();
        setAsteroids(allAsteroids);
      });
  }, []);

  const diameter = Number(
    asteroids[currentSlide]?.estimated_diameter?.kilometers?.estimated_diameter_max || 1
  );

  return (
    <div className="flex-1 flex flex-col items-center justify-center w-full max-w-3xl h-full">
      <div className="w-full max-h-[250px] min-h-[150px] bg-blush">
        <Asteroid
          diameter={diameter}
          hazard={asteroids[currentSlide]?.is_potentially_hazardous_asteroid}
        />
      </div>

      <Carousel
        beforeChange={(previousSlide, nextSlide) => setCurrentSlide(nextSlide)}
        className="flex-1 w-full h-full"
        swipeable
        customDot={<CustomDots/>}
        draggable={false}
        showDots
        responsive={responsive}
        ssr
        infinite
        autoPlay={auto}
        keyBoardControl
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container w-full h-full"
        dotListClass="flex mb-4"
        itemClass="carousel-item h-full flex items-stretch justify-center"
      >
        {Array.isArray(asteroids) && asteroids.length > 0 ? (
          asteroids.map((asteroid, index) => (
            <AsteroidCard key={asteroid.id} asteroid={asteroid} isActive={index == currentSlide} slideIndex={index} />
          ))
        ) : (
          <div className="text-center p-10">Loading asteroids…</div>
        )}
      </Carousel>

    </div>
  );
}

export default AsteroidCarousel;
