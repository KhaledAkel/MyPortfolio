import React from 'react'
import { TbArrowCurveLeft } from "react-icons/tb";
import { Link } from 'react-router-dom'

function CheckMore() {
  return (
    <div className='text-[120px] max-lg:text-[80px] '>
        <h1>Checkout</h1>
        <h1 className='-mt-16 max-lg:-mt-11'>More</h1>
        <h1 className='-mt-16 max-lg:-mt-11'>Projects<span className='text-red-700'>.</span></h1>
        <Link to='/'  className='relative '>
        <h1 className='-mt-16 max-lg:-mt-11 text-red-700 underline'>Here</h1>
        <TbArrowCurveLeft className='absolute -bottom-9 left-48 -rotate-45 text-gray-300 text-[50px] max-lg:text-[30px] max-lg:left-32 max-lg:-bottom-8' />
        <p className='absolute -bottom-12 left-56 text-gray-300 text-[20px] max-lg:text-[15px] max-lg:left-40 max-lg:-bottom-10'>Click it</p>
        </Link>
    </div>
  )
}

export default CheckMore
