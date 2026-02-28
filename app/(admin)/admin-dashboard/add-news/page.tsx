"use client"
import React, { useState, useEffect } from 'react'
import { LuImagePlus, LuLoaderCircle, LuTrash2, LuNewspaper } from 'react-icons/lu'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const AddNews = () => {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [newsList, setNewsList] = useState<any[]>([]);

  // 1. Fetch news on load
  const fetchNews = async () => {
    const res = await fetch('/api/news');
    const data = await res.json();
    setNewsList(data.news);
  };

  useEffect(() => { fetchNews(); }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    const res = await fetch('/api/news', { method: 'POST', body: formData });
    if (res.ok) {
      setPreview(null);
      fetchNews(); // 2. Refresh list immediately
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this news update?")) return;
    const res = await fetch('/api/news', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
    });
    if (res.ok) fetchNews();
  };

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10 space-y-12">
      
      {/* UPLOAD BOX */}
      <section className="max-w-md mx-auto bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50">
        <div className="flex items-center gap-2 mb-6 text-slate-900 font-black uppercase italic tracking-tighter">
            <LuNewspaper className="text-blue-600" /> Add New Poster
        </div>
        
        <label className="relative flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-slate-200 rounded-3xl cursor-pointer hover:bg-blue-50/50 hover:border-blue-400 transition-all overflow-hidden group">
          {preview ? (
            <Image fill src={preview} className="object-cover" alt="Preview" />
          ) : (
            <div className="flex flex-col items-center">
              <div className="p-4 bg-slate-50 rounded-full mb-3 group-hover:bg-blue-100 transition-colors">
                <LuImagePlus size={30} className="text-slate-400 group-hover:text-blue-600" />
              </div>
              <span className="text-xs font-black text-slate-500 uppercase tracking-widest">Select Image</span>
            </div>
          )}
          
          {loading && (
            <div className="absolute inset-0 bg-white/80 flex items-center justify-center backdrop-blur-sm z-20">
              <LuLoaderCircle className="animate-spin text-blue-600" size={32} />
            </div>
          )}
          
          <input type="file" className="hidden" accept="image/*" onChange={handleUpload} disabled={loading} />
        </label>
      </section>

      {/* --- DISPLAY GALLERY --- */}
      <section>
        <div className="flex items-center gap-4 mb-8">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">Live Feed</h3>
            <div className="h-[1px] flex-1 bg-slate-200" />
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {newsList.map((item) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={item._id} 
                className="relative group rounded-3xl overflow-hidden border border-slate-100 shadow-sm break-inside-avoid"
              >
                <Image 
                  width={300}
                  height={400}
                  src={item.image} 
                  alt="News" 
                  className="w-full h-auto object-cover" 
                />
                
                {/* Delete Overlay */}
                <div className="absolute inset-0 bg-black/10  transition-opacity flex items-center justify-center">
                    <button 
                        onClick={() => handleDelete(item._id)}
                        className="bg-white text-red-600 p-4 rounded-full hover:bg-red-600 hover:text-white transition-all transform hover:scale-110 shadow-xl"
                    >
                        <LuTrash2 size={18} />
                    </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {newsList.length === 0 && !loading && (
            <div className="text-center py-20 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
                <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">No news images found</p>
            </div>
        )}
      </section>
    </div>
  )
}

export default AddNews;