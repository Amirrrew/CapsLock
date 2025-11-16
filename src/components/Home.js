import React from 'react'
import Welcome from './Welcome'
import Skills from './Skills'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'


export default function Home() {
  return (
    <div>
      <Welcome></Welcome>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <About></About>
      <Contact></Contact>
    </div>
  )
}
