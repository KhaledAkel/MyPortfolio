import React from 'react';
import { Testimonial } from '../components';
import { testimonials } from '../data/Testimonials';

function Testimonials() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className='text-[200px] font-bold w-full text-center
                      max-xl:text-[170px] max-lg:text-[130px] max-md:text-[100px] max-sm:text-[60px]'>Testimonials
                      <span className='text-red-700'>.</span></div>
      <div className='w-full h-full overflow-x-scroll whitespace-nowrap text-center py-12'>
        {/* Testimonial list */}
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
