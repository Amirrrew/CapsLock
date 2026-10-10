import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(()=> {
        const onScroll = () => {
            setScrolled(window.scrollY > 100)
        }

        onScroll()
        window.addEventListener('scroll' ,onScroll ,{passive: true})
        return () => window.removeEventListener('scroll' ,onScroll)
    } ,[])

    const { pathname } = useLocation();
    const navigate = useNavigate();
    
    const [MenuOpen, SetMenuOpen] = useState(false)



  return (
    <div className='flex justify-center'>
        <div className={`navbar-box ${scrolled ? 'navbar-box-scrolled': ''}`} id='navbar'>
            <Link className='w-[100%]' to={'/'}>
                <div className='flex gap-2 text-nowrap w-[100%]'>
                    <button className={` btn-back mt-[-2px] tooltip-parent ${pathname === '/' ? 'hidden' : 'block'}`} onClick={()=> {navigate(-1)}}>
                        <i className='fa fa-angle-right mt-0.5'></i>
                        <p className='tooltip'>بازگــشت</p>
                    </button>
                    <img className='min-w-[40px] min-h-[40px] w-[40px] h-[40px] mt-[-1.5px]' src='../images/Logos/sec-logo.png' alt='لوگوی کپس لاک'></img>
                    <div>
                        <h3 className='mt-[2px]'>کپس لاک</h3>
                        <h3 className='text-gray-500 mt-[-2px] text-[8px] font-[roboto-mono]'>caps-lock©</h3>
                    </div>
                </div>
            </Link>

            <ul className='flex gap-5 w-[100%] navbar-options-row mt-2 text-nowrap justify'>
                <Link to={'/s'}><li><p>مهارت ها</p><i className='fa fa-angle-left navbar-option-arrow mt-1.5'></i></li></Link>
                <Link to={'/portfolios'}><li><p>نمونه کارها</p><i className='fa fa-angle-left navbar-option-arrow mt-1.5'></i></li></Link>
                <Link><li><p>درباره‌من</p><i className='fa fa-angle-left navbar-option-arrow mt-1.5'></i></li></Link>
                <Link><li><p>ارتباط</p><i className='fa fa-angle-left navbar-option-arrow mt-1.5'></i></li></Link>
            </ul>

            <div className='w-[100%] flex justify-end'>
                <div className='navbar-social-pill'>
                    <a target='_blank' href='https://instagram.com/amirrrew.n'><i className='fa-brands fa-instagram transition-all hover:text-white cursor-pointer tooltip-parent'><p className='tooltip'>اینستاگرام</p></i></a>
                    <a target='_blank' href='https://t.me/Amirrrrew'><i className='fa-brands fa-telegram transition-all hover:text-white cursor-pointer tooltip-parent'><p className='tooltip'>تلگرام</p></i></a>
                    <a target='_blank' href='tel:09115397415'><i className='fa fa-phone transition-all hover:text-white cursor-pointer tooltip-parent'><p className='tooltip'>تماس</p></i></a>
                </div>
            </div>

            <button className={`btn-navbar hidden tooltip-parent ${MenuOpen ? 'btn-navbar--hidden' : ''}`} onClick={() => SetMenuOpen(true)}>
                <i className='fa fa-navicon'></i>
                <p className='tooltip'>منو</p>
            </button>

            <button className={`btn-closenavbar tooltip-parent ${MenuOpen ? 'btn-closenavbar--visible' : ''}`} onClick={() => SetMenuOpen(false)}>
                <i className='fa fa-close'></i>
                <p className='tooltip left-1'>بستن منو</p>
            </button>
        </div>
        <div id='side-menu' className={`off-canvas-menu ${MenuOpen ? 'off-canvas-menu--open' : ''}`}>
            <ul className='w-[100%] off-canvas-menu-option'>
                <Link onClick={() => SetMenuOpen(false)}><li><p>مهارت ها</p><i className='fa fa-angle-left navbar-option-arrow mt-1'></i></li></Link>
                <Link onClick={() => SetMenuOpen(false)} to={'/portfolios'}><li><p>نمونه کارها</p><i className='fa fa-angle-left navbar-option-arrow mt-1'></i></li></Link>
                <Link onClick={() => SetMenuOpen(false)}><li><p>درباره‌من</p><i className='fa fa-angle-left navbar-option-arrow mt-1'></i></li></Link>
                <Link onClick={() => SetMenuOpen(false)}><li><p>ارتباط</p><i className='fa fa-angle-left navbar-option-arrow mt-1'></i></li></Link>
            </ul>
        </div>
    </div>
  )
}
