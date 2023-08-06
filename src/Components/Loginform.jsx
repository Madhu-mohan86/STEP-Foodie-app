import React from 'react'
import Button from './Button'

export default function Loginform() {
  return (
    <div className='flex place-items-center w-full justify-center'>
      <form className='flex flex-col mt-7 gap-y-3'>
      <label className='text-xl font-Inter font-bold mb-5'>Sign-in</label>
       <input type='email' required placeholder='Email' className='font-Inter text-lg' />
      <input type='password' placeholder='Password' required className='font-Inter text-lg' />
      <Button content='login' color='#BD031A' />
      </form>
    </div>
  )
}
