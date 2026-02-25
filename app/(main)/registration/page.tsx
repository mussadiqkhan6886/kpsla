"use client"
import React, { useState } from 'react'
import { LuUser, LuBookOpen, LuMapPin, LuUpload, LuCheck, LuChevronRight, LuChevronLeft, LuShieldCheck } from 'react-icons/lu'

const KPK_DISTRICTS = [
  "Abbottabad", "Bannu", "Battagram", "Buner", "Charsadda", "Dera Ismail Khan", "Hangu", "Haripur", "Karak", "Kohat", "Kohistan", "Lakki Marwat", "Lower Dir", "Malakand", "Mansehra", "Mardan", "Nowshera", "Peshawar", "Shangla", "Swabi", "Swat", "Tank", "Torghar", "Upper Dir"
];

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
            <div className="flex justify-between mb-4 px-2">
              {['Identity', 'Location', 'Academic', 'Commitment'].map((label, i) => (
                <div key={i} className={`text-[10px] md:text-xs font-black uppercase tracking-[0.2em] ${step >= i + 1 ? 'text-blue-600' : 'text-slate-400'}`}>
                  {label}
                </div>
              ))}
            </div>
            <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 transition-all duration-500" style={{ width: `${(step / 4) * 100}%` }} />
            </div>
          </div>

          <form className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 p-8 md:p-14 border border-slate-100">
            
            {/* STEP 1: PERSONAL & IDENTITY */}
            {step === 1 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><LuUser size={24} /></div>
                  <h2 className="text-2xl font-black text-slate-900">Personal Identity</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name *</label>
                    <input type="text" required className="input-style" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Father's Name *</label>
                    <input type="text" required className="input-style" placeholder="Guardian Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">CNIC / Form B *</label>
                    <input type="text" required className="input-style" placeholder="00000-0000000-0" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Date of Birth *</label>
                    <input type="date" required className="input-style" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Gender *</label>
                    <select className="input-style bg-white">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email ID *</label>
                    <input type="email" required className="input-style" placeholder="email@example.com" />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: ADDRESS & CONTACT */}
            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><LuMapPin size={24} /></div>
                  <h2 className="text-2xl font-black text-slate-900">Contact & Location</h2>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Mobile Number *</label>
                      <input type="tel" className="input-style" placeholder="03XX-XXXXXXX" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">WhatsApp Number</label>
                      <input type="tel" className="input-style" placeholder="03XX-XXXXXXX" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-sm font-bold text-slate-700">District (KPK) *</label>
                      <select className="input-style bg-white">
                        {KPK_DISTRICTS.map(d => <option key={d}>{d}</option>)}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Permanent Address</label>
                      <textarea className="input-style h-24 pt-4" placeholder="Full address..."></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Postal Address</label>
                      <textarea className="input-style h-24 pt-4" placeholder="Mailing address..."></textarea>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: ACADEMICS & ROLES */}
            {step === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><LuBookOpen size={24} /></div>
                  <h2 className="text-2xl font-black text-slate-900">Academic Background</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Current Grade/Class *</label>
                    <select className="input-style bg-white">
                      {[7,8,9,10,11,12].map(g => <option key={g}>{g}th Class</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Academic % (Last Year)</label>
                    <input type="text" className="input-style" placeholder="e.g. 85%" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-slate-700">Name of Institute *</label>
                    <input type="text" className="input-style" placeholder="School/College Name" />
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    <label className="text-sm font-bold text-slate-700">Extracurricular Involvement</label>
                    <div className="flex flex-wrap gap-4">
                      {['Debates', 'Sports', 'Social Work', 'Other'].map(item => (
                        <label key={item} className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-100 bg-slate-50 cursor-pointer hover:bg-blue-50 transition-all">
                          <input type="checkbox" className="w-4 h-4 rounded text-blue-600" />
                          <span className="text-sm font-medium">{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: COMMITMENT & UPLOAD */}
            {step === 4 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><LuShieldCheck size={24} /></div>
                  <h2 className="text-2xl font-black text-slate-900">Final Commitment</h2>
                </div>

                <div className="space-y-6">
                  <div className="space-y-4">
                    <label className="text-sm font-bold text-slate-700">Affiliation with any other Organization?</label>
                    <div className="flex gap-6">
                      {['Yes', 'No'].map(val => (
                        <label key={val} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="affiliation" className="w-4 h-4 text-blue-600" />
                          <span className="font-medium text-slate-700">{val}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Why do you want to join us? *</label>
                    <textarea className="input-style h-28 pt-4" placeholder="Your motivation..."></textarea>
                  </div>

                  <div className="space-y-4">
                    <label className="text-sm font-bold text-slate-700">Do you commit to regular attendance?</label>
                    <div className="flex gap-6">
                      {['Yes', 'No', 'Maybe'].map(val => (
                        <label key={val} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name="attendance" className="w-4 h-4 text-blue-600" />
                          <span className="font-medium text-slate-700">{val}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="border-2 border-dashed border-slate-200 rounded-3xl p-8 text-center bg-slate-50">
                    <LuUpload className="mx-auto text-slate-400 mb-4" size={32} />
                    <p className="font-bold text-slate-900">Upload Your Picture</p>
                    <p className="text-xs text-slate-500 mb-4">Passport size, Max 2MB</p>
                    <input type="file" className="hidden" id="pic" />
                    <label htmlFor="pic" className="px-6 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold cursor-pointer hover:bg-slate-900 hover:text-white transition-all">Browse</label>
                  </div>

                  <label className="flex items-start gap-3 p-4 bg-blue-50 rounded-2xl cursor-pointer">
                    <input type="checkbox" required className="mt-1" />
                    <span className="text-xs text-blue-800 leading-relaxed font-medium">
                      I have obtained **Parental Consent** to join this program and I agree to abide by the code of conduct.
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-12 flex justify-between items-center pt-8 border-t border-slate-100">
              {step > 1 ? (
                <button type="button" onClick={prevStep} className="flex items-center gap-2 font-bold text-slate-500 hover:text-slate-900">
                  <LuChevronLeft /> Back
                </button>
              ) : <div />}

              {step < 4 ? (
                <button type="button" onClick={nextStep} className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all flex items-center gap-2">
                  Next Step <LuChevronRight />
                </button>
              ) : (
                <button type="submit" className="px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all flex items-center gap-2 shadow-xl shadow-blue-200">
                  Submit Registration <LuCheck />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .input-style {
          width: 100%;
          padding: 1rem 1.25rem;
          border-radius: 1rem;
          border: 1px solid #e2e8f0;
          outline: none;
          transition: all 0.2s;
        }
        .input-style:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
        }
      `}</style>
    </section>
  )
}

export default StudentRegistration