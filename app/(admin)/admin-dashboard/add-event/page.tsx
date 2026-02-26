"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LuCalendarPlus, LuTrash2, LuMapPin, LuType } from 'react-icons/lu'
import { IEvent } from '@/types/event'
import Image from 'next/image'

const AddPastEvent = () => {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  // 1. Unified Form State
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    date: '',
    category: 'Workshop',
    description: '',
    isPast: true
  });
  const [file, setFile] = useState<File | null>(null);

  // 2. Generic Change Handler
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
    data.append('category', formData.category);
    data.append('description', formData.description);
    data.append('isPast', String(formData.isPast));
    if (file) data.append('image', file);

    const res = await fetch('/api/event', { method: 'POST', body: data });
    if (res.ok) {
      // 3. Reset all states
      setFormData({
        title: '',
        location: '',
        date: '',
        category: 'Workshop',
        description: '',
        isPast: true
      });
      setPreview(null);
      setFile(null);
      setLoading(false)
    }
    setLoading(false);
  };

  return (
    <div className="p-6 md:p-10 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-6xl mx-auto space-y-10">
        
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-8">
            <LuCalendarPlus className="text-blue-600" size={28} />
            <h1 className="text-2xl font-black text-slate-900 uppercase">Add Event</h1>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {/* Added value and onChange to every field */}
              <input 
                name="title" 
                value={formData.title} 
                onChange={handleChange} 
                placeholder="Event Title" 
                required 
                className="admin-input" 
              />
              <input 
                name="location" 
                value={formData.location} 
                onChange={handleChange} 
                placeholder="Location (e.g. Peshawar)" 
                required 
                className="admin-input" 
              />
              <div className="grid grid-cols-2 gap-4">
                <input 
                  name="date" 
                  type="date" 
                  value={formData.date} 
                  onChange={handleChange} 
                  required 
                  className="admin-input" 
                />
                <select 
                  name="category" 
                  value={formData.category} 
                  onChange={handleChange} 
                  className="admin-input bg-white"
                >
                  <option value="Workshop">Workshop</option>
                  <option value="Conference">Conference</option>
                  <option value="Competition">Competition</option>
                  <option value="Seminar">Seminar</option>
                </select>
              </div>
              <textarea 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                placeholder="Short Event Summary" 
                required 
                className="admin-input h-32" 
              />
              
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <input 
                  type="checkbox" 
                  name="isPast" 
                  id='isPast' 
                  checked={formData.isPast} 
                  onChange={handleChange}
                  className="w-5 h-5 rounded text-blue-600 cursor-pointer"
                />
                <label htmlFor="isPast" className="text-sm font-bold text-slate-700 cursor-pointer">
                    Mark as Past Event (Archive)
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="h-full min-h-[250px] border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 bg-slate-50 relative overflow-hidden group">
                {preview ? (
                  <Image fill src={preview} className="absolute inset-0 w-full h-full object-cover" alt="Preview" />
                ) : (
                  <div className="text-center group-hover:scale-110 transition-transform">
                    <LuType className="mx-auto text-slate-300 mb-2" size={40} />
                    <p className="text-sm font-bold text-slate-500">Upload Event Poster</p>
                  </div>
                )}
                <input type="file" accept="image/*" onChange={handleImageChange} className="absolute inset-0 opacity-0 cursor-pointer" />
              </div>
              <button 
                type="submit"
                disabled={loading} 
                className="w-full bg-blue-600 text-white font-black py-4 rounded-xl hover:bg-slate-900 transition-all disabled:opacity-50"
              >
                {loading ? "Processing..." : "Save Event"}
              </button>
            </div>
          </form>
        </section>

        <style jsx>{`
        .admin-input {
          width: 100%;
          padding: 1rem;
          border-radius: 0.75rem;
          border: 1px solid #e2e8f0;
          font-weight: 600;
          outline: none;
        }
        .admin-input:focus { border-color: #2563eb; }
      `}</style>
    </div>
      </div>
  )
}

export default AddPastEvent;
