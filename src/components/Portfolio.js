import React from 'react'
import TitleBar from './TitleBar'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useEffect } from 'react';
import { Navigation, Pagination } from "swiper/modules";
import { FrontPort, BackPort } from "../data/portfolioData";
import { Link } from 'react-router-dom';
import { IoLanguageSharp } from "react-icons/io5";

export default function Portfolio() {

    let SwFront = () => {

        document.getElementById("sw-nv").style.marginLeft = "-115px"
        document.getElementById("sw-nv").style.animation = "switcher 0.5s"
        document.getElementById("front-sec").style.display = "block"
        document.getElementById("back-sec").style.display = "none"
        document.getElementById("front-sec").style.animation = "opening3 500ms"

        AnimOff()
    }

    let SwBack = () => {

        document.getElementById("sw-nv").style.marginLeft = "115px"
        document.getElementById("sw-nv").style.animation = "switcher 0.5s"
        document.getElementById("front-sec").style.display = "none"
        document.getElementById("back-sec").style.display = "block"
        document.getElementById("back-sec").style.animation = "opening3 500ms"
        AnimOff()
    }

    let AnimOff = () => {
        setTimeout(() => {
            document.getElementById("sw-nv").style.animation = "none";
        }, 500);
    }

    let [front, setFront] = useState(FrontPort)
    let [back, setBack] = useState(BackPort)


    let TechTemp = ({ tech }) => {
        return (
            <div className='tech-temp'>
                {tech}
            </div>
        )
    }

    let SpecTemp = ({ spec }) => {
        return (
            <div className='text-gry-300'>
                - {spec}
            </div>
        )

    }

    let SetSelectedButtonUrl = () => {
        if (selectedItem.url != '/') {
            return (
                <div>
                    <Link target='_blank' to={selectedItem.url}><button className='btn-url-pop'>Go to URL <i className='fa fa-external-link'></i></button></Link>
                </div>
            )
        }
        else {
            return null
        }
    }

    let SetSelectedButtonRepos = () => {
        if (selectedItem.repos != '/') {
            return (
                <div>
                    <Link target='_blank' to={selectedItem.repos}><button className='btn-url-pop'><i className='fa-brands fa-github pr-2'></i>Github Repos</button></Link>
                </div>
            )
        }
        else {
            return null
        }
    }
    const [selectedItem, setSelectedItem] = useState(null);
    selectedItem != null ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "scroll";

    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div className='relative opacity-0 mt-52' id='port'>

            <div className='flex justify-center'>
                <TitleBar title="Portfolios"></TitleBar>
            </div>
            <div className='flex justify-center'>
                <div>
                    <div className='text-center text-gray-100 text-5xl p-3 mt-4'>That's what I've done!</div>
                    <div className=' text-center text-gray-400 text-wrap p-5 mt-[-10px]'>
                        There are some of Portfolios that I got. Some real ones and some of them just as a demo to show my abilities.
                    </div>
                </div>
            </div>

            <div className='flex justify-center'>

                <div className='fb-switch'>
                    <button id='swfr' onClick={SwFront} className='fb-btn'>
                        WEB-APPS
                    </button>

                    <button id='swbk' onClick={SwBack} className='fb-btn'>
                        DESKTOP
                    </button>
                </div>

            </div>

            <div className='flex justify-center'>
                <div id='sw-nv' className='Switch-navigator'>

                </div>
            </div>

            <div className='flex justify-center mt-7' style={{ borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
                <div className='w-[85%] flex justify-between'>
                    <div className='text-xl pt-4'>
                        All Portfolios
                    </div>

                    <div className='flex'>
                        <button className='custom-prev-3'>
                            <i className='fa fa-angle-left'></i>
                        </button>
                        <button className='custom-next-3'>
                            <i className='fa fa-angle-right'></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className='porttemp-box flex justify-center mt-[-1px]'>


                <Swiper
                    slidesPerView={3}
                    modules={[Navigation, Pagination]}
                    spaceBetween={-2}
                    navigation={{
                        nextEl: ".custom-next-3",
                        prevEl: ".custom-prev-3",
                    }}
                    breakpoints={{
                        300: { slidesPerView: 1 },
                        450: { slidesPerView: 1 },
                        650: { slidesPerView: 2 },
                        1050: { slidesPerView: 3 }
                    }}

                    className='w-[85%] overflow-hidden cursor-grab' id='front-sec'>
                    <div className='h-[200px] relative' id='front-sec'>
                        {front.map(item => {
                            return <SwiperSlide id='port' className='port-temp mt-[-1px]'>
                                <img style={{ borderRadius: "2px" }} src={item.cover}></img>
                                <div className='mt-3'>

                                    <div className='flex justify-start gap-3 mx-1 mt-5'>
                                        <div className='w-2 rounded text-gray-300 bg-gray-300'>a</div>
                                        <div className='text-xl'>
                                            {item.title}
                                        </div>
                                    </div>

                                    <div className='h-30'>
                                        <div className='more-detail-port mt-2 text-gray-500 text-[12px] h-10 overflow-hidden'>
                                            {item.more}
                                        </div>

                                        <div>
                                            <div className='techs-box flex justify-start w-96 mt-3 gap-1 overflow-hidden'>
                                                {item.techs.map(tc => {
                                                    return <TechTemp tech={tc}></TechTemp>
                                                })}
                                                <div className='text-sm text-gray-600'> ...</div>
                                            </div>
                                        </div>

                                        <div className='gap-2'>
                                            <button onClick={() => setSelectedItem(item)} className='btn-port'>
                                                More Details <i className='fa fa-external-link-square'></i>
                                            </button>
                                        </div>
                                    </div>


                                </div>
                            </SwiperSlide>
                        })}
                    </div>
                </Swiper>

                <Swiper
                    slidesPerView={3}
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    navigation={{
                        nextEl: ".custom-next-4",
                        prevEl: ".custom-prev-4",
                    }}
                    breakpoints={{
                        300: { slidesPerView: 1 },
                        450: { slidesPerView: 1 },
                        650: { slidesPerView: 2 },
                        1050: { slidesPerView: 3 }
                    }}

                    className='w-[85%] overflow-hidden hidden cursor-grab' style={{ display: "none" }} id='back-sec'>
                    <div className='h-[200px] relative' id='front-sec'>
                        {back.map(item => {
                            return <SwiperSlide id='port' className='port-temp'>
                                <img src={item.cover}></img>
                                <div className='mt-3'>

                                    <div className='flex justify-start gap-3 mx-1 mt-5'>
                                        <div className='w-2 rounded text-gray-300 bg-gray-300'>a</div>
                                        <div className='text-xl'>
                                            {item.title}
                                        </div>
                                    </div>

                                    <div className='h-30'>
                                        <div className='more-detail-port mt-2 text-gray-500 text-[12px] h-10 overflow-hidden'>
                                            {item.more}
                                        </div>

                                        <div>
                                            <div className='techs-box flex justify-start w-96 mt-3 gap-1 overflow-hidden'>
                                                {item.techs.map(tc => {
                                                    return <TechTemp tech={tc}></TechTemp>
                                                })}
                                                <div className='text-sm text-gray-600'> ...</div>
                                            </div>
                                        </div>

                                        <div className='gap-2'>
                                            <button onClick={() => setSelectedItem(item)} className='btn-port'>
                                                More Details <i className='fa fa-external-link-square'></i>
                                            </button>
                                        </div>
                                    </div>


                                </div>
                            </SwiperSlide>
                        })}
                    </div>
                </Swiper>

            </div>


            {selectedItem && (
                <div className="flex justify-center w-[100%] transition-all" id='pop-up'>
                    <div className='Port-detail-box'>

                        <div className='flex justify-between'>

                            <div className='pop-anm flex gap-3 relative'>
                                <div className='w-2 rounded text-gray-300 bg-gray-300'>a</div>
                                <div className='text-2xl'>
                                    {selectedItem.title}
                                </div>
                            </div>

                            <div>
                                <button onClick={() => setSelectedItem(null)} className='ClosePopUp'><i className='fa fa-close'></i></button>
                            </div>

                        </div>

                        <Swiper
                            slidesPerView={3}
                            modules={[Navigation, Pagination]}
                            spaceBetween={10}
                            navigation={{
                                nextEl: ".custom-next-5",
                                prevEl: ".custom-prev-5",
                            }}
                            breakpoints={{
                                300: { slidesPerView: 1 },
                                450: { slidesPerView: 1 },
                                650: { slidesPerView: 2 },
                                1050: { slidesPerView: 2 }
                            }}
                            className='mt-3 pop-anm relative' style={{ animation: "opening 300ms" }}>

                            <SwiperSlide><img className='port-popImg relative' src={selectedItem.cover} style={{ animation: "opening 400ms" }} onClick={window.innerWidth > 1000 ?() => setSelectedImg(selectedItem.cover) : null}></img></SwiperSlide>
                            <SwiperSlide><img className='port-popImg relative' src={selectedItem.img1} style={{ animation: "opening 400ms" }} onClick={window.innerWidth > 1000 ?() => setSelectedImg(selectedItem.img1) : null}></img></SwiperSlide>
                            <SwiperSlide><img className='port-popImg' src={selectedItem.img2} onClick={window.innerWidth > 1000 ? () => setSelectedImg(selectedItem.img2) : null}></img></SwiperSlide>
                            <SwiperSlide><img className='port-popImg' src={selectedItem.img3} onClick={window.innerWidth > 1000 ?() => setSelectedImg(selectedItem.img3) : null}></img></SwiperSlide>
                            <SwiperSlide><img className='port-popImg' src={selectedItem.img4} onClick={window.innerWidth > 1000 ? () => setSelectedImg(selectedItem.img4) : null}></img></SwiperSlide>

                        </Swiper>



                        <div className='pop-anm justify-start relative gap-3'>
                            <div className='flex justify-start mt-2 gap-1' style={{ animation: "opening 500ms" }}>
                                <button className='custom-prev-5'>
                                    <i className='fa fa-angle-left'></i>
                                </button>
                                <button className='custom-next-5'>
                                    <i className='fa fa-angle-right'></i>
                                </button>
                            </div>

                            <div className='relative mt-4 flex gap-1' style={{ animation: "opening 500ms" }}>
                                {selectedItem.techs.map(tc => {
                                    return <TechTemp tech={tc}></TechTemp>
                                })}
                            </div>
                        </div>



                        <div className='pop-anm relative mt-3 text-gray-300 text-[15px]' style={{ animation: "opening 700ms" }}>
                            {selectedItem.more}
                        </div>

                        <div className='pop-anm relative text-[12px] mt-3 text-gray-400' style={{ animation: "opening 1s" }}>
                            {selectedItem.spec.map(sp => {
                                return <SpecTemp spec={sp}></SpecTemp>
                            })}
                        </div>

                        <div className='flex w-[100%] gap-2 justify-end fixed bottom-4' >
                            {SetSelectedButtonRepos()}

                            {SetSelectedButtonUrl()}
                        </div>

                    </div>
                </div>
            )}

            {selectedImg && (
                <div className='flex justify-center fixed top-[0%] bg-[var(--color7)] w-[100%] h-[100%]' style={{animation: "opening 500ms" ,backdropFilter: 'blur(10px)' ,zIndex: '1000'}} >
                    <div className='w-[70%] mt-14'>
                        <div className='flex justify-end'>
                            <button onClick={() => setSelectedImg(null)} className='ClosePopUp relative top-[10%]'><i className='fa fa-close'></i></button>
                        </div>
                        <img className='mt-2 rounded' src={selectedImg}></img>
                    </div>
                </div>
            )}

        </div>
    )
}
