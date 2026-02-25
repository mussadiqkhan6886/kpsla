import Image from 'next/image'
import React from 'react'

const Mission = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-16">
          
          <div className="relative w-full lg:w-5/12 min-h-[400px] lg:min-h-[500px]">
            <div className="absolute inset-0 z-10 rounded-3xl border-[12px] border-slate-100/50" />
            <Image 
              src="/hero.jpg" 
              alt="Our Mission in Education" 
              fill 
              className="object-cover rounded-[22px]"
            />
            <div className="absolute -bottom-6 -right-6 z-20 bg-orange-400 p-8 rounded-2xl hidden md:block">
              <p className="text-white font-bold text-3xl italic">"Impact through <br/> Knowledge"</p>
            </div>
          </div>

          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
              Our Mission
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
              Bridging the gap between <br /> 
              <span className="text-blue-600">potential and achievement</span>
            </h3>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p className="relative pl-6 border-l-4 border-blue-500">
                <strong>Innovation in Learning:</strong> We believe that every student deserves access to cutting-edge tools and mentorship that adapts to their unique learning style.
              </p>
              
              <p>
                Our curriculum isn't just about passing exams; it's about building the character and critical thinking skills required to lead in the 21st century. We foster an environment of curiosity and resilience.
              </p>

              <p className="italic text-sm font-medium text-slate-500">
                "To develop confident, responsible, and visionary student leaders through structured leadership programs, mentorship, and community engagement initiatives."
              </p>
            </div>

           
          </div>

        </div>
      </div>
    </section>
  )
}

export default Mission