import Image from 'next/image'
import React from 'react'
import { LuCalendar, LuMapPin, LuArrowRight } from 'react-icons/lu'

const UpComingEvent = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">
              Get Involved
            </h4>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Upcoming Events
            </h2>
          </div>
          <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All Events <LuArrowRight />
          </button>
        </div>

        {/* Event Card */}
        <div className="group relative flex flex-col lg:flex-row bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
          
          {/* Image Side */}
          <div className="relative w-full lg:w-2/5 h-64 lg:h-auto overflow-hidden">
            <Image 
              src="/hero.jpg" 
              alt="Leadership Summit 2024"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Date Badge Overlay */}
            <div className="absolute top-6 left-6 bg-white rounded-2xl p-3 shadow-lg text-center min-w-[70px]">
              <span className="block text-2xl font-black text-blue-600 leading-none">24</span>
              <span className="block text-xs font-bold uppercase text-slate-500 tracking-tighter">Oct</span>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-3/5 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="flex items-center gap-2 text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                <LuCalendar className="text-blue-600" /> 09:00 AM - 05:00 PM
              </span>
              <span className="flex items-center gap-2 text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                <LuMapPin className="text-blue-600" /> Virtual Conference
              </span>
            </div>

            <h5 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
              Next-Gen Leadership Global Summit
            </h5>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-2xl">
              Join industry pioneers for an intensive one-day session on adaptive leadership 
              and organizational resilience. Perfect for emerging managers and career-driven professionals.
            </p>

            <div className="flex flex-wrap gap-4 mt-auto">
              <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                Register Now
              </button>
              <button className="px-8 py-3 border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors">
                Event Details
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default UpComingEvent