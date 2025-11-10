import React from 'react'
import LeftContent from './LeftContent'
import Rightcontent from './Rightcontent'



function PageThreeContext() {
  return (
    <div className='flex py-8 px-6 items-center h-full '>
        <LeftContent/>
        <Rightcontent/>
    </div>
  )
}

export default PageThreeContext