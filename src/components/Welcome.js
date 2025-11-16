import React, { useState } from 'react'
import TitleBar from './TitleBar'
import { useEffect } from 'react';
import { ScrollToPortDesktop } from '../ScrollFunc';
import SplitText from "./SplitText";
// --------------------------------------
import { TbBrandCSharp } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import ProgressTemp from './ProgressTemp';
import { CgWebsite } from "react-icons/cg";
import { DiMsqlServer } from "react-icons/di";
import { DiSqllite } from "react-icons/di";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { GrLanguage } from "react-icons/gr";
import { FaBootstrap } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { FaStackOverflow } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { LuFileJson } from "react-icons/lu";
import { FaGitAlt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

export default function Welcome() {

  const Langs = [
    { id: 0, name: "React Js", icon: <FaReact /> },
    { id: 1, name: "JS", icon: <FaJs /> },
    { id: 2, name: "HTML", icon: <FaHtml5 /> },
    { id: 3, name: "CSS", icon: <FaCss3 /> },
    { id: 4, name: "Tailwind", icon: <RiTailwindCssFill /> },
    { id: 5, name: "Django", icon: <SiDjango /> },
    { id: 6, name: "C#", icon: <TbBrandCSharp /> },
    { id: 7, name: "Python", icon: <FaPython /> },
    { id: 8, name: "Figma", icon: <FaFigma /> },
    { id: 9, name: "Git", icon: <FaGit /> },
    { id: 10, name: "Github", icon: <FaGithub /> },
    { id: 12, name: "Bootstrap", icon: <FaBootstrap /> },
    { id: 13, name: "Visual Studio", icon: <DiVisualstudio /> },
    { id: 14, name: "SQL", icon: <DiMsqlServer /> },
    { id: 15, name: "StackOverflow", icon: <FaStackOverflow /> },
    { id: 16, name: "Vercel", icon: <IoLogoVercel /> },
    { id: 17, name: "JSON", icon: <LuFileJson /> },
    { id: 18, name: "GIT", icon: <FaGitAlt /> },
    { id: 19, name: "VSCode", icon: <VscVscode /> },
  ];

  let [welScale, setWelScale] = useState(100);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY < 1000 ? setWelScale(100 - (window.scrollY / 20)) : setWelScale(100)
    };
    window.addEventListener("scroll", handleScroll);
    while (welScale < 0) { document.getElementById("wel").style.opacity = "0" }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  let [Align, setAlign] = useState("left")
  useEffect(() => {
    window.innerWidth > 1000 ? setAlign("left") : setAlign("center")
  })



  return (
    <div className='welcome h-[600px] mt-[70px]' id='wel' style={{ transform: `scale(${welScale}%)` }}>
      <div className='flex justify-center border-t border-b border-[var(--border-color)]'>
        <div className='w-[90%] wel-box border border-[var(--border-color)] py-8 px-10 mt-[-1px]'>
          <div className='wel-title flex'>
            <TitleBar title="There you are! Welcome!"></TitleBar>
          </div>

          <div className='wel-text w-[50%]'>
            <SplitText
              text="Turn your idea into Reality!"
              className="welcometext text-7xl font-semibold mt-4"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign={Align}
            />

            <div className='scroll-text text-[var(--icon-color)] mt-2'>
              Scroll down to learn more about me and my capabilities
            </div>

            <div className='flex gap-2 mt-2' style={window.innerWidth > 1000 ? {justifyContent: "start"} : {justifyContent: "center"}}>
              <button style={window.innerWidth < 1000 ? {fontSize: "12px"} : null} className='btn-light'>Who am I? <i className='fa fa-arrow-right transition-all'></i></button>
              <button style={window.innerWidth < 1000 ? {fontSize: "12px"} : null} onClick={ScrollToPortDesktop} className='btn-dark'>Who I've done <i className='fa fa-arrow-right transition-all'></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
