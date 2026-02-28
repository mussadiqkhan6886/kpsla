"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

export interface StoriesType {
  _id: string
  name: string
  text: string
  role: string
}

const SuccessStoriesSwiper = ({stories}: {stories: StoriesType[]}) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="pb-16 !overflow-visible"
    >
      {stories.map((story: StoriesType) => (
        <SwiperSlide key={story._id}>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm h-full flex flex-col hover:shadow-xl transition-shadow duration-300">
            <FaQuoteLeft className="text-blue-100 text-4xl mb-6" />
            
            <p className="text-slate-700 text-lg leading-relaxed mb-8 flex-1 italic">
              "{story.text}"
            </p>

            <div className="flex items-center gap-4 border-t pt-6">
              
              <div>
                <h5 className="font-bold text-slate-900 leading-none mb-1">{story.name}</h5>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                  {story.role}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SuccessStoriesSwiper