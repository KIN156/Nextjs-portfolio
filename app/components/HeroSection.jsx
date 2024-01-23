
"user client"
import React from 'react'
import Image from 'next/image'
import styles from './HeroSection.module.css';
export default function HeroSection() {
  return (
    <div className="flex flex-col items-center w-full px-2 md:px-0 h-max">
    <div className="w-full flex justify-between py-4 items-center h-max px-2 sm:px-8 lg:px-16 z-30">
        <p className="hidden sm:block text-amber-200 text-xl md:text-2xl font-medium tracking-widest">KINJALKUMARI DHIMMAR</p>
        <Image src="/mypic.jpeg" width={500} height={500} alt="" className="w-10 h-10 sm:hidden" />
        <div className="flex gap-3 sm:gap-4">
            <button className="p-2 w-9 h-9 text-blue-900 bg-blue-200 group rounded-full ring-2 ring-blue-300/30 outline-none" aria-label="LinkedIn">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="group-hover:scale-90 h-full w-full ease-in-out transition-all" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                </svg>
                <span className="hidden group-hover:block absolute ease-in-out transform transition-all mt-3 -ml-4 text-blue-200">LinkedIn</span>
            </button>

            <button aria-label="GitHub" className="p-2 w-9 h-9 text-fuchsia-900 bg-fuchsia-200 group rounded-full ring-2 ring-fuchsia-300/30 outline-none">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="group-hover:scale-90 h-full w-full ease-in-out transition-all" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                <span className="hidden group-hover:block absolute ease-in-out transform transition-all mt-3 -ml-4 text-fuchsia-200">GitHub</span>
            </button>

            <a aria-label="Resume" className="flex justify-center items-center p-2 px-3 h-9 bg-emerald-200 text-emerald-900 outline-none ring-2 ring-emerald-900 font-medium rounded-full ease-in-out transform transition-all cursor-pointer" href="/Resume_web.pdf" download="">
                Resume
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="group-hover:scale-90 h-full w-full ease-in-out transition-all ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>
                </svg>
            </a>
        </div>
    </div>

    <div className="flex flex-col md:flex-row justify-between md:min-h-screen h-full items-center md:px-8 lg:px-10 2xl:px-16">
    <div className="hero hidden sm:block">
        <div className="cube-new"></div>
        <div className="cube-new"></div>
        <div className="cube-new"></div>
        <div className="cube-new"></div>
        <div className="cube-new"></div>
        <div className="cube-new"></div>
    </div>

    <div className="w-11/12 sm:w-10/12 md:w-6/12 mt-24 md:mt-0">
    <p className="font-bold text-3xl sm:text-5xl text-center md:text-left md:text-4xl lg:text-5xl 2xl:text-6xl mb-12 lg:mb-20">I am a Web &amp; Software Developer from India.</p>
    <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-center md:text-left">Currently making Web Apps having</p>
    <div className="text-zinc-500 flex flex-col text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold overflow-y-hidden overflow-x-hidden flex-shrink md:py-2 mb-10 md:mb-0 items-center md:items-start">
    <div className="x0 x1 x2 flex justify-center items-center w-max">
        <p className='text-bold flex flex-col text-2xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold overflow-y-hidden overflow-x-hidden flex-shrink md:py-2 mb-10 md:mb-0 items-center md:items-start'>Responsiveness</p>
    </div>
    </div>
    </div>
    <div className="w-10/10 sm:w-8/12 md:w-5/12">
    <Image
      alt=""
      draggable={false}
      src="/hero5.svg"
      width={1920}
      height={1080}
    />
    </div>
    </div>

    






















    </div>


  )
}
