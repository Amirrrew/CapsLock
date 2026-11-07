import React from 'react'

export default function Portfolio_grid_landing() {
  return (
    <div>
        <div className='portfolio-landing'>
            <div className='portfolio-landing-card relative top-[30px] left-[-20px] an--rotate-45' style={{transform: 'rotate(45deg)'}}><img className='w-[100%] h-[100%] rounded-3xl' src='../images/Portfolios/code-art2.webp'></img></div>
            <div className='portfolio-landing-card centerbox items-center' style={{transform: 'rotate(0deg)'}}>
                <div className='logo-card top-[-20px]' style={{transform: 'rotate(20deg)'}}><img src='../images/Portfolios/vscode_icon.webp'></img></div>
                <div className='logo-card' style={{transform: 'rotate(-20deg)'}}><img src='../images/Portfolios/pycharm_icon.webp'></img></div>
            </div>
            <div className='portfolio-landing-card relative top-[30px] left-[20px]' style={{transform: 'rotate(-35deg)'}}><img className='w-[100%] h-[100%] rounded-3xl' src='../images/Portfolios/code-art1.webp'></img></div>
        </div>
        <div className='text-center portfolio-titlebox relative mt-[-30px]'>
            <div className='centerbox text-neutral-500 gap-2'>
                <h2 className=''>نمونه کار ها</h2><p className='text-gray-700'>/</p>
            </div>
            <p className='font-secondary portfolio-title relative text-8xl'>PORTFOLIOS</p>
        </div>
    </div>
  )
}
