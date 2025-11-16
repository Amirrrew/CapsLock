import React from 'react'

export default function ProgressTemp({name ,icon ,presentage ,wid}) {
  return (
    <div>
        <div className='flex justify-between gap-2 mt-4'>
            <div className='flex gap-2'>
                <div className='text-[20px] text-[var(--icon-color)]'>{icon}</div>

                <div className='text-xl mt-[-5px]'>
                    {name}
                </div>
            </div>

            <div>
                {presentage} %
            </div>
        </div>

        <div className='flex gap-3 mt-1'>
            <div className='present-box'>
                <div id='present' style={{width: wid}} className='present-bar'>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
