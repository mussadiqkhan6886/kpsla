"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LuUserPlus, LuTrash2, LuUpload } from 'react-icons/lu'
import Image from 'next/image'

const ManageTeam = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => { fetchMembers(); }, []);

  const fetchMembers = async () => {
    const res = await fetch('/api/team');
    const data = await res.json();
    setMembers(data);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    if (file) formData.set("image", file);

    const res = await fetch('/api/team', { method: 'POST', body: formData });
    if (res.ok) {
      setFile(null);
      (e.target as HTMLFormElement).reset();
      fetchMembers();
    }
    setLoading(false);
  };

  const deleteMember = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    await fetch('/api/team', { 
      method: 'DELETE', 
      body: JSON.stringify({ id }),
      headers: { 'Content-Type': 'application/json' }
    });
    fetchMembers();
  };

  return (
    <div className="p-8 space-y-12 max-w-6xl mx-auto">
      {/* 1. Add Member Form */}
      <section className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-blue-600 rounded-lg text-white"><LuUserPlus size={20}/></div>
          <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Add Team Member</h2>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input name="name" placeholder="Full Name" required className="p-4 bg-slate-50 rounded-xl border-none outline-blue-600 font-bold" />
          <input name="role" placeholder="Role (e.g. Chairman)" required className="p-4 bg-slate-50 rounded-xl border-none outline-blue-600 font-bold" />
          <input name="order" type="number" placeholder="Order (1, 2, 3...)" className="p-4 bg-slate-50 rounded-xl border-none outline-blue-600 font-bold" />
          
          <div className="relative p-4 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 text-center cursor-pointer hover:bg-blue-50 transition-colors">
            <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer" />
            <div className="flex flex-col items-center text-slate-500 font-bold text-sm">
              <LuUpload className="mb-2" />
              {file ? file.name : "Upload Member Photo"}
            </div>
          </div>

          <textarea name="bio" placeholder="Short Bio" className="md:col-span-2 p-4 bg-slate-50 rounded-xl border-none outline-blue-600 h-32" />

          <button disabled={loading} className="md:col-span-2 bg-blue-600 text-white font-black py-4 rounded-2xl hover:bg-slate-900 transition-all disabled:opacity-50">
            {loading ? "Uploading..." : "Save Member"}
          </button>
        </form>
      </section>

      {/* 2. Display Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnimatePresence>
          {members.map((m: any) => (
            <motion.div 
              layout 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={m._id} 
              className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-lg relative group overflow-hidden"
            >
              <Image height={400} width={300} src={m.image} alt={m.name} className="w-auto h-auto rounded-2xl object-cover mb-4 border-2 border-blue-100" />
              <div className="absolute top-6 right-6 p-2 bg-red-50 text-red-500 rounded-full cursor-pointer hover:bg-red-500 hover:text-white transition-colors" onClick={() => deleteMember(m._id)}>
                <LuTrash2 size={16} />
              </div>
              <h3 className="font-black text-slate-900 uppercase tracking-tighter">{m.name}</h3>
              <p className="text-blue-600 font-bold text-xs uppercase mb-3">{m.role}</p>
              <p className="text-slate-500 text-sm line-clamp-3">{m.bio}</p>
              <div className="mt-4 text-[10px] font-black text-slate-300">ORDER: {m.order}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>
    </div>
  )
}

export default ManageTeam;