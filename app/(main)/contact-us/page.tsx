import React from 'react'
import { LuPhone, LuMail, LuMapPin, LuClock, LuSend } from 'react-icons/lu'

const ContactPage = () => {
  return (
    <main className="bg-white pt-20">
      {/* 1. Header Section */}
      <section className="bg-slate-900 py-24 text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Get in <span className="text-blue-500">Touch</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have questions about our leadership programs or upcoming events? 
            Our team is here to help you navigate your journey.
          </p>
        </div>
      </section>

      {/* 2. Contact Info & Form Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left Side: Contact Information */}
            <div className="w-full lg:w-1/3 space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <p className="text-slate-500 mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
                    <LuPhone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Call Us</h4>
                    <p className="text-slate-500">+1 (555) 000-0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
                    <LuMail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email Us</h4>
                    <p className="text-slate-500">admissions@edupath.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
                    <LuMapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Visit Us</h4>
                    <p className="text-slate-500">123 Leadership Way, Suite 100<br/>New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
                    <LuClock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Working Hours</h4>
                    <p className="text-slate-500">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="w-full lg:w-2/3">
              <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-blue-600 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-blue-600 transition-colors"
                    />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                    <select className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-blue-600 transition-colors appearance-none bg-white">
                      <option>Program Inquiry</option>
                      <option>Partnership Opportunity</option>
                      <option>Event Question</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                    <textarea 
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-blue-600 transition-colors resize-none"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button className="w-full md:w-auto px-12 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3">
                      Send Message <LuSend size={20} />
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Map Section (Placeholder) */}
      <section className="h-[450px] w-full bg-slate-100 relative grayscale hover:grayscale-0 transition-all duration-700">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <LuMapPin className="text-blue-600 mx-auto mb-4" size={48} />
            <p className="font-bold text-slate-900">Interactive Map Integration Here</p>
            <p className="text-slate-500 text-sm italic">Google Maps or Mapbox API</p>
          </div>
        </div>
        {/* You can replace this div with a real <iframe> or Google Maps component */}
      </section>
    </main>
  )
}

export default ContactPage