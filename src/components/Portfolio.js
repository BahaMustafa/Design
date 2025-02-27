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
      <h2>My Work</h2>
      <div className="projects">
        <div className="project-1">
          <p>Project 1</p>
          <p>Modern Residential Design</p>
        </div>
        <div className="project-2">
          <p>Project 2</p>
          <p>Commercial Building Design</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
