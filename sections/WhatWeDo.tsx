"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'
import { LuUsers, LuLightbulb, LuTrophy, LuHeartHandshake, LuCompass } from 'react-icons/lu'
import { FiMic } from 'react-icons/fi'

const whatWeDo = [
  {
    title: "Leadership Training",
    desc: "Structured workshops focusing on character building, discipline, and modern leadership strategies for students.",
    icon: <LuLightbulb size={32} />
  },
  {
    title: "Public Speaking",
    desc: "Enhancing communication skills through speech competitions and seminars in both English and Urdu.",
    icon: <FiMic size={32} />
  },
  {
    title: "Mentorship Programs",
    desc: "Connecting students with experienced leaders to provide career guidance and academic excellence paths.",
    icon: <LuCompass size={32} />
  },
  {
    title: "Teamwork & Discipline",
    desc: "Building synergy through group activities that encourage responsible leadership and effective teamwork.",
    icon: <LuUsers size={32} />
  },
  {
    title: "Community Initiatives",
    desc: "Promoting social responsibility through community service and social work projects across KP.",
    icon: <LuHeartHandshake size={32} />
  },
  {
    title: "Educational Events",
    desc: "Organizing inter-school competitions, conferences, and workshops to prepare students for real-world challenges.",
    icon: <LuTrophy size={32} />
  }
]

// 1. Define Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each card appearing
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
} as Variants

const WhatWeDo = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Top Section: Services */}
        <motion.div 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h4 
            variants={itemVariants}
            className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-12 text-center lg:text-left"
          >
            What we do
          </motion.h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatWeDo.map((service, i) => (
              <motion.div 
                key={i} 
                variants={itemVariants}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
              >
                <div className="text-blue-600 mb-6 bg-blue-50 w-fit p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h5 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h5>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section: The "Why" (Statistics) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900 rounded-[2rem] p-8 md:p-16 overflow-hidden relative"
        >
            {/* Decorative gradient flare */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] -mr-32 -mt-32" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/3">
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                The Need for <br />
                <span className="text-blue-400">Leadership Development</span>
              </h2>
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="h-1 bg-blue-500 mt-6" 
              />
            </div>

            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Stat Card 1 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
              >
                <span className="block text-4xl font-black text-blue-400 mb-4">77%</span>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  of organisations report a leadership gap, yet only 10% feel ready to address it.
                </p>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500">— DDI Global Leadership Forecast</span>
              </motion.div>

              {/* Stat Card 2 */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm"
              >
                <span className="block text-4xl font-black text-blue-400 mb-4">14%</span>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  of CEOs have the leadership talent they need to grow their business.
                </p>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500">— Harvard Business Review</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default WhatWeDo