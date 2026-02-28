"use client"
import React, { useState } from 'react'
import { LuUser, LuBriefcase, LuMessageSquare, LuSend, LuTrash2 } from 'react-icons/lu'
import axios from 'axios'

const AddReviewPage = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', role: '', text: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('/api/review', formData);
      if (res.status === 201) {
        alert("Review added successfully!");
        setFormData({ name: '', role: '', text: '' });
      }
    } catch (err) {
      alert("Failed to save review");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 md:p-12 mt-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <div className="p-3 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-100">
            <LuMessageSquare size={24} />
          </div>
          <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Student Testimonials</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* FORM */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 space-y-5">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase ml-2">Reviewer Name</label>
              <div className="relative">
                <LuUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input name="name" value={formData.name} onChange={handleChange} required placeholder="e.g. Ali Khan" className="review-input" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase ml-2">Designation / Role</label>
              <div className="relative">
                <LuBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input name="role" value={formData.role} onChange={handleChange} required placeholder="e.g. Software Engineer" className="review-input" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase ml-2">Their Review</label>
              <textarea name="text" value={formData.text} onChange={handleChange} required placeholder="What did they say about the program?" className="review-input h-32 pt-4" />
            </div>

            <button disabled={loading} type="submit" className="w-full bg-indigo-600 text-white font-black py-4 rounded-2xl hover:bg-slate-900 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-100 disabled:opacity-50">
              {loading ? "Saving..." : <><LuSend size={18}/> Publish Review</>}
            </button>
          </form>

          {/* PREVIEW CARD */}
          <div className="space-y-4">
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-widest ml-2">Live Preview</h2>
            <div className="bg-indigo-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <LuMessageSquare className="text-white/20 mb-6" size={40} />
              <p className="text-lg font-medium leading-relaxed mb-8 italic">
                "{formData.text || "Your review text will appear here once you start typing..."}"
              </p>
              <div>
                <h4 className="font-black text-xl">{formData.name || "Reviewer Name"}</h4>
                <p className="text-indigo-200 text-sm font-bold uppercase tracking-widest mt-1">
                  {formData.role || "Role / Designation"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .review-input {
          width: 100%;
          padding: 1rem 1rem 1rem 3rem;
          border-radius: 1.25rem;
          border: 1px solid #e2e8f0;
          font-weight: 700;
          outline: none;
          background: #f8fafc;
          transition: all 0.2s;
        }
        .review-input:focus {
          border-color: #4f46e5;
          background: white;
          box-shadow: 0 0 0 4px rgba(79, 70, 229, 0.05);
        }
        textarea.review-input { padding-left: 1.25rem; }
      `}</style>
    </div>
  )
}

export default AddReviewPage;