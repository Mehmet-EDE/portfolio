'use client';
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
function MainPage() {
    return (
        <div className='w-full h-screen flex items-center justify-evenly relative'>
            <div className='w-[100vh] h-[100vh] bg-[#2c2c3d] rounded-full absolute -right-48 -top-60 -z-0'>
            </div>

            <div className='w-[500px] h-[500px] bg-gray-300 z-10'>
                <TypeAnimation sequence={[
                    'deneme deneme', 1000,
                    "", 100,]} speed={25} deletionSpeed={50} repeat={Infinity}  style={{color:'black'}}/>
            </div>
            <div className='w-[500px] h-[500px] rounded-full bg-amber-300 z-10'>
            </div>
        </div>

    )
}

export default MainPage