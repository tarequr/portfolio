import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();
    const openSideMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }

    const closeSideMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        })
    },[]);
  return (
    <>
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-88%]'>
            <Image src={assets.header_bg_color} alt='Header' className='w-full'/>
        </div>
        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white  bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
            <a href="#top">
                <Image src={assets.logo} alt='Logo' className='w-28 cursor-pointer mr-14'/>
            </a>

            <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
                <li><a href="#top" className='font-Ovo'>Home</a></li>
                <li><a href="#about" className='font-Ovo'>About me</a></li>
                <li><a href="#services" className='font-Ovo'>Services</a></li>
                <li><a href="#work" className='font-Ovo'>My Work</a></li>
                <li><a href="#contact" className='font-Ovo'>Contact me</a></li>
            </ul>

            <div className='flex items-center gap-4'>
                <button>
                    <Image src={assets.moon_icon} alt='Moon icon' className='w-6'/>
                </button>

                <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>
                    Contact 
                    <Image src={assets.arrow_icon} alt='Contact' className='w-3'/>
                </a>

                <button className='block md:hidden ml-3'>
                    <Image src={assets.menu_black} alt='Moon icon' className='w-6' onClick={openSideMenu}/>
                </button>
            </div>

            {/* mobile menu */}

            <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                <div className='absolute top-6 right-6' onClick={closeSideMenu}>
                    <Image src={assets.close_black} alt='' className='cursor-pointer'/>
                </div>
                <li><a href="#top" onClick={closeSideMenu} className='font-Ovo'>Home</a></li>
                <li><a href="#about" onClick={closeSideMenu} className='font-Ovo'>About me</a></li>
                <li><a href="#services" onClick={closeSideMenu} className='font-Ovo'>Services</a></li>
                <li><a href="#work" onClick={closeSideMenu} className='font-Ovo'>My Work</a></li>
                <li><a href="#contact" onClick={closeSideMenu} className='font-Ovo'>Contact me</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar