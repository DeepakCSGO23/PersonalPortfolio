import React from 'react'
import {motion as m} from 'framer-motion'
import Lenis from '@studio-freight/lenis'
function Certificate() {
  const lenis = new Lenis() 
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  return (
    <m.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:"1"}} className='flex flex-col w-full h-full overflow-hidden bg-[#d0d0d0]'>
        <div className='relative grid grid-cols-3 gap-10 p-16 m-8 grid-animation top-10'>     
            <img src='/certificates/cpp.png'  alt='java' className='duration-300 card1 hover:scale-110 h-full w-full object-cover'/>
            <img src='/certificates/htmlcss.png'  alt='java' className='duration-300 card1 hover:scale-110 h-full w-full object-cover'/>
            <img src='/certificates/react.png'  alt='java' className='duration-300 card1 hover:scale-110 h-full w-full object-cover'/>
            <img src='/certificates/meta.png'  alt='java' className='duration-300 card1 hover:scale-110 h-full w-full object-cover'/>
            <img src='/certificates/css.png'  alt='java' className='duration-300 card1 hover:scale-110 h-full w-full object-cover'/>
            <img src='/certificates/js.png'  alt='java' className='duration-300 card1 hover:scale-110 h-full w-full object-cover'/>
            <img src='/certificates/ml.png' width="1000px" height="1000px" alt='java' className='duration-300 card1 hover:scale-110'/>           
            <img src='/certificates/seo.png'  alt='java' className='duration-300 card1 hover:scale-110 h-full w-full object-cover'/>
            <img src='/certificates/HTML&CSS.png'  alt='html&css' className='duration-300 card1 hover:scale-110 h-full w-full object-cover'/>
        </div>
    </m.div>
  )
}
export default Certificate