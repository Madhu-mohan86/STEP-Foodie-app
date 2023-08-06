import React from 'react'
import Loginform from '../Components/Loginform.jsx'
import banner from '../Images/login-page-banner.png'

export default function Login() {
  return (
    <div className='flex'>
    <img src={banner} className='h-screen w-[50%]' alt='' />
    <Loginform/>
    </div>
  )
}
