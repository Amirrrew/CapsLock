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
import Portfolio_grid_landing from './portfolio_grid_landing';

export default function Portfolios_grid() {
    let [sw ,setSwitch] = useState('web') 

    const { data ,loading ,error } = usePortfolios('')
    useEffect(() => {
        if (error) toast.networkError(error)
    }, [error])

    const webPorts = data.filter((item) => item.category.title === 'web')
    const winPorts = data.filter((item) => item.category.title === 'win')
    let visiblePorts = sw === 'web' ? webPorts : winPorts


  return (
    <div data-animate='right' className='centerbox animate-on-scroll w-[100%] mt-32'>
        <div className='w-[80%] container portfolio-grid-page'>
            <div className='w-[100%] centerbox'>

                <div className='items-start w-[100%]'>
                    <Portfolio_grid_landing></Portfolio_grid_landing>
                    <div className='centerbox mt-2 w-[100%]'>
                        <div className='switch-box'>
                            <div className='switcher text-nowrap'>
                                <button className={`option ${sw === 'web' ? 'option-active' : ''}`} onClick={() => setSwitch('web')}>وب اپلیکیشن</button>
                                <button className={`option ${sw === 'win' ? 'option-active' : ''}`} onClick={() => setSwitch('win')}>ویندوز اپ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                {loading || error ? (
                    <div className='flex gap-2 h-[400px] mt-4 portfolio-selected'>
                        <Portfolio_skeleton></Portfolio_skeleton>
                        <Portfolio_skeleton></Portfolio_skeleton>
                    </div>
                ) : visiblePorts.length === 0 ? (
                    <p className='mt-32 text-center text-lg text-neutral-600' style={{animation: 'load1 300ms'}}>هنوز نمونه کاری آپلود نشده</p>
                ) : (
                    <div className='flex gap-2 mt-4 portfolio-grid mb-20' style={{animation: 'load1 300ms'}}>
                        {visiblePorts.map(item => (
                            <Portfolio_card 
                            max_length={true}
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
