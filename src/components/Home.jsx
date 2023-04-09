import React from 'react'
import Nav from './Nav'

function Home() {
  return (
    <div className='bgImg'>
      <Nav/>
      <div className='flex m-auto mt-20 text-white w-80 '>
      <h1 className='text-5xl mytext' >
        Welcome to Hawaii
      </h1>
      </div>
    </div>
  )
}

export default Home
