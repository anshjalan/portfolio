import React from "react"
import myImg from '../assets/Image.jpg'
import { MdDoubleArrow } from "react-icons/md";

const About = () => {
  return (
    <div className="w-full mx-auto mt-8 items-center flex flex-col space-y-10 md:flex-row md:space-x-4">
      <div className="flex flex-col w-[80%] md:w-[70%] px-7 md:px-3 py-7 space-y-4 text-left ">
        <div className="flex items-center text-2xl space-x-3">
          <div className="space-mono-regular text-customTeal ">01. </div><div className="roboto-regular font-bold text-customLightBlue">About Me</div><div className="w-[290px]"><hr /></div>
        </div>
        <div className="text-customGray text-[18px]">
          <p>Hello! I'm Ansh Jalan, from Ranchi, Jharkhand.</p> <br/>

          <p>I am a hard-working, time punctual, dedicated, goal-oriented individual with decent moral Values and Ethicates along with a highly enthusiastic, good communication skills, strong organizational skills, and meticulous attention to detail.</p> <br />

          <p>I am pursuing my Bachelors from <span className="text-customTeal">MANIT, Bhopal</span> in Computer Science and Engineering (2023-2027), my current GPA is <span className="text-customTeal">9.43</span> out of 10.</p> <br />

          <p>I am a <span className="text-customTeal">PR Excecutive at Indian Society for Technical Education</span>, MANIT Bhopal.</p> <br />

          <p>Here are a few of the other activities that I love to do!</p> 
        </div>
        <div className="flex text-customTeal space-x-20">
          <ul className="list-none space-y-2">
            <li className="flex items-center">
              <MdDoubleArrow className="mr-2" />Coding
            </li>
            <li className="flex items-center">
              <MdDoubleArrow className="mr-2" />Reading
            </li>
            <li className="flex items-center">
              <MdDoubleArrow className="mr-2" />Traveling
            </li>
          </ul>
          <ul className="list-none space-y-2">
            <li className="flex items-center">
              <MdDoubleArrow className="mr-2" />Problem Solving
            </li>
            <li className="flex items-center">
              <MdDoubleArrow className="mr-2" />Team Management
            </li>
            <li className="flex items-center">
              <MdDoubleArrow className="mr-2" />Mentoring
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className=" border-2 border-customTeal">
          <img src={myImg} alt="Profile photo" className="relative bottom-2 right-2 h-[350px] transition-opacity duration-300 ease-in-out opacity-80 hover:opacity-100" />
        </div>
      </div>
    </div>
  )
};

export default About;
