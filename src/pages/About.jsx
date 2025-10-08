import { useState, useEffect, useRef } from "react"
import { Play, Pause, SpeakerSimpleHigh, SpeakerSimpleSlash } from 'phosphor-react'
import TestimonialCard from "../components/TestimonialCard"
import { supabase } from "@/lib/supabaseClient"

function About() {
  const [barbers, setBarbers] = useState([])
  const videoSectionRef = useRef(null)
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

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
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
            setIsPlaying(true);
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 } 
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
        videoRef.current.muted = isMuted;
    }
    }, [isMuted]);

  return (
    <div>
        <div className="bg-[url('/src/assets/img/AboutUs-bg.jpg')] bg-cover bg-center h-[200px] lg:h-135 flex items-end justify-center">
           <div className="text-white text-center mb-15">
                <h5 className="uppercase text-xs" style={{fontFamily: "satoshi-medium"}}>About Us</h5>
                <h1 className="tracking-[0.4px] text-2xl lg:text-[32px]" style={{fontFamily: "satoshi-bold"}}>From the Street to the Chair</h1>
                <a 
                    href="#video-section"
                    onClick={scrollToVideo}
                    className='text-white border-b pb-1 text-sm lg:text-base' 
                    style={{fontFamily: "satoshi-medium"}}
                >
                    Scroll Down
                </a>
           </div>
        </div>

        <div className="mt-10 lg:mt-30 mb-10 lg:mb-30 px-4">
            <h1 className="text-2xl lg:text-[32px] tracking-[0.4px] text-left lg:text-center" style={{fontFamily: "satoshi-bold"}}>Molave Street's Barbers</h1>
            <p className="text-sm lg:text-base text-left lg:text-center tracking-[0.4px] mt-2 max-w-[700px] mx-auto leading-[24px]" style={{fontFamily: "satoshi-medium"}}>Our story began 7 years ago as a humble corner shop with a single chair and a big dream to bring authentic, high-quality 
                grooming to the heart of the community. Over time, it grew into a trusted local spot where style meets story. Built on
                tradition, skill, and street-style attitude, we've shaped more than just hair—we've shaped relationships. Every cut here
                tells a story, and yours is next.</p>
        </div>

        {/* 🎥 Video Section */}
        <div
            ref={videoSectionRef}
            id="video-section"
            className="flex items-center justify-center mb-20"
            >
            <div className="w-full lg:w-11/12 h-[300px] lg:h-[550px] relative overflow-hidden shadow-lg">
                <video
                    className="w-full h-full object-cover"
                    ref={videoRef}
                    src="/"
                    playsInline
                    muted
                    loop
                />

                {/* Overlay Controls */}
                <div className="absolute bottom-4 left-4 flex gap-4">
                    {/* Play / Pause Button */}
                    <button
                        onClick={() => {
                        const video = videoRef.current;
                        if (!video) return;

                        if (video.paused) {
                            video.play();
                            setIsPlaying(true);
                        } else {
                            video.pause();
                            setIsPlaying(false);
                        }
                        }}
                        className=" text-white p-2 hover:scale-110 transition"
                    >
                        {isPlaying ? (
                        <Pause size={20} weight="fill" />
                        ) : (
                        <Play size={20} weight="fill" />
                        )}
                    </button>

                    {/* Mute / Unmute Button */}
                    <button
                        onClick={() => {
                        const video = videoRef.current;
                        if (!video) return;
                        video.muted = !video.muted;
                        setIsMuted(video.muted);
                        }}
                        className="text-white hover:scale-110 transition"
                    >
                        {isMuted ? (
                        <SpeakerSimpleSlash size={20} weight="fill" />
                        ) : (
                        <SpeakerSimpleHigh size={20} weight="fill" />
                        )}
                    </button>
                </div>
            </div>
        </div>


        <div className='bg-[url("/src/assets/img/LandingA-bg.jpg")] bg-cover bg-center h-[300px] lg:h-193 mb-20 flex items-center justify-center'>
            <div className='text-white text-center'>
                <h1 className='text-4xl lg:text-[42px] tracking-[0.4px] mb-3 lg:mb-0' style={{fontFamily: "satoshi-bold"}}>Our Barbers</h1>
                <p className='text-sm lg:text-base tracking-[0.4px]' style={{fontFamily: "satoshi-medium"}}>Meet the experts behind every clean cut and confident style.</p>
            </div>
        </div>

        <div
            style={{ fontFamily: "satoshi-medium" }}
            className="flex items-center justify-center flex-col mb-10 lg:mb-20"
            >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] tracking-[0.4px] text-center text-sm lg:text-base">
                {barbers.length > 0 ? (
                barbers.map((barber) => (
                    <div key={barber.id} className="mb-4 flex flex-col items-center">
                    <img
                        src={barber.image_url}
                        alt={barber.name}
                        className="mb-2 w-[300px] h-[400px] object-cover shadow-md"
                    />
                    <h6>{barber.name}</h6>
                    </div>
                ))
                ) : (
                <p>No barbers added yet.</p>
                )}
            </div>
            </div>


        <div className='bg-[url("src/assets/img/CFeedback-bg.jpg")] bg-cover bg-center h-[300px] lg:h-192 mb-10 lg:mb-20 flex items-center justify-center'>
            <div className='text-white text-center'>
                <h1 className='text-4xl lg:text-[42px] tracking-[0.4px] mb-3 lg:mb-0' style={{fontFamily: "satoshi-bold"}}>Customer Feedback</h1>
                <p className='text-sm lg:text-base tracking-[0.4px]' style={{fontFamily: "satoshi-medium"}}>Discover what our loyal customers say about their experience.</p>
            </div>
        </div>

        <div className="min-h-screen px-20 pb-20">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {[
                    {
                        name: "John Doe",
                        position: "Client, Local Business",
                        content: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
                                    Duis cursus, mi quis viverra ornare."`,
                    },
                    {
                        name: "Name Surname",
                        position: "Position, Company name",
                        content: `"I've never felt more at home in a barbershop. The team at Molave Street’s Barbers truly knows how to make you 
                                    look and feel your best! I've never felt more at home in a barbershop. The team at Molave Street’s Barbers truly knows 
                                    how to make you look and feel your best!"`,
                    },
                    {
                        name: "Name Surname",
                        position: "Position, Company name",
                        content: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
                                    Duis cursus, mi quis viverra ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse 
                                    varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."`,
                    },
                    {
                        name: "Name Surname",
                        position: "Position, Company name",
                        content: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
                                    Duis cursus, mi quis viverra ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in 
                                    eros elementum tristique. Duis cursus, mi quis viverra ornare."`,
                    },
                    {
                        name: "Name Surname",
                        position: "Position, Company name",
                        content: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
                                    Duis cursus, mi quis viverra ornare."`,
                    },
                    {
                        name: "Name Surname",
                        position: "Position, Company name",
                        content: `"I've never felt more at home in a barbershop. The team at Molave Street’s Barbers truly knows how to make you 
                                    look and feel your best! I've never felt more at home in a barbershop. The team at Molave Street’s Barbers 
                                    truly knows how to make you look and feel your best!"`,
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
        </div>
    </div>
  )
}

export default About
