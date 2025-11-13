
import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t '>
        <Title text1={'ABOUT'} text2={' US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img
  className='w-full h-[500px] md:max-w-[400px]'
  src={assets.about_img}
/>

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Shoporia, we believe that style should last beyond trends and seasons. Our curated collection of fashion, accessories, and lifestyle products is designed with timeless appeal, ensuring you always look your best — no matter the occasion.</p>
          <p>We are committed to delivering high-quality products that combine both elegance and comfort. Whether you're looking for a statement piece or the perfect everyday essentials, we provide a seamless shopping experience with a focus on craftsmanship, sustainability, and style.</p>
          <p>Explore our collections, discover new favorites, and become a part of the Shoporia community. Because style, just like memories, should last forever. </p>
          <b>Our Mission</b>
          <p>
            At Shoporia, we are dedicated to offering timeless, high-quality products that combine style, comfort, and sustainability. Our goal is to empower individuals to express their unique selves with enduring fashion choices while contributing to a more sustainable future.</p>

        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={' CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>We ensure every product meets the highest standards of durability, design, and performance. Each item is carefully inspected for quality, so you can trust that you're getting reliable, long-lasting pieces with every purchase. Your satisfaction is our top priority.</p>
        </div>  
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>We make shopping effortless with a user-friendly interface, fast delivery, and easy returns. Whether you're shopping from home or on the go, our streamlined experience ensures that your order arrives quickly and hassle-free, whenever you need it.</p>
        </div> 
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Our dedicated support team is always ready to assist you. Whether you have a question, need help with an order, or require assistance with returns, we provide prompt, friendly, and effective service to ensure your experience is smooth and satisfying every step of the way.</p>
        </div> 
      </div>

      <NewsLetterBox />
    </div>

  )
}

export default About
