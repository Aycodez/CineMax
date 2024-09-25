import React from 'react'
import {GrPrevious} from "react-icons/gr"
const PrevArrow = ({onClick}) => {
  return (
    <div className='absolute lg:pl-5 top-[130px] z-[99]'>
            
        <button onClick={onClick}><GrPrevious size={40} /></button>
                
                        
      </div>
  )
}

export default PrevArrow