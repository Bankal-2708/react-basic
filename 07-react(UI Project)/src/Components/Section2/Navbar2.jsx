import React from 'react'
import Navbar from '../Section1/Navbar'

function Navbar2() {
 return (
    <div className="p-3">
      <div className="flex   justify-between items-center gap-3">
        <h1 className="uppercase bg-black rounded-full text-white px-5 py-2 text-sm font-semibold text-center">
          market trends
        </h1>
        <button className="uppercase font-semibold bg-gray-200 rounded-3xl px-5 py-2 tracking-wider text-sm">
          Digital Banking Platform
        </button>
      </div>
    </div>
  )
}

export default Navbar2