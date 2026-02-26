"use client"
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LuHistory, LuRocket, LuCheckCheck , LuMapPin, LuTrash2 } from 'react-icons/lu'
import Image from 'next/image'
import { IEvent } from '@/type'

const EventsDisplayPage = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    const res = await fetch('/api/event');
    const data = await res.json();
    setEvents(data);
    setLoading(false);
  };

  useEffect(() => { fetchEvents(); }, []);

  const handleMarkAsPast = async (id: string) => {
    const res = await fetch('/api/event', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, isPast: true })
    });
    if (res.ok) fetchEvents(); // Refresh list
  };

  // Split events into two groups
  const upcomingEvents = events.filter(e => !e.isPast);
  console.log(events)
  const pastEvents = events.filter(e => e.isPast);

  if (loading) return <div className="p-10 text-center font-bold text-slate-500">Loading Events...</div>

  return (
    <div className="p-6 md:p-12 bg-slate-50 min-h-screen space-y-16">
      
      {/* --- UPCOMING EVENTS SECTION --- */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[2px] flex-1 bg-blue-100" />
          <div className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-sm">
            <LuRocket size={20} /> Upcoming Events
          </div>
          <div className="h-[2px] flex-1 bg-blue-100" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {upcomingEvents.map((event) => (
              <EventCard 
                key={event._id} 
                event={event} 
                isUpcoming={true} 
                onStatusChange={() => handleMarkAsPast(event._id!)} 
              />
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* --- PAST EVENTS SECTION --- */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <div className="h-[2px] flex-1 bg-slate-200" />
          <div className="flex items-center gap-2 text-slate-500 font-black uppercase tracking-widest text-sm">
            <LuHistory size={20} /> Past Events
          </div>
          <div className="h-[2px] flex-1 bg-slate-200" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-80">
          {pastEvents.map((event) => (
            <EventCard key={event._id} event={event} isUpcoming={false} />
          ))}
        </div>
      </section>
    </div>
  )
}

// Sub-component for individual cards to keep code clean
const EventCard = ({ event, isUpcoming, onStatusChange }: { event: any, isUpcoming: boolean, onStatusChange?: () => void }) => {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-[2rem] p-5 shadow-sm border border-slate-100 relative group"
    >
      {/* Date Badge */}
      <div className={`absolute top-8 left-8 z-10 text-white rounded-2xl p-3 flex flex-col items-center justify-center min-w-[55px] shadow-xl ${isUpcoming ? 'bg-blue-600' : 'bg-slate-500'}`}>
        <span className="text-xl font-black">{new Date(event.date).getDate()}</span>
        <span className="text-[10px] font-bold uppercase">{new Date(event.date).toLocaleString('en-US', { month: 'short' })}</span>
      </div>

      {/* Action Button (Only for Upcoming) */}
      {isUpcoming && (
        <button 
          onClick={onStatusChange}
          className="absolute top-8 right-8 z-10 bg-white/90 hover:bg-green-500 hover:text-white text-green-600 p-3 rounded-2xl shadow-lg transition-all flex items-center gap-2 font-bold text-xs"
          title="Move to Past"
        >
          <LuCheckCheck size={18} />
          <span className="hidden group-hover:block">Finish Event</span>
        </button>
      )}

      <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6 relative bg-slate-100">
        <Image src={event.image || '/placeholder.jpg'} fill className="object-cover" alt={event.title} />
      </div>

      <div className="px-2">
        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest px-3 py-1 bg-blue-50 rounded-full">
          {event.category}
        </span>
        <h3 className="text-xl font-black text-slate-900 mt-3 leading-tight">{event.title}</h3>
        <p className="text-slate-500 text-sm mt-2 line-clamp-2">{event.description}</p>
        
        <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mt-4 pt-4 border-t border-slate-50">
          <LuMapPin size={14} className="text-blue-500" />
          {event.location}
        </div>
      </div>
    </motion.div>
  )
}

export default EventsDisplayPage;