import FAQ from '@/components/UserComp/FAQ'
import Link from 'next/link'
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
                    <p className="text-slate-500">03409789559</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
                    <LuMail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email Us</h4>
                    <p className="text-slate-500">kpsla.kp@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-blue-50 p-4 rounded-2xl text-blue-600">
                    <LuMapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Visit Us</h4>
                    <p className="text-slate-500">Shangla / Mardan, <br /> Khyber Pakhtunkhwa, Pakistan</p>
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
                    <button className="w-full md:w-auto px-8 md:px-12 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3">
                      Send Message <LuSend size={20} />
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <FAQ />

      {/* 3. Map Section - Live Google Maps Embed for Mardan */}
<section className="h-[500px] w-full relative group">
  {/* Overlay for a premium look before interaction */}
  <div className="absolute inset-0 bg-slate-900/10 pointer-events-none group-hover:bg-transparent transition-all duration-700 z-10" />
  
  <iframe
    title="KPSLA Mardan Office"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105655.94639943566!2d71.95679545468725!3d34.1982054625298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dec005a306488d%3A0x6e2697a21696b054!2sMardan%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="lg:grayscale lg:hover:grayscale-0 transition-all duration-1000"
  ></iframe>

  {/* Floating Location Card */}
  <div className="absolute bottom-10 left-10 z-20 hidden md:block">
    <div className="bg-white p-6 rounded-[2rem] shadow-2xl border border-slate-100 max-w-xs animate-in fade-in slide-in-from-left-4">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-blue-600 rounded-lg text-white">
          <LuMapPin size={20} />
        </div>
        <h4 className="font-black text-slate-900 uppercase text-xs tracking-widest">Office</h4>
      </div>
      <p className="text-slate-600 text-sm font-medium leading-relaxed">
        Mardan City, <br />
        Khyber Pakhtunkhwa, <br />
        Pakistan.
      </p>
      <Link 
        href="https://maps.google.com" 
        target="_blank" 
        className="mt-4 inline-block text-blue-600 text-xs font-bold uppercase tracking-wider hover:text-blue-800"
      >
        Get Directions →
      </Link>
    </div>
  </div>
</section>
    </main>
  )
}

export default ContactPage