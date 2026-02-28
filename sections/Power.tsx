import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

const Power = () => {
  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 z-10">
            <h3 className="text-[34px] md:text-5xl font-black text-white leading-tight mb-8">
              We don’t just develop leaders, <br />
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                we unleash them.
              </span>
            </h3>
            
            <div className="space-y-6 text-slate-300 text-lg md:text-xl leading-relaxed max-w-xl">
              <p>
                Whether you’re a leadership junkie, a career-driven professional, or an organisation 
                serious about developing next-gen talent, there’s something here for you.
              </p>
              
              <div className="flex flex-col gap-2 border-l-2 border-blue-500 pl-6 py-2">
                <p className="font-bold text-white uppercase tracking-wider">Bold programs. A powerhouse community.</p>
                <p>Leadership development that actually moves the needle.</p>
              </div>

              <p className="font-semibold text-blue-400 italic">
                Because the leaders of tomorrow? We’re building them today.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-5 mt-10">
              <button className="flex items-center gap-2  bg-blue-600 px-8  text-white font-bold rounded-full hover:bg-blue-500 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-900/20">
                <Link className='inline-block py-4' href={"/get-involved"} >Join now</Link> <HiArrowRight />
              </button>
              <button className="border border-slate-700 text-slate-300 font-bold rounded-full hover:bg-slate-800 hover:text-white transition-all">
                <Link className='inline-block px-8 py-4' href="/about-us">More about us</Link>
              </button>
            </div>
          </div>

          {/* Image Container with Stylized Frame */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              
              <div className="relative h-full w-full overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-700">
                <Image 
                  src="/leadership.jpg" 
                  alt="Unleash Leadership" 
                  fill 
                  className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                />
              </div>

              {/* Floating Overlay Badge */}
              <div className="absolute top-10 -left-10 bg-white p-6 rounded-xl shadow-2xl hidden xl:block">
                <div className="flex flex-col items-center">
                  <span className="text-blue-600 font-black text-2xl tracking-tighter">LIVE</span>
                  <span className="text-slate-900 text-xs font-bold uppercase tracking-widest">Training</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Power