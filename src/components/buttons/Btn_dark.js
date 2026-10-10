import React from 'react'

export default function Btn_dark({text ,width ,height ,icon}) {
  return (
    <button className='btn-dark' style={{width: width, height: height}}>
        <p className='mt-1 px-2'>{text}</p>
        <div className='arrow-case'><i className={icon ? icon : 'fa fa-angle-right'}></i></div>
    </button>
  )
}
