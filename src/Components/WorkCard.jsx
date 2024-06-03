import React from 'react'
import {  FaGithub } from 'react-icons/fa';
import { HiCursorClick } from "react-icons/hi";

const WorkCard = ({ image, title, description, demo}) => {
  return (
    
        <div style={{backgroundImage: `url(${image})`,
                    backgroundSize: 'cover'}} 
                    className='shadow-lg shadow-black rounded-md flex justify-center items-center min-w-[400px] h-[300px] bg-no-repeat bg-center group container'
                >
                    <div className='flex flex-col justify-center items-center opacity-0 w-full h-full hover:opacity-100 p-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] rounded-md text-white duration-500'>
                        <h1 className='text-5xl'>{title}</h1>
                        <p>{description}</p>
                        <div className='flex justify-between w-full mt-auto text-black'>
                            <a className='flex justify-center items-center bg-white px-4 py-6 rounded-md cursor-pointer w-[40%] gap-4'>
                                <h1>View code</h1>
                                <FaGithub size={20}/>   
                            </a>

                            <a
                            target="_blank"
                                href={demo}
                                className='flex justify-center items-center bg-white p-4 rounded-md cursor-pointer w-[40%] gap-4'>
                                <h1>View Demo</h1>
                                <HiCursorClick size={20}/>
                            </a>
                        </div>
                    </div>
                </div>
    
  )
}

export default WorkCard