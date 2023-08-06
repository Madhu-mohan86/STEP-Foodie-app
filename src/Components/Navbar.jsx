import React from 'react'
import logo from '../Images/logo-white.png'

export default function Navbar({userName}) {
  return (
    <div>
      <nav className='bg-[#BD031A] flex justify-between place-items-center px-20 py-3'>
      <img src={logo} alt='i' className='h-14 w-28' />
      <p className='text-white font-Inter'>Hello , {userName}</p>
      </nav>
    </div>
  )
}
