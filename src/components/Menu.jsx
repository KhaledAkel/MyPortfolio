import React from 'react'
import { VscSettingsGear } from "react-icons/vsc";

function Menu() {
  return (
    <div className='group cursor-pointer'>
       <VscSettingsGear className='text__dark-blue text-4xl max-lg:text-3xl group-hover:rotate-180 duration-300' />
    </div>
  )
}

export default Menu
