import React from 'react'
import { Link } from 'react-router-dom'
import ScrollFix from '../ScrollFix'
import { ScrollToSkillsDesktop, ScrolltoTop, ScrollToPortDesktop, ScrollToAboutDesktop } from '../ScrollFunc'



let NavBtnTemplate = ({ title, scrfunc }) => {
    return (
        <button onClick={scrfunc} className='navBtn'>
            {title}
        </button>
    )
}

let OpenNav = () => {
    document.getElementById('sidebar').style.opacity = "1";
    document.getElementById('sidebar').style.animation = "actionOpen 200ms";
    document.getElementById('sidebar').style.marginRight = "15px";
    document.getElementById('sidebar').style.display = 'block'
    document.getElementById('display-page').style.filter = 'blur(3px)'
    document.body.style.overflow = "hidden"
}








export default function Navbar() {


    window.onscroll = function () { scrollFunction() };


    function scrollFunction() {
        if (window.innerWidth > 1000) {
            if (document.body.scrolltop > 100 || document.documentElement.scrollTop > 100) {
                document.getElementById('sidebar').style.opacity = "1";
                document.getElementById('sidebar').style.animation = "actionOpen 200ms";
                document.getElementById('sidebar').style.marginRight = "15px";
            }
            else {
                document.getElementById('sidebar').style.animation = "actionClose 1s";
                document.getElementById('sidebar').style.opacity = "0";
                document.getElementById('sidebar').style.marginRight = "-215px";
            }
        }
        else if (window.innerWidth < 1000) {
            document.getElementById('sidebar').style.animation = "actionClose 1s";
            document.getElementById('sidebar').style.opacity = "0";
            document.getElementById('sidebar').style.marginRight = "-215px";
        }


        if (document.body.scrolltop > 498 || document.documentElement.scrollTop > 498) {
            document.getElementById('skills').style.animation = 'opening 1s'
            document.getElementById('skills').style.opacity = "1";
        }
        if (window.innerWidth > 1000) {
            if (document.body.scrolltop > 1300 || document.documentElement.scrollTop > 1300) {
                document.getElementById('response').style.animation = 'opening 1s'
                document.getElementById('response').style.opacity = "1";
            }

        }
        else {
            if (document.body.scrolltop > 1336 || document.documentElement.scrollTop > 1336) {
                document.getElementById('response').style.animation = 'opening 1s'
                document.getElementById('response').style.opacity = "1";
            }
        }

        if (document.body.scrolltop > 2600 || document.documentElement.scrollTop > 2600) {
            document.getElementById("cleanPic").style.boxShadow = "2px 2px 100px var(--color5)";
        }


        if (window.innerWidth > 1000) {
            if (document.body.scrolltop > 3273 || document.documentElement.scrollTop > 3273) {
                document.getElementById("dynamic").style = "opacity: 1; animation: opening2 1s"
            }
        }
        else {
            if (document.body.scrolltop > 2617 || document.documentElement.scrollTop > 2617) {
                document.getElementById("dynamic").style = "opacity: 1; animation: opening2 1s"
            }
        }

        if (window.innerWidth > 1000) {
            if (document.body.scrolltop > 3400 || document.documentElement.scrollTop > 3400) {
                document.getElementById("fastbox1").style = "opacity: 1; animation: opening2 500ms"
                document.getElementById("fastbox2").style = "opacity: 1; animation: opening2 800ms"
            }
        }
        else {
            if (document.body.scrolltop > 3056 || document.documentElement.scrollTop > 3056) {
                document.getElementById("fastbox1").style = "opacity: 1; animation: opening2 500ms"
                document.getElementById("fastbox2").style = "opacity: 1; animation: opening2 800ms"
            }
        }


        if (window.innerWidth > 1000) {
            if (document.body.scrolltop > 3900 || document.documentElement.scrollTop > 3900) {
                document.getElementById('port').style.animation = 'opening 1s'
                document.getElementById('port').style.opacity = "1";
            }
        }
        else {
            if (document.body.scrolltop > 3800 || document.documentElement.scrollTop > 3800) {
                document.getElementById('port').style.animation = 'opening 1s'
                document.getElementById('port').style.opacity = "1";
            }
        }

        if (window.innerWidth > 1000) {
            if (document.body.scrolltop > 5700 || document.documentElement.scrollTop > 5700) {
                document.getElementById('prof-card').style.top = "0"
            }
        }
        else {
            if (document.body.scrolltop > 3800 || document.documentElement.scrollTop > 3800) {
                document.getElementById('prof-card').style.top = "0"
            }
        }


        if (window.innerWidth > 1000) {
            if (document.body.scrolltop < 5700 || document.documentElement.scrollTop < 5700) {
                document.getElementById('prof-card').style.top = "-100px"
            }
        }
        else {
            if (document.body.scrolltop > 3800 || document.documentElement.scrollTop > 3800) {
                document.getElementById('prof-card').style.top = "-100px"
            }
        }

        if (window.innerWidth > 1000) {
            if (document.body.scrolltop > 5182 || document.documentElement.scrollTop > 5182) {
                document.getElementById('about-box').style = 'opacity: 1; animation: opening 1s; position: relative;'

            }
            if (document.body.scrolltop > 5463 || document.documentElement.scrollTop > 5463) {
                document.getElementById('summary-box').style = 'opacity: 1; animation: opening 1s; position: relative;'
            }
            if (document.body.scrolltop > 5600 || document.documentElement.scrollTop > 5600) {
                document.getElementById('course-box').style = 'opacity: 1; animation: opening 1s; position: relative;'

            }
            if (document.body.scrolltop > 5700 || document.documentElement.scrollTop > 5700) {
                document.getElementById('work-box').style = 'opacity: 1; animation: opening 500ms; position: relative;'
                document.getElementById('lang-box').style = 'opacity: 1; animation: opening 1000ms; position: relative;'

            }
        }
        else {
            if (document.body.scrolltop > 4931 || document.documentElement.scrollTop > 4931) {
                document.getElementById('about-box').style = 'opacity: 1; animation: opening 1s; position: relative;'

            }
            if (document.body.scrolltop > 5463 || document.documentElement.scrollTop > 5463) {
                document.getElementById('summary-box').style = 'opacity: 1; animation: opening 1s; position: relative;'
            }
            if (document.body.scrolltop > 5600 || document.documentElement.scrollTop > 5600) {
                document.getElementById('course-box').style = 'opacity: 1; animation: opening 1s; position: relative;'

            }
            if (document.body.scrolltop >6374 || document.documentElement.scrollTop > 6374) {
                document.getElementById('work-box').style = 'opacity: 1; animation: opening 500ms; position: relative;'
                document.getElementById('lang-box').style = 'opacity: 1; animation: opening 1000ms; position: relative;'

            }
        }

        console.log(document.documentElement.scrollTop)
    }


    return (
        <div className='navbar' id='navbar'>
            <div className='logo'>
                <Link onClick={ScrollFix} to='/'><img className='w-20' src='../images/Logos/capslock.png'></img></Link>
                <button onClick={OpenNav} className='OpenSidebar'>
                    <i className='fa fa-navicon'></i>
                </button>
            </div>
            <div className='navRow flex justify-start gap-8 mx-10 mt-2'>
                <NavBtnTemplate title={'HOME'} scrfunc={ScrolltoTop}></NavBtnTemplate>
                <NavBtnTemplate title={'SKILLS'} scrfunc={ScrollToSkillsDesktop}></NavBtnTemplate>
                <NavBtnTemplate title={'PORTFOLIOS'} scrfunc={ScrollToPortDesktop}></NavBtnTemplate>
                <NavBtnTemplate title={'ABOUT-ME'} scrfunc={ScrollToAboutDesktop}></NavBtnTemplate>
                <NavBtnTemplate title={'CONTACT'}></NavBtnTemplate>
            </div>
        </div>
    )
}
