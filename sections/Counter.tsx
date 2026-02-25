import CountUp from '@/components/UserComp/ui/CountUp'
import React from 'react'

const stats = [
  { label: 'Leaders Trained', value: 15, extend: "k+", color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Success Rate', value: 98, extend: "%", color: 'text-blue-600', bg: 'bg-green-50' },
  { label: 'Events', value: 20, extend: "+", color: 'text-blue-600', bg: 'bg-purple-50' },
]

const Counter = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-3">
            Our Impact
          </h2>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900">
            Counter Archive
          </h1>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="group relative p-10 rounded-3xl border border-slate-100 bg-white text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Decorative Background Icon/Shape */}
              <div className={`absolute top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full opacity-20 blur-xl ${stat.bg}`} />
              
              <div className="relative z-10">
                <CountUp
                    from={0}
                    to={stat.value}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text font-black tracking-tight mb-3 inline-block text-6xl text-blue-600 "
                /> <span className='font-black mb-3 inline-block text-6xl text-blue-600 '>{stat.extend}</span>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">
                  {stat.label} 
                </p>
              </div>

              {/* Bottom accent line that expands on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-slate-900 transition-all duration-300 group-hover:w-1/3 rounded-t-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counter