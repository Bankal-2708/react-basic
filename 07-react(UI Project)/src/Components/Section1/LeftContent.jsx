import React from 'react'
import { ArrowUpRight } from "lucide-react";

function LeftContent() {
  return (
    <div className='w-1/4  h-full flex flex-col justify-between'>
      <div className="max-w-sm mx-auto text-gray-800 p-4">
            <h2 className="text-3xl font-bold leading-tight text-black">
            <span className='ml-2'>Prospective </span><br />
            <span className="bg-gray-200 px-2 rounded-full">customer</span><br />
            <span className='ml-2'>segmentation</span>
            </h2>

            <p className="mt-4 ml-2 text-sm text-gray-600 leading-relaxed">
            Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups.
            </p>
      </div>

      <div>
            <ArrowUpRight className="text-black inline-block mb-5" size={40} />
      </div>
    </div>
  )
}

export default LeftContent
