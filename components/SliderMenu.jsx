'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import HeaderMovieCard from '@/pages/Home/HeaderMovieCard'
import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'

const SliderMenu = ({movies}) => {
    const settings = {
        // dots: true, 
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    }
  return (
    <div className='relative '>
        <Slider {...settings}>
        {movies?.map((movie, index) =>  <HeaderMovieCard key={index} movie={movie}/>
        )}
        </Slider>

    </div>
  )
}

export default SliderMenu