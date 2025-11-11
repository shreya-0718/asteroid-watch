import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AsteroidCard from './AsteroidCard';
import React, { useState, useEffect } from 'react';

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
    // this gives it in YYYY-MM-DD
    const today = current.toISOString().split('T')[0];

    const threeDaysAgo = new Date(current);
    threeDaysAgo.setDate(current.getDate() - 3);
    const pastDate = threeDaysAgo.toISOString().split('T')[0];

    const threeDaysAhead = new Date(current);
    threeDaysAhead.setDate(current.getDate() + 3);
    const futureDate = threeDaysAhead.toISOString().split('T')[0];
    
    const [asteroids, setAsteroids] = useState([])
    useEffect(() => {
        fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${pastDate}&end_date=${futureDate}&api_key=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
        const allAsteroids = Object.values(data.near_earth_objects).flat();
        setAsteroids(allAsteroids);
        });
    }, []);

  return (
    <div className="h-auto">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={auto}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >

        {(Array.isArray(asteroids) && asteroids.length > 0) ? (
        asteroids.map((asteroid) => (
            <AsteroidCard key={asteroid.id} asteroid={asteroid} />
        ))) : 
        (
        <div className="text-center p-10">Loading asteroids…</div>
        )}


      </Carousel>
    </div>
  );
}

export default AsteroidCarousel;