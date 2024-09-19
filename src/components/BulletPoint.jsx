import React from 'react';
import { FaCircle } from 'react-icons/fa6'; // Assuming you want to use the circle icon

function BulletPoint({ title, date, role, description }) {
  return (
      <div className="ml-4 w-full">
        <h1 className='text-red-700 font-bold text-4xl '>{title} 
          <span className='text-[11px] text__dark-blue ml-1 max-sm:hidden'>{date}</span></h1>
        <p className='text-[11px] text__dark-blue ml-1 sm:hidden '>{date}</p>
        <p className="mb-5 -mt-3 max-sm:-mt-1 max-sm:ml-1 text-[15px]">{role}</p>
        <p className='font-IBM-Mono max-sm:-mt-1'>{description}</p>
      </div>
  );
}

export default BulletPoint;
