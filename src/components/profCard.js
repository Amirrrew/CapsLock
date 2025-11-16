import React from 'react'

export default function ProfCard() {
    return (
        <div className='prof-card' id='prof-card'>
            <img className='w-[22%] h-[100%] border-none' src='../images/profiles/amir.jpg'></img>
            <div className='mx-3 mt-1'>
                <div className='text-xl'>Amir Nobakht</div>
                <div className='text-[12px] text-gray-400'>Mid-level Developer</div>
            </div> 
        </div>
    )
}
