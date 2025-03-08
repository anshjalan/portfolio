import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMediaIcons(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="flex flex-row items-center justify-between w-full h-[100px] bg-customDarkBlue border-b-2 border-customDarkBlue shadow-2xl">
      <div className="w-[40px] ml-[50px]">        
        <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
          <title>Logo</title>
          <g transform="translate(-8.000000, -2.000000)">
            <g transform="translate(11.000000, 5.000000)">
              <polygon id="Shape" fill="none" stroke="#64FFDA" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" points="39 0 0 22 0 67 39 90 78 68 78 23"></polygon>
            </g>
          </g>
          <text x="28" y="65" fill="#64FFDA" fontSize="50px" fontFamily="Consolas, serif">A</text>
        </svg>
      </div>


      <div className="pr-6 flex items-center">
        <ul className={`text-customLightBlue text-[15px] font-sf-mono font-normal md:flex md:space-x-7 ${showMediaIcons ? 'flex flex-col items-center space-y-10 bg-customBlue2 pt-[150px] pb-6 pr-6 pl-6 w-[40%] h-screen absolute top-[100px] right-0' : 'hidden md:flex'}`}>
          <li className="flex items-center hover:p-1 transition ease-in duration-200">
            <p className="mr-2 text-customTeal">01.</p>
            <ScrollLink to="about" smooth={true} duration={500} className="hover:text-customTeal transition ease-in duration-250 cursor-pointer">About</ScrollLink>
          </li>
          <li className="flex items-center hover:p-1 transition ease-in duration-200">
            <p className="mr-2 text-customTeal">02.</p>
            <ScrollLink to="experience" smooth={true} duration={500} className="hover:text-customTeal transition ease-in duration-250 cursor-pointer">Experience</ScrollLink>
          </li>
          <li className="flex items-center hover:p-1 transition ease-in duration-200">
            <p className="mr-2 text-customTeal">03.</p>
            <ScrollLink to="education" smooth={true} duration={500} className="hover:text-customTeal transition ease-in duration-250 cursor-pointer">Projects</ScrollLink>
          </li>
          <li className="flex items-center hover:p-1 transition ease-in duration-200">
            <p className="mr-2 text-customTeal">04.</p>
            <ScrollLink to="contact" smooth={true} duration={500} className="hover:text-customTeal transition ease-in duration-250 cursor-pointer">Contact</ScrollLink>
          </li>
          <li className="flex items-center hover:p-1 transition ease-in duration-200">
            <button id="resumebt" className="bg-transparent border border-customTeal text-customTeal py-2 px-5 rounded"><a href="https://drive.google.com/drive/folders/1CVTnZTN-Hhne2kkNW3y9PGYqxutiZGcd?usp=sharing">Resume</a></button>
          </li>
        </ul>

        <div className="menu-hamburger ml-4 md:hidden" onClick={() => setShowMediaIcons(!showMediaIcons)}>
          <TiThMenu className="text-3xl text-customTeal" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
