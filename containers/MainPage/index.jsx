'use client';
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function MainPage() {
    return (
        <div className='w-full h-screen flex items-center justify-evenly relative'>
            <div className='w-[100vh] h-[100vh] bg-[#0b0b13] rounded-full absolute -right-48 -top-60 -z-0'>
            </div>

            <div className='w-[500px] h-[500px] text-white z-10 '>
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
                <p className='text-2xl tracking-wider font-mono  mt-6' >I'm a front-end developer and I can turn my imagination into reality using JavaScript.</p>
            </div>
            <div className='w-[500px] h-[500px] border-green-100 bg-green-100 bg-opacity-5 backdrop-blur-3xl  drop-shadow-lg border-solid border-2 border-opacity-10 z-10 p-10 rounded-xl'>
                {/* <input type='range' value={50}  className='bg-green-700 thumb' /> */}
                <p className='text-5xl tracking-wider text-white text-center p-4 underline'> My Skills</p>

                <label for="HTML5" class="block mb-2 text-black dark:text-white font-bold text-xl">HTML5</label>
                <input id="JavaScript" type="range" value="65" class="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer accent-green-600 dark:bg-green-700" />

                <label for="JavaScript" class="block mb-2 text-black dark:text-white font-bold text-xl">JavaScript</label>
                <input id="HTML5" type="range" value="75" class="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer accent-green-600 dark:bg-green-700" />

                <label for="CSS" class="block mb-2 text-black dark:text-white font-bold text-xl">CSS</label>
                <input id="CSS" type="range" value="55" class="w-full h-2 bg-red-200 rounded-lg appearance-none cursor-pointer accent-green-600 dark:bg-green-700" />

            </div>
        </div>

    )
}

export default MainPage