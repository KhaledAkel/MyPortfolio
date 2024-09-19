// InlineSlider.jsx
import React, { useState } from 'react';
import SliderContent from '../components/SliderContent';

function InlineSlider() {
  const [hoveredDiv, setHoveredDiv] = useState(null);

  const handleMouseEnter = (divId) => {
    setHoveredDiv(divId);
  };

  const handleMouseLeave = () => {
    setHoveredDiv(null);
  };

  return (
    <div className='h-[500px] w-full flex  rounded-2xl shadow-2xl'>
      <div 
        className={`shadow-lg rounded-tl-2xl rounded-bl-2xl transition-all duration-300 
                    ${hoveredDiv && hoveredDiv !== 'div1' ? 'inline-slider-shrink' : 'inline-slider-stretch'}`}
        id='div1'
        onMouseEnter={() => handleMouseEnter('div1')}
        onMouseLeave={handleMouseLeave}
      >
        <SliderContent 
          company='Google' 
          role='Software Engineer' 
          date='2020 - 2021' 
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          num='1.'
          hovered={hoveredDiv !== 'div2' && hoveredDiv !== 'div3'}
        />
      </div>
      <div 
        className={`shadow-lg transition-all duration-300
                    ${hoveredDiv === 'div2' ? 'inline-slider-stretch' : 'inline-slider-shrink'}`}
        id='div2'
        onMouseEnter={() => handleMouseEnter('div2')}
        onMouseLeave={handleMouseLeave}
      >
        <SliderContent 
          company='SoftImpact' 
          role='Frontend Developer' 
          date='2019 - 2020' 
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          num='2.'
          hovered={hoveredDiv === 'div2'}
        />
      </div>
      <div 
        className={`shadow-lg rounded-tr-2xl rounded-br-2xl transition-all duration-300
                    ${hoveredDiv === 'div3' ? 'inline-slider-stretch' : 'inline-slider-shrink'}`}
        id='div3'
        onMouseEnter={() => handleMouseEnter('div3')}
        onMouseLeave={handleMouseLeave}
      >
        <SliderContent 
          company='Kyra Group' 
          role='Backend Developer' 
          date='2018 - 2019' 
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

          num='3.'
          hovered={hoveredDiv === 'div3'}
        />
      </div>
    </div>
  );
}

export default InlineSlider;