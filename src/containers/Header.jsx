import React from 'react'
import { DisplayText, AboutMePar, VideoDisplay, ScrollDown, SocialLinks, Quote } from '../components'
import { HeaderLeftSection } from '../containers'

function Header() {
  return (
    <div className=' relative h-full  w-[80%] mx-auto max-lg:w-[86%] flex justify-between gap-x-9  '>
      <div className='h-full flex flex-col justify-end'>
         <DisplayText />
      </div>
      <HeaderLeftSection />
      <ScrollDown />
      <SocialLinks />
      <Quote />


    </div>
  )
}

export default Header
