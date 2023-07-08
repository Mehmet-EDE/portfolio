import React from 'react'

function About() {
  return (
    <div className='w-full h-screen flex items-center justify-around relative rsm:flex-wrap rsm:mt-40'>
      <p className='flex w-fit text-3xl text-white  text-center absolute rsm:mt-96 items-start left-[10rem] mt-32 -top-10 self-center rsm:left-0 ' >My Projects </p>
      <ul className="w-[42%]  inset-0 list-none inline-block rsm:w-full rsm:mt-96 mt-10 text-white ">
        <li className='pt-[1px] pb-[1px] p-5 bg-[#0b0b13]'><span className='bg-[#2fbf71] text-white text-xs p-1 align-top tracking-tight -m-1 -left-7 relative mb-[9px] after:absolute
           after:left-[0px]
            after:-bottom-[15px]
             after:border-l-[10px]
              after:border-r-[2px] after:border-t-[15px]
               after:border-t-green-700
                after:border-r-transparent after:border-l-transparent'>2021-Present </span><h6 className='text-xl mt-3 p-3'>Front-end Developer</h6><span>
            <p className='p-5' >Bnet Portal  </p>
            <hr />
            <br />
            <p className='p-5' > Technology: SAPUI5 </p>
          </span>
        </li>
        <li className='pt-[1px] pb-[1px] p-5 bg-[#0b0b13]'><span className='bg-[#2fbf71] text-white text-xs p-1 align-top tracking-tight -m-1 -left-7 relative mb-[9px] after:absolute
           after:left-[0px]
            after:-bottom-[15px]
             after:border-l-[10px]
              after:border-r-[2px] after:border-t-[15px]
               after:border-t-green-700
                after:border-r-transparent after:border-l-transparent'>2022-Present </span><h6 className='text-xl mt-3 p-3'>Front-end Developer</h6> <span>
                  <p className='p-5' >Bnet Masraf </p>
                  <hr /><br />
                  <p className='p-5'>Technology: React-Native</p>
                  </span> </li>
        {/* <li className='pt-[1px] pb-[1px] p-5 bg-[#0b0b13]'><span className='bg-[#2fbf71] text-white text-xs p-1 align-top tracking-tight -m-1 -left-7 relative mb-[9px] after:absolute
           after:left-[0px]
            after:-bottom-[15px]
             after:border-l-[10px]
              after:border-r-[2px] after:border-t-[15px]
               after:border-t-green-700
                after:border-r-transparent after:border-l-transparent'>2010-2012 </span><h6 className='text-xl mt-3 p-3'>Front-end Develoer</h6><p className='p-5' ><hr /><br /> Technology: SAPUI5</p></li> */}
      </ul>
      <div className='w-[40%] h-[500px] border-green-100 bg-green-100 bg-opacity-5 backdrop-blur-3xl overflow-y-scroll drop-shadow-lg border-solid border-2 border-opacity-10  p-10 rounded-xl rsm:w-full'>
        <p className='text-5xl tracking-wider text-white text-center p-4 underline  inset-0'> My Skills</p>

        <label htmlFor="HTML5" className="block mb-2 mt-12 text-white font-bold text-xl">HTML5</label>
        <input id="JavaScript" type="range"  disabled defaultValue="65" className="w-full h-2 rounded-lg appearance-none linear cursor-pointer accent-green-300 bg-gradient-to-r  from-green-700 to-gray-700" />

        <label htmlFor="JavaScript" className="block mb-2 mt-3 text-white font-bold text-xl">JavaScript</label>
        <input id="HTML5" type="range"  disabled defaultValue="75" className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-green-300 bg-gradient-to-r from-green-700 to-gray-700" />

        <label htmlFor="CSS" className="block mb-2 mt-3 text-white font-bold text-xl">CSS</label>
        <input id="CSS" type="range"  disabled defaultValue="55" className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-green-300 bg-gradient-to-r from-green-700 to-gray-700" />

        <label htmlFor="Tailwind" className="block mb-2 mt-3 text-white font-bold text-xl">Tailwind</label>
        <input id="Tailwind" type="range"  disabled defaultValue="45" className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-green-300 bg-gradient-to-r from-green-700 to-gray-700" />

        <label htmlFor="ReactJS" className="block mb-2 mt-3 text-white font-bold text-xl">ReactJS</label>
        <input id="HTML5" type="range"  disabled defaultValue="75" className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-green-300 bg-gradient-to-r from-green-700 to-gray-700" />

        <label htmlFor="NextJS" className="block mb-2 mt-3 text-white font-bold text-xl">NextJS</label>
        <input id="HTML5" type="range"  disabled defaultValue="45" className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-green-300 bg-gradient-to-r from-green-700 to-gray-700" />

        <label htmlFor="NodeJS" className="block mb-2 mt-3 text-white font-bold text-xl">NodeJS</label>
        <input id="NodeJS" type="range"  disabled defaultValue="55" className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-green-300 bg-gradient-to-r from-green-700 to-gray-700" />

      </div>
    </div>
  )
}

export default About