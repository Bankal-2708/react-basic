import React from 'react'
import Card from './Components/Card'

import './App.css';

function App() {
const jobs = [
  {
    id: 1,
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png",
    position: "Graphic Designer",
    type1: "Part Time",
    type2: "Flexible Schedule",
    salary: "$115–220k",
    location: "Kochi, India",
    posted: "30 days ago",
  },
  {
    id: 2,
    company: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
    position: "Senior UI/UX Designer",
    type1: "Full Time",
    type2: "Senior Level",
    salary: "$120/hr",
    location: "Mumbai, India",
    posted: "5 days ago",
  },
  {
    id: 3,
    company: "Apple",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    position: "Visual Designer",
    type1: "Full Time",
    type2: "Flexible Schedule",
    salary: "$85–150k",
    location: "Kerala, India",
    posted: "10 days ago",
  },
  {
    id: 4,
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    position: "Product Designer",
    type1: "Full Time",
    type2: "Hybrid",
    salary: "$140–200k",
    location: "Hyderabad, India",
    posted: "12 days ago",
  },
  {
    id: 5,
    company: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    position: "Interaction Designer",
    type1: "Full Time",
    type2: "Remote",
    salary: "$130–210k",
    location: "Bangalore, India",
    posted: "7 days ago",
  },
  {
    id: 6,
    company: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    position: "UI Designer",
    type1: "Contract",
    type2: "Remote",
    salary: "$95/hr",
    location: "Delhi, India",
    posted: "14 days ago",
  },
  {
    id: 7,
    company: "Adobe",
    logo: "https://logos-world.net/wp-content/uploads/2020/06/Adobe-Logo-2020-present.png",
    position: "Creative Designer",
    type1: "Full Time",
    type2: "In Office",
    salary: "$110–180k",
    location: "Pune, India",
    posted: "18 days ago",
  },
  {
    id: 8,
    company: "NVIDIA",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAidTwfIZiqjT8TJqzDCyoUu52He1NPWqCZA&s",
    position: "Product Designer",
    type1: "Full Time",
    type2: "On Site",
    salary: "$160–250k",
    location: "Bangalore, India",
    posted: "3 days ago",
  },
  {
    id: 9,
    company: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    position: "Design Technologist",
    type1: "Contract",
    type2: "Hybrid",
    salary: "$150–230k",
    location: "Chennai, India",
    posted: "6 days ago",
  },
  {
    id: 10,
    company: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    position: "UX Researcher",
    type1: "Full Time",
    type2: "Flexible Schedule",
    salary: "$120–170k",
    location: "Gurgaon, India",
    posted: "11 days ago",
  },
];


  return (
  <div className='main'>
    {jobs.map(function(jobs){
      return <Card
        key={jobs.id}
        logo={jobs.logo}
        Compny={jobs.company} 
        posted={jobs.posted}
        position={jobs.position}
        type1={jobs.type1}
        type2={jobs.type2}
        salary={jobs.salary}
        location={jobs.location}
      />
    })}
  </div>
  )
}

export default App;