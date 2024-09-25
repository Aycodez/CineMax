import React from 'react'
import { TbMovie } from "react-icons/tb";
import { adminDashboardOptions } from "@/utils/constants";
import Link from "next/link";
import { IoIosCloseCircle } from 'react-icons/io';

const Panel = ({toggle, setToggle}) => {
  return (
    <div className='h-full w-full'>
        <div className="fc">
        <TbMovie size={30} className="text-red-600" />
        <h1 className="lg:head-title text-xl text-white">CINEMAX</h1>
      </div>
      <div className="w-full border-b-2 my-3 border-b-red-600" />
      <div className="w-full">
        {toggle && <button className='text-red-600 w-full flex items-center justify-center' onClick={() => setToggle(!toggle)}><IoIosCloseCircle size={30}/></button>}
        {adminDashboardOptions.map((options, index) => (
          <Link
            href={options.link}
            key={index}
            className="fc p-2 w-full hover:bg-red-600 
                hover:bg-opacity-60 rounded-lg text-red-600"
          >
            <div className="bg-red-500 bg-opacity-10 p-[2px] rounded-sm">
              {options.icon}
            </div>

            <p className="text-white font-semibold">{options.option}</p>
          </Link>
        ))}
      </div>
      </div>
  )
}

export default Panel