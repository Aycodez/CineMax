import React from 'react'
import {GrNext} from "react-icons/gr"
const NextArrow = ({onClick}) => {
  return (
    <div className='absolute lg:pr-5 top-[130px] right-[-0px]'>
            
                
                <button onClick={onClick}><GrNext size={40} /></button>
                        
      </div>
  )
}

export default NextArrow