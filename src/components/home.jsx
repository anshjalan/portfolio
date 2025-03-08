import React from "react"
import myImg from '../assets/pic_me.jpeg'

const Home = () => {
  return (
      <div className="flex flex-col mt-8 w-[80%] md:w-[85%] px-7 md:px-3 py-7 space-y-4 text-left roboto-regular">
        <div className="space-mono-regular text-customTeal text-[14px] tracking-widest">Hello, my name is</div>
        <div className=" text-customLightBlue text-[55px] font-extrabold">Ansh Jalan.</div>
        <div className=" text-customGray text-[55px] font-bold">Programmer & Developer &lt;/&gt; </div>
        <div className=" text-customGray text-[17px] py-2">I'm a 2nd year Computer Science & Engineering student at MANIT, Bhopal, currently fostering my hands in Web Development and Programming.<br /><br />
          I enjoy learning new skills and implementing them in real life!</div>
        {/* <div className="py-4">
          <a href="mailto:jalanansh2005@gmail.com">
            <button onClick="mailto:jalanansh2005@gmail.com" id="touchbt" className="space-mono-regular bg-transparent border border-customTeal text-customTeal py-2 px-5 rounded">
              Get In Touch
            </button>
          </a>
        </div> */}
      </div>
  )
};

export default Home;
