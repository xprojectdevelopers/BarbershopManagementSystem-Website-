import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='border-t border-gray-400 py-6 sm:py-10 px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col items-center justify-center text-center space-y-4'>

        <h1
          className='text-lg sm:text-xl lg:text-2xl'
          style={{ fontFamily: 'oswald' }}
        >
          MOLAVE STREET BARBERS
        </h1>

        {/* Address */}
        <address
          className='not-italic text-xs sm:text-sm lg:text-base tracking-[0.4px] max-w-[90%] lg:max-w-[600px]'
          style={{ fontFamily: 'satoshi-medium' }}
        >
          112 Upper Molave Street Payatas B. 1119 Quezon City, Philippines <br />
          Working Hours: Monday to Sunday 10:00am to 8:00pm
        </address>

        {/* Legal Links */}
        <nav
          className='flex flex-wrap justify-center items-center -mt-3 text-xs sm:text-sm lg:text-base tracking-[0.4px]'
          style={{ fontFamily: 'satoshi-medium' }}
        >
          <span>Copyright 2025 Molave Street's Barbers |</span>
          <Link 
            to='/FaqPage' 
            className='inline-block text-xs sm:text-sm lg:text-base ml-1 mr-1 hover:underline'
            style={{fontFamily: 'satoshi-bold'}}            
          >
            FAQs
          </Link>
          |
          <Link 
            to='/terms' 
            className='inline-block text-xs sm:text-sm lg:text-base ml-1 mr-1 hover:underline'
            style={{fontFamily: 'satoshi-bold'}}            
          >
            Terms & Conditions
          </Link>
          |
          <Link 
            to='/privacy' 
            className='inline-block text-xs sm:text-sm lg:text-base ml-1 mr-1 hover:underline'
            style={{fontFamily: 'satoshi-bold'}}            
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
