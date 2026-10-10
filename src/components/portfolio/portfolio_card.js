import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import Btn_light from '../buttons/Btn_light';

let GithubRepo = ({url}) => {
    return (
        <a target='_blank' href={url} className='github-repo text-nowrap'>
            <FaGithub size={20}/>
            <p className='text'>ریپو گیت هاب</p>
        </a>
    )
}

export default function Portfolio_card({ id, title, title_fa, image, repo }) {
  return (
    <div className='portfolio-card' style={{ backgroundImage: `url(${image})` }}>
        <div className='github-wrap'>
            {repo ? <GithubRepo url={repo} /> : null}
        </div>

        <Link to={`/portfolios/${id}`} className='details'>
            <div className='detail-det'>
                <div className='detail-text'>
                    <p className='font-secondary detail-title'>{title}</p>
                    <p className='detail-title-fa'>{title_fa}</p>
                </div>
            <span className='detail-btn'>
                <Btn_light icon={'fa fa-arrow-left --rotate-45'} />
            </span>
            </div>
        </Link>
    </div>
  )
}