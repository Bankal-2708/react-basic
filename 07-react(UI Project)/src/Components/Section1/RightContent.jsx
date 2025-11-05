import React from 'react'
import { ArrowRight } from "lucide-react";

function RightContent() {
  return (
    <div className='p-4 flex h-full gap-5 overflow-hidden'>
        <div className='flex flex-col justify-between bg-[url(https://plus.unsplash.com/premium_photo-1664372145408-854a49c26d4f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=696)] h-full w-full bg-cover  object-cover overflow-hidden rounded-3xl'>
            <div className='flex flex-col justify-between h-full pb-10 pt-4 pl-4'>
                <h1 className='bg-white rounded-full  text-black w-6 h-6 items-center flex justify-center m-2'>1</h1>
                <p class="text-black text-sm leading-relaxed font-semibold px-5">
                    Prime customers, that have access to bank credit and are satisfied with the current product
                </p>
            </div>
            <button className='flex items-center mx-5 mb-4 justify-between bg-blue-600 text-white font-medium px-4 py-2 rounded-full relative '>
                Satisfied 
                <ArrowRight className="ml-2 bg-blue-700 rounded-full p-2 flex items-center justify-center" size={35} />
            </button>
        </div>

        <div className='flex flex-col justify-between bg-[url(https://images.unsplash.com/photo-1663615418268-8f559e85ad26?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym9vayUyMGhvbGRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600)] h-full w-full bg-cover  object-cover overflow-hidden rounded-3xl'>
            <div className='flex flex-col justify-between h-full pb-10 pt-4 pl-4'>
                <h1 className='bg-white rounded-full  text-black w-6 h-6 items-center flex justify-center m-2'>2</h1>
                <p class="text-black text-sm leading-relaxed font-semibold px-5">
                    Prime customers, that have access to bank credit and are satisfied with the current product
                </p>
            </div>
            <button className='flex items-center mx-5 mb-4 justify-between bg-blue-600 text-white font-medium px-4 py-2 rounded-full relative '>
                Satisfied 
                <ArrowRight className="ml-2 bg-blue-700 rounded-full p-2 flex items-center justify-center" size={35} />
            </button>
        </div>
         
        <div className='flex flex-col justify-between bg-[url(https://plus.unsplash.com/premium_photo-1723485630190-6d70e7d3c0ab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHRlY2glMjBtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600)] h-full w-full bg-cover object-cover overflow-hidden rounded-3xl'>
            <div className='flex flex-col justify-between h-full pb-10 pt-4 pl-4'>
                <h1 className='bg-white rounded-full  text-black w-6 h-6 items-center flex justify-center m-2'>3</h1>
                <p class="text-black text-sm leading-relaxed font-semibold px-5">
                   Customers from near-prime and sub-prime segments with no access to bank credit
                </p>
            </div>
            <button className='flex items-center mx-5 mb-4 justify-between bg-lime-400 text-white font-medium px-4 py-2 rounded-full relative '>
                Underbanked 
                <ArrowRight className="ml-2 bg-lime-500 rounded-full p-2 flex items-center justify-center" size={35} />
            </button>
        </div>

    </div>
  )
}

export default RightContent