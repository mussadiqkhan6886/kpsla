import React from 'react'
import Link from 'next/link'
import { mainHeaderLinks } from '@/lib/constants'
import { FaWhatsapp, FaTimes } from 'react-icons/fa'

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideBar = ({ isOpen, onClose }: SideBarProps) => {
  return (
    <>
      <div 
        className={`fixed inset-0 z-60 bg-slate-900/20 h-screen backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onClose}
      />

      <aside 
        className={`fixed top-0 right-0 z-70 h-screen w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          
          {/* Close Button & Logo */}
          <div className="flex items-center justify-between mb-5">
            <span className="text-xl font-bold text-blue-600"></span>
            <button 
              onClick={onClose}
              className="p-2 text-slate-500 hover:bg-slate-100 rounded-full"
            >
              <FaTimes size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1">
            <ul className="space-y-4">
              {mainHeaderLinks.map((item) => (
                <li key={item.link}>
                  <Link 
                    href={item.link} 
                    onClick={onClose} // Close menu when link is clicked
                    className="block text-lg font-medium text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Actions */}
          <div className="mt-auto border-t pt-6 space-y-4">
            <button className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white shadow-md active:scale-95 transition-transform">
              Become a Member
            </button>
            
            <a 
              href="https://wa.me/yournumber" 
              className="flex items-center justify-center gap-2 w-full py-3 text-green-600 font-medium border border-green-200 rounded-xl bg-green-50"
            >
              <FaWhatsapp /> Chat Support
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}

export default SideBar