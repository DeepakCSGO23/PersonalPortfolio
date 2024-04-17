import React from 'react'

export default function Navbar() {
  return (
    <div className='absolute top-0 right-0 h-screen list-none mainpage w-80 text-7xl bg-gradient-to-r from-side-theme to-gray-500/50'>
      <nav>
        <ul className='flex flex-col mt-20 ml-16 space-y-8 items-start'>
        <li className='cursor-pointer hover:scale-125 flex items-center duration-500 space-x-2'><a href='https://github.com/DeepakCSGO23' target='_blank'><img src='/github.svg' height="30" width="30" alt='github'/></a> <h1 className='text-base relative left-2'>@DeepakCSGO23</h1> </li>
        <li className='cursor-pointer hover:scale-125 flex items-center duration-500 space-x-2'><a href='https://www.instagram.com/deepak_cecil1/' target='_blank'><img src='/instagram.svg' height="30" width="30" alt='instagram'/></a> <h1 className='text-base relative left-2'>@marketingwithdeepak</h1> </li>
        <li className='cursor-pointer relative right-2 hover:scale-125 flex items-center duration-500 space-x-2'><a href='https://www.linkedin.com/in/deepak-k-n-b5a2b3208/' target='_blank'><img src='/linkedin-color.svg' height="40" width="40" alt='linkedin' /></a> <h1 className='text-base relative left-1'>@DEEPAK K.N</h1> </li>
        <li className='cursor-pointer relative right-1 hover:scale-125 flex items-center duration-500 space-x-2'><a href='https://leetcode.com/kkvdhoorika/' target='_blank'><img src='/leetcode.svg' height="35" width="35" alt='leetcode' /></a> <h1 className='text-base relative left-2'>@DEEPAK KN</h1> </li>

        </ul>
      </nav>
    </div>
  )
}
