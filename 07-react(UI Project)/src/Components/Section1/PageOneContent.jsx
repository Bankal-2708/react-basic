import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

function PageOneContent() {
  return (
    <div className="h-full w-full px-6 py-8 flex">
      <LeftContent />
      <RightContent />
    </div>
  )
}

export default PageOneContent
