import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {


  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setproductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.find((item) => {
      if (item._id === productId) {
        setproductData(item)
        setImage(item.image[0]);
      }
    })
  }


  useEffect(() => {
    fetchProductData();
  }, [productId, products])


  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/*Product images*/}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((singleImage, index) => {
                return (
                  <img src={singleImage} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                    onClick={() => setImage(singleImage)} />

                )
              })
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} />
          </div>
        </div>


        {/*Info*/}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2 text-pink-500'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2'>(122) </p>
          </div>
          <p className='mt-5 text-3xl font-medium text-pink-700'>{currency} {productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((singleSize, index) => (
                <button key={index} className={`border py-2 px-4 bg-gray-100 ${singleSize === size ? 'border-orange-500' : ''}`}
                  onClick={() => setSize(singleSize)}>{singleSize}</button>
              ))}
            </div>
          </div>
          <button className='bg-pink-500 text-white px-8 py-3 text-sm active:bg-pink-700' onClick={()=>addToCart(productData._id , size)}>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return policy within 7 days. </p>
          </div>
        </div>
      </div>

      {/*Description n Review*/}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>
            Description
          </b>
          <p className='border px-5 py-3 text-sm'>
            Reviews (122)
          </p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
           <p>Our products are crafted with premium materials to ensure long-lasting quality and exceptional performance. Whether you're looking for fashion-forward apparel, must-have accessories, or top-of-the-line tech gadgets, each item is designed to meet the highest standards of quality and durability. We prioritize both style and functionality, so you can feel confident and satisfied with every purchase.</p>
           <p>From classic styles to trendy pieces, our collection is designed to suit every taste and occasion. Perfect for daily wear or special events, our products are tailored to fit seamlessly into your lifestyle. With attention to detail and a focus on comfort, you'll find the perfect item to enhance your everyday look. Experience convenience, quality, and style with every product we offer!

</p>
  
        </div>
      </div>


       {/*Related Products*/}
        <RelatedProducts category={productData.category} subCategory={productData.subCategory} />      

    </div>
  ) : (
    <div className='opacity-0'>

    </div>
  )
}

export default Product