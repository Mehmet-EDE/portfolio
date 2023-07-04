import React from 'react'
import { HomeIcon, UserIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid'

function SideBar() {
    return (
            <div
                className="w-[250px] h-screen bg-black relative overflow-hidden flex items-start justify-center"
            >
                <div
                    className="w-80 h-80 bg-green-400 rounded-full absolute -top-[200px] -left-[60px]"
                ></div>
                <div
                    className="w-24 h-24 rounded-full bg-red overflow-hidden z-20 mt-14 border-[5px] border-white"
                >
                    <img src="./pexels-photo-1457983.webp" alt="" />
                </div>
                <p
                    className="text-white z-20 absolute top-[10.2em]  tracking-[2px] font-light"
                >
                    Mehmet EDE
                </p>
                <ul className="absolute top-72 left-5 text-white text-xs z-20 p-2">
                    <li className="flex items-center tracking-[3px] mb-5 transition-all duration-300 hover:translate-x-3 hover:text-green-400 cursor-pointer"> <HomeIcon className='h-6' />HOME</li>
                    <li className="flex items-center tracking-[3px] mb-5 transition-all duration-300 hover:translate-x-3 hover:text-green-400 cursor-pointer"> <UserIcon className='h-6' />ABOUT ME</li>
                    {/* <li className="flex items-center tracking-[3px] transition-all duration-300 hover:translate-x-3 hover:text-green-400 cursor-pointer"><Cog8ToothIcon className='h-6' />SERVICES</li>
        <li className="flex items-center tracking-[3px] transition-all duration-300 hover:translate-x-3 hover:text-green-400 cursor-pointer"><span className="material-symbols-outlined mr-2">book</span>PORTFOLIO</li>
        <li className="flex items-center tracking-[3px] transition-all duration-300 hover:translate-x-3 hover:text-green-400 cursor-pointer"><span className="material-symbols-outlined mr-2">import_contacts</span>BLOGS</li> */}
                    <li className="flex items-center tracking-[3px] mb-5 transition-all duration-300 hover:translate-x-3 hover:text-green-400 cursor-pointer"><ChatBubbleBottomCenterTextIcon className='h-6' />CONTACT ME</li>
                </ul>
                <ul className="absolute flex bottom-0 left-10 text-white text-xs z-20 p-2">
                    <li
                        className="flex items-center tracking-[3px] transition-all duration-300 hover:scale-110 hover:text-green-400 cursor-pointer mr-2"
                    >
                        <p>git</p>
                    </li>
                    <li
                        className="flex items-center tracking-[3px] transition-all duration-300 hover:scale-110 hover:text-green-400 cursor-pointer mr-2"
                    >
                        <p>linkedin</p>
                    </li>
                </ul>
            </div>
    )
}

export default SideBar