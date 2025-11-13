import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT '} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20'>
        <img src={assets.contact_img} className='w-full md:max-w-[480px]' />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Shoporia Fashion Store<br/>
            123 Trendy Avenue, Suite 400<br/>
            Fashion District, New York, NY 10001<br/>
            United States</p>
          <p className='text-gray-500'>Tel: Phone: +1 (555) 123-4567 <br/> Email: contact@Shoporiafashion.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Shoporia</p>
          <p className='text-gray-500'>Learn More about our Teams and Job openings </p>
          <button className='border border-pink-500 px-8 py-4 text-pink-500 text-md hover:bg-pink-500 hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact