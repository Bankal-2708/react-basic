import React from 'react'
import {Bookmark} from "lucide-react";

function Card(props) {
  return (
    <div className='parent'>
      <div className='card'>
        <div className='top'>
          <img src={props.logo} />
          <button  >Save<Bookmark size={20} /></button>
        </div>
        <div className='centre'>
            <h3>{props.Compny} <span> {props.posted}</span></h3>
            <h2>{props.position}</h2>
            <div className='tag'>
              <h4>{props.type1}</h4>
              <h4>{props.type2}</h4>
            </div>
        </div>
        <div className='bottom'>
              <div>
                  <h3>{props.salary}</h3>
                  <p>{props.location}</p>
              </div>
              <div>
                  <button>Apply Now</button>
              </div>
              
        </div>
      </div>
    </div>
  )
}


export default Card