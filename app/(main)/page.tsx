import Counter from '@/sections/Counter'
import Hero from '@/sections/Hero'
import Mission from '@/sections/Mission'
import Power from '@/sections/Power'
import SuccessStories from '@/sections/SuccessStories'
import UpComingEvent from '@/sections/UpComingEvent'
import WhatWeDo from '@/sections/WhatWeDo'
import React from 'react'

const Home = () => {
  return (
    <main>
      <Hero />
      <Mission />
      <Power />
      <Counter />
      <WhatWeDo />
      <UpComingEvent />
      <SuccessStories />
    </main>
  )
}

export default Home
