import React, { useState } from 'react'
import ProfCard from './profCard'
import TitleBar from './TitleBar'
import { courses } from '../data/courseData'
import servs from '../data/servicesData'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";


import { CgWebsite } from "react-icons/cg";
import { FaCodeFork } from "react-icons/fa6";
import { SlScreenDesktop } from "react-icons/sl";



export default function About() {


  let TechTemp = ({ tech }) => {
    return (
      <div className='tech-temp'>
        {tech}
      </div>
    )
  }


  let [course, setCourse] = useState(courses)
  let [serv, setServ] = useState(servs)

  let techlist = ["React JS", "Javascript", "C#", "Python", "HTML", "CSS", "Tailwind"]


  return (
    <div className='mt-80 '>
      <div className='flex justify-center'>
        <ProfCard></ProfCard>
      </div>

      <div className='flex justify-center'>
        <div className='flex justify-center'>
          <TitleBar title="About me"></TitleBar>
        </div>
      </div>

      <div className='border-b border-t border-[var(--border-color)] mt-10' id='name-about'>
        <div className='flex justify-center'>
          <div id='about-box' style={{ opacity: 0}} className='flex w-[85%] flex-wrap border-r border-b border-l border-[var(--border-color)]'>
            <img src='../images/profiles/amir.jpg' className='about-img w-[25%]'></img>

            <div className='mx-5'>

              <div className='text-7xl mt-5'>
                Amir Nobakht
              </div>

              <div className='mt-3 mx-1 text-gray-400 pb-5'>Mid-level Developer</div>

            </div>
          </div>
        </div>

        <div className='flex justify-center mt-[-1px]'>
          <div id='summary-box' style={{ opacity: 0}} className='w-[85%] border border-[var(--border-color)] p-5 text-m text-gray-600'>

            <div className='text-2xl text-white'>
              <i className='fa fa-bookmark'></i> Summary
            </div>

            <div className='mt-5'>
              I'm amir nobakht ,a Mid-level developer using lots of languages like <b className='text-white'>C#</b> ,<b className='text-white'>Javascript (React Library)</b> ,and <b className='text-white'>Python</b> to develope Websites ,webapps ,Desktop Apps ,and ...
            </div>
            <div className='mt-5'>
              I've got lots of experiences in doing big and small projects. doing team works and using tools different.
            </div>
            <div className='mt-5'>
              Skills: Designing dynamic websites using <b className='text-white'>ReactJS</b> and <b className='text-white'>Django</b>. Developing desktop apps using <b className='text-white'>C#</b> and <b className='text-white'>.Net Frameworks</b>.
            </div>
            <div>
              Experience in working with <b className='text-white'>git</b> and <b className='text-white'>github</b> to manage version to collabrate with different companies and teams.
            </div>
            <div>
              I live in qaemshahr ,a city located in mazandaran. I can work remotly and in-person...
            </div>
          </div>
        </div>

        <div className='flex justify-center mt-[-1px]'>
          <div className='w-[85%] flex flex-wrap' id='course-box' style={{opacity: 0}}>

            {course.map(item => {
              return (
                <div className='Course-box'>
                  <div className='text-lg flex-wrap justify-between flex'>
                    <div className='flex gap-2'>
                      <div className='mt-1'>{item.icon}</div> {item.title}
                    </div>
                    <div className='text-gray-400 text-[14px]'>
                      {item.year}
                    </div>
                  </div>

                  <div className='text-2xl text-gray-300 mt-2'>
                    {item.place}
                  </div>

                  <div className='flex mt-2 flex-wrap gap-1'>
                    {item.techs.map(items => {
                      return <TechTemp tech={items}></TechTemp>
                    })}
                  </div>
                </div>
              )
            })}

          </div>
        </div>

        <div className='flex justify-center'>
          <div className='exp-box flex w-[85%] mt-[-1px]'>

            <div className='work-exp w-[40%]' id='work-box' style={{opacity: 0}}>

              <div className='text-gray-300 text-lg'>
                <i className='fa fa-suitcase'></i> Work Exprience
              </div>

              <div className='text-7xl text-wrap mt-20'>
                ~3 Years
              </div>

            </div>

            <div className='work-exp w-[100%]' id='lang-box' style={{opacity: 0}}>

              <div className='text-gray-300 text-lg'>
                <i className='fa fa-globe'></i> Foreign Language Degree
              </div>

              <div className='text-7xl text-wrap mt-32' style={window.innerWidth < 1000 ? {fontSize: "55px"} : {fontSize: '70px'}}>
                English Diploma
              </div>

            </div>

          </div>
        </div>


        <div className='flex justify-center mt-[-1px]'>
          <div className='border border-[var(--border-color)] w-[85%]'>

            <div className='w-[100%] flex justify-between'>
              <div className='text-xl pt-4 px-5'>
                Services
              </div>

              <div className='flex'>
                <button className='custom-prev-8'>
                  <i className='fa fa-angle-left'></i>
                </button>
                <button className='custom-next-8'>
                  <i className='fa fa-angle-right'></i>
                </button>
              </div>
            </div>

            <Swiper
              slidesPerView={3}
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: true,
              }}
              speed={1000}
              spaceBetween={0}
              navigation={{
                nextEl: ".custom-next-8",
                prevEl: ".custom-prev-8",
              }}
              breakpoints={{
                300: { slidesPerView: 1 },
                450: { slidesPerView: 1 },
                650: { slidesPerView: 2 },
                1050: { slidesPerView: 3 }
              }}

              className='w-[100%] overflow-hidden hidden cursor-grab'>
              <div className='relative h-auto'>
                {serv.map(item => {
                  return <SwiperSlide>
                    <div className='h-[260px] pb-[4px] p-2 pt-10 border border-[var(--border-color)] flex justify-center transition-all hover:bg-[#0a0a0a]'>

                      <div>

                        <div className='flex justify-center text-5xl text-[var(--color3)]'>
                          {item.icon}
                        </div>
                        <div className='text-center text-2xl mt-4'>
                          {item.title}
                        </div>
                        <div className='text-center text-[var(--color6)] p-3'>
                          {item.desc}
                        </div>
                  

                      </div>

                    </div>
                  </SwiperSlide>
                })}
              </div>
            </Swiper>

          </div>
        </div>



      </div>

    </div>
  )
}
