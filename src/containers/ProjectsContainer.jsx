import React from 'react'
import { Projects } from '../containers'

function ProjectsContainer() {
  return (
    <div className='w-full  flex items-center flex-col gap-y-24 pt-48'>
        <div className='w-[80%] mx-auto max-lg:w-[86%] h-1 bg__dark-blue rounded-full' />
        <Projects />
    </div>
  )
}

export default ProjectsContainer
