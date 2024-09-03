import React, { useState } from 'react'
import HomeScreen from './HomeScreen'
import Navbar from './Navbar'
import { Link } from "react-router-dom";
function App() {
  const [open,setOpen]=useState(true);
  return (
    <main className='flex w-screen h-screen mainpage roboto_light'>
      <div className='relative w-[650px] p-3 pt-7 duration-500 bg-side-theme/90'>
        <div className={`flex-flex-column space-y-8 relative left-5  duration-500 `}>
          <img className={` ${!open && "scale-0"} rounded-full items-center absolute right-44 top-8 border-2 p-3 border-black`} src="/circleavatar.webp" height="150px" width="150px" alt='circleavatar'/>
        <div className={` duration-500 ${!open && "scale-0"} text-xs flex flex-row space-x-16`}>
    
        </div>
        <div className='space-y-8 relative left-12 top-52'>
        <div className='flex flex-row space-x-3'>
          
          <img className={`${!open && "scale-0"} duration-500 cursor-pointer `} src="/home.svg" width="50" height="50" alt="home" />
          <h1 className={`${!open && "scale-0"} duration-500  text-[30px]  hover:text-[40px]  cursor-pointer p-3 rounded-xl hover:bg-slate-500/30`}>HOME</h1>
    
        </div>

        <div className='flex flex-row space-x-4'>
          <img className={`${!open && "scale-0"} duration-500 cursor-pointer relative left-1`} src="/skills.svg" width="45" height="45" alt="skills" />
          <h2 className={`${!open && "scale-0"} duration-500 text-[30px] hover:text-[40px] cursor-pointer p-3 rounded-xl hover:bg-slate-500/30`}><Link to="skills">SKILLS</Link></h2>
        </div>
        <div className='flex flex-row space-x-3'>
          <img className={`${!open && "scale-0"} duration-500 cursor-pointer`} src="/Certificate.svg" width="50" height="50" alt="home" />
          <h1 className={`${!open && "scale-0"} duration-500 text-[30px]  hover:text-[40px] cursor-pointer p-3 rounded-xl hover:bg-slate-500/30`}><Link to='Certificate'> CERTIFICATES</Link></h1>
        </div>
        <div className='flex flex-row space-x-3'>
          <img className={`${!open && "scale-0"} duration-500 cursor-pointer`} src="/experience.svg" width="50" height="50" alt="home" />
          <h1 className={`${!open && "scale-0"} duration-500 text-[30px]  hover:text-[40px] cursor-pointer p-3 rounded-xl hover:bg-slate-500/30`}><Link to='/experience'> EXPERIENCE</Link></h1>
        </div>
      
        <div className='flex flex-row space-x-3'>
          <img className={`${!open && "scale-0"} duration-500 cursor-pointer`} src="/Projects.svg" width="50" height="50" alt="home" />
          <h1 className={`${!open && "scale-0"} duration-500 text-[30px]  hover:text-[40px] cursor-pointer p-3 rounded-xl hover:bg-slate-500/30`}><Link to="/project">PROJECTS</Link></h1>
        </div>
        
        <div className='flex flex-row space-x-3'>
        
          <img className={`${!open && "scale-0"} duration-500 cursor-pointer`} src="/resume.svg" width="50" height="50" alt="home" />
          <h1 className={`${!open && "scale-0"} duration-500 text-[30px]  hover:text-[40px] cursor-pointer p-3 rounded-xl hover:bg-slate-500/30`}><a href='DeepakKNCSE2024Updated.pdf' target='_blank'>RESUME</a></h1>
          
        </div>
        
          </div>
      </div>
      </div>
      <div className='relative w-screen p-56 font-normal  bg-[#d0d0d0] bgclass'>

      <h1 className='absolute left-[1vh] flex items-center roboto_bold justify-center text-8xl top-20 w-[80%] via-slate-500 from-[#96bbbe] text-transparent bg-clip-text bg-gradient-to-r to-slate-300 tracking-[2vh] roboto_bold'>DEEPAK K.N
      </h1>  
      <Navbar/>
      <HomeScreen/>
      </div>
    </main>

  );
}

export default App;
