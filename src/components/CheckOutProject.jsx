import React from 'react';
import { Link } from 'react-router-dom';
import { VscArrowRight } from 'react-icons/vsc';

function CheckOutProject() {
  return (
    <Link className='max-w-[600px] min-h-20 bg__dark-blue border-[1px] border__dark border-opacity- rounded-md relative flex justify-between items-center px-10 text-white cursor-pointer group z-20 gap-x-4'>
      <h1 className='text-3xl relative z-20'>Check Out My Latest Projects</h1>
      <VscArrowRight className='text-4xl relative z-20' />
      <div className='w-full absolute h-0 bg-red-800 opacity-10 z-10 left-0 bottom-0 group-hover:h-full duration-300 transition-all ease-in-out' />
    </Link>
  );
}

export default CheckOutProject;
