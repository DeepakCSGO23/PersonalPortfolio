import React, { useState } from 'react'
import HomeScreen from './HomeScreen'
import Navbar from './Navbar'
import { Link } from "react-router-dom";
function App() {
  const [open,setOpen]=useState(true);
  return (
    <main className='flex w-screen h-screen mainpage'>
      <div className='relative w-[650px] p-3 pt-7 duration-500 bg-side-theme/90'>
        <div className={`flex-flex-column space-y-8 pt-32 pl-5 relative left-5  duration-500  `}>
          <img className={` ${!open && "scale-0"} rounded-full items-center absolute right-40 top-6 duration-500 border-2 border-black`} src="/circleavatar.webp" height="110px" width="110px" alt='circleavatar'/>
        <div className={` duration-500 ${!open && "scale-0"} text-xs flex flex-row space-x-16`}>
        <div className='flex flex-row space-x-2'>
        <img className={`${!open && "scale-0"} duration-500 cursor-pointer `} src="/mail.svg" width="15" height="15" alt="mail" />
          <h6>kkvdhoorika@gmail.com</h6>
        </div>
        <div className='flex flex-row space-x-2'>
        <img className={`${!open && "scale-0"} duration-500 cursor-pointer `} src="/phone.svg" width="15" height="15" alt="mail" />
          <h6 className=''>xxxxxxxxxxxx</h6>
        </div>
        </div>
        <div className='space-y-5 tracking-wide'>
        <div className='flex flex-row space-x-3'>
          
          <img className={`${!open && "scale-0"} duration-500 cursor-pointer `} src="/home.svg" width="50" height="50" alt="home" />
          <h1 className={`${!open && "scale-0"} duration-500  text-[35px] font-calluna font-light hover:text-[47px]  cursor-pointer p-3 rounded-xl hover:bg-slate-500/30`}>HOME</h1>
    
        </div>
        <div className='flex flex-row space-x-3'>
          <img className={`${!open && "scale-0"} duration-500 cursor-pointer`} src="/about.svg" width="50" height="50" alt="about" />
          <h1 className={`${!open && "scale-0"} duration-500 text-[35px] font-calluna font-light hover:text-[47px] cursor-pointer p-3 rounded-xl hover:bg-slate-500/30`}><a href='/About'>ABOUT</a></h1>
        </div>
        <div className='flex flex-row space-x-3'>
          <img className={`${!open && "scale-0"} duration-500 cursor-pointer`} src="/skills.svg" width="50" height="50" alt="skills" />
          <h2 className={`${!open && "scale-0"} duration-500 text-[35px] font-calluna font-light hover:text-[47px] cursor-pointer p-3 rounded-xl hover:bg-slate-500/30`}><Link to="skills">SKILLS</Link></h2>
        </div>
        <div className='flex flex-row space-x-3'>
          <img className={`${!open && "scale-0"} duration-500 cursor-pointer`} src="/Certificate.svg" width="50" height="50" alt="home" />
          <h1 className={`${!open && "scale-0"} duration-500 text-[35px] font-calluna font-light hover:text-[47px] cursor-pointer p-3 rounded-xl hover:bg-slate-500/30`}><Link to='Certificate'> CERTIFICATES</Link></h1>
        </div>
        <div className='flex flex-row space-x-3'>
          <img className='-ml-2 duration-500 scale-75 cursor-pointer' src="/technology.png" width="65" height="20" alt="home" />
          <h1 className={`${!open && "scale-0"} duration-500 text-[35px] font-calluna font-light hover:text-[47px] cursor-pointer p-3 rounded-xl hover:bg-slate-500/30`}><a href='/Experience'>TECHNOLOGY</a></h1>
        </div>
        <div className='flex flex-row space-x-3'>
          <img className={`${!open && "scale-0"} duration-500 cursor-pointer`} src="/experience.svg" width="50" height="50" alt="home" />
          <h1 className={`${!open && "scale-0"} duration-500 text-[35px] font-calluna font-light hover:text-[47px] cursor-pointer p-3 rounded-xl hover:bg-slate-500/30`}><Link to='/'>EXPERIENCE</Link></h1>
          </div>
        <div className='flex flex-row space-x-3'>
          <img className={`${!open && "scale-0"} duration-500 cursor-pointer`} src="/Projects.svg" width="50" height="50" alt="home" />
          <h1 className={`${!open && "scale-0"} duration-500 text-[35px] font-calluna font-light hover:text-[47px] cursor-pointer p-3 rounded-xl hover:bg-slate-500/30`}><Link to="/">PROJECT</Link></h1>
        </div>
 
          </div>
      </div>
      </div>
      <div className='relative w-screen p-56 font-normal  bg-[#d0d0d0] bgclass'>

      <h1 className='absolute flex items-center justify-center h-12 text-2xl tracking-wider font-oswald top-20  w-[750px] rounded-lg shadow-xl bg-teal-950/30 font-bold'>MY NAME IS DEEPAK & IAM A 20-YEAR OLD PROGRAMMER
      </h1>  
      <Navbar/>
      <HomeScreen/>
      </div>
    </main>

  );
}

export default App;
