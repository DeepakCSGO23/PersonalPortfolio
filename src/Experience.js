import React, { useEffect} from 'react'
import gsap from 'gsap'
import Fade from 'react-reveal/Fade'
import Lenis from '@studio-freight/lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'
gsap.registerPlugin(ScrollTrigger);
export default function Experience() {
  const lenis = new Lenis() 
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  useEffect(() => {
    const canvas=document.querySelector('canvas')
    canvas.width=window.innerWidth
    canvas.height=window.innerHeight
    const context=canvas.getContext("2d")
    const totalframes=226
    const images=[]
    let ball={frame:0}
    const currentframe=(index)=>`/human_animation/${(index+1).toString()}.webp`
    for(let i=0;i<totalframes;i++){
      const img=new Image();
      img.src=currentframe(i);
      images.push(img)
    }
    gsap.to(ball,{
      frame:totalframes-1,
      snap: "frame",
      ease: "none",
      scrollTrigger:{
        scrub: true,
        pin: "canvas",
        end:"240%",
        onUpdate: render,
      }
    })
    images[0].onload=render
    function render(){
      context.canvas.width = images[0].width
      context.canvas.height = images[0].height    
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.drawImage(images[ball.frame],0,0)
    }
    const canvas1=document.getElementById('canvas1')
    canvas1.width=window.innerWidth
    canvas1.height=window.innerHeight
    const context1=canvas1.getContext("2d")
    const totalframes1=100
    const images1=[]
    let ball1={frame1:0}
    const currentframe1=(index)=>`/human_dive/${(index+1).toString()}.webp`
    for(let i=0;i<totalframes1;i++){
      const img=new Image();
      img.src=currentframe1(i);
      images1.push(img)
    }
    gsap.to(ball1,{
      frame1:totalframes1-1,
      snap: "frame1",
      ease: "none",
      scrollTrigger:{
        scrub: true,
        pin: "#canvas1",
        end:"180%",
        onUpdate: render1,
      }
    })
    console.log(window.scrollY)
    images1[0].onload=render1
    function render1(){
      context1.canvas.width = images1[0].width
      context1.canvas.height = images1[0].height    
      context1.clearRect(0, 0, canvas1.width, canvas1.height)
      context1.drawImage(images1[ball1.frame1],0,0)
    }
  gsap.to(".bganim",{clipPath:'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',duration:0.7})
  gsap.to(".bganim1",{clipPath:'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',duration:0.7},'+=.01')
  //onscroll-scaleY animation
  const texts=gsap.utils.toArray('.sampletxt')
  texts.forEach(text=>{
    const splittedtext=new SplitType(text)
    gsap.from(splittedtext.chars,{
      scrollTrigger:{
        trigger: text,
        start:'top 80%',
        end:'top 20%',
        scrub:true,

      },
      y:-20,
      stagger:0.1,
      scaleY:0,
      duration:1,
    })
  }  
  )
  var x
  const imageslogo=gsap.utils.toArray(['.gsaplogo','.tailwindlogo','.framermotionlogo','.ailogo','.aplogo'])
    //console.log(imageslogo[1])
    gsap.from(imageslogo,{
      scrollTrigger:{
        trigger:imageslogo[0]
      },
      opacity:0,
      duration:3,
      stagger:0.35
    })
  },[])
  return (
    <div className='expbody absolute flex flex-row w-full h-[720vh] bg-[#404040] exp_page roboto_light '>
      <canvas width="200" height="200" className='absolute bg-[#404040] '>
      </canvas>
    <div className='absolute w-screen h-screen bg-teal-950 bganim'>
    </div>
    <div className='absolute w-screen h-screen bg-black bganim1'>
    </div>
    <Fade left delay={1200}>
    <div className='absolute w-[800px] h-32 transition-colors duration-500 shadow-2xl bg-teal-900/30 rounded-xl -left-2 firsti top-20 hover:bg-teal-950/40'>
      <img src='ue.svg' alt='unrealenginelogo' width="60px" className='absolute right-10 top-7 '></img>
      <p id='ue_text1' className='absolute text-5xl tracking-widest text-white font-break w-96 left-52 top-10'>UNREAL ENGINE</p>
    </div>
    </Fade>
      <h1 id='des' className='absolute h-48 text-2xl leading-10 top-72 right-24 w-[600px] text-white  '>  "During my school days, I developed my own 3D game using <span className='text-[#90bfc5]'>Unreal Engine 3</span> and have a good passion for Game Development."</h1>
      <div className='flex flex-row'>
      <div className='relative w-[750px] top-[432px] h-96'>
      <img id='ue1' alt='unrealengineproject'  src='/ue1.webp' height="10px" width="990px" className='relative border-4 border-black shadow-2xl cursor-pointer top-12 left-10 rounded-xl'/>
      </div>
      <div className='relative w-[600px] top-[480px] left-44 text-xl'>
        <p className='p-10 text-2xl leading-10 text-white rounded-2xl h-[455px]'><span className='text-[#90bfc5] '>Unreal Engine 3</span> is the first Game Development software i have worked upon and I'am glad i did I  have made my first game during my 12th grade which was a 3D Shooter where the hero simply kills the randomly spawning bots around the terrain, well actually i have lost the UE3 project file hence i have attached a different picture</p>
        <Fade left duration={1000}>
        <div className=' absolute w-[900px] transition-colors duration-500 shadow-2xl top-[690px] right-[737px] bg-teal-900/30 rounded-xl secondi h-28 hover:bg-teal-950/40'>
           <img src='figma.svg' alt='figmalogo' width="45px" className='absolute top-5 right-14'></img>
           <p id='ue_text2' className='absolute  font-break tracking-widest text-5xl w-[900px] left-80 top-10 text-white'> FIGMA</p>
        </div>
        </Fade>
        <div className='relative w-[600px] p-10 top-[670px] right-0 text-black rounded-xl'>
       <p className='text-2xl leading-10 text-white sampletxt'>Food Ordering application project for the course provided by META via Coursera where i have learnt matching colors with the company specification, padding, fontography, font size, font padding, working with images, grids, Designing interactive components using auto layout and more.</p>
       </div>
       <div className='relative w-[600px] p-10 -bottom-[792px] text-black '>
       <p className='text-2xl text-white sampletxt'><span className='text-[#90bfc5]'>Designing</span> part is very interesting as it makes you think of all the possible color, font, padding, border, margin, rounded edges, usage of svgs, shapes... combinations which could affect the appearance of a site drastically.</p>
       </div>
       <Fade left duration={1000}>
        <div className='relative w-[815px] transition-colors duration-500 shadow-2xl  top-[1150px] right-[950px] bg-teal-900/30 rounded-xl secondi h-28 hover:bg-teal-950/40'>
           <img src='blender_logo.svg' alt='blenderlogo' width="200px" className='absolute top-7 right-14'></img>
           <p id='ue_text2' className='absolute  font-break tracking-widest  text-5xl w-[900px] left-60 top-10 text-white'>  BLENDER</p>
        </div>
        </Fade>
        <div className='absolute top-[2600px] flex flex-col space-y-48'>
          <img src='Blenderproject.webp' alt='blenderproject' width="1800px" height="1500px" className='border-4 border-black  scale-125 rounded-xl absolute -left-[800px]'/>
          <div className='relative w-[607px] p-10  -top-60 text-white rounded-xl h-[300px]'>
          <p className='relative mt-2 text-2xl sampletxt'>
            Iam a little familiar with modelling ,camera angles , animation and rigging in <span className='text-[#90bfc5]'> Blender</span>
          </p>
          </div>
        </div>
        <Fade left duration={1000}>
        <div className='reactslide relative w-[815px] transition-colors duration-500 shadow-2xl  top-[2150px] right-[950px] bg-teal-900/30 rounded-xl secondi h-28 hover:bg-teal-950/40'>
           <img src='react.svg' width="50px" alt='reactlogo' className='absolute top-7 right-14'></img>
           <p id='ue_text2' className='absolute  font-break tracking-widest  text-5xl w-[900px] left-60 top-10 text-white'>  REACT</p>
        </div>
        </Fade>
        <canvas width="900" height="900" id='canvas1' className='bg-[#404040] top-[3190px] absolute -left-[945px]'>
        </canvas>
        <div className='relative top-[2490px] right-[885px] h-[800px] w-screen flex flex-row '>
          <img src='reactp.webp' width="755px" height="700px"  alt='reactproject' className='border-2 border-black rounded-xl'/>
          <div className='flex flex-col space-y-48'>
          <div className='relative w-[607px] p-10 left-32  h-[300px]'>
          <p className='relative mt-2 text-2xl text-white sampletxt'>
            Web Development is by far my favourite field to work. Currently Iam trying to master the back-end technologies also since I love learning new technologies in future I plan in building a ecommerce website 
          </p>
          </div>
          <div className='relative w-[607px] p-10 left-32  h-[300px]'>
          <p className='relative mt-2 text-2xl text-white sampletxt'>
            This portfolio website itself is the first <span className='text-[#90bfc5]'>React</span> project Im currently working on. As i gain knowledge about new techniques i will update the portfolio.The best thing about <span className='text-[#90bfc5]'>React</span> is the option to reuse components
          </p>
          </div>
          </div>
        </div>
        <Fade left duration={1000}>
        <div className='relative w-[815px] transition-colors duration-500 shadow-2xl  top-[2800px] right-[950px] bg-teal-900/30 rounded-xl secondi h-28 hover:bg-teal-950/40'>
           <img src='github.svg' alt='githublogo' width="50px" className='absolute top-7 right-14'></img>
           <p id='ue_text2' className='absolute  font-break tracking-widest  text-5xl w-[900px] left-60 top-10 text-white'>  GITHUB , GIT</p>
        </div>
        </Fade>
        <div className='relative top-[3140px] right-[885px] h-[800px] w-screen flex flex-row '>
          <img src='Githubp.webp' width="755px" height="700px"  alt='githubproject' className='relative scale-y-75 border-2 border-black -top-16 rounded-xl'/>
          <div className='flex flex-col space-y-48'>
          <div className='relative w-[607px] p-10 left-32 top-9  text-white h-[300px]'>
          <p className='relative mt-2 text-2xl sampletxt'>
            I have used <span className='text-[#90bfc5]'>Github</span> many times in my previous projects and really like the fact that you can explore others project and understand the methodolody
          </p>
          </div>

          </div>
        </div>
        <div className='relative top-[3800px] -left-[400px] scale-125 bg-black'>
          <div className='absolute w-screen -left-[700px] -top-[460px] bg-gradient-to-r from-teal-950 to-teal-900 h-14'>
          </div>
          <p className='absolute text-4xl font-break -top-72'>
          "You can't use up creativity. The more you use, the more you have." - Maya Angelou
          </p>
          <img className='absolute top-32 left-10 gsaplogo' src='gsap.svg' alt='gsaplogo' width="80px" height="80px"/>
          <img className='absolute left-24 tailwindlogo' src='tailwindlogo.svg' alt='tailwindlogo' width="100px" height="100px"/>
          <img className='absolute left-64 -top-32 framermotionlogo' src='framermotion.svg' alt='framermotion' width="80px" height="100px"/>
          <img className='absolute -top-3 left-[400px] ailogo' src='adobe-illustrator-logo.svg' alt='ailogo' width="80px" height="100px"/>
          <img className='absolute top-32 left-[468px] aplogo' src='adobe-photoshop-logo.svg' alt='aplogo' width="85px" height="85px"/>
          <img className='absolute scale-y-110 top-2 left-2' src='handswide.webp ' alt='handswide' width="800px" height="750px"/>
        </div>
         <div className='absolute scale-y-90 top-[900px] -left-[750px] h-[900px]'>
       <img src='/figma.png' alt='figmaproject' width="500px" height="500px" className='relative left-0 scale-x-105 scale-y-90 border-2 border-black top-32 rounded-xl'/>
       </div>
       </div>
     </div>
      </div>
  )
}
