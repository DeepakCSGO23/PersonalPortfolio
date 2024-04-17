import React, { useEffect } from 'react'
import {gsap} from 'gsap'
import SplitType from 'split-type'
import Typewriter from 'typewriter-effect';
function HomeScreen() {
  const tl=gsap.timeline({repeat:-1})
  useEffect(() => {
    const titles=gsap.utils.toArray("p")
    titles.forEach(title=>{
      const splitTitle=new SplitType(title)
      tl 
      .from(splitTitle.chars,{
        opacity:0,
        y:80,
        rotateX:-90,
        stagger:.02,
      },"<")
      .to(splitTitle.chars,{
        opacity:0,
        y:-15,
        rotateX:90,
        stagge:.02,
      },"<1")
    })
},[]) 
  return (
    <div>
    <div className='flex flex-col w-[750px] relative right-8 h-64'>
    <img src='mail.svg' height="30px" width="30px" alt='email' className='absolute top-2 right-72 cursor-pointer'></img>
      <h1 className=' absolute right-32 top-3 cursor-pointer z-20'><a href='mailto:kkvdhoorika@gmail.com'>kkvdhoorika@gmail.com</a></h1>
      <img src='phone.svg' height="30px" width="30px" alt='phone' className='absolute top-14 right-72 cursor-pointer'></img>
      <h1 className=' absolute right-[203px] top-14 cursor-pointer z-20'><a href='mailto:kkvdhoorika@gmail.com'>9150482153</a></h1>
      <h1 className='text-[45px] text-black roboto_regular' >I am a</h1>  
      
      <div id="text_3d" className='text-[45px] font-nature relative top-4 tracking-widest w-96'>
        <p>Student</p>
        <p>Engineer</p>
        <p>Web Designer</p>
        <p>Game Developer</p>
        <p>Coder</p>
      </div>  
    </div>
    <div className='absolute flex items-center justify-start h-[50vh] bottom-0 bg-teal-950/30 w-[100%] left-0 bgcrack z-50'>
      <div className='absolute h-full w-[800px] typewritertxt left-[400px] top-48 z-10'>
      <Typewriter onInit={(typewriter)=>{
        typewriter.typeString("CREATIVITY")
        .pauseFor(10)
        .deleteAll()
        .start()
        .typeString("SELF-DISCIPLINE")
        .pauseFor(10)
        .deleteAll()
        .start()
        .typeString("PERSEVERANCE")
        .pauseFor(10)
        .deleteAll()
        .start()
        .typeString("LOGICAL SKILLS")
        .pauseFor(10)
        .deleteAll()
        .start()
        .typeString("POSITIVE MINDSET")
      }}
      options={{loop:true}}
      />
      </div>
      <img src="laptop.webp" height="800" width="900" alt="laptop" id='typewritertxt' className='relative'/> 
    </div>
    </div>
  )
}


export default HomeScreen