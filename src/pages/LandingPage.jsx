import React from 'react'
import { Button } from '../components/ui/button'
import grid1 from '../assets/img/Haircut.png'
import grid2 from '../assets/img/HWash.png'
import grid3 from '../assets/img/HTowel.png'
import grid4 from '../assets/img/Shave.png'
import M1 from '../assets/img/Pic1.jpg'
import M2 from '../assets/img/Pic2.jpg'
import M3 from '../assets/img/Pic3.jpg'
import QuickMessageDialog from '../components/QuickMessage'
import { motion } from "framer-motion"

const LandingPage = () => {
  return (
    <div className='mb-[-25px] scroll-smooth'>
        
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='bg-[url("/src/assets/img/Hero-bg.jpg")] bg-cover bg-center lg:bg-[center_bottom_-60px] bg-no-repeat h-[200px] lg:h-135 xl:h-150 flex items-end justify-center'
        >
          <div className='text-white text-center mb-15'>
            <h5 className='uppercase text-xs' style={{fontFamily: "satoshi-medium"}}>Street Style</h5>
            <h1 className='tracking-[0.4px] text-2xl lg:text-[32px]' style={{fontFamily: "satoshi-bold"}}>Welcome to Molave Street's Barbers</h1>
            <a href="/about" className='text-white border-b pb-1 text-sm lg:text-base' style={{fontFamily: "satoshi-medium"}}>
              Explore More
            </a>
          </div>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='flex items-center justify-center flex-col mt-15 mb-10 px-4'
        >
            <h1 style={{fontFamily: "satoshi-black"}} className='text-2xl lg:text-[32px] text-black lg:text-center tracking-[0.4px]'>
              Precision, Style, and Comfort - All in One Chair
            </h1>
            <p
              style={{ fontFamily: 'satoshi-medium' }}
              className='text-sm lg:text-base text-black md:text-center tracking-[0.4px] mt-4 max-w-[700px] mx-auto leading-[24px]'
            >
              At Molave Street's Barbers, we offer a full range of grooming services to keep you
              looking sharp and feeling confident. From classic cuts and modern fades to beard
              trims and shaves, our barbers deliver expert care with a street-smart edge.
            </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{fontFamily: "satoshi-medium"}}
          className='flex items-center justify-center flex-col'
        >
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:w-[85%] xl:w-[75%] tracking-[0.4px] text-center text-base justify-center items-center'>
            <div className='mb-4'>
              <img src={grid1} alt="" className='mb-2 h-90'/>
              <h6>Haircut</h6>
            </div>
            <div className='mb-4'>
              <img src={grid2} alt="" className='mb-2 h-90'/>
              <h6>Hair Wash</h6>
            </div>
            <div className='mb-4'>
              <img src={grid3} alt="" className='mb-2 h-90'/>
              <h6>Hot Towel</h6>
            </div>
            <div className='mb-4'>
              <img src={grid4} alt="" className='mb-2 h-90'/>
              <h6>Shave</h6>
            </div>
          </div>
          <div className='mt-10' style={{fontFamily: "satoshi-bold"}}>
            <a href="/services">
              <Button variant={'orig'} size={'sm'}  className="cursor-pointer">See All Services</Button>
            </a>
          </div>
        </motion.div>

        {/* Barbers Image Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-[url('/src/assets/img/Landing-bg.jpg')] bg-cover bg-no-repeat lg:bg-[center_bottom_-65px] h-[300px] lg:h-190 xl:h-215 mt-10 lg:mt-20"
        >
        </motion.div>

        {/* Social Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className='flex flex-col items-center justify-center py-15 px-4 mb-10'
        >
          <h1
            style={{ fontFamily: "satoshi-bold" }} className='text-2xl md:text-[32px] text-black md:text-center tracking-[0.4px]'
          >
            Stay Connected with Molave Street's Barbers
          </h1>
          <p className='mt-2 text-sm md:text-base tracking-[0.4px]' style={{fontFamily: 'satoshi-medium'}}>
            Never miss out fresh cuts, grooming tips, and updates tailored just for you.
          </p>

          <div className='flex flex-wrap justify-center gap-4 mt-8 lg:mt-10 tracking-[0.4px]' style={{fontFamily: 'satoshi-medium'}}>
            <div className='text-center text-sm lg:text-base flex flex-col gap-2'>
              <div className='lg:mb-4'>
                <img src={M1} alt="" className='h-120'/>
              </div>
              <p className='mb-3'>Connect With Us Online</p>
              <a href="https://www.facebook.com/MolaveSB" className='underline'>Molave Street's Barbers (Facebook)</a>
              <a href="https://www.instagram.com/molavestreetsbarbers" className='underline'>molavestreetsbarbers (Instagram)</a>
              <a href="https://www.tiktok.com/@molavestreetbarbers" className='underline'>molavestreetbarbers (TikTok)</a>
            </div>
            <div className='text-center text-sm lg:text-base flex flex-col gap-2 mt-4 lg:mt-0'>
              <div className='lg:mb-4'>
                <img src={M2} alt="" className='h-120'/>
              </div>
              <p className='mb-3'>Let's Save Your Spot</p>
              <a href="#" className='underline'>App Name (Get App)</a>
            </div>
            <div className='text-center text-sm lg:text-base flex flex-col gap-2 mt-4 lg:mt-0'>
              <div className='lg:mb-4'>
                <img src={M3} alt="" className='h-120'/>
              </div>
              <p className='mb-3'>Tell Us What You Think</p>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZe_Gh7zizByHCArr5UxzM76bnr6508XSvr8epvkaRnHZuTQ/viewform" className='underline'>Review via Google Form</a>
              <QuickMessageDialog />
            </div>  
          </div>
        </motion.div>

    </div>
  )
}

export default LandingPage
