import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to="/" className='text__dark-blue font-semibold text-3xl max-lg:text-2xl text-end cursor-pointer border border-black'>
        <h1 className=''>Khaled<span className=''>.Akel</span></h1>
    </Link>
  )
}

export default Logo
