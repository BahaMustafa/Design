import React from "react";
import "./ProjectDetails.css"; // Reuse the same CSS

function CommercialDetails() {
  // Placeholder array for commercial images - you can add your images here later
  const commercialImages = [
    {
      id: 1,
      src: "https://img.pikbest.com/wp/202346/focusing-design-focused-3d-rendering-of-contemporary-building-with-placeholder-text-for-construction-specs_9618652.jpg!w700wp",
      alt: "Commercial Project 1",
      fullWidth: true
    },
    {
      id: 2,
      src: "https://img.pikbest.com/wp/202346/focusing-design-focused-3d-rendering-of-contemporary-building-with-placeholder-text-for-construction-specs_9618652.jpg!w700wp",
      alt: "Commercial Project 2",
      fullWidth: false
    },
    {
      id: 3,
      src: "https://img.pikbest.com/wp/202346/focusing-design-focused-3d-rendering-of-contemporary-building-with-placeholder-text-for-construction-specs_9618652.jpg!w700wp",
      alt: "Commercial Project 3",
      fullWidth: false
    },
    {
      id: 4,
      src: "https://img.pikbest.com/wp/202346/focusing-design-focused-3d-rendering-of-contemporary-building-with-placeholder-text-for-construction-specs_9618652.jpg!w700wp",
      alt: "Commercial Project 4",
      fullWidth: true
    }
    // Add more placeholder images or replace with your actual commercial images
  ];

  return (
    <div className="project-details-container">
      <div className="project-details-header">
        <h1>Commercial Design • 2025</h1>
        <p className="project-subtitle">Commercial Design • 2025</p>
      </div>
      <div className="project-description">
        <p>
          Commercial project gallery - Images coming soon.
        </p>
      </div>
      
      <div className="project-gallery">
        {commercialImages.map(image => (
          <div 
            key={image.id} 
            className={`gallery-item ${image.fullWidth ? 'full-width' : ''}`}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="gallery-image" 
            />
          </div>
        ))}
      </div>
      
      <div className="project-details-footer">
        <a href="/" className="back-button">Back to Portfolio</a>
      </div>
    </div>
  );
}

export default CommercialDetails;