import React from 'react'

import LeftContent from './LeftContent'
import RightContent from './RightContent'


function PageTwoContent() {
  return (
    <div className='h-full w-full px-6 py-8 flex'> 
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default PageTwoContent