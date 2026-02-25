"use client"
import React, { useState } from 'react'
import { LuUser, LuBookOpen, LuMapPin, LuUpload, LuCheck, LuChevronRight, LuChevronLeft } from 'react-icons/lu'

const StudentRegistration = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <section className="py-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between mb-4">
              {['Personal info', 'Education', 'Program Choice', 'Documents'].map((label, i) => (
                <div key={i} className={`text-xs font-bold uppercase tracking-widest ${step >= i + 1 ? 'text-blue-600' : 'text-slate-400'}`}>
                  {label}
                </div>
              ))}
            </div>
            <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 transition-all duration-500" 
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>

          <form className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 p-8 md:p-12 border border-slate-100">
            
            {/* STEP 1: PERSONAL DETAILS */}
            {step === 1 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                <div className="flex items-center gap-4 text-slate-900 mb-8">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><LuUser size={24} /></div>
                  <h2 className="text-2xl font-black">Personal Details</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">First Name *</label>
                    <input type="text" required className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-blue-600 outline-none transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Last Name *</label>
                    <input type="text" required className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-blue-600 outline-none transition-all" placeholder="Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address *</label>
                    <input type="email" required className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-blue-600 outline-none transition-all" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number *</label>
                    <input type="tel" required className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-blue-600 outline-none transition-all" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: ADDRESS & EDUCATION */}
            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
                <div className="flex items-center gap-4 text-slate-900 mb-8">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><LuMapPin size={24} /></div>
                  <h2 className="text-2xl font-black">Background Information</h2>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Residential Address</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-blue-600 outline-none transition-all" placeholder="Street name, City, Country" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Highest Qualification *</label>
                      <select className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-white outline-none focus:border-blue-600">
                        <option>High School</option>
                        <option>Bachelor's Degree</option>
                        <option>Master's Degree</option>
                        <option>Professional Cert</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Year of Graduation</label>
                      <input type="number" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-blue-600 outline-none transition-all" placeholder="2024" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: PROGRAM SELECTION */}
            {step === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
                <div className="flex items-center gap-4 text-slate-900 mb-8">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><LuBookOpen size={24} /></div>
                  <h2 className="text-2xl font-black">Program Choice</h2>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {['Global Leadership Summit', 'Executive Management', 'Digital Transformation', 'Strategic Innovation'].map((course) => (
                    <label key={course} className="flex items-center p-5 rounded-2xl border border-slate-100 bg-slate-50 cursor-pointer hover:border-blue-600 transition-all group">
                      <input type="radio" name="course" className="w-5 h-5 text-blue-600 border-slate-300 focus:ring-blue-500" />
                      <span className="ml-4 font-bold text-slate-700 group-hover:text-blue-600">{course}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 4: DOCUMENT UPLOAD */}
            {step === 4 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
                <div className="flex items-center gap-4 text-slate-900 mb-8">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><LuUpload size={24} /></div>
                  <h2 className="text-2xl font-black">Document Upload</h2>
                </div>

                <div className="border-2 border-dashed border-slate-200 rounded-[2rem] p-12 text-center space-y-4 hover:border-blue-400 transition-colors cursor-pointer bg-slate-50">
                  <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400">
                    <LuUpload size={28} />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900">Upload CV & Transcript</p>
                    <p className="text-slate-500 text-sm">PDF, JPG or PNG (Max. 5MB)</p>
                  </div>
                  <input type="file" className="hidden" id="file-upload" multiple />
                  <label htmlFor="file-upload" className="inline-block px-8 py-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-900 hover:text-white transition-all">
                    Browse Files
                  </label>
                </div>

                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                  <LuCheck className="text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-xs text-blue-800 leading-relaxed">
                    By submitting this application, I confirm that all information provided is accurate and I agree to the terms and conditions.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-12 flex justify-between items-center pt-8 border-t border-slate-100">
              {step > 1 ? (
                <button type="button" onClick={prevStep} className="flex items-center gap-2 font-bold text-slate-500 hover:text-slate-900 transition-colors">
                  <LuChevronLeft /> Back
                </button>
              ) : <div />}

              {step < 4 ? (
                <button type="button" onClick={nextStep} className="px-10 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all flex items-center gap-2 shadow-lg shadow-slate-200">
                  Continue <LuChevronRight />
                </button>
              ) : (
                <button type="submit" className="px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center gap-2 shadow-xl shadow-blue-200">
                  Complete Registration <LuCheck />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default StudentRegistration