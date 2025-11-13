import React from 'react'
import {assets} from '../assets/assets'

const NavBar = ({setToken}) => {
  return (
    <div className='flex items-center py-6 px-10 justify-between'>
      
      <img src={assets.logo} className='w-20 sm:w-32' />
      <button className='bg-gray-600 text-white px-5
      py-2 sm:py-2 rounded-full text-xs sm:text-sm'
      onClick={()=>setToken('')}>Logout</button> 
    </div>
  )
}

export default NavBar