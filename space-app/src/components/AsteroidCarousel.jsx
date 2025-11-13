import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AsteroidCard from "./AsteroidCard";
import React, { useState, useEffect } from "react";

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

  return (
    <div className="flex-1 w-full h-full flex items-stretch justify-center bg-violet">
      <Carousel
        className="flex-1 w-full h-full"
        swipeable
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
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item h-full flex items-stretch justify-center"
      >
        {Array.isArray(asteroids) && asteroids.length > 0 ? (
          asteroids.map((asteroid) => (
            <AsteroidCard key={asteroid.id} asteroid={asteroid} />
          ))
        ) : (
          <div className="text-center p-10">Loading asteroids…</div>
        )}
      </Carousel>
    </div>
  );
}

export default AsteroidCarousel;
