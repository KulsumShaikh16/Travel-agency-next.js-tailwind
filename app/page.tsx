import React from 'react'
import About from './about/page'

import Contact from './contact/page'
import Cta from './cta/page'
import Services from './services/page'




const Home = () => {
  return (
    <div >
      <section className="text-gray-600 body-font bg-[url('/beach-6517214_1280.jpg')] bg-no-repeat bg-cover  h-screen">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
   
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-2xl mt-20 mb-6 font-medium text-white font-serif">
      Discover Your Next Adventure with KS Travellers
      </h1>
      <h5 className="title-font sm:text-4xl text-xl mt-2 mb-6  text-orange-500 font-mono">Where Dreams Turn Into Destinations</h5>
      <p className="mb-8 leading-relaxed text-white font-serif">
      Embark on unforgettable journeys designed just for you. Whether you’re craving a tropical escape, an exhilarating adventure, or a quiet retreat, our team of expert travel planners will bring your dream vacation to life. From booking to itinerary, we handle every detail so you can travel with ease and excitement. Let’s turn wanderlust into reality—one memorable experience at a time.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white font-serif bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">
          Explore More
        </button>
       
      </div>
    </div>
  </div>
</section>
<Cta/>
<Services/>

<About />
<Contact />

    </div>
)
}

export default Home
