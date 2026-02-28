"use client"
import React, { useState } from 'react'
import { LuUser, LuBookOpen, LuMapPin, LuUpload, LuCheck, LuChevronRight, LuChevronLeft, LuShieldCheck, LuLoader } from 'react-icons/lu'

const KPK_DISTRICTS = ["Abbottabad", "Bannu", "Battagram", "Buner", "Charsadda", "Dera Ismail Khan", "Hangu", "Haripur", "Karak", "Kohat", "Kohistan", "Lakki Marwat", "Lower Dir", "Malakand", "Mansehra", "Mardan", "Nowshera", "Peshawar", "Shangla", "Swabi", "Swat", "Tank", "Torghar", "Upper Dir"];

const StudentRegistration = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '', fatherName: '', cnicOrFormB: '', dob: '', gender: 'Male', email: '',
    mobileNumber: '', whatsAppNumber: '', district: 'Peshawar', permanentAddress: '', postalAddress: '',
    currentGrade: '10th Class', academicPercentage: '', instituteName: '',
    otherAffiliations: 'No', motivation: '', attendanceCommitment: 'Yes', parentalConsent: false
  });
  const [extracurriculars, setExtracurriculars] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCheckboxChange = (item: string) => {
    setExtracurriculars(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => data.append(key, String(val)));
    extracurriculars.forEach(item => data.append('extracurriculars', item));
    if (file) data.append('profilePicture', file);

    const res = await fetch('/api/registeration', { method: 'POST', body: data });
    if (res.ok) {
      alert("Registration Successful!");
      window.location.reload();
    } else {
      alert("Error: CNIC or Email might already be registered.");
    }
    setLoading(false);
  };

  return (
    <section className="py-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-4 px-2">
            {['Identity', 'Location', 'Academic', 'Commitment'].map((label, i) => (
              <div key={i} className={`text-[8px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.2em] ${step >= i + 1 ? 'text-blue-600' : 'text-slate-400'}`}>
                {label}
              </div>
            ))}
          </div>
          <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 transition-all duration-500" style={{ width: `${(step / 4) * 100}%` }} />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-14 border border-slate-100">
          
          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
              <div className="flex items-center gap-4"><LuUser className="text-blue-600" size={24} /> <h2 className="text-2xl font-black">Personal Identity</h2></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-sm font-bold">Full Name *</label>
                   <input name="fullName" value={formData.fullName} onChange={handleInputChange} required className="input-style" />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-bold">Father's Name *</label>
                   <input name="fatherName" value={formData.fatherName} onChange={handleInputChange} required className="input-style" />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-bold">CNIC / Form B *</label>
                   <input name="cnicOrFormB" value={formData.cnicOrFormB} onChange={handleInputChange} required className="input-style" placeholder="00000-0000000-0" />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-bold">Date of Birth *</label>
                   <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} required className="input-style" />
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-bold">Gender *</label>
                   <select name="gender" value={formData.gender} onChange={handleInputChange} className="input-style">
                     <option>Male</option><option>Female</option><option>Other</option>
                   </select>
                </div>
                <div className="space-y-2">
                   <label className="text-sm font-bold">Email ID *</label>
                   <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="input-style" />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
              <div className="flex items-center gap-4"><LuMapPin className="text-blue-600" size={24} /> <h2 className="text-2xl font-black">Contact & Location</h2></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} placeholder="Mobile Number *" required className="input-style" />
                <input name="whatsAppNumber" value={formData.whatsAppNumber} onChange={handleInputChange} placeholder="WhatsApp Number" className="input-style" />
                <div className="md:col-span-2">
                  <select name="district" value={formData.district} onChange={handleInputChange} className="input-style">
                    {KPK_DISTRICTS.map(d => <option key={d}>{d}</option>)}
                  </select>
                </div>
                <textarea name="permanentAddress" value={formData.permanentAddress} onChange={handleInputChange} placeholder="Permanent Address" className="input-style h-24 pt-4" />
                <textarea name="postalAddress" value={formData.postalAddress} onChange={handleInputChange} placeholder="Postal Address" className="input-style h-24 pt-4" />
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
              <div className="flex items-center gap-4"><LuBookOpen className="text-blue-600" size={24} /> <h2 className="text-2xl font-black">Academic Background</h2></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <select name="currentGrade" value={formData.currentGrade} onChange={handleInputChange} className="input-style">
                   {[7,8,9,10,11,12].map(g => <option key={g}>{g}th Class</option>)}
                </select>
                <input name="academicPercentage" value={formData.academicPercentage} onChange={handleInputChange} placeholder="Academic %" className="input-style" />
                <input name="instituteName" value={formData.instituteName} onChange={handleInputChange} placeholder="Institute Name *" required className="input-style md:col-span-2" />
                <div className="md:col-span-2 flex flex-wrap gap-3">
                  {['Debates', 'Sports', 'Social Work', 'Other'].map(item => (
                    <label key={item} className={`flex items-center gap-2 px-4 py-2 rounded-xl border cursor-pointer transition-all ${extracurriculars.includes(item) ? 'bg-blue-600 text-white' : 'bg-slate-50'}`}>
                      <input type="checkbox" className="hidden" onChange={() => handleCheckboxChange(item)} />
                      <span className="text-sm font-bold">{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4">
              <div className="flex items-center gap-4"><LuShieldCheck className="text-blue-600" size={24} /> <h2 className="text-2xl font-black">Final Commitment</h2></div>
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-sm font-bold">Other Organization Affiliation?</p>
                  <div className="flex gap-4">
                    {['Yes', 'No'].map(v => (
                      <label key={v} className="flex items-center gap-2"><input type="radio" name="otherAffiliations" value={v} checked={formData.otherAffiliations === v} onChange={handleInputChange} /> {v}</label>
                    ))}
                  </div>
                </div>
                <textarea name="motivation" value={formData.motivation} onChange={handleInputChange} required placeholder="Why do you want to join? *" className="input-style h-28 pt-4" />
                
                <div className="border-2 border-dashed border-slate-200 rounded-3xl p-8 text-center bg-slate-50 relative">
                  {file ? <p className="text-green-600 font-bold italic">Image Selected: {file.name}</p> : <LuUpload className="mx-auto text-slate-400 mb-2" size={32} />}
                  <input type="file" className="hidden" id="pic" onChange={(e) => setFile(e.target.files?.[0] || null)} />
                  <label htmlFor="pic" className="block mt-2 font-bold cursor-pointer text-blue-600 underline">Browse Picture</label>
                </div>

                <label className="flex items-start gap-3 p-4 bg-blue-50 rounded-2xl cursor-pointer">
                  <input type="checkbox" name="parentalConsent" checked={formData.parentalConsent} onChange={handleInputChange} required />
                  <span className="text-xs font-medium">I have obtained <b>Parental Consent</b> to join.</span>
                </label>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center pt-8 border-t">
            {step > 1 ? (
              <button type="button" onClick={() => setStep(step - 1)} className="font-bold text-slate-500 flex items-center gap-2"><LuChevronLeft /> Back</button>
            ) : <div />}

            {step < 4 ? (
              <button type="button" onClick={() => setStep(step + 1)} className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl flex items-center gap-2">Next Step <LuChevronRight /></button>
            ) : (
              <button type="submit" disabled={loading} className="px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl flex items-center gap-2 shadow-xl shadow-blue-200 disabled:opacity-50">
                {loading ? <LuLoader className="animate-spin" /> : <LuCheck />} Submit
              </button>
            )}
          </div>
        </form>
      </div>
      <style jsx>{` .input-style { width: 100%; padding: 1rem; border-radius: 1rem; border: 1px solid #e2e8f0; outline: none; } .input-style:focus { border-color: #2563eb; } `}</style>
    </section>
  )
}

export default StudentRegistration