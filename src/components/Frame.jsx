import React from 'react'

function Frame({child}) {
  return (
    <div className='bg-white p-[10px]'>
        <div className='rounded-[32px'>
          {child}
        </div>
        <div className='fixed w-screen h-screen left-0 top-0 bg-transparent  border-[10px] border-white rounded-[32px] z-50'/>
        <div className='fixed w-screen h-screen left-0 top-0 bg-transparent  border-[10px] border-white z-50'/>
      </div>
  )
}

export default Frame
