import RotatingText from '@/components/UserComp/ui/RotatingText'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] lg:h-screen flex items-center pt-10 overflow-hidden bg-slate-50">
    
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        
        <section className="w-full lg:w-1/2 flex flex-col space-y-6 text-center lg:text-left">
          <span className="inline-block w-fit mx-auto lg:mx-0 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-bold tracking-wide uppercase">
            Empowering Future Leaders
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1]">
            <RotatingText
            texts={['Empowering', 'Igniting', 'Reshaping', 'Championing']}
            mainClassName="overflow-hidden "
            staggerFrom={"first"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2500}
            />  
            <span className="text-blue-600 italic">KP's</span>, Tomorrow.
          </h1>
          
          <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Unlock your potential with expert-led courses designed to turn 
            ambition into impact. Start your journey toward excellence today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center lg:justify-start">
            <button className="w-full sm:w-auto  bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all active:scale-95">
              <Link className='inline-block px-8 py-4' href={"/registration"}>Join Us</Link>
            </button>
            <button className="w-full sm:w-auto border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-100 transition-all active:scale-95">
              <Link className='inline-block px-8 py-4' href="/about-us">Learn More</Link>
            </button>
          </div>
        </section>

        {/* Right Image Container */}
        <section className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[500px] aspect-square">
            {/* The Image Wrapper with your custom rounded corners */}
            <div className="relative z-10 w-full h-full overflow-hidden rounded-tl-[240px] rounded-br-[240px] ">
              <Image 
                src="/hero.jpg" 
                fill // Use fill for better responsive container handling
                alt="Leadership training" 
                className="object-cover "
                priority // Priority loading for LCP
              />
            </div>
            
            {/* Background Accent Square */}
            <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-tl-[120px] rounded-br-[120px] bg-blue-200" />
          </div>
        </section>
        
      </div>
    </section>
  )
}

export default Hero