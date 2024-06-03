import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className='bg-[#0a192f] h-screen'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full'>
            <p className='text-pink-300 text-xl'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Jordan Anderson</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a full stack developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[600px] text-xl'>I'm a full stack developer specialising in building exceptional digital experiences. Currently I'm focused on building resposive full-stack web applications</p>

            <div>
                <button className='text-white border-2 group px-6 py-3 my-2 flex items-center hover:bg-pink-300 hover:border-pink-300'>
                    
                <Link 
                  to="work" 
                  smooth={true} 
                  duration={500} 
                  offset={-50}
                >
                View Work <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300'/>
              </Link>
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default Home