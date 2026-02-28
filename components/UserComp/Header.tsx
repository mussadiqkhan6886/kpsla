'use client';

import { mainHeaderLinks } from '@/lib/constants'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import {FiMenu} from "react-icons/fi"
import SideBar from './SideBar';
import Image from 'next/image';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 pt-1 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className=" flex h-20 items-center justify-between px-4 md:px-6">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <Image src={"/headerLogo.png"} alt='logo image header' width={80} height={80} priority className='w-full h-full object-cover' />
          </Link>
        </div>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-8">
          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {mainHeaderLinks.map((item) => (
                <li key={item.link}>
                  <Link 
                    href={item.link} 
                    className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Group */}
          <div className="flex items-center gap-3">
            <button className="hidden rounded-full bg-blue-600 text-sm font-semibold text-white transition-all border border-transparent hover:scale-105 hover:text-blue-600 hover:bg-white hover:border-blue-600 hover:shadow-lg active:scale-95 sm:block">
              <Link className='px-5 inline-block py-2.5' href={"/registration"}>Become a Member</Link>
            </button>
            
            <button 
              className="hidden md:flex h-10 w-10 items-center justify-center rounded-full border border-green-200 bg-green-50 text-green-600 transition-colors hover:bg-green-100"
              aria-label="Contact on WhatsApp"
            >
              <Link target='_blank' href="https://wa.me/923409789559"><FaWhatsapp size={20} /></Link>
            </button>
            <FiMenu size={28} onClick={() => setIsMenuOpen(true)} className='block lg:hidden' />
            {isMenuOpen && <SideBar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header