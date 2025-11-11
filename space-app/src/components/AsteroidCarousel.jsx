import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { useState } from 'react';
import AsteroidCard from './AsteroidCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const auto = false;

function AsteroidCarousel() {

    const current = new Date();
    // takes it in YYYY-MM-DD
    const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDay()}`;

    const [asteroids, setAsteroids] = useState()
    useEffect(() => {
        fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY')
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
        {asteroids.map((asteroid) => (
            <AsteroidCard asteroid={asteroid} />
        ))}

      </Carousel>
    </div>
  );
}

export default AsteroidCarousel;