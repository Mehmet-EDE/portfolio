"use client"
import React from 'react'
import { HomeIcon, UserIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { BsGithub } from 'react-icons/bs'
import { CiLinkedin } from 'react-icons/ci'
import Link from 'next/link'
import { animateScroll as scroll } from 'react-scroll'

function SideBar({hide}) {
    if(hide)return(<div/>)
    return (
        <div
            className="w-[250px] h-screen bg-black relative overflow-hidden flex items-start justify-center">
            <div
                className="w-80 h-80 bg-[#2fbf71] rounded-full absolute -top-[200px] -left-[60px]"
            ></div>
            <div
                className="w-24 h-24 rounded-full bg-red overflow-hidden z-20 mt-14 border-[5px] border-white"
            >
                <Image src="/prof.jpg"
                    width={500}
                    height={500} alt="" />
            </div>
            <p
                className="text-white z-20 absolute top-[10.2em]  tracking-[2px] font-light"
            >
                Mehmet EDE
            </p>
            <ul className="absolute top-72 left-5 items-center justify-center text-white text-xs z-20 p-2">
                <li className="flex items-center tracking-[3px] mb-5 transition-all translate-x-3 duration-300 hover:translate-x-5 text-center hover:text-green-600 cursor-pointer">
                    <Link href={'#homePage'} onClick={() => scroll.scrollToTop({
                        containerId: 'homePage',
                        duration: 500,
                        delay: 300,
                        smooth: true,
                    })} className='flex items-center' scrollSmooth scroll={true} >
                        <HomeIcon className='h-6 m-2 text-center' />HOME
                    </Link>
                </li>
                <li className="flex w-full items-center tracking-[3px] flex-nowrap mb-5 transition-all translate-x-3 duration-300 hover:translate-x-5 text-center hover:text-green-600 cursor-pointer">
                    <Link href={'#AboutPage'} onClick={() => scroll.scrollToBottom({
                        containerId: 'AboutPage', duration: 500,
                        delay: 300,
                        smooth: "easeInOutCubic",
                    })} className='flex items-center scroll-smooth' scrollSmooth scroll={true} >
                        <UserIcon className='h-6' />ABOUT ME
                    </Link>
                </li>
                {/* <li className="flex items-center tracking-[3px] mb-5 transition-all duration-300 hover:translate-x-3 hover:text-green-600 cursor-pointer"><ChatBubbleBottomCenterTextIcon className='h-6' />CONTACT ME</li> */}
            </ul>
            <ul className="absolute flex bottom-0 left-10 text-white text-xs z-20 p-2">
                <li
                    className="flex items-center tracking-[3px] transition-all duration-300 hover:scale-110 hover:text-green-600 cursor-pointer mr-2"
                >
                    <a href='https://github.com/Mehmet-EDE' target='_blank'><BsGithub style={{ fontSize: 30, margin: 5 }} /></a>
                </li>
                <li
                    className="flex items-center tracking-[3px] transition-all duration-300 hover:scale-110 hover:text-green-600 cursor-pointer mr-2"
                >
                    <a href='https://www.linkedin.com/in/mehmet-ede-20984316a/' target='_blank'><CiLinkedin style={{ fontSize: 30, margin: 5 }} /></a>
                </li>
            </ul>
        </div>
    )
}

export default SideBar