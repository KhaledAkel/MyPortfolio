import React from 'react'
import { Link } from 'react-router-dom'

function NavLinks() {
  return (
    <div>
        <Link to="/my-projects">
            <h1 className='text-white'>My Projects</h1>
        </Link>
        <Link to="/my-skills">
            <h1 className='text-white'>My Skills</h1>
        </Link>
        <Link to="/contact-me">
            <h1 className='text-white'>Contact Me</h1>
        </Link>
      
    </div>
  )
}

export default NavLinks
