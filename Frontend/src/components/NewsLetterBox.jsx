import React from 'react'

const NewsLetterBox = () => {

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className='text-center mt-16 px-4'>
      <p className='text-3xl sm:text-4xl font-bold text-gray-800'>
        Subscribe Now & Get <span className="text-pink-500">20% Off</span>
      </p>
      <p className='text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base'>
        Stay in the loop with our newest arrivals, exclusive deals, and fashion insights delivered straight to your inbox!
      </p>

      <form 
        onSubmit={onSubmitHandler} 
        className='w-full sm:w-2/3 md:w-1/2 flex flex-col sm:flex-row items-center gap-4 mx-auto mt-6'
      >
        <input 
          type='email' 
          placeholder='Enter your email...' 
          required 
          className='w-full sm:flex-1 px-4 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:border-pink-400 transition duration-200'
        />
        <button 
          type='submit' 
          className='bg-pink-600 hover:bg-pink-700 text-white text-sm px-6 py-3 rounded-full shadow-md transition duration-300'
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsLetterBox