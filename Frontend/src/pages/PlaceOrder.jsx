import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify';


const PlaceOrder = () => {

  const [method, setMethod] = useState('cod');
  const { navigate, backendUrl, token, cartItems, setCartItems, delivery_fee, products, getCartAmount } = useContext(ShopContext);
  const [formData, setformData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value

    setformData(data => ({ ...data, [name]: value }))
  }

  // const initPay = (order) => {
  //   const options = {
  //     key: import.meta.env.VITE_RAZORPAY_KEY_ID,
  //     currency: order.currency,
  //     name: 'Order Payment',
  //     amount: order.amount,
  //     order_id: order.id,
  //     description: 'Order Payment',
  //     receipt: order.receipt,
  //     handler: async (response) => {
  //       console.log(response)
  //       try{
  //         const {data} = await axios.post(backendUrl+'/api/order/verifyRazorpay', response, {
  //            headers: {
  //             Authorization: `Bearer ${token}`  // <-- Header with token
  //           }
  //         })
  //         if(data.success){
  //           navigate('/orders')
  //           setCartItems({})
  //         }
  //       }catch(error){  
  //         console.log(error)
  //         toast.error(error.message)
  //       }
  //     }
  //   }
  //   const rzp = new window.Razorpay(options)
  //   rzp.open()
  // }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {

      let orderItems = []

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }


      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch (method) {
        //API call for COD
        case 'cod':
          const response = await axios.post(backendUrl + '/api/order/place', orderData, {
            headers: {
              Authorization: `Bearer ${token}`  // <-- Header with token
            }
          })
          console.log(response.data);

          if (response.data.success) {
            setCartItems({})
            navigate('/orders')
          } else {
            toast.error(response.data.message)
          }
          break;
        case 'stripe':
          const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData, {
            headers: {
              Authorization: `Bearer ${token}`
            }

          })
          if (responseStripe.data.success) {
            const { session_url } = responseStripe.data
            window.location.replace(session_url)
          } else {
            toast.error(responseStripe.data.message)
          }
          break;
        // case 'razorpay':
        //   const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderData, {
        //     headers: {
        //       Authorization: `Bearer ${token}`
        //     }

        //   })
        //   if (responseRazorpay.data.success) {
        //     initPay(responseRazorpay.data.order)
        //   }
        //   break;
        default:
          break;
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  

  return (


    <form className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t' onSubmit={onSubmitHandler}>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY '} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input required type='text' placeholder='First Name' onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-300 rounder py-1.5 px-3.5 w-full' />
          <input required type='text' placeholder='Last Name' onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-300 rounder py-1.5 px-3.5 w-full' />
        </div>
        <input required type='email' placeholder='Email address' onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-300 rounder py-1.5 px-3.5 w-full' />
        <input required type='text' placeholder='Street' onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-300 rounder py-1.5 px-3.5 w-full' />
        <div className='flex gap-3'>
          <input required type='text' placeholder='City' onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-300 rounder py-1.5 px-3.5 w-full' />
          <input required type='text' placeholder='State' onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-300 rounder py-1.5 px-3.5 w-full' />
        </div>
        <div className='flex gap-3'>
          <input required type='number' placeholder='Zip Code' onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-300 rounder py-1.5 px-3.5 w-full' />
          <input required type='text' placeholder='Country' onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-300 rounder py-1.5 px-3.5 w-full' />
        </div>
        <input required type='number' placeholder='Phone' className='border border-gray-300 rounder py-1.5 px-3.5 w-full' onChange={onChangeHandler} name='phone' value={formData.phone} />
      </div>


      {/*-----------Right--------------*/}
      <div className='mt-8'>

        <div className='mt-8 min-w-80'>
          <CartTotal />

        </div>

        <div className='mt-12'>
<div className='text-xl sm:text-2xl my-3'>
          <Title text1={'PAYMENT '} text2={'METHODS'} />
        </div>
          {/*-----------payment--------------*/}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ' '}`} ></p>
              <img src={assets.stripe_logo} className='h-5 mx-4' />
            </div>
            
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ' '}`} ></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button className='bg-pink-500 text-white text-sm px-12 py-3'
              type='submit'
            >PLACE ORDER</button>
          </div>
        </div>
      </div>


    </form>
  )
}

export default PlaceOrder