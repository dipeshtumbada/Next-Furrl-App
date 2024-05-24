"use client";
import React from 'react';
import Slider from 'react-slick';
import Slide from './Slide';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
  };

  const slideData = [
    {
      id: 0,
      img: '/1.jpg',
      title: "#HomeHunts",
    },
    {
      id: 1,
      img: '/2.jpg',
      title: "#Vibe",
    },
    {
      id: 2,
      img: '/3.jpg',
      title: "#FurrlVibe",
    },
  ];

  return (
    <div className='container pt-6 lg:pt-0'>
      <Slider {...settings}>
        {slideData.map((item) => (
          <Slide key={item.id} img={item.img} title={item.title} />
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
