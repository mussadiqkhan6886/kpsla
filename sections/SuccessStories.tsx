import SuccessStoriesSwiper from '@/components/UserComp/SucessStoriesSwiper'
import React from 'react'

const SuccessStories = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-3">
            Testimonials
          </h4>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
            Success Stories
          </h2>
          <p className="text-slate-600 text-lg">
            Hear from the leaders and professionals who have transformed their careers 
            through our mentorship and programs.
          </p>
        </div>

        <div className="relative">
          <SuccessStoriesSwiper />
        </div>
      </div>
    </section>
  )
}

export default SuccessStories