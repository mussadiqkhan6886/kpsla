import React from 'react'
import Image from 'next/image'

const partners = [
  { name: "Global Tech", logo: "/partner1.png" },
  { name: "EduCorp", logo: "/partner2.png" },
  { name: "Leadership Hub", logo: "/partner3.png" },
  { name: "Future Minds", logo: "/partner4.png" },
  { name: "Innovate University", logo: "/partner5.png" },
  { name: "Lead Strategy", logo: "/partner6.png" },
]

const Partners = () => {
  return (
    <section className="py-17 bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">
            Trusted by organizations worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="relative h-12 w-full grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer flex items-center justify-center"
            >
              {/* Replace with actual Image components when logos are ready */}
              <span className="text-slate-400 font-black text-xl group-hover:text-blue-600">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners