import React from 'react'

export default function Btn_light({text ,width ,height ,icon ,responsive ,justify ,arrowend}) {
  return (
    <button className={`btn-light ${responsive ? 'btn-shrink' : ''}`} style={{width: width, height: height ,justifyContent: justify}}>
        {text ? <p className='mt-1 px-2 text'>{text}</p> : null}
        <div className={`arrow-case ${arrowend ? 'arrow-end' : null}`}><i className={icon ? icon : 'fa fa-angle-right'}></i></div>
    </button>
  )
}
