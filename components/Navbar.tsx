import React from 'react'
import { RedirectBtn } from './redirect-btn'

export const Navbar = () => {
  return (
     <header className=' bg-gray-500 text-white w-full'>
        <nav className='flex justify-between px-10 py-4 items-center'>
            <h1>Course</h1>
             <RedirectBtn label='dashboard' url='/dashboard'/>
        </nav>
     </header>
  )
}
