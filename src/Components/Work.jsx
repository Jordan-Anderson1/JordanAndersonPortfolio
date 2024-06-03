
import React from 'react'
import css from '/css.png'
import firebase from '/firebase.png'
import github from '/github.png'
import react from '/react.png'
import javascript from '/javascript.png'
import tailwind from '/tailwind.png'
import WorkCard from './WorkCard'
import tipCalculator from '/splitter.png'
import ccForm from '/ccform.png'
import multiForm from '/form.png'



const Work = () => {
  return (

    <div name="work" className='bg-[#0a192f] w-full pt-12'>

        <div className='flex flex-col justify-center mx-auto my-auto max-w-[1000px] w-full min-h-screen '>
            <div name="workTitle" className='p-4'>
                <h1 className='text-4xl font-bold border-b-4 inline border-pink-300 text-gray-300'>Work</h1>
                <p className='text-lg text-gray-300 py-4'>// Check out some of my recent work</p>
            </div>

           
        
            <div className='grid md:flex md:flex-row md:overflow-scroll text-center gap-4 md:gap-8 w-full p-4 text-gray-300 font-semibold'>
                
                    <WorkCard title="SPLITTER" description="A responsive tip calculator" image={tipCalculator} demo="https://tipcalculator-janderson.netlify.app"/>
                    <WorkCard title="CC Form" description="A responsive and interactive payment form" image={ccForm} demo="https://ccform.netlify.app"/>
                    <WorkCard title="Multi-Page form" description="a reactive multi page form component" image={multiForm} demo="https://multipageform-janderson.netlify.app"/>
                    
            </div>
        </div>    
    </div>











    // //////////////////////
    // <div name="work" className='bg-[#0a192f] h-[100%] w-full text-gray-300 '>
    //     <div className='max-w-[1000px] p-4 flex flex-col w-full h-full justify-center items-center mx-auto my-auto'>
            


            
            




    //     </div>
        

    // </div>
  )
}

export default Work