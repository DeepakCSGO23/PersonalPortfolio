import React, { useEffect } from 'react'
import gsap from 'gsap'
import Fade from 'react-reveal/Fade'
import Lenis from '@studio-freight/lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
function About() {
  const lenis = new Lenis()
  lenis.on('scroll', (e) => {
    console.log(e)
  }) 
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  useEffect(() => {   
    gsap.from('.img1',{
      scrollTrigger:{
        trigger:".img1",
        scrub:true,
      },
      x:5000,
      duration:8,
    })
    gsap.from('.img2',{
      scrollTrigger:{
        trigger:".img2",
        scrub:true
      },
      x:-1000,
      duration:8,
    })
    gsap.from('.img3',{
      scrollTrigger:{
        trigger:".img3",
        scrub:true
      },
      x:1000,
      duration:8,
    })
    gsap.to(".bganim",{clipPath:'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',duration:0.7})
    gsap.to(".bganim1",{clipPath:'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',duration:0.7},'+=.01')
},[]) 
  return(
    <article  className='relative grid w-screen h-auto grid-cols-2 p-16 space-y-10 font-mono text-4xl bg-[#d0d0d0] shadow-2xl myclass gap-x-20 grid-' >  
    <div className='absolute w-screen h-screen bg-teal-950 bganim'>
    </div>
    <div className='absolute w-screen h-screen bg-black -top-10 bganim1'>

    </div>
      <div  className='about-1  rounded-2xl bg-teal-950/30  shadow-2xl shadow-[#FBEAEB]/30 mt-10 p-12 ' >
        <Fade>
        <h1 className='text-5xl tracking-wider underline decoration-pink-900 font-break'>GENUINE PASSION FOR CODING</h1><h1 className='pt-5 text-2xl leading-10 font-fira first-letter:text-6xl'> I have a deep fascination for technology and software development, and coding is not just a job for me but a genuine passion</h1>
        </Fade>
    </div>  
    <img src='/hardworker.webp' height="400px" width="400px" alt='hardworker' className='relative left-0 row-span-2 img1'/>
    <div  className=' rounded-2xl bg-teal-950/30  shadow-2xl p-12 shadow-[#FBEAEB]/30 ' >
        <Fade>
        <h1 className='text-5xl tracking-wider underline font-break decoration-pink-900'>HARDWORKING AND COMMITTED</h1>  <h1 className='pt-5 text-2xl leading-10 font-fira first-letter:text-6xl'>I am dedicated to giving my best in everything I do, and my strong work ethic ensures that I remain committed to your coding projects     </h1>
        </Fade>
    </div>
    <img src='/problemsolve.webp' height="500px" width="500px" alt='problemsolve' className='relative row-span-2 scale-75 img2 top-1 opacity-80 '/>
    <div  className=' rounded-2xl bg-teal-950/30  shadow-2xl p-12 shadow-[#FBEAEB]/30' >
        <Fade>
        <h1 className='text-5xl tracking-wider underline font-break decoration-pink-900'>PROBLEM-SOLVING MINDSET</h1><h1 className='pt-5 text-2xl leading-10 no-underline font-fira first-letter:text-6xl'> Tackling complex problems head-on and persisting until I find effective solutions is something I enjoy. I find satisfaction in writing clean, efficient code and optimizing algorithms</h1>
        </Fade>
    </div>
    <div  className=' rounded-2xl bg-teal-950/30  shadow-2xl p-12 shadow-[#FBEAEB]/30 mb-10' >
        <h1 className='text-5xl tracking-wider underline font-break decoration-pink-900'>TURNING IDEAS INTO FUNCTIONAL SOLUTIONS</h1><h1 className='pt-5 text-2xl leading-10 font-fira first-letter:text-6xl'> I find fulfillment in the process of turning ideas into functional and impactful solutions that cater to the needs of users   </h1>
    </div>
    <div  className=' rounded-2xl bg-teal-950/30  shadow-2xl p-12 shadow-[#FBEAEB]/30 ' >
        <Fade>
        <h1 className='text-5xl tracking-wider underline font-break decoration-pink-900'>CONTINUOUS LEARNING AND ADAPTATION</h1> <h1 className='pt-5 text-2xl leading-10 font-fira first-letter:text-6xl'>I actively stay updated with the latest industry trends, technologies, and programming languages. i strive to expand my knowledge base and adapt to diverse project requirements, whether it's mastering a specific language or exploring new frameworks</h1>
        </Fade>
    </div>
    <img src='/coding.webp' height="800px" width="600px" alt='coding' className='relative row-span-2 scale-x-125 scale-y-125 -top-48 -left-16 img3'/>
    <div  className=' rounded-2xl bg-teal-950/30  shadow-2xl p-12 shadow-[#FBEAEB]/30 ' >
        <Fade>
        <h1 className='text-5xl tracking-wider underline font-break decoration-pink-900'>ENTHUSIASM AND DEDICATION </h1> <h1 className='pt-5 text-2xl leading-10 font-fira first-letter:text-6xl'>I approach each project with enthusiasm and dedication, embracing the challenges that come my way</h1>
        </Fade>
    </div>
    </article>
  )
}
export default About;
