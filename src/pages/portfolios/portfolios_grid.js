import React, { useState } from 'react'
import { PiMonitorFill } from "react-icons/pi";
import Btn_light from '../../components/buttons/Btn_light';
import { Link } from 'react-router-dom';
import { use } from 'react';
import usePortfolios from '../../hooks/portfolios/usePortfolios';
import { toast } from '../../utils/toast';
import { useEffect } from 'react';
import Portfolio_card from '../../components/portfolio/portfolio_card';
import Portfolio_skeleton from '../../components/portfolio/skeleton/portfolio_skeleton';

export default function Portfolios_grid() {

    let [sw ,setSwitch] = useState('web') 
        const { data ,loading ,error } = usePortfolios('')
        useEffect(() => {
            if (error) toast.networkError(error)
        }, [error])

  return (
    <div data-animate='right' className='centerbox animate-on-scroll w-[100%] mt-32'>
        <div className='w-[80%] container'>
            <div className='w-[100%] section-titlebar relative'>
                <div className='flex gap-1'>
                    <PiMonitorFill size='1em' className='icon text-[60px] max-[600px]:text-[40px]' />                    
                    <div className=''>
                        <div className='flex gap-1'><p className='text-neutral-400'>نمونه کار ها</p><div className='text-neutral-700'>/</div></div>
                        <p className='font-secondary titlebar-eng text-3xl'>PORTFOLIOS</p>
                    </div>
                </div>
                <div className='absolute left-0 bottom-0'>
                    <div className='switcher'>
                        <button className={`option ${sw === 'web' ? 'option-active' : ''}`} onClick={() => setSwitch('web')}>وب اپلیکیشن</button>
                        <button className={`option ${sw === 'win' ? 'option-active' : ''}`} onClick={() => setSwitch('win')}>ویندوز اپ</button>
                    </div>
                </div>
            </div>
                {loading || error ? (
                    <div className='flex gap-2 h-[400px] mt-4 portfolio-selected'>
                        <Portfolio_skeleton></Portfolio_skeleton>
                        <Portfolio_skeleton></Portfolio_skeleton>
                    </div>
                ) : (
                    <div className='flex gap-2 h-[400px] mt-4 portfolio-selected'>
                        {data.map(item => (
                            <Portfolio_card 
                            id={item.id}
                            key={item.id} 
                            title={item.title} 
                            title_fa={item.title_fa}
                            techs={item.techs}
                            image={item.project_images?.[0]?.img}
                            repo={item.github_repos}
                            />
                        ))}
                    </div>
                )}
        </div>
    </div>
  )
}
