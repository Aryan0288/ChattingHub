import React from 'react'

export default function Register() {


  return (
    <div className='bg-blue-50 h-screen flex items-center'>
        <form className='w-64 mx-auto '>
            <input type='text' placeholder='username' className='block p-2 mb-2'/>
            <input type='password' placeholder='password' className='block p-2 mb-2'/>
            <button className='bg-blue-500 text-white w-full  rounded-sm'>Register</button>
        </form>
    </div>
  )
}
