import React from 'react';

function Testimonial({ name, title, image, testimonial }) {
  return (
    <div className='max-w-[420px] h-[360px] rounded-lg gap-y-1 overflow-hidden inline-block shadow-xl ml-6 '>
      <div className='w-full px-3 py-6 flex gap-x-2 items-center '>
        <div className='w-20 h-20 rounded-full'>
          <img className='w-full h-full object-cover rounded-full' src={image} alt='Testimonial' />
        </div>
        <div>
          <div className='text-lg font-bold text-start'>{name}</div>
          <div className='text-sm text-start'>{title}</div>
        </div>
      </div>
      <div className='w-full'>
        <div className='text-sm p-3 whitespace-normal text-start'>{testimonial}</div>
      </div>
    </div>
  );
}

export default Testimonial;
