import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import usePortfolios from '../../hooks/portfolios/usePortfolios'
import Portfolio_details_skeleton from '../../components/portfolio/skeleton/portfolio_details_skeleton'
import { toast } from '../../utils/toast'
import Btn_light from '../../components/buttons/Btn_light'
import Btn_Dark from '../../components/buttons/Btn_dark'
import { FaGithub } from 'react-icons/fa'
import {Swiper ,SwiperSlide} from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Portfolio_details() {
    const params = useParams()
      const [techs ,setTechs] = useState([])
    const {data ,loading ,error} = usePortfolios(params.Id)
    useEffect(() => {
      if (error)
        toast.networkError(error)

      if (data) {
          setTechs(data.techs ?? [])
      }
    } ,[data ,error])

  return (
    <div className='w-[100%] centerbox'>
      <div className='w-[90%]'>
        {loading ? (
          <Portfolio_details_skeleton></Portfolio_details_skeleton>
        ) : !data || error ? (
          <div className='w-[100%] h-[100%] centerbox items-center'>
            <div className='mt-32'>
              <p className='text-neutral-500'>نمونه کار پیدا نشد!</p>

            </div>
          </div>
        ) : (
              <div className='w-[100%] mt-5 portfolio-detail-box' style={{animation: 'load1 300ms'}}>
                  <div className='flex justify-between w-[100%] items-start relative'>
                      <div className='w-[100%]'>  
                        <p className='font-secondary text-neutral-500'>{data.title}</p>
                        <h2 className='text-3xl font-bold'>{data.title_fa}</h2>
                      </div>
                      <div className='flex gap-1 absolute port-options-desktop bottom-0 left-0'>
                        <div className='flex gap-1'>
                          <button className='btn-slide port-prev' id=''><i className='fa fa-angle-right'></i></button>
                          <button className='btn-slide port-next' id=''><i className='fa fa-angle-left'></i></button>
                        </div>
                        <a target='_blank' href={data.github_repos} className='github-repo text-nowrap'>
                          <FaGithub size={20}/>
                          <p className='text'>ریپو گیت هاب</p>
                        </a>
                        <a target='_blank' href={data.url}><Btn_light icon={'fa fa-arrow-left --rotate-45'} text={'مشاهده پروژه'}></Btn_light></a>
                      </div>
                  </div>
                  <div className='w-[100%] gap-3'>
                    <Swiper
                      slidesPerView={1.3}
                      modules={[Navigation, Pagination]}
                      spaceBetween={10}
                      navigation={{
                          nextEl: ".port-next",
                          prevEl: ".port-prev",
                      }}
                      breakpoints={{
                          300: { slidesPerView: 1.05 },
                          900: { slidesPerView: 1.3},
                      }}
                      className='cursor-grab'
                    >

                    {data.project_images.map((item) => (
                      <SwiperSlide className='mt-3 cursor-default rounded-3xl overflow-hidden portfolio-photocard'>
                        <img src={item.img} key={item.id} className='w-[100%]'></img>
                      </SwiperSlide>
                    ))}

                    </Swiper>

                      <div className='gap-1 port-options-mobile hidden mt-3 w-[100%]'>
                        <div className='flex gap-1'>
                          <button className='btn-slide port-prev' id=''><i className='fa fa-angle-right'></i></button>
                          <button className='btn-slide port-next' id=''><i className='fa fa-angle-left'></i></button>
                        </div>
                        <a target='_blank' href={data.github_repos} className='github-repo text-nowrap'>
                          <FaGithub size={20}/>
                          <p className='text'>ریپو گیت هاب</p>
                        </a>
                        <a target='_blank' href={data.url} className='w-[100%]'><Btn_light arrowend={true} icon={'fa fa-arrow-left --rotate-45'} text={'مشاهده پروژه'} width={'100%'}></Btn_light></a>
                      </div>
                  </div>

                  <div className='mt-3 flex gap-5 justify-between items-start portfolio-details mb-10' dir='ltr'>

                    <div className='details-box'>
                      <div className='flex items-start gap-2'>
                        <div className='bg-neutral-700 p-1 rounded-full'></div>
                        <div className='mt-[-3px]'>
                          <p className='text-xs text-neutral-300'>تکنولوژی های مورد استفاده</p>
                          <p className='font-secondary'>TECHS USAGES</p>  
                        </div>
                      </div>
                      <div className='gap-1 flex flex-wrap mt-2'>
                        {techs.map((item) => (
                          <div className='tech text-xs'>
                            <p>{item.title}</p>
                          </div>
                        ))}
                      </div>
                      <div className='border-t border-neutral-800 mt-5 pt-5'>
                        <div className='flex justify-between w-[100%]'>
                          <p className='text-neutral-500'>تاریخ انتشار</p>
                          <p>{!data.is_dev ? data.production_date : 'در حال توسعه'}</p>
                        </div>
                        <div className='flex justify-between w-[100%] mt-1'>
                          <p className='text-neutral-500'>آخرین بروزرسانی</p>
                          <p>{data.updated_at ? data.updated_at : '-'}</p>
                        </div>
                        <Link>
                          <button className='btn-light-2 mt-3' style={{width: '100%' ,borderRadius: '15px'}}>سفارش پروژه</button>
                        </Link>
                      </div>
                    </div>


                    <div dir='rtl' className='w-[80%] desc '>
                      <p className='text-2xl w-[100%] border-b border-neutral-800 pb-3 font-bold'>معرفی و توضیحات</p>
                      <div
                          className="ckeditor-content mt-3 text-neutral-300"
                          dangerouslySetInnerHTML={{
                              __html: data.desc
                          }}
                      />
                    </div>
                  </div>
                  
              </div>
        )}
      </div>
    </div>
  )
}
