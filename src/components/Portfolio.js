import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Portfolio.css"; // Link to the Portfolio-specific CSS

gsap.registerPlugin(ScrollTrigger);

function Portfolio() {
  const portfolioRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      portfolioRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="portfolio-section" ref={portfolioRef}>
      <h2>check out my recent work</h2>
        <div className="project-card">
          <div className="project-info">
            <h3>one of the many recent projects</h3>
            <p>click to see what's inside</p>
            <a href="#/project-details" className="view-project">View</a>
          </div>
          <div className="project-images-grid">
            <div className="project-image">
              <img src={`./images/52f730aa-4f5c-41a1-aef4-e33d1e75f931.jpg`} alt="Modern Residential Design" />
            </div>
            <div className="project-image">
              <img src={`./images/6e0fc1e3-9753-4ea2-8981-69e3da8d757d.jpg`} alt="Commercial Building Design" />
            </div>
            <div className="project-image">
              <img src={`./images/2f9cfd7d-4893-4f88-8639-412225b96fa1.jpg`} alt="Urban Planning Project" />
            </div>
            <div className="project-image">
              <img src={`./images/644207c3-8f60-4152-a18c-d5a5c4e01474.jpg`} alt="Urban Planning Project" />
            </div>
          </div>
        </div>
      </div>
  );
}

export default Portfolio;
