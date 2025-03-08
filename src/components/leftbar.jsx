import React from "react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiCodeforces, SiCodechef } from "react-icons/si";

const LeftBar = () => {
  return (
    <div className="fixed h-full top-[414px] pl-4">
      <div className="flex flex-col items-center space-y-[50px]">
        <div className="flex flex-col space-y-4 text-3xl text-customTeal">
          <a className="hover:py-2" href="https://github.com/anshjalan"><FaGithub /></a>
          <a className="hover:py-2" href="https://codeforces.com/profile/anshjalan_"><SiCodeforces /></a>
          <a className="hover:py-2" href="https://www.codechef.com/users/anshjalan"><SiCodechef /></a>
          <a className="hover:py-2" href="https://www.linkedin.com/in/anshjalan"><FaLinkedin /></a>
          <a className="hover:py-2" href="https://www.instagram.com/anshjalan_"><FaInstagram /></a>
        </div>
        <div>
          <hr className="w-[100px] border-t-2 border-customGray rotate-90" />
        </div>
      </div>
    </div>
  )
};

export default LeftBar;
