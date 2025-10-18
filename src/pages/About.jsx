import { useState, useEffect, useRef } from "react"
import { Play, Pause, SpeakerSimpleHigh, SpeakerSimpleSlash } from 'phosphor-react'
import TestimonialCard from "../components/TestimonialCard"
import { supabase } from "@/lib/supabaseClient"
import { motion, useInView  } from "framer-motion"

function About() {
  const [barbers, setBarbers] = useState([])
  const videoSectionRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

    // Reference for in-view animation
    const barbersRef = useRef(null)
    const isInView = useInView(barbersRef, { once: true, margin: "-100px" })

    const feedbackRef = useRef(null)
    const feedbackInView = useInView(feedbackRef, { once: true, margin: "-100px" })


  useEffect(() => {
    const fetchBarbers = async () => {
      const { data, error } = await supabase
        .from("barbers")
        .select("*")
        .order("created_at", { ascending: true })

      if (!error) setBarbers(data)
    }
    fetchBarbers()
  }, [])

  const scrollToVideo = (e) => {
    e.preventDefault()
    videoSectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    document.body.appendChild(tag)

    window.onYouTubeIframeAPIReady = () => {
      window.player = new window.YT.Player("youtube-player", {
        videoId: "LcmpIJkTlTo",
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: "LcmpIJkTlTo",
          controls: 0,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: (event) => {
            event.target.playVideo()
            setIsPlaying(true)
          },
        },
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (window.player) {
            if (entry.isIntersecting) {
              window.player.playVideo()
              setIsPlaying(true)
            } else {
              window.player.pauseVideo()
              setIsPlaying(false)
            }
          }
        })
      },
      { threshold: 0.5 }
    )

    if (videoSectionRef.current) observer.observe(videoSectionRef.current)

    return () => {
      observer.disconnect()
      delete window.onYouTubeIframeAPIReady
    }
  }, [])

  return (
    <div>
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[url('/src/assets/img/AboutUs-bg.jpg')] bg-cover bg-center h-[200px] sm:h-[300px] md:h-[400px] lg:h-[540px] flex items-end justify-center"
      >
        <div className="text-white text-center mb-15">
          <h5 className="uppercase text-xs" style={{ fontFamily: "satoshi-medium" }}>About Us</h5>
          <h1 className="tracking-[0.4px] text-2xl lg:text-[32px]" style={{ fontFamily: "satoshi-bold" }}>From the Street to the Chair</h1>
          <a
            href="#video-section"
            onClick={scrollToVideo}
            className='text-white border-b pb-1 text-sm lg:text-base'
            style={{ fontFamily: "satoshi-medium" }}
          >
            Scroll Down
          </a>
        </div>
      </motion.div>

      {/* ABOUT STORY */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-10 lg:mt-20 mb-10 lg:mb-20 px-4"
      >
        <h1 className="text-2xl lg:text-[32px] tracking-[0.4px] text-left lg:text-center" style={{ fontFamily: "satoshi-bold" }}>Molave Street's Barbers</h1>
        <p className="text-sm lg:text-base text-left lg:text-center tracking-[0.4px] mt-2 max-w-[700px] mx-auto leading-[24px]" style={{ fontFamily: "satoshi-medium" }}>
          Our story began 7 years ago as a humble corner shop with a single chair and a big dream to bring authentic, high-quality grooming to the heart of the community. Over time, it grew into a trusted local spot where style meets story. Built on tradition, skill, and street-style attitude, we've shaped more than just hair—we've shaped relationships. Every cut here tells a story, and yours is next.
        </p>
      </motion.div>

      {/* VIDEO SECTION */}
      <motion.div
        ref={videoSectionRef}
        id="video-section"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex items-center justify-center mb-20"
      >
        <div className="w-full lg:w-10/12 h-[300px] lg:h-[560px] relative overflow-hidden shadow-lg">
          <div id="youtube-player" className="w-full h-full"></div>

          {/* Controls */}
          <div className="absolute bottom-4 left-4 flex gap-4 z-10">
            <button
              onClick={() => {
                if (window.player) {
                  if (isPlaying) {
                    window.player.pauseVideo()
                    setIsPlaying(false)
                  } else {
                    window.player.playVideo()
                    setIsPlaying(true)
                  }
                }
              }}
              className="text-white p-2 hover:scale-110 transition"
            >
              {isPlaying ? <Pause size={20} weight="fill" /> : <Play size={20} weight="fill" />}
            </button>

            <button
              onClick={() => {
                if (window.player) {
                  if (isMuted) {
                    window.player.unMute()
                    setIsMuted(false)
                  } else {
                    window.player.mute()
                    setIsMuted(true)
                  }
                }
              }}
              className="text-white hover:scale-110 transition"
            >
              {isMuted ? <SpeakerSimpleSlash size={20} weight="fill" /> : <SpeakerSimpleHigh size={20} weight="fill" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* BARBERS SECTION */}
      <div
        ref={barbersRef}
        className='bg-[url("/src/assets/img/LandingA-bg.jpg")] bg-cover bg-center h-[300px] lg:h-195 mb-20 flex items-center justify-center overflow-hidden'
        >
            <motion.div
                className="text-white text-center"
                initial={{ y: 100, opacity: 0 }} 
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                    duration: 3,
                    ease: [0.25, 0.1, 0.25, 1], 
                }}
                >
                <h1
                    className="text-4xl lg:text-[42px] tracking-[0.4px] mb-3 lg:mb-0"
                    style={{ fontFamily: "satoshi-bold" }}
                >
                    Our Barbers
                </h1>
                <p
                    className="text-sm lg:text-base tracking-[0.4px]"
                    style={{ fontFamily: "satoshi-medium" }}
                >
                    Meet the experts behind every clean cut and confident style.
                </p>
            </motion.div>

        </div>


      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        style={{ fontFamily: "satoshi-medium" }}
        className="flex items-center justify-center flex-col mb-10 lg:mb-20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] lg:w-[85%] tracking-[0.4px] text-center text-sm lg:text-base">
          {barbers.length > 0 ? (
            barbers.map((barber) => (
              <motion.div
                key={barber.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-4 flex flex-col items-center"
              >
                <img
                  src={barber.image_url}
                  alt={barber.name}
                  className="mb-2 w-[300px] h-[400px] object-cover shadow-md"
                />
                <h6>{barber.name}</h6>
              </motion.div>
            ))
          ) : (
            <p>No barbers added yet.</p>
          )}
        </div>
      </motion.div>

      {/* FEEDBACK HEADER */}
        <div
            ref={feedbackRef} 
            className='bg-[url("/src/assets/img/CFeedback-bg.jpg")] bg-cover bg-center h-[300px] lg:h-194 mb-10 lg:mb-20 flex items-center justify-center overflow-hidden'
            >
            <motion.div
                className="text-white text-center"
                initial={{ y: 100, opacity: 0 }} 
                animate={feedbackInView ? { y: 0, opacity: 1 } : {}}
                transition={{
                    duration: 3,
                    ease: [0.25, 0.1, 0.25, 1], 
                }}
            >
                <h1
                className='text-4xl lg:text-[42px] tracking-[0.4px] mb-3 lg:mb-0'
                style={{ fontFamily: "satoshi-bold" }}
                >
                Customer Feedback
                </h1>
                <p
                className='text-sm lg:text-base tracking-[0.4px]'
                style={{ fontFamily: "satoshi-medium" }}
                >
                Discover what our loyal customers say about their experience.
                </p>
            </motion.div>
        </div>


      {/* TESTIMONIALS */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen px-20 pb-20"
      >
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {[
            {
              name: "John Doe",
              position: "Client, Local Business",
              content: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."`,
            },
            {
              name: "Name Surname",
              position: "Position, Company name",
              content: `"I've never felt more at home in a barbershop. The team at Molave Street’s Barbers truly knows how to make you look and feel your best! I've never felt more at home in a barbershop. The team at Molave Street’s Barbers truly knows how to make you look and feel your best!"`,
            },
            {
              name: "Name Surname",
              position: "Position, Company name",
              content: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."`,
            },
            {
              name: "Name Surname",
              position: "Position, Company name",
              content: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."`,
            },
            {
              name: "Name Surname",
              position: "Position, Company name",
              content: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."`,
            },
            {
              name: "Name Surname",
              position: "Position, Company name",
              content: `"I've never felt more at home in a barbershop. The team at Molave Street’s Barbers truly knows how to make you look and feel your best! I've never felt more at home in a barbershop. The team at Molave Street’s Barbers truly knows how to make you look and feel your best!"`,
            },
          ].map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              position={testimonial.position}
              content={testimonial.content}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default About
