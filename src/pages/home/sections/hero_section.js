import React, { useEffect, useState } from 'react'
import Btn_dark from '../../../components/buttons/Btn_dark'
import Btn_light from '../../../components/buttons/Btn_light'

export default function Hero_section() {
    let [hero_scale, setHeroScale] = useState(100);

    useEffect(() => {
    const handleScroll = () => {
      window.scrollY < 1000 ? setHeroScale(100 - (window.scrollY / 20)) : setHeroScale(100)
    };
    window.addEventListener("scroll", handleScroll);
    while (hero_scale < 0) { document.getElementById("wel").style.opacity = "0" }
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div className='centerbox hero-section' style={{transform: `scale(${hero_scale}%)`}}>
        <div className='items-center mt-20'>
            <div dir='ltr' className='ml-4 hero-intro'>
                <h1 className='text-center hero-name'>AMIR NOBAKHT</h1>
                <div className='mt-16 flex gap-2 text-3xl text-center flex-wrap hero-full'><p >برنامه نویس فول استک</p>|<p className='text-neutral-500'>FULL-STACK DEVELOPER</p></div>
                <p className='max-w-[500px] hero-text'>
                     من یک برنامه نویس فول استک با سابقه بیش از دوسال ساکن قائمشهر در استان مازندران هستم. این وبسایت شخصی من برای نمایش نمونه کار ها و مهارت های من هست که با ری‌اکت برای فرانت و جنگو رست فریم‌ورک برای بک اند ساخته شده.
                </p>
                <div className='flex mt-2 gap-2 hero-btns'>
                    <Btn_dark text={'مشاهده نمونه کارها'}></Btn_dark>
                    <Btn_light text={'سفارش پروژه'}></Btn_light>
                </div>
            </div>
            <div className='hero-picbox bg-neutral-900 rounded-3xl mt-[-300px]'>
                <img src='../images/other/amir-face.webp' className='w-[500px] rounded-2xl hero-pic'></img>
            </div>
        </div>
    </div>
  )
}
