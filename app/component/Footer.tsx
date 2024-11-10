
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font font-serif">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-72 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        
      <span className="ml-3 text-4xl font-bold ">K<span className='text-orange-500 '>S</span></span>
      </a>
      <p className="mt-2 text-sm text-gray-500">
      Where Dreams Turn Into Destinations
      </p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-12">
        <h2 className="title-font font-medium text-orange-500 tracking-widest text-sm mb-3">
          Umrah Packages
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">7 Days Plan</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">6 Days Plan</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">15 Days Plan</a>
          </li>
          
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-12">
        <h2 className="title-font font-medium text-orange-500 tracking-widest text-sm mb-3">
          INTERNATIONAL TOUR 
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">AMERICA</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">AUSTRALIA</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">DUBAI</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">MALDIVES</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-12">
        <h2 className="title-font font-medium text-orange-500 tracking-widest text-sm mb-3">
        INTERNATIONAL TOUR 
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">NEW YORK</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">CANADA</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">PARIS</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">THAILAND</a>
          </li>
        </nav>
      </div>
  
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">
        © 2024 KS 
        <a
          href="https://twitter.com/knyttneve"
          rel="noopener noreferrer"
          className="text-gray-600 ml-1"
          target="_blank"
        >
          @KULSUM SHAIKH
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">
        <FaFacebook />
        </a>
        <a className="ml-3 text-gray-500">
        <FaInstagram />
        </a>
        <a className="ml-3 text-gray-500">
        <FaTwitter />
        </a>
        <a className="ml-3 text-gray-500">
        <FaYoutube />
        </a>
      </span>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
