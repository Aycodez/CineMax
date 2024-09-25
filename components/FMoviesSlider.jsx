"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StreamingMovieCard from "@/Apppages/Home/StreamingMovieCard";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
const NextArrow = ({ onClick }) => {
  return (
    <div className="absolute z-50 top-[170px] lg:top-[130px] mb-5 left-[-70px] lg:left-[-190px]">
      <button
        onClick={onClick}
        className="border-[3px] transition-all ease-in-out duration-500 hover:text-gray-800 hover:border-gray-800 border-gray-500 text-gray-500 rounded-full p-1"
      >
        <GrFormNextLink size={25} />
      </button>
    </div>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <div className="absolute  z-50 top-[170px] lg:top-[130px] mb-5 left-[-120px] lg:left-[-240px]">
      <button
        onClick={onClick}
        className="border-[3px] transition-all ease-in-out duration-500 hover:border-gray-800 hover:text-gray-800 border-gray-500 text-gray-500 rounded-full p-1"
      >
        <GrFormPreviousLink size={25} />
      </button>
    </div>
  );
};

const FMoviesSlider = ({ slides, movies }) => {
  const settings = {
    arrows: true,
    infinite: false,
    slidesToShow: slides ? slides : 6,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative w-2/3 lg:w-[80%]">
      <Slider {...settings}>
        {movies?.map((movie, index) => (
          <StreamingMovieCard key={index} movie={movie} />
        ))}
      </Slider>
    </div>
  );
};
export default FMoviesSlider;
