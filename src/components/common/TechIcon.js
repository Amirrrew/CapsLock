import { FaPython, FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from 'react-icons/fa'
import { SiDjango, SiTailwindcss, SiPostgresql } from 'react-icons/si'

const ICONS = {
   FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub,
  SiDjango, SiTailwindcss, SiPostgresql,
}

export default function TechIcon({ iconname ,size }) {
  const Icon = ICONS[iconname]
  console.log(iconname ,Icon)
  if (!Icon) return null
  return <Icon size={size} />
}