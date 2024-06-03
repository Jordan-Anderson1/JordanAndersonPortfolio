import React, { useState } from 'react';
import Logo from '/janderson-logo-1.png';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll';



const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => setMenuOpen(!menuOpen);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-40'>
        <div>
          <img src={Logo} alt="Jordan Anderson Logo" className='w-[130px]' />
        </div>

        {/* Menu */}
          <ul className='hidden md:flex'>
            <li className='p-4 cursor-pointer'>
              <Link 
              to="home" 
              smooth={true} 
              duration={500} 
              >
              Home
              </Link>
            </li>
            <li className='p-4 cursor-pointer'>
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              >
              About
              </Link>
            </li>
            <li className='p-4 cursor-pointer'>
            <Link 
              to="skills" 
              smooth={true} 
              duration={500} 
              >
              Skills
              </Link>
            </li>
            <li className='p-4 cursor-pointer'>
            <Link 
              to="work" 
              smooth={true} 
              duration={500} 
              >
              Work
              </Link>
            </li>
            <li className='p-4 cursor-pointer'>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              >
              Contact
              </Link>
            </li>
          </ul>

        {/* Hamburger */}
        <div className='md:hidden z-10'>
          {!menuOpen ? <FaBars onClick={handleClick}/> : <FaTimes onClick={handleClick} />}
        </div>

        {/* Mobile Menu */}
        <div className={`${menuOpen ? 'absolute top-0 left-0 w-full h-screen  bg-[#0a192f] flex flex-col justify-center items-center' : 'hidden'} `}>
          <ul>
            <li className='py-6 text-4xl text-center'>
            <Link 
              onClick={handleClick}
              to="home" 
              smooth={true} 
              duration={500} 
              >
              Home
              </Link>
            </li>
            <li className='py-6 text-4xl text-center'>
            <Link 
              onClick={handleClick}
              to="about" 
              smooth={true} 
              duration={500} 
              >
              About
              </Link>
            </li>
            <li className='py-6 text-4xl text-center'>
            <Link 
              onClick={handleClick}
              to="skills" 
              smooth={true} 
              duration={500} 
              >
              Skills
              </Link>
            </li>
            <li className='py-6 text-4xl text-center'>
            <Link 
              onClick={handleClick}
              to="work" 
              smooth={true} 
              duration={500} 
              >
              Work
              </Link>
            </li>
            <li className='py-6 text-4xl text-center'>
            <Link 
              onClick={handleClick}
              to="contact" 
              smooth={true} 
              duration={500} 
              >
              Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className='lg:flex fixed flex-col top-[35%] left-0 hidden'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center p-4 ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
              <a className='flex justify-between items-center w-full text-gray-300 ' href="/">LinkedIn <FaLinkedin size={30}/> </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center p-4 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-gray-300 ' href="/">GitHub <FaGithub size={30}/> </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center p-4 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
              <a className='flex justify-between items-center w-full text-gray-300 ' href="/">Email <HiOutlineMail size={30}/> </a>
            </li>

            <li className='w-[160px] h-[60px] flex justify-between items-center p-4 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a className='flex justify-between items-center w-full text-gray-300 ' href="/">Resume <BsFillPersonLinesFill size={30}/> </a>
            </li>

          </ul>
        </div>
    </div>
  )
}

export default Navbar