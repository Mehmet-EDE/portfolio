import MainPage from '@/pages/MainPage'
import SideBar from '@/component/SideBar'
import About from '@/pages/About'
export default function Home() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='hidden sm:block md:block lg:block'>
        <SideBar />
      </div>

      <div className="w-full bg-edeColor p-4 h-screen flex-wrap justify-center overflow-x-hidden rsm:overflow-y-scroll rmd:overflow-y-scroll rlg:overflow-y-scroll">
        <MainPage />
        <p className='flex text-3xl text-white  text-center relative items-start left-[10rem] -bottom-32 ' >My Projects </p>
        <About />
      </div>

    </div>
  )
}
