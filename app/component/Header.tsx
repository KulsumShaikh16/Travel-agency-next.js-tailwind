import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0  bg-transparent">
      
      <span className="ml-3 text-4xl font-bold ">K<span className='text-orange-500 '>S</span></span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-serif">
      <Link href="/"className="mr-5 hover:text-black text-xl hover:bg-slate-100 ">Home</Link>
      <Link href="cta" className="mr-5 hover:text-black text-xl hover:bg-slate-100">About us</Link>
      <Link href="/services" className="mr-5 hover:text-black text-xl hover:bg-slate-100">Services</Link>
      <Link href="/contact" className="mr-5 hover:text-black text-xl hover:bg-slate-100">Contact us</Link>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-orange-200 rounded text-base mt-4 md:mt-0">
      More Details
     
    </button>
  </div>
</header>

    </div>
  )
}

export default Header
