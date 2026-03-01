"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { LuUsers, LuHandshake, LuGraduationCap, LuHeart, LuSend, LuDownload, LuCheck } from 'react-icons/lu'
import Link from 'next/link'
import Counter from '@/sections/Counter'
import { FiPhoneCall } from 'react-icons/fi'
import axios from 'axios'

const GetInvolvedPage = () => {
  const [activeTab, setActiveTab] = useState('student');
  const [loading, setLoading] = useState(false);

  // Form States
  const [organizerData, setOrganizerData] = useState({ firstName: '', email: '', role: 'Event Coordination', message: '' });
  const [sponsorData, setSponsorData] = useState({ companyName: '', corporateEmail: '' });

  const handleOrganizerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/organizer', organizerData);
      alert("Application Submitted!");
      setOrganizerData({ firstName: '', email: '', role: 'Event Coordination', message: '' });
    } catch (err) { alert("Error sending application"); }
    setLoading(false);
  };

  const handleSponsorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/sponsor', sponsorData);
      alert("Inquiry Sent!");
      setSponsorData({ companyName: '', corporateEmail: '' });
    } catch (err) { alert("Error sending inquiry"); }
    setLoading(false);
  };

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
          <div className="flex justify-center gap-6 md:gap-12">
            {[
              { id: 'student', label: 'For Students', icon: <LuGraduationCap className='hidden sm:inline' /> },
              { id: 'volunteer', label: 'For Volunteers', icon: <LuUsers className='hidden sm:inline' /> },
              { id: 'sponsor', label: 'For Sponsors', icon: <LuHandshake className='hidden sm:inline' /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-6 font-black uppercase tracking-widest transition-all border-b-2 ${
                  activeTab === tab.id ? 'border-blue-600 text-blue-600 text-sm' : 'text-[12px] border-transparent text-slate-400 hover:text-slate-600'
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
                <p className="text-slate-600 text-lg">Join a network of over 500+ ambitious students. Gain the tools you need to lead.</p>
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
                <Link href={"/registration"} className="w-full py-4 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 transition-all shadow-xl inline-block text-center shadow-blue-100">
                  Become a Member
                </Link>
              </form>
            </div>
          )}

          {activeTab === 'volunteer' && (
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black text-slate-900 uppercase">Be an Organizer</h2>
            <p className="text-slate-600">We are looking for passionate individuals to help us manage workshops and global events.</p>
          </div>
          <form onSubmit={handleOrganizerSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-2 border border-slate-100 rounded-[2.5rem] shadow-sm">
            <div className="p-8 space-y-4">
              <input 
                required
                type="text" 
                placeholder="First Name" 
                className="w-full px-6 py-4 rounded-xl bg-slate-50 border-none outline-none focus:ring-2 ring-blue-600"
                value={organizerData.firstName}
                onChange={(e) => setOrganizerData({...organizerData, firstName: e.target.value})}
              />
              <input 
                required
                type="email" 
                placeholder="Email Address" 
                className="w-full px-6 py-4 rounded-xl bg-slate-50 border-none outline-none focus:ring-2 ring-blue-600"
                value={organizerData.email}
                onChange={(e) => setOrganizerData({...organizerData, email: e.target.value})}
              />
              <select 
                className="w-full px-6 py-4 rounded-xl bg-slate-50 border-none outline-none focus:ring-2 ring-blue-600"
                value={organizerData.role}
                onChange={(e) => setOrganizerData({...organizerData, role: e.target.value})}
              >
                <option>Event Coordination</option>
                <option>Technical Support</option>
                <option>Social Media & PR</option>
              </select>
            </div>
            <div className="p-8 space-y-4 bg-slate-900 rounded-[2rem] text-white">
              <p className="text-sm text-slate-400 mb-4">Briefly describe your experience or why you want to help:</p>
              <textarea 
                required
                rows={3} 
                className="w-full px-6 py-4 rounded-xl bg-white/10 border-none outline-none text-white focus:ring-2 ring-blue-500" 
                placeholder="Your message..."
                value={organizerData.message}
                onChange={(e) => setOrganizerData({...organizerData, message: e.target.value})}
              ></textarea>
              <button disabled={loading} className="w-full py-4 bg-white text-slate-900 font-black rounded-xl hover:bg-blue-500 hover:text-white transition-all disabled:opacity-50">
                {loading ? "Sending..." : "Submit Application"}
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
              <p className="text-blue-100 text-lg">Your sponsorship provides scholarships, resources, and platforms for the leaders of tomorrow.</p>
              <div className="flex items-center justify-center flex-wrap gap-4">
                <Link target="_blank" href="https://wa.me/923409789559" type="button" className="px-8 py-4 bg-green-500 text-green-100 font-black rounded-xl flex items-center gap-2 ">
                  <FiPhoneCall /> Whatsapp
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 bg-white/10 p-4 md:p-8 rounded-[2rem] backdrop-blur-md border border-white/20">
              <h4 className="font-bold text-center mb-6 text-white">Direct Inquiry</h4>
              <form onSubmit={handleSponsorSubmit} className="space-y-4">
                <input 
                  required
                  type="text" 
                  placeholder="Company Name" 
                  className="w-full px-6 py-3 rounded-xl bg-white/20 border-none placeholder-white/60 text-white outline-none" 
                  value={sponsorData.companyName}
                  onChange={(e) => setSponsorData({...sponsorData, companyName: e.target.value})}
                />
                <input 
                  required
                  type="email" 
                  placeholder="Corporate Email" 
                  className="w-full px-6 py-3 rounded-xl bg-white/20 border-none placeholder-white/60 text-white outline-none" 
                  value={sponsorData.corporateEmail}
                  onChange={(e) => setSponsorData({...sponsorData, corporateEmail: e.target.value})}
                />
                <button disabled={loading} className="w-full py-4 bg-white text-blue-600 font-black rounded-xl flex items-center justify-center gap-2">
                  {loading ? "Sending..." : <>Request <LuSend /></>}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
        </div>
      </section>

      <Counter />
    </main>
  )
}

export default GetInvolvedPage