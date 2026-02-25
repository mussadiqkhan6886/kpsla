import React from 'react'
import { LuGavel, LuCircleAlert, LuUserCheck, LuScale, LuSignature } from 'react-icons/lu'

const TermsOfService = () => {
  const corePolicies = [
    {
      title: "Eligibility",
      desc: "Open to students (Grade 7-12) and professionals. Minors must have parental consent.",
      icon: <LuUserCheck size={24} />
    },
    {
      title: "Conduct",
      desc: "Zero tolerance for bullying, plagiarism, or disruptive behavior during events.",
      icon: <LuScale size={24} />
    },
    {
      title: "Accuracy",
      desc: "Users must provide truthful information, including CNIC and academic records.",
      icon: <LuSignature size={24} />
    }
  ];

  return (
    <main className="bg-white pt-20">
      {/* 1. Header Section */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <LuGavel size={48} className="mx-auto text-blue-500 mb-6" />
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Terms of <span className="text-blue-500">Service</span></h1>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Please read these terms carefully. By registering for our programs, you agree to 
            be bound by these legal conditions.
          </p>
        </div>
      </section>

      {/* 2. Key Highlights Bar */}
      <section className="py-12 border-b border-slate-100 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corePolicies.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-2xl shadow-sm text-blue-600">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Detailed Terms */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-slate max-w-none space-y-12">
            
            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-3">
                1. Acceptance of Terms
              </h2>
              <p className="text-slate-600 leading-relaxed">
                By accessing EduPath and registering for a student membership, you confirm that you are at least 13 years of age or possess legal parental or guardian consent, and that you are fully able and competent to enter into the terms, conditions, obligations, and representations set forth in these Terms.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                2. User Obligations & Registration
              </h2>
              <p className="text-slate-600 leading-relaxed">
                When creating an account, you must provide accurate and complete information, including:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2">
                <li>Legal name and Father's name as per government records.</li>
                <li>Valid CNIC or Form B number.</li>
                <li>Accurate academic standing and institutional affiliation.</li>
              </ul>
              <p className="text-slate-600">
                Providing false information (e.g., faking academic grades or CNIC numbers) will result in immediate permanent expulsion from all current and future programs.
              </p>
            </div>

            <div className="p-8 bg-amber-50 rounded-3xl border border-amber-100 flex gap-4">
              <LuCircleAlert className="text-amber-600 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-amber-900 mb-1">Code of Conduct</h4>
                <p className="text-sm text-amber-800 leading-relaxed">
                  As a member of a leadership collective, students are expected to maintain the highest standards of integrity. Harassment, hate speech, or unethical behavior in our community forums or events is strictly prohibited.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                3. Intellectual Property
              </h2>
              <p className="text-slate-600 leading-relaxed">
                All training materials, summit recordings, and curriculum provided by EduPath are for personal use only. You may not distribute, modify, or sell our content without explicit written permission.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                4. Termination of Membership
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We reserve the right to suspend or terminate your access to the platform without prior notice if you breach any of these Terms. Upon termination, your right to use the platform and access certificates will cease immediately.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                5. Limitation of Liability
              </h2>
              <p className="text-slate-600 leading-relaxed italic">
                EduPath and its affiliates shall not be liable for any indirect, incidental, or consequential damages resulting from your participation in our events or your inability to use the platform.
              </p>
            </div>

          </div>

          {/* Footer of the Terms */}
          <div className="mt-20 pt-12 border-t border-slate-100 text-center">
            <p className="text-slate-500 text-sm">
              If you have any questions about these Terms, please contact our legal team at 
              <span className="text-blue-600 font-bold ml-1">legal@edupath.com</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TermsOfService