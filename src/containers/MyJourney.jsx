import React from 'react'
import { Title2, InlineSlider } from '../components'

function MyJourney() {
  return (
    <div className=' flex h-fit  w-[80%] mx-auto max-lg:w-[86%] max-lg:flex-col  max-lg:justify-end mt-40 gap-x-16'>
        <div className='w-[25%] max-lg:w-full lg:h-full  lg:pr-10'>
            <Title2 line1='Work' line2='Experience' />
        </div>
        <div className='w-[65%] h-full max-lg:w-full  ' >
            <InlineSlider />
        </div>
    </div>
  )
}

export default MyJourney
