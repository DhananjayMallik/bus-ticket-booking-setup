import React from 'react'
import { FaMapPin, FaPhone, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full lg:px-28 md:px-16 px-4 py-8 bg-neutral-200/60 dark:bg-neutral-900/70">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-5">
        {/* Logo and Description - Full width on mobile, spans 2 cols on desktop */}
        <div className="space-y-5 md:col-span-2">
          <Link to="/" className='inline-block'>
            <img 
              src={Logo} 
              alt="logo" 
              className="w-36 sm:w-44 h-auto object-contain" 
            />
          </Link>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base font-normal md:pr-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam placeat corporis, rerum laborum optio laboriosam perferendis sit culpa doloribus.
          </p>
        </div>

        {/* About Us - Full width on mobile, normal flow on desktop */}
        <div className="space-y-4 sm:space-y-5">
          <h1 className="text-lg font-medium">About Us</h1>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base font-normal">
            <li>
              <Link to="#" className='hover:text-violet-600 transition-colors duration-300 block py-1'>About Us</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-violet-600 transition-colors duration-300 block py-1'>Contact Us</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-violet-600 transition-colors duration-300 block py-1'>Privacy Policy</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-violet-600 transition-colors duration-300 block py-1'>Terms and Conditions</Link>
            </li>
          </ul>
        </div>

        {/* Services - Full width on mobile, normal flow on desktop */}
        <div className="space-y-4 sm:space-y-5">
          <h1 className="text-lg font-medium">Services</h1>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base font-normal">
            <li>
              <Link to="#" className='hover:text-violet-600 transition-colors duration-300 block py-1'>Safety Guarantee</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-violet-600 transition-colors duration-300 block py-1'>FAQ & Support</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-violet-600 transition-colors duration-300 block py-1'>Luxury Buses</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-violet-600 transition-colors duration-300 block py-1'>Enough Facilities</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info - Full width on mobile, normal flow on desktop */}
        <div className="space-y-4 sm:space-y-5">
          <h1 className="text-lg font-medium">Get In Touch</h1>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex gap-x-3 items-start">
              <FaMapPin className='text-lg sm:text-xl mt-1 text-neutral-600 dark:text-neutral-400 flex-shrink-0' />
              <div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  Main Office
                </p>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  123, Main Street, Anytown, USA
                </p>
              </div>
            </div>

            <div className="flex gap-x-3 items-start">
              <FaPhone className='text-lg sm:text-xl mt-1 text-neutral-600 dark:text-neutral-400 flex-shrink-0' />
              <div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  Phone Support
                </p>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  9883412796
                </p>
              </div>
            </div>

            <div className="flex gap-x-3 items-start">
              <FaEnvelope className='text-lg sm:text-xl mt-1 text-neutral-600 dark:text-neutral-400 flex-shrink-0' />
              <div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  Email Support
                </p>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">
                  support@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright - Full width always */}
      <div className="mt-8 pt-6 border-t border-neutral-300 dark:border-neutral-700 text-center text-sm text-neutral-500 dark:text-neutral-400">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer