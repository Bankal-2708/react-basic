import React from 'react'
import Navbar from './Navbar'
import PageOneContent from './PageOneContent'

function Section1() {
  return (
    <div className='h-screen w-full px-6 py-8 '>
        <Navbar/>
        <PageOneContent/>
    </div>
  )
}

export default Section1