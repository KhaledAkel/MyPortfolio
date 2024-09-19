import React from 'react'
import {Title, PersonalInfo, AboutMePar, WorkingFields, Button, MyPhoto } from '../components'

function Biography() {
  return (
    <div className=' flex h-fit  w-[70%] mx-auto max-lg:w-[86%] max-lg:flex-col-reverse  max-lg:justify-end'>
        <div className='w-[35%] max-lg:w-full'>
            <div className='h-[150px] max-lg:h-[50px] max-lg:w-full ' />
            <div className='w-full flex flex-col max-lg:flex-row max-sm:flex-col gap-y-9  pt-8 max-lg:pt-1 max-lg:mt-28'>
                <PersonalInfo />
                <WorkingFields />
            </div>
            <div className='flex justify-center items-center mt-14'><Button /></div>

        </div>
        <div className='w-[65%]   max-lg:w-full'>
            <Title title='Biography' />
            <AboutMePar />
            <MyPhoto />
        </div>
    </div>
  )
}

export default Biography
