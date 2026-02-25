"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { LuUsers, LuHandshake, LuGraduationCap, LuHeart, LuSend, LuDownload, LuCheck } from 'react-icons/lu'

const GetInvolvedPage = () => {
  const [activeTab, setActiveTab] = useState('student');

  return (
    <main className="bg-white pt-20">
      {/* 1. Hero Section */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <LuHeart size={14} className="animate-pulse" /> Impact the Future
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Join the <span className="text-blue-500">Community</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
            Choose your path and help us reshape the landscape of modern leadership.
          </p>
        </div>
      </section>

      {/* 2. Selection Tabs */}
      <section className="sticky top-20 z-40 bg-white border-b border-slate-100 shadow-sm">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-4 md:gap-12">
            {[
              { id: 'student', label: 'For Students', icon: <LuGraduationCap /> },
              { id: 'volunteer', label: 'For Volunteers', icon: <LuUsers /> },
              { id: 'sponsor', label: 'For Sponsors', icon: <LuHandshake /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-6 text-sm font-black uppercase tracking-widest transition-all border-b-2 ${
                  activeTab === tab.id ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'
                }`}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Dynamic Content Sections */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          
          {/* STUDENT MEMBERSHIP PATH */}
          {activeTab === 'student' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-in fade-in slide-in-from-bottom-4">
              <div className="space-y-8">
                <h2 className="text-4xl font-black text-slate-900 uppercase">Student Membership</h2>
                <p className="text-slate-600 text-lg">Join a network of over 5,000+ ambitious students worldwide. Gain the tools you need to lead.</p>
                <div className="space-y-4">
                  {[
                    "Access to exclusive networking events",
                    "Leadership Certification upon completion",
                    "Mentorship from industry executives",
                    "Early-bird access to Summits"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <LuCheck className="text-blue-600" /> {benefit}
                    </div>
                  ))}
                </div>
              </div>
              <form className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 space-y-4">
                <h3 className="text-xl font-bold mb-6">Register for Membership</h3>
                <input type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-xl border border-slate-200 outline-none focus:border-blue-600" />
                <input type="email" placeholder="University Email" className="w-full px-6 py-4 rounded-xl border border-slate-200 outline-none focus:border-blue-600" />
                <select className="w-full px-6 py-4 rounded-xl border border-slate-200 bg-white outline-none focus:border-blue-600">
                  <option>Select Level of Study</option>
                  <option>Undergraduate</option>
                  <option>Postgraduate</option>
                </select>
                <button className="w-full py-4 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
                  Become a Member
                </button>
              </form>
            </div>
          )}

          {/* VOLUNTEER PATH */}
          {activeTab === 'volunteer' && (
            <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl font-black text-slate-900 uppercase">Be an Organizer</h2>
                <p className="text-slate-600">We are looking for passionate individuals to help us manage workshops and global events.</p>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-2 border border-slate-100 rounded-[2.5rem] shadow-sm">
                <div className="p-8 space-y-4">
                  <input type="text" placeholder="First Name" className="w-full px-6 py-4 rounded-xl bg-slate-50 border-none outline-none focus:ring-2 ring-blue-600" />
                  <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-xl bg-slate-50 border-none outline-none focus:ring-2 ring-blue-600" />
                  <select className="w-full px-6 py-4 rounded-xl bg-slate-50 border-none outline-none focus:ring-2 ring-blue-600">
                    <option>Preferred Role</option>
                    <option>Event Coordination</option>
                    <option>Technical Support</option>
                    <option>Social Media & PR</option>
                  </select>
                </div>
                <div className="p-8 space-y-4 bg-slate-900 rounded-[2rem] text-white">
                  <p className="text-sm text-slate-400 mb-4">Briefly describe your experience or why you want to help:</p>
                  <textarea rows={3} className="w-full px-6 py-4 rounded-xl bg-white/10 border-none outline-none text-white focus:ring-2 ring-blue-500" placeholder="Your message..."></textarea>
                  <button className="w-full py-4 bg-white text-slate-900 font-black rounded-xl hover:bg-blue-500 hover:text-white transition-all">
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* SPONSOR PATH */}
          {activeTab === 'sponsor' && (
            <div className="animate-in fade-in slide-in-from-bottom-4">
              <div className="bg-blue-600 rounded-[3rem] p-12 text-white mb-16 flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-2/3 space-y-6">
                  <h2 className="text-4xl font-black uppercase">Empower Youth Leadership</h2>
                  <p className="text-blue-100 text-lg">Your sponsorship provides scholarships, resources, and platforms for the leaders of tomorrow. Brand visibility at our events reaches over 50k+ viewers.</p>
                  <div className="flex flex-wrap gap-4">
                    <button className="px-8 py-4 bg-white text-blue-600 font-black rounded-xl flex items-center gap-2 hover:bg-slate-100 transition-all">
                      <LuDownload /> Download Pitch Deck (PDF)
                    </button>
                  </div>
                </div>
                <div className="lg:w-1/3 bg-white/10 p-8 rounded-[2rem] backdrop-blur-md border border-white/20">
                  <h4 className="font-bold text-center mb-6 text-white">Direct Inquiry</h4>
                  <div className="space-y-4">
                    <input type="text" placeholder="Company Name" className="w-full px-6 py-3 rounded-xl bg-white/20 border-none placeholder-white/60 text-white outline-none" />
                    <input type="email" placeholder="Corporate Email" className="w-full px-6 py-3 rounded-xl bg-white/20 border-none placeholder-white/60 text-white outline-none" />
                    <button className="w-full py-4 bg-white text-blue-600 font-black rounded-xl flex items-center justify-center gap-2">
                      Request Callback <LuSend />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 4. Closing Statistics (Impact Section - Reused from your design) */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-16 uppercase tracking-tighter">Your contribution in numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "5K+", label: "Volunteer Hours" },
              { val: "45+", label: "Countries" },
              { val: "120+", label: "Corporate Partners" },
              { val: "200+", label: "Scholarships" }
            ].map((stat, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <h4 className="text-4xl font-black text-blue-600">{stat.val}</h4>
                <p className="text-slate-500 text-xs font-bold uppercase mt-2 tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default GetInvolvedPage