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
          company='SoftImpact' 
          role='Software Engineer Intern' 
          date='June2024 -Present' 
          description='Collaborated with a cross-functional team to implement AWS Lambda for serverless processing, reducing infrastructure costs by 25% and worked on setting up event-driven architectures using Lambda triggers, which now handle over 100,000 requests per day with minimal downtime.
Assisted in integrating Amazon S3 with Django APIs, focusing on optimizing data transfer and file storage.
Worked alongside senior engineers to develop middleware that improved large file uploads.
Collaborated on automating data pipelines with Apache Spark, optimizing ETL workflows and reducing processing through efficient partitioning strategies.
.'
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
          company='KYRA Group LLC' 
          role='Full-Stack Developer Intern' 
          date='May2023 - December2023' 
          description='Collaborated closely with UX designers on developing a platform used by 7,000+ stakeholders, with React.js
Assisted with the mobile team to add features like offline caching and background syncing, with React-Native.
Supported backend improvements by containerizing services using Docker, which enhanced CI/CD pipelines. 
Helped integrate Redis caching into the Node.js application, reducing the database query load by 35% and improving response times. 
.'
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
          company='Coming Soon' 
          role='' 
          date='' 
          description=''

          num='3.'
          hovered={hoveredDiv === 'div3'}
        />
      </div>
    </div>
  );
}

export default InlineSlider;