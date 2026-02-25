import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin, FaTwitter, FaQuoteLeft } from 'react-icons/fa'
import { LuTarget, LuEye, LuHeart } from 'react-icons/lu'
import Mission from '@/sections/Mission'
import Counter from '@/sections/Counter'
import Power from '@/sections/Power'
import Partners from '@/components/UserComp/Partners'


const teamMembers = [
  { name: 'Dr. Julian Ross', role: 'Head of Research', img: '/team1.jpg' },
  { name: 'Sarah Vance', role: 'Executive Coach', img: '/team2.jpg' },
  { name: 'Michael Obasi', role: 'Strategy Director', img: '/team3.jpg' },
  { name: 'Lin Zhao', role: 'Operations Lead', img: '/team4.jpg' },
]

const AboutUs = () => {
  return (
    <main className="bg-white pt-20">
      
      {/* 1. HERO / BRIEF INTRO */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px] -z-0" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h4 className="text-blue-400 font-bold uppercase tracking-[0.3em] text-xs mb-4">
            Established 2024
          </h4>
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Innovation. Leadership. <span className="text-blue-500">Legacy.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            EduPath is a global leadership collective dedicated to high-performance training. 
            We combine neuroscience, behavioral psychology, and practical strategy to 
            help professionals transition from managers to true visionary leaders.
          </p>
        </div>
      </section>

      {/* 2. THE STORY (Narrative) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/hero.jpg" 
                fill 
                alt="Our history" 
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">How It All Started</h2>
            <p className="text-slate-600 leading-relaxed">
              Founded in 2024, KPSLA began with a simple observation: the world was changing 
              faster than leaders were being trained to handle it. We saw a gap between 
              traditional academic theory and the raw, adaptive skills needed in the real world.
            </p>
            <p className="text-slate-600 leading-relaxed">
               What began as a small initiative has grown into a recognized student movement focused on leadership development and educational excellence. Through dedication and teamwork, KPSLA continues to expand its reach and positive impact.
            </p>
          </div>
        </div>
      </section>

      {/* 3. MISSION & IMPACT */}
      <Mission />
      <div className="bg-slate-50">
        <Counter />
      </div>

      <Partners />

      {/* 4. CORE VALUES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">The Values We Live By</h2>
            <p className="text-slate-500">The pillars that support everything we teach.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <LuTarget size={32} />, title: "Relentless Growth", desc: "We never stop learning, and we don't let our students stop either." },
              { icon: <LuHeart size={32} />, title: "Radical Empathy", desc: "Leadership is about people. We lead with heart and understanding." },
              { icon: <LuEye size={32} />, title: "Visionary Thinking", desc: "We look beyond the horizon to prepare you for the challenges of tomorrow." }
            ].map((value, idx) => (
              <div key={idx} className="text-center space-y-4 p-8 rounded-2xl hover:bg-slate-50 transition-colors">
                <div className="mx-auto w-16 h-16 bg-blue-50 flex items-center justify-center rounded-2xl text-blue-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


<section className="py-18 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-7/12 space-y-8">
              <div className="inline-flex items-center gap-3 text-blue-600 font-bold uppercase text-sm tracking-widest">
                Message from the Chairman
                <div className="h-[2px] w-8 text-right bg-blue-600" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
  Cultivating a legacy of <span className="italic font-serif text-blue-600">integrity and purpose.</span>
</h2>
              <div className="relative">
                <FaQuoteLeft className="absolute -top-4 -left-6 text-slate-200 text-6xl -z-10" />
                <p className="text-slate-600 text-lg leading-relaxed italic">
                  "A passionate youth leader dedicated to empowering students and building future leaders through structured leadership initiatives."
                </p>
              </div>
              <div>
                <h5 className="text-xl font-bold text-slate-900">Mr. Kamal Uddin</h5>
                <p className="text-slate-500 font-medium">Chairman, KP Student Leadership</p>
              </div>
            </div>
            <div className="w-full lg:w-5/12 relative group">
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white">
                <Image src="/chairman.jpeg" alt="President" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-4 bg-orange-400 p-8 rounded-2xl shadow-2xl transition-transform group-hover:scale-105">
                <p className="text-white font-serif text-3xl italic">Mr. Kamal Uddin</p>
                <p className="text-blue-200 text-[10px] font-black uppercase tracking-widest mt-2">Chairman</p>
              </div>
            </div>

            
          </div>
        </div>
      </section>
      {/* 5. PRESIDENT'S MESSAGE */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-5/12 relative group">
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white">
                <Image src="/president.jpeg" alt="President" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-8 -right-4 bg-orange-400 p-8 rounded-2xl shadow-2xl transition-transform group-hover:scale-105">
                <p className="text-white font-serif text-3xl italic">Mr. Rahim Uddin</p>
                <p className="text-blue-200 text-[10px] font-black uppercase tracking-widest mt-2">President</p>
              </div>
            </div>

            <div className="w-full lg:w-7/12 space-y-8">
              <div className="inline-flex items-center gap-3 text-blue-600 font-bold uppercase text-sm tracking-widest">
                <div className="h-[2px] w-8 bg-blue-600" />
                Message from the President
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                Empowering the next generation of <span className="italic font-serif text-blue-600">architects of change.</span>
              </h2>
              <div className="relative">
                <FaQuoteLeft className="absolute -top-4 -left-6 text-slate-200 text-6xl -z-10" />
                <p className="text-slate-600 text-lg leading-relaxed italic">
                  "Welcome to the KP Students Leadership Association! Our platform is dedicated to developing young leaders. Engage actively, share your ideas, and together let’s build a brighter future.
                  <br />
                    This association provides opportunities to enhance your skills, participate in meaningful activities, and make a positive impact in your community. We believe in teamwork, innovation, and empowering every student to reach their full potential."
                </p>
              </div>
              <div>
                <h5 className="text-xl font-bold text-slate-900">Mr. Rahim Uddin</h5>
                <p className="text-slate-500 font-medium">President, KP Student Leadership</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* 6. TEAM MEMBERS GRID */}
      <section className="py-18 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Meet the Experts</h2>
              <p className="text-slate-500 text-lg">The world-class minds behind our curriculum.</p>
            </div>
            <button className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all">
              Join the Team
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {teamMembers.map((member, i) => (
              <div key={i} className="group">
                <div className="relative w-full aspect-[4/5] mb-6 rounded-3xl overflow-hidden shadow-sm">
                  <Image src={member.img} alt={member.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center gap-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <Link href="#" className="text-white hover:text-blue-400 transition-colors"><FaLinkedin size={28} /></Link>
                    <Link href="#" className="text-white hover:text-blue-400 transition-colors"><FaTwitter size={28} /></Link>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                  <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PHILOSOPHY & FINAL CTA */}
      <Power />
      <section className="py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Ready to start your journey?</h2>
        <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-blue-200">
          Schedule a Consultation
        </button>
      </section>
    </main>
  )
}

export default AboutUs