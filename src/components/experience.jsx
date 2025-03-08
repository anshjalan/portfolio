import React, { useState } from 'react';

const Experience = () => {

  const experienceData = [
    {
      title: 'Public Relations Executive ',
      company: 'Indian Society for Technical Education',
      dates: 'June 2024 - Present',
      description: [
        "Overseeing the promotion and collaboration work of society's events throughout the year.",
      ],
    }
    
  ];

  const [selectedExperience, setSelectedExperience] = useState(experienceData[0]);

  const handleExperienceSelect = (experience) => {
    setSelectedExperience(experience);
  };

  return (
    <div className="w-full py-12 mt-8 items-center flex flex-col space-y-10 ">
      <div className="flex items-center py-4 text-2xl space-x-3">
        <span className="space-mono-regular text-customTeal ">02.</span>
        <div className="roboto-regular font-bold text-customLightBlue">Positions of Responsibility</div>
        <div className="w-[100px]"><hr /></div>
      </div>

      <div className='flex flex-row space-x-8 text-left'>
        <div>
          <ul className='space-y-6 space-mono-regular text-customLightBlue border-l-2'>
            {experienceData.map((experience) => (
              <li key={experience.title}>
                <button className={`hover:text-customTeal hover:bg-[#172A45] ` } onClick={() => handleExperienceSelect(experience)}>
                  {experience.company}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {selectedExperience && (
            <div className='roboto-regular text-customLightBlue flex flex-col space-y-8'>
              <div className='flex flex-row '>
                <p >{selectedExperience.title} </p>
                <p className='text-customTeal'> @ {selectedExperience.company}</p>
              </div>
              <p className='space-mono-regular text-customLightBlue'>
                <strong>Dates:</strong> {selectedExperience.dates}
              </p>
              <ul>
                {selectedExperience.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
              {selectedExperience.link && (
                <a href={selectedExperience.link}>View {selectedExperience.link}</a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;