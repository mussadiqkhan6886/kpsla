"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  LuLayoutDashboard, LuCirclePlus, LuUsers, 
  LuLogOut, LuMenu, LuX, LuChevronRight, 
  LuNewspaper,
  LuStar
} from 'react-icons/lu'
import { FiHome } from 'react-icons/fi'

const AdminHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  
  const adminLinks = [
    { name: "Add Event", link: "/admin-dashboard/add-event", icon: <LuCirclePlus size={20} /> },
    { name: "Events", link: "/admin-dashboard/events", icon: <LuLayoutDashboard size={20} /> },
    { name: "Registered Students", link: "/admin-dashboard/registered", icon: <LuUsers size={20} /> },
    { name: "Team Member", link: "/admin-dashboard/team-member", icon: <LuUsers size={20} /> },
    { name: "News", link: "/admin-dashboard/add-news", icon: <LuNewspaper size={20} /> },
    { name: "Reviews", link: "/admin-dashboard/reviews", icon: <LuStar size={20} /> },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="sticky top-0 z-[100] w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <LuMenu size={24} />
          </button>

          {/* Brand Logo */}
          <Link href="/admin-dashboard" className="flex items-center gap-2">
           
            <span className="font-black text-slate-900 tracking-tighter uppercase">
              Admin <span className="text-blue-600">Panel</span>
            </span>
          </Link>

          {/* Desktop Nav (Hidden on Mobile) */}
          <nav className="hidden lg:flex items-center gap-2">
            {adminLinks.map((item) => (
              <Link 
                key={item.link} 
                href={item.link}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex gap-2 ${
                  pathname === item.link ? 'text-blue-600 bg-blue-50' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.icon} {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Utilities */}
          <div className="flex items-center gap-2">
            <Link href="/" className="p-2 text-slate-400 hover:text-blue-600 transition-colors" title="View Site">
              <FiHome size={20} />
            </Link>
            <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm font-bold text-red-500 hover:bg-red-50 rounded-lg transition-all">
              <LuLogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE SIDEBAR DRAWER --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur/Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 z-[110] bg-slate-900/40 backdrop-blur-sm lg:hidden"
            />

            {/* Sidebar Content */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 z-[120] h-full w-[280px] bg-white shadow-2xl lg:hidden p-6"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-black text-xl text-slate-900 tracking-tighter uppercase">
                  Menu
                </span>
                <button onClick={toggleMenu} className="p-2 text-slate-400 hover:text-slate-900 bg-slate-50 rounded-full">
                  <LuX size={20} />
                </button>
              </div>

              <nav className="space-y-2">
                {adminLinks.map((item) => {
                  const isActive = pathname === item.link;
                  return (
                    <Link 
                      key={item.link} 
                      href={item.link}
                      onClick={toggleMenu}
                      className={`group flex items-center justify-between p-4 rounded-2xl text-sm font-bold transition-all ${
                        isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        {item.name}
                      </div>
                      <LuChevronRight className={isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'} />
                    </Link>
                  )
                })}
              </nav>

              <div className="absolute bottom-10 left-6 right-6 pt-6 border-t border-slate-100">
                <button className="flex items-center gap-3 w-full p-4 text-red-500 font-bold hover:bg-red-50 rounded-2xl transition-all">
                  <LuLogOut size={20} />
                  Logout
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default AdminHeader