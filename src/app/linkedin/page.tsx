'use client'

import { useState, useEffect } from 'react'
import About from './about'
import Activities from './activities'
import Analysis from './analysis'
import Experience from './experience'
import Highlighted from './highlighted'
import Profile from './profile'
import Recursos from './recursos'
import Skills from './skills'
import Loading from '@/components/Loading'
import './styles.css'

export default function DevSetup() {
  const [view, setview] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setview(!view)
    }, 900)
  }, [])

  return view ? (
    <div id="container-linkedin">
      <div className="item1 d-flex">
        <Profile />
        <Analysis />
        <Recursos />
        <About />
        <Highlighted />
        <Activities />
        <Experience />
        <Skills />
      </div>
      <div className="item2"></div>
    </div>
  ) : (
    <div className="o-hidden">
      <Loading />
    </div>
  )
}
