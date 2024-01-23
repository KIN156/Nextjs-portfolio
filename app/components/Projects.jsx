import React from 'react';
import Image from 'next/image';
export default function Projects() {
  return (
    <div className="w-full flex flex-col items-center py-10">
      <p className="text-3xl md:text-4xl font-semibold">CREATIONS:</p>
      <div className="flex flex-wrap w-full justify-center py-20 gap-8 sm:gap-10 px-2">
        <div className="flex group max-w-[90vw] relative">
          <div id="card-0" className="flex flex-col justify-between w-full sm:w-96 bg-zinc-900 border-2 border-zinc-600 p-6 rounded-2xl shadow-xl gradient-border transition-all ease-in-out z-10">
            <div className="">
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-white">CRM : Customer Relationship Management</h2>
                <p className="mt-3 text-base text-zinc-200">Django CRM is an open-source Customer Relationship Management web application built using the Django framework. It helps businesses manage their customer interactions, streamline processes, and improve customer relationships.</p>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-between w-full">
              <a href="https://github.com/KIN156/CRM-Django" target="_blank" id="card-link-0" rel="noopener noreferrer" className="flex px-6 py-2 border-2 border-zinc-600 mt-4 rounded-md w-max justify-center items-center gap-2 gradient-border">Visit
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up-right-from-square" className="svg-inline--fa fa-arrow-up-right-from-square w-4 h-4 text-zinc-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"></path>
                </svg>
              </a>
              
            </div>
          </div>
          <div id="card-bg-0" className="w-full sm:w-96 absolute h-full left-2 top-2 border-2 group-hover:border-0 border-zinc-600 group-hover:bg-zinc-600 rounded-2xl card-bg overflow-hidden" style={{ backgroundImage: 'url("/frame_bg.svg")' }}>
          </div>
        </div>
        <div className="flex group max-w-[90vw] relative">
          <div id="card-0" className="flex flex-col justify-between w-full sm:w-96 bg-zinc-900 border-2 border-zinc-600 p-6 rounded-2xl shadow-xl gradient-border transition-all ease-in-out z-10">
            <div className="">
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-white">BMI: Body Mass Index Calc</h2>
                <p className="mt-3 text-base text-zinc-200">A BMI calculator project using HTML, CSS, and JavaScript involves creating a user interface with input fields for weight and height, implementing the BMI formula in JavaScript to calculate the result dynamically, and styling the layout with CSS for a visually appealing presentation.</p>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-between w-full">
              <a href="https://kin156.github.io/BMI_Calc/" target="_blank" id="card-link-0" rel="noopener noreferrer" className="flex px-6 py-2 border-2 border-zinc-600 mt-4 rounded-md w-max justify-center items-center gap-2 gradient-border">Visit
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up-right-from-square" className="svg-inline--fa fa-arrow-up-right-from-square w-4 h-4 text-zinc-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"></path>
                </svg>
              </a>
              
            </div>
          </div>
          <div id="card-bg-0" className="w-full sm:w-96 absolute h-full left-2 top-2 border-2 group-hover:border-0 border-zinc-600 group-hover:bg-zinc-600 rounded-2xl card-bg overflow-hidden" style={{ backgroundImage: 'url("/frame_bg.svg")' }}>
          </div>
        </div>


        {/* 3rd */}
        <div className="flex group max-w-[90vw] relative">
          <div id="card-0" className="flex flex-col justify-between w-full sm:w-96 bg-zinc-900 border-2 border-zinc-600 p-6 rounded-2xl shadow-xl gradient-border transition-all ease-in-out z-10">
            <div className="">
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-white">Digital Resume</h2>
                <p className="mt-3 text-base text-zinc-200">A digital resume website built based on the content from my personal REAL resume.</p>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-between w-full">
              <a href="https://kin156.github.io/Digital-Resume/" target="_blank" id="card-link-0" rel="noopener noreferrer" className="flex px-6 py-2 border-2 border-zinc-600 mt-4 rounded-md w-max justify-center items-center gap-2 gradient-border">Visit
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up-right-from-square" className="svg-inline--fa fa-arrow-up-right-from-square w-4 h-4 text-zinc-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"></path>
                </svg>
              </a>
              
            </div>
          </div>
          <div id="card-bg-0" className="w-full sm:w-96 absolute h-full left-2 top-2 border-2 group-hover:border-0 border-zinc-600 group-hover:bg-zinc-600 rounded-2xl card-bg overflow-hidden" style={{ backgroundImage: 'url("/frame_bg.svg")' }}>
          </div>
        </div>

        {/* 4th */}
        <div className="flex group max-w-[90vw] relative">
          <div id="card-0" className="flex flex-col justify-between w-full sm:w-96 bg-zinc-900 border-2 border-zinc-600 p-6 rounded-2xl shadow-xl gradient-border transition-all ease-in-out z-10">
            <div className="">
            
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-white">YTMP : YouTube Music Player</h2>
                <p className="mt-3 text-base text-zinc-200">It is the First and the Only YouTube Music Player that lets you play any youtube video as audio with tons of features such as Background play, Playlist merger, No Ads, and many more for free while saving up to 98% of your data.</p>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-between w-full">
              <a href="https://ytmp.itsvg.in" target="_blank" id="card-link-0" rel="noopener noreferrer" className="flex px-6 py-2 border-2 border-zinc-600 mt-4 rounded-md w-max justify-center items-center gap-2 gradient-border">Visit
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up-right-from-square" className="svg-inline--fa fa-arrow-up-right-from-square w-4 h-4 text-zinc-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"></path>
                </svg>
              </a>
              
            </div>
          </div>
          <div id="card-bg-0" className="w-full sm:w-96 absolute h-full left-2 top-2 border-2 group-hover:border-0 border-zinc-600 group-hover:bg-zinc-600 rounded-2xl card-bg overflow-hidden" style={{ backgroundImage: 'url("/frame_bg.svg")' }}>
          </div>
        </div>

        {/* 5th */}
        <div className="flex group max-w-[90vw] relative">
          <div id="card-0" className="flex flex-col justify-between w-full sm:w-96 bg-zinc-900 border-2 border-zinc-600 p-6 rounded-2xl shadow-xl gradient-border transition-all ease-in-out z-10">
            <div className="">
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-white">YTMP : YouTube Music Player</h2>
                <p className="mt-3 text-base text-zinc-200">It is the First and the Only YouTube Music Player that lets you play any youtube video as audio with tons of features such as Background play, Playlist merger, No Ads, and many more for free while saving up to 98% of your data.</p>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-between w-full">
              <a href="https://ytmp.itsvg.in" target="_blank" id="card-link-0" rel="noopener noreferrer" className="flex px-6 py-2 border-2 border-zinc-600 mt-4 rounded-md w-max justify-center items-center gap-2 gradient-border">Visit
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up-right-from-square" className="svg-inline--fa fa-arrow-up-right-from-square w-4 h-4 text-zinc-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"></path>
                </svg>
              </a>
              
            </div>
          </div>
          <div id="card-bg-0" className="w-full sm:w-96 absolute h-full left-2 top-2 border-2 group-hover:border-0 border-zinc-600 group-hover:bg-zinc-600 rounded-2xl card-bg overflow-hidden" style={{ backgroundImage: 'url("/frame_bg.svg")' }}>
          </div>
        </div>

        {/* 6th */}
        <div className="flex group max-w-[90vw] relative">
          <div id="card-0" className="flex flex-col justify-between w-full sm:w-96 bg-zinc-900 border-2 border-zinc-600 p-6 rounded-2xl shadow-xl gradient-border transition-all ease-in-out z-10">
            <div className="">
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-white">YTMP : YouTube Music Player</h2>
                <p className="mt-3 text-base text-zinc-200">It is the First and the Only YouTube Music Player that lets you play any youtube video as audio with tons of features such as Background play, Playlist merger, No Ads, and many more for free while saving up to 98% of your data.</p>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-between w-full">
              <a href="https://ytmp.itsvg.in" target="_blank" id="card-link-0" rel="noopener noreferrer" className="flex px-6 py-2 border-2 border-zinc-600 mt-4 rounded-md w-max justify-center items-center gap-2 gradient-border">Visit
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up-right-from-square" className="svg-inline--fa fa-arrow-up-right-from-square w-4 h-4 text-zinc-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"></path>
                </svg>
              </a>
              
            </div>
          </div>
          <div id="card-bg-0" className="w-full sm:w-96 absolute h-full left-2 top-2 border-2 group-hover:border-0 border-zinc-600 group-hover:bg-zinc-600 rounded-2xl card-bg overflow-hidden" style={{ backgroundImage: 'url("/frame_bg.svg")' }}>
          </div>
        </div>

      </div>

      
      <a href="https://github.com/KIN156" target="_blank" rel="noopener noreferrer">
        <p className="text-s w-full flex justify-end font-light">*Check GitHub for More Projects</p>
      </a>
</div>

  );
}
