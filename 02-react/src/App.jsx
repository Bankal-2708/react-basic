import React from 'react'
import Card from './compnents/Card'
import './App.css'

function App() {
  return (
    <div className='dis'>

      {/* first user */}
      <Card 
      user='Bankal Mavi' 
      data='Frontend Developer' 
      img='https://plus.unsplash.com/premium_photo-1737699134443-b1add9135b54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074' 
      profile='https://www.linkedin.com/in/bankal-mavi-646321273/' 
      />

      {/*  second user */}
      <Card 
      user='Ankush Kumar' 
      data='Frontend Developer' 
      img='https://plus.unsplash.com/premium_photo-1736967280298-1dc414b8a611?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332' 
      profile='https://www.linkedin.com/in/ankush-kumar-76b0b9292/'
      />
      
       {/* user third */}
       <Card
       user="Vanshika Poswal"
       data="Backend Developer"
       img="https://plus.unsplash.com/premium_photo-1737597231083-40b810942985?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332"
       profile="https://www.linkedin.com/in/vanshika-poswal-02138928b/" 
       />
      
    </div>
  )
}

export default App