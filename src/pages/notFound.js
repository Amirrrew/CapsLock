import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div className='flex justify-center mt-20 border-b border-t border-[var(--border-color)]'>
            <div className='w-[85%] pb-[-1px] flex-wrap border-[var(--border-color)]'>

                <div className='w-[100%] mt-[-1px] justify-center flex p-20 pb-24 border border-[var(--border-color)]'>
                    <i className='fixed fa fa-sitemap fa-10x text-[var(--border-color)]'></i>
                    <i style={{ animation: "bounce 500ms" }} className='fa fa-close fa-5x ml-32 z-50 pr-10 mt-5'></i>
                </div>

                <div className='p-5 border mt-[-1px] border-[var(--border-color)]'>
                    <div className='text-7xl'>
                        PAGE NOT FOUND
                    </div>
                    <div className='text-gray-400'>
                        404 - Looks like you're lost.
                    </div>
                    <div className='text-gray-400 cursor-pointer underline mt-1'>
                        <Link to="/"><i className='fa fa-sign-out' style={{transform: "rotate(180deg)"}}></i> Back to home</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
