"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LuCalendarPlus, LuClock, LuMapPin, LuType, LuChevronUp, LuChevronDown } from 'react-icons/lu'
import Image from 'next/image'

const AddPastEvent = () => {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const [hour, setHour] = useState('12');
  const [minute, setMinute] = useState('00');
  const [period, setPeriod] = useState('PM');

  const [formData, setFormData] = useState({
    title: '',
    location: '',
    date: '',
    time: '12:00 PM', // Default
    category: 'Workshop',
    description: '',
    isPast: true
  });
  const [file, setFile] = useState<File | null>(null);

  // Sync internal time state to formData whenever they change
  useEffect(() => {
    setFormData(prev => ({ ...prev, time: `${hour}:${minute} ${period}` }));
  }, [hour, minute, period]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append('title', formData.title);
    data.append('location', formData.location);
    data.append('date', formData.date);
    data.append('time', formData.time);
    data.append('category', formData.category);
    data.append('description', formData.description);
    data.append('isPast', String(formData.isPast));
    if (file) data.append('image', file);

    const res = await fetch('/api/event', { method: 'POST', body: data });
    if (res.ok) {
      setFormData({
        title: '',
        location: '',
        date: '',
        category: 'Workshop',
        description: '',
        isPast: true,
        time: '12:00 PM'
      });
      setPreview(null);
      setFile(null);
    }
    setLoading(false);
  };

  return (
    <div className="p-6 md:p-10 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto space-y-10">
        
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
                <LuCalendarPlus size={24} />
            </div>
            <h1 className="text-2xl font-black text-slate-900 uppercase">Add Event</h1>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <input name="title" value={formData.title} onChange={handleChange} placeholder="Event Title" required className="admin-input" />
              <input name="location" value={formData.location} onChange={handleChange} placeholder="Location (e.g. Peshawar)" required className="admin-input" />
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase ml-2">Event Date</label>
                    <input name="date" type="date" value={formData.date} onChange={handleChange} required className="admin-input" />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase ml-2">Category</label>
                    <select name="category" value={formData.category} onChange={handleChange} className="admin-input bg-white">
                        <option value="Workshop">Workshop</option>
                        <option value="Conference">Conference</option>
                        <option value="Competition">Competition</option>
                        <option value="Seminar">Seminar</option>
                    </select>
                </div>
              </div>

              {/* --- CUSTOM TIME SELECTOR --- */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase ml-2 flex items-center gap-1">
                    <LuClock size={12} /> Select Event Time
                </label>
                <div className="flex items-center gap-2 bg-slate-50 p-3 rounded-2xl border border-slate-200 w-fit">
                    {/* Hour */}
                    <div className="flex flex-col items-center">
                        <select value={hour} onChange={(e) => setHour(e.target.value)} className="time-select">
                            {Array.from({length: 12}, (_, i) => i + 1).map(n => (
                                <option key={n} value={n.toString().padStart(2, '0')}>{n.toString().padStart(2, '0')}</option>
                            ))}
                        </select>
                    </div>

                    <span className="font-bold text-slate-400">:</span>

                    {/* Minute */}
                    <div className="flex flex-col items-center">
                        <select value={minute} onChange={(e) => setMinute(e.target.value)} className="time-select">
                            {['00', '15', '30', '45'].map(m => (
                                <option key={m} value={m}>{m}</option>
                            ))}
                        </select>
                    </div>

                    {/* AM/PM */}
                    <div className="flex gap-1 ml-2 bg-white p-1 rounded-xl border border-slate-200">
                        {['AM', 'PM'].map(p => (
                            <button
                                key={p}
                                type="button"
                                onClick={() => setPeriod(p)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all ${period === p ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-600'}`}
                            >
                                {p}
                            </button>
                        ))}
                    </div>
                </div>
              </div>

              <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Short Event Summary" required className="admin-input h-32" />
              
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <input type="checkbox" name="isPast" id='isPast' checked={formData.isPast} onChange={handleChange} className="w-5 h-5 rounded text-blue-600 cursor-pointer" />
                <label htmlFor="isPast" className="text-sm font-bold text-slate-700 cursor-pointer">Mark as Past Event (Archive)</label>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="h-full min-h-[300px] border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center p-6 bg-slate-50 relative overflow-hidden group">
                {preview ? (
                  <Image fill src={preview} className="absolute inset-0 w-full h-full object-cover" alt="Preview" />
                ) : (
                  <div className="text-center group-hover:scale-110 transition-transform">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-slate-100">
                        <LuType className="text-blue-500" size={30} />
                    </div>
                    <p className="text-sm font-black text-slate-600 uppercase tracking-tighter">Upload Event Poster</p>
                    <p className="text-xs text-slate-400 font-bold mt-1">Recommended: 4:3 Aspect Ratio</p>
                  </div>
                )}
                <input type="file" accept="image/*" onChange={handleImageChange} className="absolute inset-0 opacity-0 cursor-pointer" />
              </div>
              <button 
                type="submit"
                disabled={loading} 
                className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl hover:bg-slate-900 transition-all shadow-xl shadow-blue-100 disabled:opacity-50"
              >
                {loading ? "Processing..." : "Save Event Details"}
              </button>
            </div>
          </form>
        </section>

        <style jsx>{`
          .admin-input {
            width: 100%;
            padding: 1.25rem;
            border-radius: 1.25rem;
            border: 1px solid #e2e8f0;
            font-weight: 700;
            font-size: 0.95rem;
            outline: none;
            transition: all 0.2s;
            background-color: #f8fafc;
          }
          .admin-input:focus { 
            border-color: #2563eb; 
            background-color: #fff;
            box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.05);
          }
          .time-select {
            appearance: none;
            background: white;
            border: 1px solid #e2e8f0;
            padding: 8px 12px;
            border-radius: 12px;
            font-weight: 900;
            color: #1e293b;
            cursor: pointer;
            outline: none;
            text-align: center;
          }
          .time-select:focus { border-color: #2563eb; }
        `}</style>
      </div>
    </div>
  )
}

export default AddPastEvent;