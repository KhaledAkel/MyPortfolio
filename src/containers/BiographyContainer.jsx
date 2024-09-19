import React from 'react'
import {Biography } from '../containers'

function BiographyContainer() {
  return (
    <div className='relative w-full py-20' id='biography'>
        <Biography />
        <div className='w-[500px] h-[500px] border-[1px] border__dark  absolute -left-72 -bottom-48 rounded-full' />
    </div>
  )
}

export default BiographyContainer
