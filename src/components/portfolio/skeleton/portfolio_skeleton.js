import React from 'react'

export default function Portfolio_skeleton({classname}) {
  return (
    <div className={`portfolio-skeleton overflow-hidden w-[100%] rounded-2xl h-[100%] ${classname}`}>
        <div className='card__skeleton h-[100%]'></div>
    </div>  
  )
}
