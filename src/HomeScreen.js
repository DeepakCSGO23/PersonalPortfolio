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
    <div className=''>
    <div className='flex flex-col w-[750px] p-5 mt-0 rounded-lg bg-teal-950/30 shadow-xl h-64 pl-16 pt-10 space-y-10 -mb-10 color-wave'>
      <h1 className='text-[45px] font-oswald font-bold text-black tracking-normal absolute left-96' >I am a</h1>  
      <div id="text_3d" className='text-[45px] naturebeauty tracking-widest w-96 absolute top-[350px] left-96'>
        <p>Student</p>
        <p>Engineer</p>
        <p>Web Designer</p>
        <p>Game Developer</p>
        <p>Coder</p>
      </div>  
    </div>
    <div className='relative flex items-center justify-center w-[750px] pt-1 h-96 top-20 bg-teal-950/30 rounded-lg bgcrack z-50 '>
      <div className='absolute h-full w-[800px] typewritertxt left-[320px] top-36 z-10'>
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
      <img src="laptop.webp" height="780" width="850" alt="laptop" id='typewritertxt' className='absolute left-0 -top-16'/>
    </div>
    </div>
  )
}


export default HomeScreen