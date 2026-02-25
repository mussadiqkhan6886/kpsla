"use client"
import React, { useState } from 'react'
import { LuChevronDown, LuHandHelping } from 'react-icons/lu'

const faqs = [
  {
    question: "Who can join the EduPath community?",
    answer: "Anyone passionate about leadership! Our student membership is geared toward undergraduates and postgraduates, while our mentor and volunteer roles are open to industry professionals with 3+ years of experience."
  },
  {
    question: "Is there a membership fee for students?",
    answer: "Basic membership is completely free. We also offer a 'Premium Scholar' tier for $10/month which includes certified masterclasses and priority access to our annual Global Leadership Summit."
  },
  {
    question: "How do I apply for a sponsorship or partnership?",
    answer: "You can navigate to the 'Sponsor' tab on our Get Involved page and download our Pitch Deck. Once reviewed, fill out the inquiry form, and our Partnership Director will contact you within 48 hours."
  },
  {
    question: "Can I volunteer if I live outside the US?",
    answer: "Absolutely! We are a global collective. Over 60% of our volunteers and mentors work remotely, helping us manage virtual workshops and international student chapters."
  },
  {
    question: "Will I receive a certificate for participating?",
    answer: "Yes. All members who complete our core leadership modules and all event volunteers receive a digital, blockchain-verified certificate of achievement to add to their LinkedIn profiles."
  }
]

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
                  <span className={`text-lg font-bold ${openIndex === index ? 'text-blue-600' : 'text-slate-900'}`}>
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
              Chat with our Support Team
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ