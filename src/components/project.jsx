import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa";

const projectData = [
  {
    title: 'Shopping Cart',
    githubL: 'https://github.com/anshjalan/shopping-webapp',
    extLink: 'https://shopping-webapp-two.vercel.app/',
    description: 'A responsive webpage that allows users to add and remove items from their cart',
    tech: [
      'ReactJs',
      'TailwindCSS',
    ],
  },

  {
    title: 'Random Password Generator',
    githubL: 'https://github.com/anshjalan/simple-password-generator',
    extLink: 'https://anshjalan.github.io/simple-password-generator/',
    description: 'It generates random password based on user-defined length and character sets. ',
    tech: [
      'HTML', 
      'CSS',
      'Javascript',
    ],
  },

  {
    title: 'Tic Tac Toe ',
    githubL: 'https://github.com/anshjalan/tic-tac-toe',
    extLink: 'https://anshjalan.github.io/tic-tac-toe/',
    description: 'A sleek and interactive Tic-Tac-Toe website for fun, strategy, and endless gameplay!',
    tech: [
      'HTML',
      'CSS',
      'JavaScript'
    ],
  }

];

const Projects = () => {
  return (
    <div className="px-10 mt-8 mb-4 flex flex-col space-y-4 ml-4">
      <div className="flex space-x-2 items-center text-xl">
        <div className="space-mono-regular text-customTeal ">03. </div><div className="roboto-regular font-bold text-customTeal">Some Things I've Built</div><div className="w-[290px]"><hr /></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-y-3">
        {projectData.map((project, index) => (
          <div key={index} className="bg-customBlue2 min-h-[350px] rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex justify-between items-center mb-4 top-1">
              <div className="text-customTeal">
                <FaRegFolderOpen size={40} />
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-2 text-customLightBlue">
                  <a className="hover:text-customTeal" href={project.githubL} target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                  </a>
                  {project.extLink && (
                    <a className="hover:text-customTeal" href={project.extLink} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <h3 className="py-4 text-2xl font-bold text-customLightBlue hover">{project.title}</h3>

            <p className="py-4 text-gray-400 text-sm">{project.description}</p>
            <div className="flex flex-wrap mt-4 bottom-1">
              {project.tech.map((tech, index) => (
                <span key={index} className="px-3 py-1 mr-2 text-xs font-medium text-customTeal space-mono-regular">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Projects;