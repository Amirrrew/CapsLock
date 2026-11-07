import React from 'react'
import { FaWrench } from "react-icons/fa";
import useSkills from '../../hooks/skills/useSkills';
import { toast } from '../../utils/toast';
import { useEffect } from 'react';
import TechIcon from '../../components/common/TechIcon';
import Skill_landing from './skill_landing';


export default function Skills() {

  const { data ,loading ,error } = useSkills('')
  useEffect(() => {
    if (error) toast.networkError(error)
  }, [error])

  const allSkills = data.flatMap(cat => cat.skills)
  const major = allSkills.filter(skill => skill.major)
  const other = allSkills.filter(skill => !skill.major)

  return (
        <div data-animate='right' className='centerbox animate-on-scroll w-[100%] mt-32'>
            <div className='w-[80%] container portfolio-grid-page'>
              <Skill_landing></Skill_landing>
              <div className='centerbox major-skills mt-4 w-[100%] gap-3'>
                {major.map((item ,index) => (
                <div className='major-skill'>
                  <div className='iconbox bg-neutral-950'><TechIcon iconname={item.icon_svg} size={60}></TechIcon></div>
                  <div>
                    <div className='text-neutral-700 font-secondary'>0{index + 1}</div>
                    <p className='font-secondary text-3xl'>{item.title}</p>
                    <p className='text-neutral-600'>{item.desc}</p>
                  </div>
                  <div className='w-[100%] absolute bottom-0'>
                    <div className='w-[100%] flex justify-end left-7 relative font-secondary mb-3'>{item.completion}%</div>
                    <div className='progress-bar'><div className='progress' style={{width: `${item.completion}%`}}></div></div>
                  </div>
                </div>
              ))}
              </div>
            </div>
        </div>
  )
}
