import React from 'react'

function Navbar() {
  return (
    <div className="p-3">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
        <h1 className="uppercase bg-black rounded-full text-white px-5 py-2 text-sm font-semibold text-center">
          Target Audience
        </h1>
        <button className="uppercase font-semibold bg-gray-200 rounded-3xl px-5 py-2 tracking-wider text-sm">
          Digital Banking Platform
        </button>
      </div>
    </div>
  )
}

export default Navbar
