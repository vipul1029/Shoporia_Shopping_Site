
import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

      <div>
        <img src={assets.logo} className='mb-5 w-32'></img>
        <p className='w-full md:w-2/3 text-gray-600'>
        Thank you for choosing us as your trusted shopping destination. We are committed to offering you the best quality products, unbeatable prices, and exceptional customer service. Stay connected with us for the latest updates, promotions, and new arrivals. Your satisfaction is our top priority!</p>
      </div>
      <div>
        <p className='text-xl font-medium mb-5 text-pink-500'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div>
        <p className='text-xl font-medium mb-5 text-pink-500'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
          <li>+1-212-456-7890</li>
          <li>contact@shoporia.com</li>
        </ul>
      </div>
      </div>

      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>&copy; 2025 Shopria. All Rights Reserved. | Designed with &hearts; for you.</p>
      </div>
    </div>
  )
}

export default Footer
