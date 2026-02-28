"use client"
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LuQuote, LuTrash2, LuUser, LuLoader, LuMessageSquare } from 'react-icons/lu'
import axios from 'axios'
import { StoriesType } from '@/components/UserComp/SucessStoriesSwiper'

const ManageReviews = () => {
  const [reviews, setReviews] = useState<StoriesType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const res = await axios.get('/api/review');
      setReviews(res.data);
    } catch (err) {
      console.error("Error fetching reviews", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchReviews(); }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this review permanently?")) return;
    
    try {
      const res = await axios.delete('/api/review', { data: { id } });
      if (res.status === 200) {
        setReviews(prev => prev.filter(r => r._id !== id));
      }
    } catch (err) {
      alert("Failed to delete review");
    }
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-slate-400">
      <LuLoader className="animate-spin mb-4" size={40} />
      <p className="font-bold uppercase tracking-widest text-xs">Loading Testimonials...</p>
    </div>
  )

  return (
    <div className="p-6 md:p-12 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white rounded-2xl shadow-sm text-indigo-600 border border-slate-100">
                <LuMessageSquare size={24} />
            </div>
            <div>
                <h1 className="text-2xl font-black text-slate-900 uppercase">Manage Reviews</h1>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Total Published: {reviews.length}</p>
            </div>
          </div>
        </div>

        {reviews.length === 0 ? (
          <div className="text-center p-20 bg-white rounded-[3rem] border-2 border-dashed border-slate-200">
            <p className="text-slate-400 font-bold italic">No reviews found. Add some from the "Add Review" page!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {reviews.map((review) => (
                <motion.div
                  key={review._id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200 flex flex-col justify-between relative group hover:shadow-xl hover:shadow-indigo-500/5 transition-all"
                >
                  <LuQuote className="text-indigo-100 absolute top-6 right-8" size={60} />
                  
                  <div className="relative z-10">
                    <p className="text-slate-600 leading-relaxed italic mb-8 line-clamp-4">
                      "{review.text}"
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">
                            <LuUser size={20} />
                        </div>
                        <div>
                          <h4 className="font-black text-slate-900 text-sm leading-tight">{review.name}</h4>
                          <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">{review.role}</p>
                        </div>
                      </div>

                      <button 
                        onClick={() => handleDelete(review._id)}
                        className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                        title="Delete Review"
                      >
                        <LuTrash2 size={20} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  )
}

export default ManageReviews;