import React, { useState, useEffect, useRef } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "phosphor-react"
import { supabase } from "@/lib/supabaseClient"

const services = [
  "Haircut",
  "Hair Wash",
  "Hot Towel",
  "Shave",
  "Hair Color",
  "Hair Dye",
  "Hair Styling",
  "Braids",
  "Rebond",
  "Perm",
];

const Services = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [images, setImages] = useState([])
  const serviceSectionRef = useRef(null)

  const scrollToService = (e) => {
    e.preventDefault()
    serviceSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // Load images from Supabase album
  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase
        .from("album")
        .select("image_url")
        .order("created_at", { ascending: true })

      if (error) {
        console.error("❌ Error fetching images:", error.message)
      } else {
        setImages(data.map(item => item.image_url))
      }
    }

    fetchImages()
  }, [])

  return (
    <div>
      <div className="bg-[url('src/assets/img/Services-bg.jpg')] bg-cover bg-no-repeat lg:bg-[center_bottom_-100px] h-[200px] lg:h-135 flex items-end justify-center">
        <div className="text-white text-center mb-15">
          <h5 className="uppercase text-xs" style={{fontFamily: "satoshi-medium"}}>Services</h5>
          <h1 className="tracking-[0.4px] text-2xl lg:text-[32px]" style={{fontFamily: "satoshi-bold"}}>Street Style, Redefined</h1>
          <a 
            href="#service-section"
            onClick={scrollToService}
             className='text-white border-b pb-1 text-sm lg:text-base' 
            style={{fontFamily: "satoshi-medium"}}
          >
            Scroll Down
          </a>
        </div>
      </div>

      {/* INTRO */}
      <div className="mt-10 px-4">
        <h1 className="text-2xl lg:text-[32px] tracking-[0.4px] text-left lg:text-center" style={{fontFamily: "satoshi-bold"}}>Molave Street's Barbers Services</h1>
        <p className="text-sm lg:text-base text-left lg:text-center tracking-[0.4px] mt-2 max-w-[700px] mx-auto leading-[24px]" style={{fontFamily: "satoshi-medium"}}>
          Our story began 7 years ago as a humble corner shop with a single chair and a big dream to bring authentic, high-quality 
          grooming to the heart of the community.
        </p>
      </div>

      <div
        ref={serviceSectionRef}
        id="service-section"
        className="mt-10 flex items-center justify-center"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-[90%] lg:w-[85%] gap-6 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center h-50 lg:h-50 text-2xl lg:text-[32px] cursor-pointer"
              style={{ fontFamily: "satoshi-bold" }}
            >
              {service}
            </div>
          ))}
        </div>
      </div>


      {/* CAROUSEL */}
      <Carousel
        className="lg:w-full max-w-6xl mx-auto mt-20 mb-20 relative group"
        plugins={[
          Autoplay({ delay: 10000, stopOnInteraction: true })
        ]}
      >
        <CarouselContent>
          {images.length > 0 ? (
            images.map((img, index) => (
              <CarouselItem key={index} className="basis-1/1 md:basis-1/3 flex justify-center">
                <img
                  src={img}
                  alt={`Album ${index + 1}`}
                  className="w-[300px] lg:w-[400px] h-[400px] lg:h-[500px] object-cover cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                />
              </CarouselItem>
            ))
          ) : (
            <p className="text-center w-full py-10">No images uploaded yet.</p>
          )}
        </CarouselContent>

        <CarouselPrevious className="opacity-0 group-hover:opacity-100 transition duration-300" />
        <CarouselNext className="opacity-0 group-hover:opacity-100 transition duration-300" />

        <CarouselDots />
      </Carousel>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white p-2 transition"
            >
              <X size={28} />
            </button>

            <motion.img
              src={selectedImage}
              alt="Zoomed"
              className="w-[80vw] h-[80vh] object-contain shadow-lg"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Services
