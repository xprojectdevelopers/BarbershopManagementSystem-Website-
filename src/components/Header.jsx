import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { List, X, Scissors } from 'phosphor-react'
import { Button } from './ui/button'
import ContactSheet from './ContactSheet'
import Banner from './banner'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"


const navList = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Banner />
      <header style={{ fontFamily: "satoshi-bold" }} className='scroll-mt-20 bg-white border-b sticky top-0 z-50'>
        <div className='container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8'>
          
          {/* Nav Desktop */}
          <nav className='hidden md:flex space-x-6 text-black text-sm sm:text-base'>
            {navList.map((link) => (
              <Link
                to={link.href}
                key={link.href}
                className='hover:border-b border-black transition'
              >
                {link.label}
              </Link>
            ))}
            <ContactSheet />
          </nav>

          {/* Logo */}
          <div className='flex items-center mr-5 sm:mr-10 lg:mr-30 space-x-2 text-center'>
            <Link to="/">
              <h1 className='text-lg sm:text-xl lg:text-[32px] uppercase' style={{ fontFamily: 'oswald' }}>
                Molave Street Barbers
              </h1>
            </Link>
          </div>

          {/* Book Now Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="text-sm lg:text-base px-4 sm:px-6 cursor-pointer">Book Now</Button>
            </DialogTrigger>
            <DialogContent className="w-[90%] max-w-[500px] p-6 lg:p-8">
              <DialogHeader>
                <DialogTitle className="text-center text-2xl uppercase" style={{ fontFamily: "oswald" }}>
                  MOLAVE STREET’S BARBERS
                </DialogTitle>
                <DialogDescription className="text-center text-black text-base tracking-[0.4px] mt-3" style={{ fontFamily: 'satoshi-medium' }}>
                  Enjoy a smoother grooming experience with Molave Street’s Barbers.
                  Download our mobile app to easily book appointments, choose your
                  preferred barber, and secure your spot anytime and anywhere, all from
                  the convenience of your phone.
                </DialogDescription>
              </DialogHeader>

              {/* Divider with Scissor Icon */}
              <div className="flex items-center my-6">
                <div className="flex-grow border-t border-black"></div>
                <Scissors size={20} weight="bold" className='mx-3 transform rotate-290' />
                <div className="flex-grow border-t border-black"></div>
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <button
                  type="submit"
                  className="w-full bg-black text-white text-base py-4 rounded-full hover:bg-gray-900 cursor-pointer"
                  style={{ fontFamily: 'satoshi-medium' }}
                >
                  Get App
                </button>
                <DialogTrigger asChild>
                  <button className='w-full border border-black py-4 text-base rounded-full hover:bg-gray-200 mt-2 cursor-pointer'
                    style={{ fontFamily: 'satoshi-medium' }}>
                    Back
                  </button>
                </DialogTrigger>
              </div>
            </DialogContent>
          </Dialog>

          {/* Hamburger for Mobile */}
          <div className='md:hidden'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} weight='bold' className="text-gray-700" /> : <List size={28} weight='bold' className='text-gray-700' />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden text-sm bg-white shadow-md px-4 py-4 space-y-3 text-gray-700 '>
            {navList.map((link) => (
              <a
                href={link.href}
                key={link.href} className='hover:text-black transition block'
                onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <ContactSheet />
          </div>
        )}
      </header>
    </>
  )
}


export default Header
