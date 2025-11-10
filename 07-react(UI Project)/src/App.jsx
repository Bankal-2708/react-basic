import React from 'react'
import Profile from './Components/Profile/Profile'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
import Section3 from './Components/Section3/Section3'



function App() {
  return (
    <div className='overflow-hidden'>
      <Profile/>
      <Section1 />
      <Section2 />
      <Section3/>
    
    </div>
  )
}

export default App