import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 pt-8'>
                <h1 className='md:text-4xl sm:test-3xl text-2xl font-bold  pl-2'>Want tips & tricks to optimize your flow </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, odit?</p>
            </div>
            <div className=' my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black px-4' type="email" placeholder='Enter Email'/>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto ml-4 md:mx-mx-0 my-6 py-3 '> Subscribe</button>
                </div>
                <p>We care about the protection of your data. <br /> <span className='text-[#00df9a]'>Read our Policy</span></p>

            </div>

        </div>
      
    </div>
  )
}

export default Newsletter
