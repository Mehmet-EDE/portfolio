import React from 'react'

function About() {
  return (
    <div className='w-full h-screen flex items-center justify-around relative rsm:flex-wrap'>
        <ul className="w-[42%] rsm:z-0 inset-0 list-none inline-block rsm:w-full  text-white ">
          <li className='pt-[1px] pb-[1px] p-5 bg-[#0b0b13]'><span className='bg-[#2fbf71] text-white text-xs p-1 align-top tracking-tight -m-1 -left-7 relative mb-[9px] after:absolute
           after:left-[0px]
            after:-bottom-[15px]
             after:border-l-[10px]
              after:border-r-[2px] after:border-t-[15px]
               after:border-t-green-700
                after:border-r-transparent after:border-l-transparent'>2010-2012 </span><h6 className='text-xl mt-3 p-3'>Graphic Designer</h6><p className='p-5' >International Design Institute</p></li>
          <li className='pt-[1px] pb-[1px] p-5 bg-[#0b0b13]'><span className='bg-[#2fbf71] text-white text-xs p-1 align-top tracking-tight -m-1 -left-7 relative mb-[9px] after:absolute
           after:left-[0px]
            after:-bottom-[15px]
             after:border-l-[10px]
              after:border-r-[2px] after:border-t-[15px]
               after:border-t-green-700
                after:border-r-transparent after:border-l-transparent'>2010-2012 </span><h6 className='text-xl mt-3 p-3'>Graphic Designer</h6><p className='p-5' >International Design Institute</p></li>
          <li className='pt-[1px] pb-[1px] p-5 bg-[#0b0b13]'><span className='bg-[#2fbf71] text-white text-xs p-1 align-top tracking-tight -m-1 -left-7 relative mb-[9px] after:absolute
           after:left-[0px]
            after:-bottom-[15px]
             after:border-l-[10px]
              after:border-r-[2px] after:border-t-[15px]
               after:border-t-green-700
                after:border-r-transparent after:border-l-transparent'>2010-2012 </span><h6 className='text-xl mt-3 p-3'>Graphic Designer</h6><p className='p-5' >International Design Institute</p></li>
        </ul>
      <div className='w-[40%] h-[500px] border-green-100 bg-green-100 bg-opacity-5 backdrop-blur-3xl overflow-y-scroll drop-shadow-lg border-solid border-2 border-opacity-10 z-10 p-10 rounded-xl rsm:w-full'>
        <p className='text-5xl tracking-wider text-white text-center p-4 underline  inset-0'> My Skills</p>

        <label for="HTML5" className="block mb-2 mt-12 text-white font-bold text-xl">HTML5</label>
        <input id="JavaScript" type="range" value="65" className="w-full h-2 rounded-lg appearance-none linear cursor-pointer accent-green-300 bg-gradient-to-r  from-green-700 to-gray-700" />

        <label for="JavaScript" className="block mb-2 mt-3 text-white font-bold text-xl">JavaScript</label>
        <input id="HTML5" type="range" value="75" className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-green-300 bg-gradient-to-r from-green-700 to-gray-700" />

        <label for="CSS" className="block mb-2 mt-3 text-white font-bold text-xl">CSS</label>
        <input id="CSS" type="range" value="55" className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-green-300 bg-gradient-to-r from-green-700 to-gray-700" />

        <label for="Tailwind" className="block mb-2 mt-3 text-white font-bold text-xl">Tailwind</label>
        <input id="Tailwind" type="range" value="45" className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-green-300 bg-gradient-to-r from-green-700 to-gray-700" />

        <label for="ReactJS" className="block mb-2 mt-3 text-white font-bold text-xl">ReactJS</label>
        <input id="HTML5" type="range" value="75" className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-green-300 bg-gradient-to-r from-green-700 to-gray-700" />

        <label for="NextJS" className="block mb-2 mt-3 text-white font-bold text-xl">NextJS</label>
        <input id="HTML5" type="range" value="45" className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-green-300 bg-gradient-to-r from-green-700 to-gray-700" />

        <label for="NodeJS" className="block mb-2 mt-3 text-white font-bold text-xl">NodeJS</label>
        <input id="NodeJS" type="range" value="55" className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-green-300 bg-gradient-to-r from-green-700 to-gray-700" />

      </div>
    </div>
  )
}

export default About