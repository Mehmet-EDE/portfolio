'use client';
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function MainPage() {
    return (
        <div className='w-full h-screen flex items-center justify-evenly relative flex-wrap'>
            <div className='w-[100vh] h-[100vh] bg-[#0b0b13] rounded-full absolute -right-48 -top-60 -z-0'>
            </div>
            <div className='w-[500px] h-[500px] text-white items-center z-10 -mb-48 rsm:mb-40 '>
                <p className='text-2xl ' >I am</p>
                <p className='text-5xl mt-6 mb-6 ' >Mehmet EDE</p>
                <TypeAnimation sequence={[
                    'I Am Passionate Developer !', 1000,
                    "I Am Passionate Front-end Developer!", 1000,]} speed={25} deletionSpeed={50} repeat={Infinity} style={{
                        color: 'white',
                        fontSize: 23,
                        fontWeight: 'bold',
                        textDecorationLine: 'underline',
                        marginBottom: 10,
                        textAlign: 'center',
                        flexWrap: 'nowrap',
                        color: '#2fbf71'
                    }} />
                <p className='text-2xl tracking-wider font-mono  mt-6 ' >{"I'm a front-end developer and I can turn my imagination into reality using JavaScript"}.</p>
            </div>
            <div className='w-[500px] h-[500px] border-green-100 bg-green-100  rsm:p-2 bg-opacity-5 backdrop-blur-3xl text-center drop-shadow-lg border-solid border-2 border-opacity-10 z-10 rsm:z-0 rsm:mb-40 p-10 rounded-xl'>
                    <p className='text-2xl tracking-wider text-white font-mono  mt-6 pb-6'>
                    {"I'm a Front-end Developer with over 3 years of experience."}
                    </p>
                    <p className='text-lg tracking-wider text-white font-[didactic]  mt-10 pt-10'>
                    {"I'm a Front-end Developer with over 3 years of experience. I'm from Sivas. I code and create web elements for amazing projects . I like work with new technologies . "}
                    </p>
            </div>
        </div>

    )
}

export default MainPage