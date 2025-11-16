import React from 'react'
import ScrollFix from '../ScrollFix'
import { ScrollToPortDesktop, ScrollToSkillsDesktop, ScrolltoTop ,ScrollToAboutDesktop } from '../ScrollFunc'

export default function Sidebar() {

    let SidebarBtn = ({icon ,alt ,title ,scrollFunc}) => {
        return (
            <div className='sidebar-icon' onClick={scrollFunc}>
               <i className={icon} alt={alt}></i> 
               <div id='title-icon' className='text-[10px] mt-[-3px]'>{title}</div>
            </div>
        )
    }

    let CloseNav = () => {
        document.getElementById("sidebar").style.opacity = "0"
        document.getElementById("sidebar").style.marginRight = "-215px"
        document.getElementById('display-page').style.filter = 'none'
        document.body.style.overflowY = "scroll"
    }

 return (
    <div id='sidebar' className='sidebar'>
        <SidebarBtn icon={"fa fa-home"} alt={"HOME"} title={"Home"} scrollFunc={ScrolltoTop}></SidebarBtn>
        <SidebarBtn icon={"fa fa-code"} alt={"SKILLS"} title={"Skills"} scrollFunc={ScrollToSkillsDesktop}></SidebarBtn>
        <SidebarBtn icon={"fa fa-window-maximize"} alt={"PORTFOLIOS"} title={"Portfolio"} scrollFunc={ScrollToPortDesktop}></SidebarBtn>
        <SidebarBtn icon={"fa fa-user"} alt={"ABOUT"} title={"About me"} scrollFunc={ScrollToAboutDesktop}></SidebarBtn>
        <SidebarBtn icon={"fa fa-phone"} alt={"CONTACT"} title={"Contact"}></SidebarBtn>
        <button onClick={CloseNav} className='closeNavbtn'><i className='fa fa-close'></i></button>
    </div>
  )
}
