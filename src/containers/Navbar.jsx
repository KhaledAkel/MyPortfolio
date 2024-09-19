import React from 'react'
import { Logo, Menu, OpenToWork } from '../components'

function Navbar() {
  return (
    <div className='w-full'>
      <div className=' relative w-[80%] mx-auto max-lg:w-[86%] h-28 flex justify-between items-center   '>
          <Logo />
          <Menu />
          <div className='absolute w-full h-1 bg__dark-blue bottom-0 left-0  max-sm:hidden rounded-3xl' />
      </div>
    </div>
  )
}

export default Navbar
