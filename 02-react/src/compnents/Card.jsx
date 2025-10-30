import React from 'react'

function Card(props) {
  return (
    <div className='parent'>
        <div className='card'>
            <img src={props.img} />
            <h1>{props.user}</h1>
            {/* <h1>Bankal Mavi</h1> */}
            <p>{props.data}</p>
            <button onClick={() => window.open(props.profile, "_blank")}>
  View Profile
</button>

            {/* <button href="https://github.com/Bankal-2708">View Profile</button> */}
        </div>
    </div>
  )
}

export default Card