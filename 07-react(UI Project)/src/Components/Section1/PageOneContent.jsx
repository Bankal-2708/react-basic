import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

function PageOneContent() {
  return (
    <div className='flex py-10 items-center h-full'>
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default PageOneContent