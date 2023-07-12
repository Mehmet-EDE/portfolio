"use client"
import React, { useEffect, useState } from 'react'
import Hamburger from '@/component/Hamburger'
import MainPage from '../MainPage'
import About from '../About'
import SideBar from '@/component/SideBar'

function PageContainer() {
    const [hide, setHide] = useState(false)
  useEffect(() => {
    var wWidth=window.innerWidth
    if(wWidth<= 570){
      setHide(true)
    }else{
      setHide(false)
    }
  }, [])
  return (
    <div className='w-full h-screen flex items-center justify-center'>
    <div className={`rsm:${false ? 'hidden' : 'block'} rsm:z-[999] sm:z-[999] md:z-[999] lg:z-[999] sm:block md:block lg:block`}>
      <SideBar hide={hide} />
    </div>

    <div className="w-full z-50 bg-edeColor p-4 h-screen flex-wrap justify-center overflow-x-hidden rsm:overflow-y-scroll rmd:overflow-y-scroll rlg:overflow-y-scroll">
      <Hamburger hideValue={setHide} />
      <section id='homePage' className='scroll-smooth snap-proximity delay-100'>
        <MainPage />
      </section>
      <br />
      <section id='AboutPage' className='scroll-smooth snap-proximity'>
        <About />
      </section>
    </div>

  </div >
  )
}

export default PageContainer