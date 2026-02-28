import { connectDB } from '@/lib/config/database'
import { NewsSchema } from '@/lib/models/NewsSchema'
import Image from 'next/image'
import React from 'react'

const News = async () => {
    await connectDB()
    // Sort by latest first
    const newsItems = await NewsSchema.find({}).sort({ createdAt: -1 }).lean()

    return (
        <section className="p-6 md:p-12">
            <h4 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic border-l-4 border-blue-600 pl-4">
                Latest News
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsItems.map((item: any) => (
                    <div key={item._id} className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:scale-[1.02] transition-transform duration-300">
                        <Image 
                            src={item.image} 
                            alt='KPSLA News' 
                            fill 
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                ))}
            </div>
            
            {newsItems.length === 0 && (
                <p className="text-slate-400 font-medium">No news updates available yet.</p>
            )}
        </section>
    )
}

export default News