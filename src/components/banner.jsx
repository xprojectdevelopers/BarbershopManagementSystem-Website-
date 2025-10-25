import React, { useState, useEffect, useRef } from "react";
import { X } from "phosphor-react";
import { supabase } from "@/lib/supabaseClient"; 

const Banner = () => {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hidePermanently, setHidePermanently] = useState(false);
  const [fade, setFade] = useState(true);
  const lastScrollY = useRef(0);

  // Fetch messages (with link)
  useEffect(() => {
    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from("banner_messages")
        .select("text, link")
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Error fetching messages:", error);
      } else if (data) {
        setMessages(data); // keep objects { text, link }
      }
    };

    fetchMessages();

    // ✅ Real-time subscription
    const channel = supabase
      .channel("banner_changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "banner_messages" },
        () => {
          fetchMessages();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Rotate text every 15s
  useEffect(() => {
    if (messages.length === 0) return;
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % messages.length);
        setFade(true);
      }, 500);
    }, 15000);
    return () => clearInterval(interval);
  }, [messages]);

  // Hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (hidePermanently) return;
      if (window.scrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hidePermanently]);

  if (!visible || hidePermanently || messages.length === 0) return null;

  const currentMessage = messages[currentIndex];

  return (
    <div className="w-full bg-white border-b border-gray-400 text-center text-sm md:text-base py-2 px-10 flex items-center justify-center relative">
      <span
        key={currentIndex}
        className={`transition-opacity duration-500 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{ fontFamily: "satoshi-medium" }}
      >
        {currentMessage.link ? (
          <a
            href={currentMessage.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline"
          >
            {currentMessage.text}
          </a>
        ) : (
          currentMessage.text
        )}
      </span>
      <button
        onClick={() => {
          setHidePermanently(true);
          setVisible(false);
        }}
        className="absolute right-4 cursor-pointer"
      >
        <X size={16} weight="bold" />
      </button>
    </div>
  );
};

export default Banner;
