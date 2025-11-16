import React from 'react'
import TitleBar from './TitleBar'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useState, useEffect } from 'react';
// icon import -->
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
import { ScrollToPortDesktop, ScrollToSkillsDesktop } from '../ScrollFunc';

export default function Skills() {



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
        { id: 11, name: "Bootstrap", icon: <FaBootstrap /> },
        { id: 12, name: "SQL", icon: <DiMsqlServer /> },
    ];

    const presentFront = [
        { id: 0, name: "React Js", icon: <FaReact />, pr: "60", wid: "60%" },
        { id: 1, name: "JS", icon: <FaJs />, pr: "45", wid: "45%" },
        { id: 2, name: "HTML", icon: <FaHtml5 />, pr: "100", wid: "100%" },
        { id: 3, name: "CSS", icon: <FaCss3 />, pr: "100", wid: "100%" },
        { id: 4, name: "Tailwind", icon: <RiTailwindCssFill />, pr: "80", wid: "80%" },
        { id: 5, name: "Bootstrap", icon: <FaBootstrap />, pr: "60", wid: "60%" },

    ]

    const presentBack = [
        { id: 0, name: "C# WinForm", icon: <TbBrandCSharp />, pr: "80", wid: "80%" },
        { id: 1, name: "Django", icon: <SiDjango />, pr: "0", wid: "0%" },
        { id: 2, name: "Python", icon: <FaPython />, pr: "25", wid: "25%" },

    ]

    const presentGeneral = [
        { id: 0, name: "English", icon: <GrLanguage />, pr: "80", wid: "80%" },
        { id: 1, name: "Git", icon: <FaGit />, pr: "55", wid: "55%" },
        { id: 2, name: "Github", icon: <FaGithub />, pr: "75", wid: "75%" },
        { id: 3, name: "SQL", icon: <DiSqllite />, pr: "30", wid: "30%" },
        { id: 4, name: "SQL Server", icon: <DiMsqlServer />, pr: "30", wid: "30%" },
        { id: 5, name: "Microsoft Office", icon: <PiMicrosoftExcelLogoFill />, pr: "90", wid: "90%" },
    ]

    let [front, setFront] = useState(presentFront);
    let [back, setBack] = useState(presentBack);
    let [gen, setGen] = useState(presentGeneral);

    const [rotation, setRotation] = useState(0);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const rotate = window.scrollY / 3.5;
            setRotation(rotate);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 1300 ? setOffset((window.scrollY - 1300) / 2.7) : setOffset(0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);




    return (
        <div className='relative' style={{ opacity: 0 }} id='skills'>
            <div className='flex justify-center'>
                <TitleBar title="Skills"></TitleBar>
            </div>
            <div className='text-4xl mt-5 flex justify-center text-center'>
                My Skills and Capabillities
            </div>

            <div className='skill-sw-box flex justify-center mt-5'>
                <div className="w-[100%] justify-center pt-10">
                    <div style={{ borderBottom: "1px solid var(--border-color)" }} className=''>
                        <Swiper
                            slidesPerView={10}
                            spaceBetween={-5}
                            modules={[Navigation, Autoplay]}
                            navigation={{
                                nextEl: ".custom-next-1",
                                prevEl: ".custom-prev-1",
                            }}
                            speed={3000}
                            loop={true}
                            freeMode={true}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                                waitForTransition: true,
                            }
                            }
                            breakpoints={{
                                240: { slidesPerView: 3 },

                                380: { slidesPerView: 3 },
                                448: { slidesPerView: 3 },
                                500: { slidesPerView: 3 },
                                640: { slidesPerView: 6 },
                                800: { slidesPerView: 8 },
                                1100: { slidesPerView: 12 },

                            }}

                            className="Swiper gap-0">

                            {Langs.map((p) => (
                                <SwiperSlide className='swiper-slide' key={p.id}>
                                    <div className='lang-box text-center'>
                                        <div className='text-4xl mt-2 flex justify-center'>
                                            {p.icon}
                                        </div>
                                        <div className='opacity-0 transition-all text-[10px] mt-2'>
                                            {p.name}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>


                    <div className='flex justify-center' style={{borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)"}}>
                        <div className='w-[85%] flex justify-between'>
                            <div className='text-xl pt-4'>
                                Complitions
                            </div>

                            <div className='flex'>
                                <button className='custom-prev-6'>
                                    <i className='fa fa-angle-left'></i>
                                </button>
                                <button className='custom-next-6'>
                                    <i className='fa fa-angle-right'></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex w-[100%] justify-center mt-[-1px]'>
                        <Swiper
                            spaceBetween={0}
                            modules={[Navigation]}
                            navigation={{
                                nextEl: ".custom-next-6",
                                prevEl: ".custom-prev-6",
                            }}
                            breakpoints={{
                                350: {
                                    slidesPerView: 1,
                                },
                                400: {
                                    slidesPerView: 1,
                                },
                                448: {
                                    slidesPerView: 1,
                                },
                                500: { slidesPerView: 1 },
                                640: { slidesPerView: 2 },
                                1300: { slidesPerView: 2 },
                            }}
                            speed={300}
                            className="Swiper2 gap-0">


                            <SwiperSlide className='w-[100%]'>
                                <div className='progress-box'>
                                    <div className='prog-title flex gap-3 pb-3'>
                                        <CgWebsite size={30} /> <div className='text-lg'>FRONT-END</div>
                                    </div>
                                    <div className=' flex justify-center'>
                                        <div className='w-[100%]'>
                                            {front.map((fr) => {
                                                return <ProgressTemp key={fr.id} name={fr.name} icon={fr.icon} presentage={fr.pr} wid={fr.wid}></ProgressTemp>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='progress-box' >
                                    <div className='prog-title flex gap-3 border-b-2 border-[var(--color3)] pb-3'>
                                        <FaCodeFork size={30} /> <div className='text-lg'>BACK-END</div>
                                    </div>
                                    <div className='w-[100%] flex justify-center'>
                                        <div className='w-[100%]'>
                                            {back.map((bk) => {
                                                return <ProgressTemp key={bk.id} name={bk.name} icon={bk.icon} presentage={bk.pr} wid={bk.wid}></ProgressTemp>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='progress-box'>
                                    <div className='prog-title flex gap-3 border-b-2 border-[var(--color3)] pb-3'>
                                        <FaBook size={30} /> <div className='text-lg'>GENERAL</div>
                                    </div>
                                    <div className='w-[100%] flex justify-center'>

                                        <div className='w-[100%]'>

                                            {gen.map((g) => {
                                                return <ProgressTemp key={g.id} name={g.name} icon={g.icon} presentage={g.pr} wid={g.wid}></ProgressTemp>
                                            })}

                                        </div>
                                    </div>

                                </div>

                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>

            </div>

            <div id='response' className='response opacity-0 relative'>


                <div className='flex justify-center pt-48'>

                    <div className='text-wrap'>
                        <div className='flex justify-center'>
                            <i className='fa fa-object-group fa-3x text-gray-300 text-center'></i>
                        </div>

                        <div id='ccode-title' className='text-5xl p-3 text-center mt-4'>
                            RESPONSIVE AS FU@K
                        </div>

                    </div>


                </div>

                <div className='flex justify-end'>
                    <div className=''>
                        <i style={{ transform: `rotate(${rotation}deg)` }} className='fa-brands fa-js fa-5x mx-20 grid-icon'></i>
                    </div>
                </div>

                <div id='CCode-box' className='flex justify-center mt-9'>
                    <div className='cleanCode-box'>
                        <img style={{ transform: `translateY(-${offset}px)`, zIndex: 10 }} className='w-[850px] p-3' src='../images/Posters/responsive-3.png'></img>
                    </div>
                </div>

                <div className='flex justify-end mt-[-200px] mx-32 '>
                    <div className='mt-[-100px]' style={{ zIndex: -1 }}>
                        <i style={{ transform: `rotate(${rotation}deg)` }} className='fa-brands fa-css3 fa-5x mx-20 grid-icon'></i>
                    </div>
                    <div className='ml-[350px]' style={{ zIndex: 1 }} id='py'>
                        <i style={{ transform: `rotate(${rotation}deg)` }} className='fa-brands fa-python fa-5x mx-20 grid-icon'></i>
                    </div>
                </div>

                <div className='flex justify-start mt-32'>
                    <div className=''>
                        <i style={{ transform: `rotate(${rotation}deg)` }} className='fa-brands fa-react fa-5x mx-20 grid-icon'></i>
                    </div>
                </div>


                <div className='flex justify-center'>

                    <div className='text-wrap'>
                        <div className='flex justify-center'>
                            <i className='fa fa-brush fa-3x text-gray-300 text-center'></i>
                        </div>

                        <div id='ccode-title' className='text-5xl p-3 text-center mt-4'>
                            CLEAN AS YOUR SOUL
                        </div>

                    </div>

                </div>

                <div className='flex justify-center'>
                    <div className=''>
                        <i style={{ transform: `rotate(${rotation}deg)` }} className='fa-brands fa-html5 fa-5x mx-[-200px] grid-icon'></i>
                    </div>
                </div>

                <div id='CCode-box' className='flex justify-center' >
                    <div className='cleanCode-box p-3'>
                        <img id='cleanPic' style={{ transform: `translateY(-${offset - 350}px)` }} className='w-[1000px] rounded-3xl' src='../images/Posters/cleanCode.png'></img>
                    </div>
                </div>

            </div>

            <div className='flex justify-center border-t-[1px] border-[var(--border-color)]'>
                <div className='w-[85%] mt-[-1px] border-[1px] border-[var(--border-color)]'>

                    <div id='dynamic' className='relative opacity-0 first-CodeRow flex border-[1px] border-[var(--border-color)] mt-[-1px]'>

                        <div className='fcr-text w-[50%] pt-12 px-7 align-middle'>
                            <div className='text-7xl text-gray-400'>
                                ،،
                            </div>
                            <div className='text-5xl'>
                                Dynamic
                            </div>
                            <div className='text-gray-400 mt-3'>
                                Websites will be created using a lot of 'useState(s)' and ... so they are dynamic and easy to edit
                            </div>
                            <div className='btn-fixed cursor-pointer hover:no-underline underline mt-10 text-gray-400 transition-all' onClick={ScrollToSkillsDesktop}>
                                MORE DETAILS ABOUT MY SKILLS <i className='fa fa-arrow-up text-gray-500'></i>
                            </div>
                        </div>

                        <img className='w-[60%] m-0' src='../images/Posters/dynamic.png'></img>

                    </div>

                    <div className='flex Second-CodeRow border-[1px solid var(--border-color)] mt-[-1px]'>

                        <div id='fastbox1' className='relative opacity-0 fast-box w-[40%] border-r-[1px] border-[var(--border-color)] p-7 mt-[-1px]'>
                            <div className='text-3xl'>
                                <i className='fa fa-bolt text-gray-400'></i> Fast Fast Fast !
                            </div>

                            <div className='text-gray-400 mt-5 text-[13px]'>
                                Developing websites and applications using world latest method to optimize for a great performance
                            </div>

                            <div className='btn-fixed cursor-pointer hover:no-underline underline mt-10 text-gray-400 transition-all' onClick={ScrollToPortDesktop}>
                                JUMP TO PORTFOLIOS <i className='fa fa-arrow-down text-gray-500'></i>
                            </div>

                        </div>

                        <div id='fastbox2' className='relative opacity-0 fast-box w-[70%] border-r-[1px] border-[var(--border-color)] p-7 mt-[-1px]'>
                            <div className='text-3xl'>
                                <i className='fa fa-cube text-gray-400'></i> Creative Design
                            </div>

                            <div className='text-gray-400 mt-5 text-[13px]'>
                                Creative and great design made by specific tools and the power of mind
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
