import React from 'react'
import { LuShieldCheck, LuLock, LuEye, LuFileText, LuUserCheck } from 'react-icons/lu'

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Data Collection",
      icon: <LuUserCheck className="text-blue-600" />,
      content: "We collect personal information including names, Father's names, CNIC/Form B, dates of birth, and academic records specifically for the purpose of membership registration and leadership program placement."
    },
    {
      title: "Information Usage",
      icon: <LuEye className="text-blue-600" />,
      content: "Your data is used to verify eligibility, communicate program updates, and ensure parental consent for minors. We do not sell or trade your personal information to third-party marketing firms."
    },
    {
      title: "Data Security",
      icon: <LuLock className="text-blue-600" />,
      content: "We implement industry-standard encryption (SSL) to protect your sensitive documents (CNIC and Photos) during transmission and storage."
    }
  ];

  return (
    <main className="bg-white pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <LuShieldCheck size={48} className="mx-auto text-blue-600 mb-6" />
          <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Privacy Policy</h1>
          <p className="text-slate-500 mt-4 font-medium">Last Updated: February 2026</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Quick Summary Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 p-8 bg-slate-900 rounded-[2.5rem] text-white">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <LuFileText /> At a Glance
                </h3>
                <div className="space-y-8">
                  {sections.map((s, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center gap-2 font-bold text-blue-400 text-sm uppercase tracking-widest">
                        {s.title}
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {s.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Legal Text */}
            <div className="lg:w-2/3 prose prose-slate max-w-none">
              <h2 className="text-2xl font-black text-slate-900 mb-6">1. Introduction</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Welcome to KPSLA. We are committed to protecting the privacy of our students, particularly those under the age of 18. This policy outlines how we handle the personal information collected through our registration forms.
              </p>

              <h2 className="text-2xl font-black text-slate-900 mb-6">2. Information We Collect</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                To provide our leadership services, we require:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-8">
                <li>Identity Data (Name, Father's Name, CNIC, D.O.B).</li>
                <li>Contact Data (Email, Phone, WhatsApp, Permanent/Postal Address).</li>
                <li>Academic Data (Institute Name, Grade, Last Year's Percentage).</li>
                <li>Media Data (Passport size photograph).</li>
              </ul>

              <h2 className="text-2xl font-black text-slate-900 mb-6">3. Parental Consent</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                For students between 7th and 12th grade, we strictly require parental or guardian consent. By submitting the registration form, you affirm that you have the permission of a parent or legal guardian to participate in our programs.
              </p>

              <h2 className="text-2xl font-black text-slate-900 mb-6">4. Data Retention</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                We retain your personal data only for as long as is necessary for the purposes set out in this Privacy Policy. Records of unsuccessful applications are deleted after six months.
              </p>

              <h2 className="text-2xl font-black text-slate-900 mb-6">5. Your Rights</h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                You have the right to request access to the data we hold about you, request corrections, or request that your account be deleted from our systems at any time.
              </p>

              <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-2">Contact Our Privacy Officer</h4>
                <p className="text-blue-800 text-sm">
                  If you have questions regarding your data, please contact us at: 
                  <span className="font-bold ml-1">kpsla.kp@gmail.com</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPolicy