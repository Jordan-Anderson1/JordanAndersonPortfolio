import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[600px] w-full gap-4'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-300 text-gray-300'>Reach out</p>
                <p className='text-gray-300 py-4'>//Drop me a line</p>
            </div>
            <input type="text" placeholder='Name' name='name' className='p-2 rounded-md outline-none focus:border-pink-300 focus:border-2'  />
            <input type="text" placeholder='Email' name='email' className='p-2 rounded-md outline-none focus:border-pink-300 focus:border-2' />
            <textarea name="message" rows={5} className='rounded-md p-2 outline-none focus:border-pink-300 focus:border-2' placeholder='Message...'></textarea>
            <button className='text-white text-xl font-semibold hover:bg-pink-300 hover:border-pink-300 rounded-md p-2 mt-6 border-white border-2'>Let's connect!</button>
        </form>
    </div>
  )
}

export default Contact