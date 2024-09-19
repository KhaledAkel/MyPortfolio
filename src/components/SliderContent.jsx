import React from 'react';

function SliderContent({ company, role, date, description, num, hovered }) {
  console.log('Hovered:', hovered); // Debugging the hovered state

  return (
    <div className='w-full h-full p-5 max-sm:px-1 flex flex-col justify-between overflow-clip'>
      {/* Displaying the numbering at the top */}
      <div className='text-2xl w-full text-center font-bold'>{num}</div>
      {/* Content that slides in on hover */}
      <div
        className={`transition-all ease-in-out  overflow-hidden ${
          hovered ? 'w-full' : 'w-0'
        } mt-5`}
      >
        <div className='w-full'>{description}</div>
        <div className='w-full font-bold'>{role}</div>
        <div className='w-full text-red-700 text-[10px] mb-20'>{date}</div>
      </div>
      <div className='w-full max-2xl:text-2xl max-lg:text-lg max-xl:text-xl text-3xl font-bold max-sm:text-[12px]'>
        {company}
      </div>
    </div>
  );
}

export default SliderContent;
