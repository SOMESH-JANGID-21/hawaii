import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'

function Nav() {
  const [open,setOpen] = useState(false)
  return (
    <div className='flex items-center justify-between lg:max-w-7xl lg:mx-auto max-w-full px-[8%] flex-wrap w-full bg-white py-2'>
      <img src="./images/aloha.jpg" alt="" className='h-9 w-26' />

      <FiMenu className='md:hidden block h-7 w-7 cursor-pointer' onClick={() => setOpen(!open)}/>

      <div className={`${open ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto`}>
        <ul className="text-base text-gray-900 md:flex md:justify-between md:items-center">
          <li>
            <a href="/" className="md:px-5 py-2 hover:text-blue-800 font-semibold">Home</a>
          </li>
          <li>
            <a href="/" className="md:px-5 py-2 hover:text-blue-800 font-semibold">Surfing</a>
          </li>
          <li>
            <a href="/" className="md:px-5 py-2 hover:text-blue-800 font-semibold">Hula</a>
          </li>
          <li>
            <a href="/" className="md:px-5 py-2 hover:text-blue-800 font-semibold">Vulcano</a>
          </li>
          <li>
            <button className='bg-teal-500 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded-md'>Book a trip</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
