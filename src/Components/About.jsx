import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-300'>About</p>
                </div>
                <div>

                </div>
            </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 p-4'>
                    <p className='font-bold text-4xl sm:text-right'>Hi I'm Jordan. Nice to meet you. Please take a look around</p>
                    <p className='text-lg'>I am passionate about building excellent software that inproves the lives of those that use it. I specialise in creating software fro clients ranging 
                        from sole traders and small businesses all the way to large enterprises.
                    </p>
                </div>   
        </div>  
    </div>
    
  )
}

export default About