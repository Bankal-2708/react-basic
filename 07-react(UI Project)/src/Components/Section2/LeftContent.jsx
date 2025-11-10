import React from 'react'
import { Zap, ArrowUpRight } from "lucide-react"

function LeftContent() {
  return (
    <div className=' w-1/2 h-cover flex flex-col '>
        <div className='font-bold text-4xl p-4 py-4 '>
            <h1>E-com Market is expected <br />to exceed <span className='bg-lime-400 rounded-2xl px-1'>$300B</span> in 2027</h1>
        </div>
        <div className='py-6   flex '>
            <Zap className='w-12' />
            <p className=' w-3/5'>In India, MSME contribution to eTailing sales is expected to grow
                between <span className="font-semibold">60–70%</span> annually to
                reach <span className="font-semibold">USD 50Bn</span> by FY 2027.
            </p>
        </div>
       <div className='flex  py-3 w-[85%]'>

         <div className='relative  bg-blue-500 rounded-3xl   h-40 m-2 '>
            <div className='absolute top right right-0 border  outline-8 outline-white  bg-white rounded-full text-3xl'>
                <ArrowUpRight className='h-10 w-10' />
            </div>
            <div className='mt-10 mb-3 flex flex-col mx-3 text-white '>
                <h2 class="text-3xl font-bold ">26.7%</h2>
                <p class="text-sm mt-3  ">Expected annual growth of eCom market size</p>
            </div>
        </div>
    
         <div className='relative  bg-lime-400 rounded-3xl   h-40 m-2 mr-5'>
            <div className='absolute top right right-0 border  outline-8 outline-white  bg-white rounded-full text-3xl'>
                <ArrowUpRight className='h-10 w-10' />
            </div>
            <div className='mt-10 mb-3 flex flex-col mx-3 text-white '>
                <h2 class="text-3xl font-bold ">25%</h2>
                <p class="text-sm mt-3  ">E-com share of the organized retail in 2020</p>
            </div>
        </div>
       </div>
       
 
    </div>
  ) 
}

export default LeftContent