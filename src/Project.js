import React from 'react'

export default function Project() {
  return (
    <div className='h-[300vh] w-screen flex bg-gray-200 flex-col roboto_bold items-center'>
      <h1 className='absolute roboto_regular right-[7.3vw] top-[17vh]'>Freelance Projects</h1>
      <h1 className='absolute roboto_regular top-[22vh] right-32'>Personal Projects</h1>
      <svg className='absolute right-0 top-36' width="300" height="130" xmlns="http://www.w3.org/2000/svg">
   
  <rect width="30" height="30" x="10" y="10" fill="#4b5557" />
</svg>
<svg className='absolute top-48 right-0' width="300" height="130" xmlns="http://www.w3.org/2000/svg">
  <rect width="30" height="30" x="10" y="10" fill="#D0D0D0" />
</svg>
      <h1 className='mt-[15vh] text-6xl tracking-widest via-slate-500 from-[#96bbbe] text-transparent bg-clip-text bg-gradient-to-r to-slate-500'>PROJECTS</h1>
        <div className='blog h-[65vh] mt-[10vh] justify-around flex bg-[#4b5557] p-20'>
           <div className='flex flex-col h-full space-y-20 w-[50%] text-[#f0f0f0]'>
            <div className='flex space-x-4'><img src='1.svg' height="50px" width="50px"></img><h1 className='text-[#f0f0f0] text-5xl'>MERN Stack Blog Website</h1>
 </div>
            <p className='text-xl roboto_regular '>Developing a responsive blog website for a client using the MERN stack. Integrated
Firebase for authentication, MongoDB & Google Cloud Platform for data storage, and
Pako for data compression.</p><div className='flex items-center space-x-5'>
<h1><i>Click the icon to Check out the project Github Code (Private as of now)</i></h1>
<a href='https://github.com/DeepakCSGO23/BlogWebsite' target='_blank'>
<img src='githubwhite.svg' alt='githubicon' height="40px" width="40px" className='cursor-pointer duration-500 hover:scale-125'></img></a>
</div>
           </div>
            <video src='blog.mp4' className='h-[45vh] w-[39vw]' controls autoplay muted loop></video>

        </div>
        <div className='blog h-[65vh] bg-[#D0D0D0] justify-around flex text-[#212427] p-20'>
           <div className='flex flex-col h-full space-y-20 w-[50%]'>
           <div className='flex space-x-4'><img src='2.svg' height="50px" width="50px"></img>            <h1 className='text-5xl'>Smart MedicineTracker</h1>
 </div>
            <p className='text-xl roboto_regular'>  A Web app that showcase the available medicines at your nearest pharmacies, finding
 the nearest pharmacies using places API and generating random medicine datasets
 stored in MongoDB using random function & Direction API to make the Route between
 the Current Location and the Destination.
</p><div className='flex items-center space-x-5'>
<h1> <i>Click the icon to Check out the project Github Code</i></h1>
<a href='https://github.com/DeepakCSGO23/SmartMedicineTracker' target='_blank'>
<img src='github.svg' alt='githubicon' height="40px" width="40px" className='cursor-pointer duration-500 hover:scale-125'></img></a>
</div>
           </div>
            <video src='smt.mp4' className='h-[45vh] w-[39vw]' controls autoplay muted loop></video>

        </div>
        <div className='blog h-[65vh] justify-around flex bg-[#4b5557] p-20 text-[#f0f0f0]'>
           <div className='flex flex-col h-full space-y-20 w-[50%]'>
           <div className='flex space-x-4'><img src='3.svg' height="50px" width="50px"></img>            <h1 className='text-[#f0f0f0] text-5xl'>MERN Stack Church Website</h1>
 </div>
            <p className='text-xl roboto_regular'>Developing a church website using MySQL, Express.js, React.js, and Node.js. Integrated
features like event calendars, podcasts, and online donations. Leveraged React.js for the
interface and Express.js/Node.js for the backend. MySQL for data storage.</p><div className='flex items-center space-x-5'>
<h1><i>Click the icon to Check out the project Github Code (Private as of now)</i></h1>
<a href='https://github.com/DeepakCSGO23/ChurchWebsite-FREELANCE' target='_blank'>
<img src='githubwhite.svg' alt='githubicon' height="40px" width="40px" className='cursor-pointer duration-500 hover:scale-125'></img></a>
</div>

            
            {/* <a href=''></a> */}
           </div>
            <video src='fb.mp4' className='h-[45vh] w-[39vw]' controls autoplay muted loop></video>

        </div>
        <div className='blog h-[65vh] justify-around flex p-20 bg-[#D0D0D0] text-[#212427]'>
           <div className='flex flex-col h-full space-y-20 w-[50%]'>
           <div className='flex space-x-4'><img src='4.svg' height="50px" width="50px"></img>            <h1 className='text-5xl'>FlappyBird Funny Version</h1>
 </div>
            <p className='text-xl roboto_regular'>Developed a comedic version of Flappy Bird using HTML5 audio elements for making
funny sound effects. Showcases creativity in game design and expertise in front-end
development.
</p><div className='flex items-center space-x-5'>
<h1><i>Click the icon to Check out the project Github Code</i></h1>
<a href='https://github.com/DeepakCSGO23/FlappyBird' target='_blank'>
<img src='github.svg' alt='githubicon' height="40px" width="40px" className='cursor-pointer duration-500 hover:scale-125'></img></a>
</div>
           </div>
            <video src='fb.mp4' className='h-[45vh] w-[39vw]' controls autoplay muted loop></video>

        </div>
    </div>
  )
}
