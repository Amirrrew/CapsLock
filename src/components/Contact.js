import React, { useState } from 'react'
import TitleBar from './TitleBar'
import { contactInfo } from '../data/ContactInfo'
import { Link } from 'react-router-dom'


export default function Contact() {

  let [contact, setContact] = useState(contactInfo)
  const call = contact.find(item => item.id === 0)
  const telegram = contact.find(item => item.id === 1)
  const insta = contact.find(item => item.id === 2)
  const whatsapp = contact.find(item => item.id === 3)
  const linkedin = contact.find(item => item.id === 4)
  const Github = contact.find(item => item.id === 5)

  

  return (
    <div className='mt-52 transition-all' id='con' style={{filter: "Blur(10px)" ,transition: "200ms"}}>

      <div className='flex justify-center'>
        <TitleBar title="Contact"></TitleBar>
      </div>

      <div className='text-center text-6xl mt-3'>
        Ways to conatct me
      </div>

      <div className='text-center mt-3 text-gray-400'>
        There are several ways to contact me... you can choose one of them to use as a contact method
      </div>

      <div className='flex justify-center border-t border-b border-[var(--border-color)] mt-5'>
        <div className='flex justify-center w-85% border border-[var(--border-color)] mt-[-1px] mb-[-1px] flex-wrap'>


          <div>
            <div className='border border-[var(--border-color)] p-3'>
              <div className='flex'>
                <div className='contact-iconbox'><i className={call.icon}></i></div>
                <div className='mx-2 text-lg mt-[5px]'>{call.title}</div>
              </div>
              <div className='w-72 text-gray-400 text-[13px] mt-3'>
                {call.desc}
              </div>

              <Link to={call.link} target='_blank'>
                <div className='btn-fixed cursor-pointer hover:no-underline underline mt-10 text-gray-400 transition-all'>
                  Have a direct call <i className='fa fa-external-link text-gray-500'></i>
                </div>
              </Link>
            </div>

            <div className='border border-[var(--border-color)] p-3 mt-[-1px]'>
              <div className='flex'>
                <div className='contact-iconbox'><i className={whatsapp.icon}></i></div>
                <div className='mx-2 text-lg mt-[5px]'>{whatsapp.title}</div>
              </div>
              <div className='w-72 text-gray-400 text-[13px] mt-3'>
                {whatsapp.desc}
              </div>

              <Link to={whatsapp.link} target='_blank'>
                <div className='btn-fixed cursor-pointer hover:no-underline underline mt-10 text-gray-400 transition-all'>
                  Message in whatsapp <i className='fa fa-external-link text-gray-500'></i>
                </div>
              </Link>
            </div>

            <div className='border border-[var(--border-color)] p-3 mt-[-1px] mt-[-1px]'>
              <div className='flex'>
                <div className='contact-iconbox'><i className={insta.icon}></i></div>
                <div className='mx-2 text-lg mt-[5px]'>{insta.title}</div>
              </div>
              <div className='w-64 text-gray-400 text-[13px] mt-3'>
                {insta.desc}
              </div>

              <Link to={insta.link} target='_blank'>
                <div className='btn-fixed cursor-pointer hover:no-underline underline mt-10 text-gray-400 transition-all'>
                  Send a direct in insta <i className='fa fa-external-link text-gray-500'></i>
                </div>
              </Link>
            </div>
          </div>

          <div>

            <div className='border border-[var(--border-color)] p-3 h-64'>
              <div className='flex'>
                <div className='contact-iconbox'><i className={telegram.icon}></i></div>
                <div className='mx-2 text-lg mt-[5px]'>{telegram.title}</div>
              </div>
              <div className='w-72 text-gray-400 text-[13px] mt-3'>
                {telegram.desc}
              </div>

              <Link to={telegram.link} target='_blank'>
                <div className='btn-fixed cursor-pointer hover:no-underline underline mt-20 text-gray-400 transition-all'>
                  Send message in telegram <i className='fa fa-external-link text-gray-500'></i>
                </div>
              </Link>
            </div>

            <div className='p-3 mt-[-1px] border border-[var(--border-color)]'>
              <div className='flex'>
                <div className='contact-iconbox'><i className={linkedin.icon}></i></div>
                <div className='mx-2 text-lg mt-[5px]'>{linkedin.title}</div>
              </div>
              <div className='w-72 text-gray-400 text-[13px] mt-3'>
                {linkedin.desc}
              </div>

              <Link to={linkedin.link} target='_blank'>
                <div className='btn-fixed cursor-pointer hover:no-underline underline mt-[180px] text-gray-400 transition-all'>
                  Visit linkedin profile <i className='fa fa-external-link text-gray-500'></i>
                </div>
              </Link>
            </div>


          </div>
            <div className='border border-[var(--border-color)] p-3 mt-[-1px]'>
              <div className='flex'>
                <div className='contact-iconbox'><i className={Github.icon}></i></div>
                <div className='mx-2 text-lg mt-[5px]'>{Github.title}</div>
              </div>
              <div className='w-72 text-gray-400 text-[13px] mt-3'>
                {Github.desc}
              </div>

              <Link to={Github.link} target='_blank'>
                <div className='btn-fixed cursor-pointer hover:no-underline underline mt-3 text-gray-400 transition-all'>
                  Visit github profile <i className='fa fa-external-link text-gray-500'></i>
                </div>
              </Link>
            </div>
          <div>

          </div>

        </div>
      </div>
    </div>
  )
}
