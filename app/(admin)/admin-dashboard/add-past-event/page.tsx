"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LuCalendarPlus, LuTrash2, LuMapPin, LuType, LuLink } from 'react-icons/lu'
import { IEvent } from '@/types/event'
import Image from 'next/image'

const AddPastEvent = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => { fetchEvents(); }, []);

  const fetchEvents = async () => {
    const res = await fetch('/api/event');
    const data = await res.json();
    setEvents(data);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);

    const res = await fetch('/api/event', { method: 'POST', body: formData });
    if (res.ok) {
      setPreview(null);
      (e.target as HTMLFormElement).reset();
      fetchEvents();
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Remove this event from history?")) return;
    await fetch('/api/event', { 
      method: 'DELETE', 
      body: JSON.stringify({ id }) 
    });
    fetchEvents();
  };

  return (
    <div className="p-6 md:p-10 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* FORM SECTION */}
        <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-8">
            <LuCalendarPlus className="text-blue-600" size={28} />
            <h1 className="text-2xl font-black text-slate-900 uppercase">Archive Past Event</h1>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <input name="title" placeholder="Event Title" required className="admin-input" />
              <input name="location" placeholder="Location (e.g. Peshawar)" required className="admin-input" />
              <div className="grid grid-cols-2 gap-4">
                <input name="date" type="date" required className="admin-input" />
                <select name="category" className="admin-input bg-white">
                  <option>Workshop</option>
                  <option>Conference</option>
                  <option>Competition</option>
                  <option>Seminar</option>
                </select>
              </div>
              <textarea name="description" placeholder="Short Event Summary" required className="admin-input h-32" />
            </div>

            <div className="flex flex-col gap-4">
              <div className="h-full border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center p-6 bg-slate-50 relative overflow-hidden">
                {preview ? (
                  <img src={preview} className="absolute inset-0 w-full h-full object-cover" alt="Preview" />
                ) : (
                  <div className="text-center">
                    <LuType className="mx-auto text-slate-300 mb-2" size={40} />
                    <p className="text-sm font-bold text-slate-500">Upload Event Poster</p>
                  </div>
                )}
                <input type="file" name="image" onChange={handleImageChange} className="absolute inset-0 opacity-0 cursor-pointer" />
              </div>
              <button disabled={loading} className="w-full bg-blue-600 text-white font-black py-4 rounded-xl hover:bg-slate-900 transition-all">
                {loading ? "Archiving..." : "Add to Past Events"}
              </button>
            </div>
          </form>
        </section>

        {/* LIST SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence>
            {events.map((event) => (
              <motion.div 
                layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                key={event._id} className="bg-white rounded-2xl p-4 border border-slate-200 group relative"
              >
                <button onClick={() => handleDelete(event._id!)} className="absolute cursor-pointer top-6 right-6 z-10 p-2 bg-white/90 text-red-500 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <LuTrash2 size={16} />
                </button>
                <div className="aspect-video rounded-xl overflow-hidden bg-slate-100 mb-4">
                    <div className='bg-blue-700 absolute -right-3 -top-3 text-white rounded-xl p-3 flex flex-col items-center justify-center min-w-[60px]'>
                        <span className="text-xl font-bold leading-none">
                            {new Date(event.date).getDate()}
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-wider opacity-80">
                            {new Date(event.date).toLocaleString('en-US', { month: 'short' })}
                        </span>
                    </div>
                  <Image width={300} height={400} src={event.image} className="w-full h-full object-cover" alt={event.title} />
                </div>
                <h3 className="font-bold text-slate-900">{event.title}</h3>
                <p className='text-sm text-zinc-700 my-2 mb-4'>{event.description}</p>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
                  <LuMapPin size={12} /> {event.location}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

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
  )
}

export default AddPastEvent;