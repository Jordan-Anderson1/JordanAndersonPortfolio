import React from 'react'
import css from '/css.png'
import firebase from '/firebase.png'
import github from '/github.png'
import react from '/react.png'
import javascript from '/javascript.png'
import tailwind from '/tailwind.png'

const Skills = () => {
  return (
    <div name="skills" className='bg-[#0a192f] h-screen w-full'>

        <div className='flex flex-col justify-center mx-auto max-w-[1000px] w-full h-full '>
            <div className='p-4'>
                <h1 className='text-4xl font-bold border-b-4 inline border-pink-300 text-gray-300'>Skills</h1>
                <p className='text-lg text-gray-300 py-4'>// These are the technologies I've worked with</p>
            </div>

           
        
            <div className='grid grid-cols-2 md:grid-cols-3 text-center gap-4 md:gap-8 w-full p-4 text-gray-300 font-semibold'>
                <div className='flex flex-col items-center shadow-md shadow-black p-4 hover:scale-110 gap-4 rounded-md'>
                    <img src={css} alt="css logo" className='w-20 md:w-28' />
                    <p>CSS</p>
                </div>
                <div className='flex flex-col items-center shadow-md shadow-black p-4 hover:scale-110 gap-4 rounded-md'>
                    <img src={firebase} alt="firebase logo" className='w-20 md:w-28 ' />
                    <p>Firebase</p>
                </div>
                <div className='flex flex-col items-center shadow-md shadow-black p-4 hover:scale-110 gap-4 rounded-md'>
                    <img src={github} alt="github logo" className='w-20 md:w-28 ' />
                    <p>GitHub</p>
                </div>
                <div className='flex flex-col items-center shadow-md shadow-black p-4 hover:scale-110 gap-4 rounded-md'>
                    <img src={react} alt="react logo" className='w-20 md:w-28 ' />
                    <p>React</p>
                </div>
                <div className='flex flex-col items-center shadow-md shadow-black p-4 hover:scale-110 gap-4 rounded-md'>
                    <img src={javascript} alt="javascript logo" className='w-20 md:w-28 '/>
                    <p>Javascript</p>
                </div>
                <div className='flex flex-col items-center shadow-md shadow-black p-4 hover:scale-110 gap-4 rounded-md'>
                    <img src={tailwind} alt="tailwind logo" className='w-20 md:w-28 ' />
                    <p>Tailwind</p>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default Skills