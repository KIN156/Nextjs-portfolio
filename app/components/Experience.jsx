"user client"
import React, { useState, useEffect } from 'react';

const Experience = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []); // Run the effect only once on mount

  return (
    <div className="z-10 w-full h-max md:py-28 flex relative flex-col-reverse md:flex-row justify-center items-center text-3xl sm:text-5xl md:text-6xl font-bold transform transition-all duration-300 ease-in-out">
      <div className="w-full md:w-6/12 ml-8 md:ml-0 mt-4 md:mt-0">
        <p className="text-3xl md:text-4xl font-semibold">EXPERIENCE</p>
        <div className="mt-6 relative z-10 react-draggable" style={{ transform: 'translate(0px, 0px)' }}>
          <div className="w-11/12 bg-zinc-700 h-8 rounded-t-xl flex flex-wrap justify-start items-center cursor-move header-strip">
            <div className="w-4 h-4 bg-red-400 rounded-full ml-3"></div>
            <div className="w-4 h-4 bg-amber-400 rounded-full ml-1"></div>
            <div className="w-4 h-4 bg-green-400 rounded-full ml-1"></div>
          </div>
          <div id="experienceBox" className="w-11/12 relative bg-zinc-600 h-96 rounded-b-xl p-4 px-6 overflow-x-auto overflow-y-hidden flex flex-wrap flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all ease-in-out duration-300 space-x-6">
            {/* Your experience items go here */}
            {/* Example: */}
            <div className="h-80 w-60 bg-zinc-200 ring-2 hover:ring-4 ring-zinc-300/30 rounded-xl text-xl font-medium ml-0 flex flex-col hover:-mt-1 transform transition-all duration-100 ease-in-out">
              <div className="h-1/2 flex flex-col justify-center items-center">
                <img src="https://media.licdn.com/dms/image/C560BAQH03e0VowA5sQ/company-logo_200_200/0/1523260171056?e=1700697600&amp;v=beta&amp;t=GpV8k3pMTReVZPLfDoJAVOCqBNT4PEa-3uzVK3rjxGY" alt="" className="h-1/2 rounded-full" />
              </div>
              <div className="flex flex-col text-center w-full justify-center text-zinc-900">
                <p className="opacity-95">Python Developer</p>
                <p className="opacity-80">@Infusion Infotech</p>
                <div className="mt-6 text-lg font-light flex flex-col justify-center items-center opacity-90">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <p className="text-base">Mar 2020 - June 2021</p>
                </div>
              </div>
            </div>
            {/* Repeat the above structure for each experience item */}

            <div className="h-80 w-60 bg-blue-200 ring-2 hover:ring-4 ring-zinc-300/30 rounded-xl text-xl font-medium ml-0 flex flex-col hover:-mt-1 transform transition-all duration-100 ease-in-out">
              <div className="h-1/2 flex flex-col justify-center items-center">
                <img src="https://media.licdn.com/dms/image/C560BAQH03e0VowA5sQ/company-logo_200_200/0/1523260171056?e=1700697600&amp;v=beta&amp;t=GpV8k3pMTReVZPLfDoJAVOCqBNT4PEa-3uzVK3rjxGY" alt="" className="h-1/2 rounded-full" />
              </div>
              <div className="flex flex-col text-center w-full justify-center text-zinc-900">
                <p className="opacity-95">Hostess / Server</p>
                <p className="opacity-80">@Hoops Sports Bar</p>
                <div className="mt-6 text-lg font-light flex flex-col justify-center items-center opacity-90">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <p className="text-base">March 2022 - Aug 2023</p>
                </div>
              </div>
            </div>


            <div className="h-80 w-60 bg-green-200 ring-2 hover:ring-4 ring-zinc-300/30 rounded-xl text-xl font-medium ml-0 flex flex-col hover:-mt-1 transform transition-all duration-100 ease-in-out">
              <div className="h-1/2 flex flex-col justify-center items-center">
                <img src="https://media.licdn.com/dms/image/C560BAQH03e0VowA5sQ/company-logo_200_200/0/1523260171056?e=1700697600&amp;v=beta&amp;t=GpV8k3pMTReVZPLfDoJAVOCqBNT4PEa-3uzVK3rjxGY" alt="" className="h-1/2 rounded-full" />
              </div>
              <div className="flex flex-col text-center w-full justify-center text-zinc-900">
                <p className="opacity-95">Lead Manager</p>
                <p className="opacity-80">@Sigmapac</p>
                <div className="mt-6 text-lg font-light flex flex-col justify-center items-center opacity-90">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <p className="text-base">Jul 2023 - Oct 2023</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="w-full md:w-5/12 flex justify-center items-center">
        <img src="/webdev.svg" alt="" className="w-full select-none pointer-events-none" draggable="false" />
      </div>
    </div>
  )
}

export default Experience;
