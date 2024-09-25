import SliderMenu from '@/components/SliderMenu'
import React from 'react'

const Header = ({movies}) => {
  //  console.log(movies)
  return (
    <header className='text-white'>
       <SliderMenu movies={movies}/>     
    </header>
  )
}

export default Header