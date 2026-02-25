import React from 'react'
import { LuRocket, LuArrowRight } from 'react-icons/lu'

const CTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="relative overflow-hidden bg-blue-600 rounded-[2.5rem] p-12 md:p-24 text-center shadow-2xl shadow-blue-200">
          
          {/* Decorative background shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md animate-bounce">
                <LuRocket className="text-white text-3xl" />
              </div>
            </div>

            <h2 className="text-3xl md:text-6xl font-black text-white leading-tight mb-8">
              Ready to lead louder, <br /> 
              smarter, and braver?
            </h2>
            
            <p className="text-blue-100 text-lg md:text-xl mb-12 opacity-90 leading-relaxed">
              Join thousands of professionals redefining the future of leadership. 
              Your journey from potential to power starts with a single click.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-2xl hover:bg-slate-50 transition-all hover:scale-105 active:scale-95 shadow-xl">
                Get Started Today
                <LuArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-2xl hover:bg-white/10 transition-all">
                Contact Admissions
              </button>
            </div>
            
            <p className="mt-8 text-blue-200 text-sm font-medium">
              No credit card required • Instant access to free resources
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA