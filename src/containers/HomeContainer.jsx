import React from 'react'
import { BricksBg, DotsBg, VideoDisplay, ScrollDown } from '../components'
import { Header, Navbar } from '../containers'
import { FaS, FaStar } from "react-icons/fa6";
import vid1 from '../assets/vid1.mp4';

function HomeContainer() {
  return (
    <div className='relative w-full h-screen bg__light'>
      <div className='relative z-50'><Navbar /></div>
      <div className='relative z-50 h-[calc(100%-112px)]'><Header /></div>
      <VideoDisplay />
      <div className='w-96 h-96 border-[1px] border__dark  absolute -left-52 top-48 rounded-full' />
      <div className='w-[1px] h-96 bg__dark-blue absolute left-0 top-[600px] rounded-full rotate-45' />
      <div className='w-[1px] h-96 bg__dark-blue absolute left-0 top-[630px] rounded-full rotate-45' />
      
    </div>
  )
}

export default HomeContainer
