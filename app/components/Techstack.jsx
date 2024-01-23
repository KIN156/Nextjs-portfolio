import React from 'react'

export default function Techstack() {
  return (
    <div className="z-10 w-full h-max tech-stack flex flex-col md:flex-row justify-center items-center text-zinc-100 opacity-95 mt-20 sm:mt-52 md:mt-20">
    <div className="w-6/12 flex justify-center items-center">
    <img src="/hero2.svg" alt="" className="hidden md:flex w-full select-none pointer-events-none" draggable="false"/>
    </div>

    <div className="w-full px-2 text-center flex flex-col md:px-0 md:w-6/12">
        <p className="flex justify-center text-3xl font-semibold">TECH STACK:</p>
        <div className="flex flex-col justify-center items-center mt-4">
            <p className="text-xl mt-4 md:mt-1">Languages:</p>
            <div className="flex flex-row flex-wrap justify-center">
            <img src="https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&amp;logoColor=%23F7DF1E" alt="" className="m-2 md:m-3 h-8 select-none transition-all ease-in-out hover:scale-110" draggable="false"/>
            <img src="https://img.shields.io/badge/java-%23ED8B00.svg?logo=java&amp;logoColor=white" alt="" className="m-2 md:m-3 h-8 select-none transition-all ease-in-out hover:scale-110" draggable="false"/>
            <img src="https://img.shields.io/badge/css3-%231572B6.svg?logo=css3&amp;logoColor=white" alt="" className="m-2 md:m-3 h-8 select-none transition-all ease-in-out hover:scale-110" draggable="false"/>
            <img src="https://img.shields.io/badge/html5-%23E34F26.svg?logo=html5&amp;logoColor=white" alt="" className="m-2 md:m-3 h-8 select-none transition-all ease-in-out hover:scale-110" draggable="false"/>
            <img src="https://img.shields.io/badge/python-green?style=flat&logo=python&logoColor=Yellow" alt="" className="m-2 md:m-3 h-8 select-none transition-all ease-in-out hover:scale-110" draggable="false"/>
            <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="" className="m-2 md:m-3 h-8 select-none transition-all ease-in-out hover:scale-110" draggable="false"/>

        </div>
        
        <div className="flex flex-col justify-center items-center mt-4">
            <p className="text-xl mt-4 md:mt-1">Framework/Library:</p>
            <div className="flex flex-row flex-wrap justify-center">
            <img src="https://img.shields.io/badge/Next-black?logo=next.js&amp;logoColor=white" alt="" className="m-2 md:m-3 h-8 select-none transition-all ease-in-out hover:scale-110" draggable="false"/>
            <img src="https://img.shields.io/badge/react-%2320232a.svg?logo=react&amp;logoColor=%2361DAFB" alt="" className="m-2 md:m-3 h-8 select-none transition-all ease-in-out hover:scale-110" draggable="false"/>
            <img src="https://img.shields.io/badge/Flask-black?style=flat&logo=flask&logoColor=Yellow" alt="" className="m-2 md:m-3 h-8 select-none transition-all ease-in-out hover:scale-110" draggable="false"/>
            <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="" className="m-2 md:m-3 h-8 select-none transition-all ease-in-out hover:scale-110" draggable="false"/>
            <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?logo=tailwind-css&amp;logoColor=white" alt="" className="m-2 md:m-3 h-8 select-none transition-all ease-in-out hover:scale-110" draggable="false"/>
            <img src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?logo=bootstrap&amp;logoColor=white" alt="" className="m-2 md:m-3 h-8 select-none transition-all ease-in-out hover:scale-110" draggable="false"/>
            <img src="https://img.shields.io/badge/SASS-hotpink.svg?logo=SASS&amp;logoColor=white" alt="" className="m-2 md:m-3 h-8 select-none transition-all ease-in-out hover:scale-110" draggable="false"/>
            </div>  
        </div>

        <div className="flex flex-col justify-center items-center mt-4">
            <p className="text-xl mt-4 md:mt-1">Databases:</p>
            <div className="flex flex-row flex-wrap justify-center">
            <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="" className="m-2 md:m-3 h-8 select-none transition-all ease-in-out hover:scale-110" draggable="false"/>
            <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="" className="m-2 md:m-3 h-8 select-none transition-all ease-in-out hover:scale-110" draggable="false"/>
            <img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" alt="" className="m-2 md:m-3 h-8 select-none transition-all ease-in-out hover:scale-110" draggable="false"/>
            <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="" className="m-2 md:m-3 h-8 select-none transition-all ease-in-out hover:scale-110" draggable="false"/>
            </div>  
        </div>

        <div className="flex flex-col justify-center items-center mt-4">
            <p className="text-xl mt-4 md:mt-1">Cloud Technologies:</p>
            <div className="flex flex-row flex-wrap justify-center">
            <img src="https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" alt="" className="m-2 md:m-3 h-8 select-none transition-all ease-in-out hover:scale-110" draggable="false"/>
            </div>  
        </div>


        <div className="flex flex-col justify-center items-center mt-4">
            <p className="text-xl mt-4 md:mt-1">Design: </p>
            <div className="flex flex-row flex-wrap justify-center">
            <img src="https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=for-the-badge&logo=Canva&logoColor=white" alt="" className="m-2 md:m-3 h-8 select-none transition-all ease-in-out hover:scale-110" draggable="false"/>
            <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="" className="m-2 md:m-3 h-8 select-none transition-all ease-in-out hover:scale-110" draggable="false"/>
            </div>  
        </div>


        <div className="flex flex-col justify-center items-center mt-4">
            <p className="text-xl mt-4 md:mt-1">Version Control:</p>
            <div className="flex flex-row flex-wrap justify-center">
            <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="" className="m-2 md:m-3 h-8 select-none transition-all ease-in-out hover:scale-110" draggable="false"/>
            <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="" className="m-2 md:m-3 h-8 select-none transition-all ease-in-out hover:scale-110" draggable="false"/>
            </div>  
        </div>



    </div>
    </div>
    </div>
  )
}
