import React from 'react'
import { LuGraduationCap, LuUsers, LuTrendingUp } from 'react-icons/lu'

const services = [
  {
    title: "Executive Coaching",
    desc: "Personalised mentorship for high-level decision makers.",
    icon: <LuGraduationCap size={32} />
  },
  {
    title: "Team Workshops",
    desc: "Building synergy and communication within your core teams.",
    icon: <LuUsers size={32} />
  },
  {
    title: "Strategy Consulting",
    desc: "Mapping out the long-term growth of your leadership pipeline.",
    icon: <LuTrendingUp size={32} />
  }
]

const WhatWeDo = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        
        {/* Top Section: Services */}
        <div className="mb-20">
          <h4 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-12 text-center lg:text-left">
            What we do
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="text-blue-600 mb-6 bg-blue-50 w-fit p-3 rounded-xl">
                  {service.icon}
                </div>
                <h5 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h5>
                <p className="text-slate-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: The "Why" (Statistics) */}
        <div className="bg-slate-900 rounded-[2rem] p-8 md:p-16 overflow-hidden relative">
            {/* Decorative gradient flare */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] -mr-32 -mt-32" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/3">
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                The Need for <br />
                <span className="text-blue-400">Leadership Development</span>
              </h2>
              <div className="h-1 w-20 bg-blue-500 mt-6" />
            </div>

            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Stat Card 1 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <span className="block text-4xl font-black text-blue-400 mb-4">77%</span>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  of organisations report a leadership gap, yet only 10% feel ready to address it.
                </p>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500">— DDI Global Leadership Forecast</span>
              </div>

              {/* Stat Card 2 */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                <span className="block text-4xl font-black text-blue-400 mb-4">14%</span>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  of CEOs have the leadership talent they need to grow their business.
                </p>
                <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500">— Harvard Business Review</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default WhatWeDo 