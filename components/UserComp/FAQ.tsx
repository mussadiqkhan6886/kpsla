"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { LuChevronDown, LuHandHelping } from 'react-icons/lu'

const faqs = [
  {
    question: "Who can join the KPSLA community?",
    answer: "Membership is primarily open to students across Khyber Pakhtunkhwa from Grade 7 to Grade 12. We also encourage university students and young professionals to apply as mentors or event volunteers."
  },
  {
    question: "Is there a fee for registration or membership?",
    answer: "No. KPSLA is a student-led movement dedicated to empowerment. Basic registration and participation in our core leadership programs are free of charge for all eligible students in KP."
  },
  {
    question: "How do I receive a certificate for my participation?",
    answer: "Certificates are issued upon the successful completion of specific milestones, such as attending our annual Leadership Development Conference or finishing a full term of our character-building workshops."
  },
  {
    question: "Why is parental consent required for registration?",
    answer: "As we serve a younger demographic (Grade 7-12), we prioritize student safety. Parental consent ensures that guardians are aware of their child's involvement in our educational and community activities."
  },
  {
    question: "Can I join KPSLA if I am not from Mardan?",
    answer: "Absolutely! While our headquarters is in Mardan, KPSLA is a provincial movement. We aim to have active student chapters and events across all districts of Khyber Pakhtunkhwa."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faq' className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              <LuHandHelping size={14} /> Knowledge Base
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter">
              FREQUENTLY ASKED <span className="text-blue-600">QUESTIONS</span>
            </h2>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-3xl transition-all duration-300 ${
                  openIndex === index 
                    ? 'border-blue-600 bg-blue-50/30' 
                    : 'border-slate-100 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
                >
                  <span className={`text-sm md:text-lg font-bold ${openIndex === index ? 'text-blue-600' : 'text-slate-900'}`}>
                    {faq.question}
                  </span>
                  <LuChevronDown 
                    size={24} 
                    className={`text-slate-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-blue-600' : ''}`} 
                  />
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-8 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Support Callout */}
          <div className="mt-16 p-8 rounded-[2rem] bg-slate-900 text-center text-white">
            <p className="text-slate-400 mb-4">Still have a specific question?</p>
            <button className="font-bold text-blue-400 hover:text-white transition-colors underline underline-offset-8">
              <Link href={"/contact-us"} >Chat with our Support Team</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ