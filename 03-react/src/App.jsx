import React from 'react';
import Card from './Components/Card';
import './App.css';

function App() {
  return (
    <div className='main'>
      <Card 
      logo="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png"
      Compnyname="Amazon"
      releaseTime="5 days ago"
      position="Senior UI/UX Designer"
      workingTime="Part Time"
      jobtype="Senior Level"
      salary="$120/hr"
      add="Mumbai, India"

      />

      <Card 
      logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFUTi1RsVDFSupmzDUJ5I3ZHBtwz043rbHQ&s"
      Compnyname="Google"
      releaseTime="30 days ago"
      position="Graphic Designer"
      workingTime="Part Time"
      jobtype="Flexible Schedule"
      salary="$115-220k"
      add="Kochi, India"

      />

      <Card 
      logo="https://cdn.freebiesupply.com/logos/large/2x/dribbble-icon-1-logo-png-transparent.png"
      Compnyname="Dribbble "
      releaseTime="18 days ago"
      position="Senior Motion Designer"
      workingTime="Contract"
      jobtype="Remote"
      salary="$85/hr"
      add="Chennai, India"

      />

      <Card 
      logo="https://images.icon-icons.com/2108/PNG/512/airbnb_icon_131000.png"
      Compnyname="Airbnb "
      releaseTime="5 days ago"
      position="Junior UI/UX Designer"
      workingTime="Contract"
      jobtype="Remote"
      salary="$100/hr"
      add="Delhi, India"

      />

      <Card 
      logo="https://www.shareicon.net/data/128x128/2016/11/24/856497_apple_512x512.png"
      Compnyname="Apple "
      releaseTime="5 days ago"
      position="Graphic Designer"
      workingTime="Full Time"
      jobtype="Flexible Schedule"
      salary="$85-120k"
      add="Kerala, India"

      />

    </div>
  );
}

export default App;