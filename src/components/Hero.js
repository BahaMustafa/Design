import React from 'react';
import './Hero.css'; // Make sure the CSS is correctly linked

function Hero() {
  return (
    <div className="hero-section">
      {/* Video Background */}
      <video className="background-video" autoPlay loop muted playsInline>
        <source src="https://videos.pexels.com/video-files/4457865/4457865-uhd_2560_1440_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content (text) */}
      <div className="overlay-content">
        <h1 className="hero-title">Welcome to Bilal Bostany Portfolio</h1>
        <p className="hero-subtitle"> Designing the future, one project at a time.</p>
      </div>
    </div>
  );
}

export default Hero;
