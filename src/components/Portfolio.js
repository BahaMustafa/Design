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
      
      {/* Residential Category */}
      <div className="category-section">
        <h3>Residential Projects</h3>
        <div className="project-card">
          <div className="project-info">
            <h4>residential designs</h4>
            <p>click to see what's inside</p>
            <a href="#/project-details" className="view-project">View</a>
          </div>
          <div className="project-images-grid">
            <div className="project-image">
              <img src="https://github.com/BahaMustafa/Design/blob/main/public/images/52f730aa-4f5c-41a1-aef4-e33d1e75f931.JPG?raw=true" alt="Modern Residential Design" />
            </div>
            <div className="project-image">
              <img src="https://github.com/BahaMustafa/Design/blob/main/public/images/6e0fc1e3-9753-4ea2-8981-69e3da8d757d.JPG?raw=true" alt="Residential Building Design" />
            </div>
            <div className="project-image">
              <img src="https://github.com/BahaMustafa/Design/blob/main/public/images/2f9cfd7d-4893-4f88-8639-412225b96fa1.JPG?raw=true" alt="Residential Project" />
            </div>
            <div className="project-image">
              <img src="https://github.com/BahaMustafa/Design/blob/main/public/images/644207c3-8f60-4152-a18c-d5a5c4e01474.JPG?raw=true" alt="Residential Project" />
            </div>
          </div>
        </div>
      </div>

      {/* Commercial Category */}
      <div className="category-section">
        <h3>Commercial Projects</h3>
        <div className="project-card">
          <div className="project-info">
            <h4>commercial designs</h4>
            <p>click to see what's inside</p>
            <a href="#/commercial-details" className="view-project">View</a>
          </div>
          <div className="project-images-grid">
            {/* Placeholder for commercial images */}
            <div className="project-image placeholder">
              <div className="placeholder-content">Commercial Project 1
              <img src="https://img.pikbest.com/wp/202346/focusing-design-focused-3d-rendering-of-contemporary-building-with-placeholder-text-for-construction-specs_9618652.jpg!w700wp" alt="Commercial Design" />
              </div>
            </div>
            <div className="project-image placeholder">
              <div className="placeholder-content">Commercial Project 2
              <img src="https://img.pikbest.com/wp/202346/focusing-design-focused-3d-rendering-of-contemporary-building-with-placeholder-text-for-construction-specs_9618652.jpg!w700wp" alt="Commercial Design" />
              </div>
            </div>
            <div className="project-image placeholder">
              <div className="placeholder-content">Commercial Project 3
              <img src="https://img.pikbest.com/wp/202346/focusing-design-focused-3d-rendering-of-contemporary-building-with-placeholder-text-for-construction-specs_9618652.jpg!w700wp" alt="Commercial Design" />
              </div>
            </div>
            <div className="project-image placeholder">
              <div className="placeholder-content">Commercial Project 4
              <img src="https://img.pikbest.com/wp/202346/focusing-design-focused-3d-rendering-of-contemporary-building-with-placeholder-text-for-construction-specs_9618652.jpg!w700wp" alt="Commercial Design" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
