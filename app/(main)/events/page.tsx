import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LuCalendar, LuMapPin, LuArrowRight, LuCirclePlay } from 'react-icons/lu'

// --- Mock Data ---
const upcomingEvents = [
  {
    id: 1,
    title: "Global Leadership Summit 2026",
    date: "MAR 15",
    time: "10:00 AM",
    location: "New York / Virtual",
    desc: "A three-day intensive summit featuring world-class speakers on the future of AI-driven leadership.",
    image: "/hero.jpg"
  },
  {
    id: 2,
    title: "Executive Women in Tech Workshop",
    date: "APR 02",
    time: "02:00 PM",
    location: "London Hub",
    desc: "Networking and strategy session focused on breaking glass ceilings in the tech sector.",
    image: "/hero.jpg"
  }
];

const pastEvents = [
  { id: 3, title: "Leadership Retreat 2025", date: "Dec 2025", image: "/hero.jpg" },
  { id: 4, title: "Innovation Forum", date: "Oct 2025", image: "/hero.jpg" },
  { id: 5, title: "Youth Lead Workshop", date: "Aug 2025", image: "/hero.jpg" },
];

const EventsPage = () => {
  return (
    <main className="pt-20 bg-white">
      {/* 1. Header */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Events & <span className="text-blue-500">Experiences</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From global summits to intimate workshops, join us in person or 
            virtually to sharpen your leadership edge.
          </p>
        </div>
      </section>

      {/* 2. UPCOMING EVENTS */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-slate-100"></div>
            <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-widest">Upcoming Events</h2>
            <div className="h-px flex-1 bg-slate-100"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-12">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="group flex flex-col lg:flex-row bg-slate-50 rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-100">
                <div className="relative lg:w-2/5 h-72 lg:h-auto overflow-hidden">
                  <Image src={event.image} alt={event.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-white rounded-2xl p-4 shadow-xl text-center min-w-[80px]">
                    <span className="block text-2xl font-black text-blue-600 leading-none">{event.date.split(' ')[1]}</span>
                    <span className="block text-xs font-bold uppercase text-slate-500 mt-1">{event.date.split(' ')[0]}</span>
                  </div>
                </div>
                <div className="lg:w-3/5 p-6 lg:p-16 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-4 mb-6 text-sm font-bold text-blue-600 uppercase tracking-widest">
                    <span className="flex items-center gap-2"><LuCalendar /> {event.time}</span>
                    <span className="flex items-center gap-2"><LuMapPin /> {event.location}</span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-6">{event.title}</h3>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">{event.desc}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PAST EVENTS ARCHIVE */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-black text-slate-900">Past Events</h2>
            <p className="text-slate-500 mt-2">Our past events around the KPK.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-3xl overflow-hidden shadow-sm group cursor-pointer border border-slate-100">
                <div className="relative h-64">
                  <Image src={event.image} alt={event.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <LuCirclePlay className="text-white text-6xl" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">{event.date}</span>
                  <h4 className="text-xl font-bold text-slate-900 mt-2">{event.title}</h4>
                  <p className='text-zinc-700 mt-2 tracking-wide text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti cupiditate ex iure, assumenda architecto repellendus delectus harum rerum suscipit saepe hic deleniti ducimus omnis neque cum, laudantium quos eum? Aspernatur?</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

export default EventsPage