import React from 'react'
import PageTwoContent from './PageTwoContent'
import { Target } from 'lucide-react'
import Navbar2 from './Navbar2'

function Section2() {

  return (
    <div className='h-screen w-full px-6 py-8 overflow-hidden'>
      <Navbar2/>
      <PageTwoContent/>
    </div>
  )
}

export default Section2