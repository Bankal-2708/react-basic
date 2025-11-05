import React from 'react'

function Navbar() {
  return (
    <div className='p-3'>
        <div className='flex justify-between items-center '>
            <h1 className='uppercase bg-black rounded-full text-white px-5 py-1 text-sm font-semibold'>Target Audience</h1>
            <button className='uppercase font-semibold bg-gray-200 rounded-3xl px-5 py-1 tracking-wider text-sm'>Digital Banking Platform</button>
        </div>
    </div>
  )
}

export default Navbar