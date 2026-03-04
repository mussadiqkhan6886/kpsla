import Image from 'next/image'
import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const Messages = () => {
  return (
    <>
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
    </>
  )
}

export default Messages
