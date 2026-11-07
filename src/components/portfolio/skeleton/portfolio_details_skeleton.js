import React, { useState } from 'react'
import Portfolio_skeleton from './portfolio_skeleton'
import usePortfolios from '../../../hooks/portfolios/usePortfolios'
import { useParams } from 'react-router-dom'

export default function Portfolio_details_skeleton() {
  return (
    <div className='w-[100%] mt-5 portfolio-skeleton' style={{animation: 'load1 300ms'}}>
        <div className='flex justify-between w-[100%] items-start relative'>
            <div className='w-[100%]'>  
                <div className='w-[30%] rounded-xl overflow-hidden title-en'><div className='card__skeleton h-[20px]'></div></div>
                <div className='w-[40%] rounded-xl overflow-hidden mt-2 title-fa'><div className='card__skeleton h-[60px]'></div></div>
            </div>
            <div className='flex gap-2 absolute bottom-0 left-0'>
                <div className='w-[100px] rounded-xl overflow-hidden urlbtn'><div className='card__skeleton h-[50px]'></div></div>
                <div className='w-[100px] rounded-xl overflow-hidden urlbtn'><div className='card__skeleton h-[50px]'></div></div>
            </div>
        </div>
        <div className='w-[100%] h-[400px] flex gap-3 photo-grid'>
            <Portfolio_skeleton classname={'mt-3'}></Portfolio_skeleton>
            <Portfolio_skeleton classname={'mt-3'}></Portfolio_skeleton>
        </div>
    </div>
  )
}
