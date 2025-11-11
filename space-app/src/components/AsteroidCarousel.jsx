import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const auto = false;

function AsteroidCarousel() {
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
        <div className="p-10 bg-white text-black">Item 1</div>
        <div className="p-10 bg-white text-black">Item 2</div>
        <div className="p-10 bg-white text-black">Item 6</div>
        <div className="p-10 bg-white text-black">Item 7</div>
      </Carousel>
    </div>
  );
}

export default AsteroidCarousel;