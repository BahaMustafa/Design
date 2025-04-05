import React, { useEffect, useRef } from 'react';
import './Hero.css'; // Make sure the CSS is correctly linked
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const logoRef = useRef(null);
  
  useEffect(() => {
    // Initial animation for logo fade in
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
    );
    
    // Scroll animation for logo
    gsap.to(logoRef.current, {
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: 0.5, // Changed from true to 0.5 for smoother scrolling
        ease: "power1.inOut" // Added ease for smoother animation
      },
      scale: 0.7,
      y: -100,
      // opacity: 0.8
    });
  }, []);

  return (
    <div className="hero-section">
      {/* Video Background */}
      <video className="background-video" autoPlay loop muted playsInline>
        <source src="https://videos.pexels.com/video-files/4457865/4457865-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Logo in center */}
      <div className="logo-container" ref={logoRef}>
        <img src={`${process.env.PUBLIC_URL}/images/bilal-logo.png`} alt="Bilal Design Logo" className="hero-logo" />
      </div>

      {/* Overlay content (text) */}
      <div className="overlay-content">
        <h1 className="hero-title">Welcome to Bilal Bostany Portfolio</h1>
        <p className="hero-subtitle"> Designing the future, one project at a time.</p>
      </div>
    </div>
  );
}

export default Hero;
