import React from 'react'
import { ArrowRight, CircleAlert } from "lucide-react";

function LeftContent() {
  return (
    <div className='h-full   w-1/2  p-4  '>
       
       <div className='flex flex-col h-full justify-between'>
            <div >
                <div className='py-1 font-bold text-4xl'> 
                    <h1>The <span className='bg-lime-300 px-1  rounded-full'>opportunity</span></h1>
                </div>
                <div className='w-[90%] pt-5 '>
                    <p>Our deep experience in credit products, advanced proprietary payment and information technologies, and successful collaborations with XXX clients globally position us to succeed.</p>
                    <p className='pt-4'>Combined with favorable market trends, we are confident in our ability to build a unique platform for SMEs in Lorem.</p>
                </div>
            </div>

            <div className="flex justify-start mb-4">
                <button className="bg-gray-200 flex items-center justify-between rounded-full py-2 px-2 w-40">
                    <CircleAlert className="text-black" size={25} />
                    <ArrowRight className="text-black" size={25} />
                </button>
            </div>

       </div>

    </div>
  )
}

export default LeftContent