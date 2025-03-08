import React from "react"
import myImg from '../assets/pic_me.jpeg'
import { MdDoubleArrow } from "react-icons/md";

const About = () => {
  return (
    <div className="px-10 mt-8 mb-4 items-center flex flex-col space-y-4 ml-4">
      <div className="flex items-center text-xl">
        <div className="space-mono-regular text-customTeal ">04. </div><div className="roboto-regular font-bold text-customTeal">What's Next?</div>
      </div>
      <div className="text-customLightBlue text-[35px] font-[700]">
        <p>Get In Touch</p> 
      </div>
      <div className="text-customGray text-[19px] py-6">
        My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you! Feel free to mail me about any relevant job updates.
      </div>
      <div className="py-4">
        <button id="mailbt" className="space-mono-regular bg-transparent border border-customTeal text-customTeal py-2 px-5 rounded">
          <a href="mailto:jalanansh2005@gmail.com">Mail Me</a>
        </button>
        
      </div>

    </div>
  )
};

export default About;