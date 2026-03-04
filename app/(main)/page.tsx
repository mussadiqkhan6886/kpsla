import FAQ from '@/components/UserComp/FAQ'
import Messages from '@/components/UserComp/Messages'
import Counter from '@/sections/Counter'
import CTA from '@/sections/CTA'
import Hero from '@/sections/Hero'
import Mission from '@/sections/Mission'
import News from '@/sections/News'
import Power from '@/sections/Power'
import SuccessStories from '@/sections/SuccessStories'
import UpComingEvent from '@/sections/UpComingEvent'
import WhatWeDo from '@/sections/WhatWeDo'
import { Metadata } from 'next'
import React from 'react'

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'KPSLA | Empowering Student Leaders in Khyber Pakhtunkhwa',
  description: 'Khyber Pakhtunkhwa Student Leadership Academy (KPSLA) bridges the gap between potential and achievement through innovative workshops, mentorship, and global networking.',
  keywords: [
    'Student Leadership KP', 
    'KPSLA', 
    'Leadership Workshops Pakistan', 
    'Youth Empowerment KP', 
    'Student Mentorship Mardan', 
    'Khyber Pakhtunkhwa Education'
  ],
  openGraph: {
    title: 'KPSLA | Bridging the Gap Between Potential & Achievement',
    description: 'Join the premier academy for student leadership in KP. Explore our upcoming events, success stories, and leadership programs.',
    url: 'https://www.kpsla.org', // Replace with your actual domain
    siteName: 'KPSLA',
    images: [
      {
        url: '/hero.jpg', // Put a nice preview image in your public folder
        width: 1200,
        height: 630,
        alt: 'KPSLA Student Leadership Academy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KPSLA | Empowering Future Leaders',
    description: 'Developing confident, responsible, and visionary student leaders in Pakistan.',
    images: ['/hero.jpg'], 
  },
  robots: {
    index: true,
    follow: true,
  }
}

const Home = () => {
  return (
    <main>
      <Hero />
      <Mission />
      <Power />
      <Messages />
      <Counter />
      <WhatWeDo />
      <UpComingEvent />
      <SuccessStories />
      <News />
      <FAQ />
      <CTA />
    </main>
  )
}

export default Home
