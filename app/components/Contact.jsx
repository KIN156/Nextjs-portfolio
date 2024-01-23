import React from 'react';

export default function Contact() {
  return (
    <div id="contact" className="sm:py-10 md:pb-20 w-full">
      <div className="z-10 w-full h-max flex relative text-violet-200  flex-col md:flex-row justify-center items-center text-sm sm:text-l md:text-xl font-bold transform transition-all duration-300 ease-in-out">
        <div className="w-full md:w-5/12 hidden md:flex justify-center items-center">
          <p className="w-12/18 select-none pointer-events-none">I appreciate you taking the time to visit my portfolio. Lets talk about how I can add value to your team. Connect with me on LinkedIn or drop me an email. </p>
        </div>
        <div className="w-full md:w-6/12 flex flex-col justify-center items-center">
          <p className="flex justify-center mt-20 md:mt-10 text-amber-200">CONTACT</p>
          <div className="flex flex-row justify-center py-12 items-center">
            {/* GitHub */}
            <div className="mx-2 sm:mx-4 rounded-full bg-fuchsia-200 p-2.5 sm:p-4 ring-2 sm:ring-4 ring-fuchsia-300/30 group transition-all ease-in-out duration-500" title="GitHub">
              <a href="https://github.com/VishwaGauravIn" target="_blank" rel="noopener noreferrer" className="" aria-label="GitHub">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-8 h-8 sm:w-10 sm:h-10 text-fuchsia-900 group-hover:scale-75 transition-all ease-in-out duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
              </a>
            </div>

            {/* LinkedIn */}
            <div className="mx-2 sm:mx-4 rounded-full bg-blue-200 p-2.5 sm:p-4 ring-2 sm:ring-4 ring-blue-300/30 group transition-all ease-in-out duration-500" title="LinkedIn">
              <a href="https://linkedin.com/in/VishwaGauravIn" target="_blank" rel="noopener noreferrer" className="" aria-label="LinkedIn">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-8 h-8 sm:w-10 sm:h-10 text-blue-900 group-hover:scale-75 transition-all ease-in-out duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                </svg>
              </a>
            </div>
            {/* Send Mail */}
            <div className="mx-2 sm:mx-4 rounded-full bg-rose-200 p-2.5 sm:p-4 ring-2 sm:ring-4 ring-rose-300/30 group transition-all ease-in-out duration-500" title="Send Mail">
              <a href="mailto:vishwagauravin@gmail.com" target="_blank" rel="noopener noreferrer" className="" aria-label="Send Mail">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-8 h-8 sm:w-10 sm:h-10 text-rose-900 group-hover:scale-75 transition-all ease-in-out duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.313l6.709 3.933L8 8.928l1.291.717L16 5.715V5.4a2 2 0 0 0-1.059-1.765l-6-3.2zM16 6.873l-5.693 3.337L16 13.372v-6.5zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516zM0 13.373l5.693-3.163L0 6.873v6.5z"></path>
                </svg>
              </a>
            </div>
          </div>
          <a href="/Resume_web.pdf" download="">
            <div className="mx-2 sm:mx-4 rounded-full bg-emerald-200 text-emerald-900 p-2.5 sm:py-4 px-8 ring-2 sm:ring-4 ring-emerald-300/30 group transition-all ease-in-out text-xl sm:text-2xl font-semibold flex justify-center items-center hover:bg-emerald-300" title="Download CV">
              Resume
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-900 ml-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path>
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
