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
      console.log(currentSlide);


  }, []);

  const diameter = Number(
    asteroids[currentSlide]?.estimated_diameter?.kilometers?.estimated_diameter_max || 0.05
  );

  const activeAsteroid = asteroids[currentSlide];

  console.log(`updating asteroid with diamter ${diameter} for`)
  console.log("Current slide:", currentSlide);
  console.log("Asteroid shown:", asteroids[currentSlide]?.name);

  return (
    <div className="flex flex-col md:flex-row items-center items-stretch gap-4 w-full max-w-3xl">
      <Carousel
        beforeChange={(index) => {
          const normalizedIndex = index % asteroids.length;
          setCurrentSlide(normalizedIndex);
        }}
        className="flex-1"
        swipeable
        customDot={<CustomDots/>}
        draggable={false}
        showDots
        responsive={responsive}
        ssr={false}
        infinite={false}
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
      
      <div className="bg-blush max-w-[30vw] max-h-[30vw] justify-center">
        <Asteroid
          diameter={Number(activeAsteroid?.estimated_diameter?.kilometers?.estimated_diameter_max || 0.05)}
          hazard={activeAsteroid?.is_potentially_hazardous_asteroid}
        />
      </div>

    </div>
  );
}

export default AsteroidCarousel;
