import React from "react";
import "./ProjectDetails.css";

function ProjectDetails() {
  // Array of project images
  const projectImages = [
    {
      id: 1,
      src: `images/8c647198-b697-4d7a-9bf6-960fb6832abf.jpg`,
      alt: "Main Project View",
      fullWidth: true
    },
    {
      id: 2,
      src: `images/8c647198-b697-4d7a-9bf6-960fb6832abf.jpg`,
      alt: "Interior Design Detail",
      fullWidth: false
    },
    {
      id: 3,
      src: `images/018f71f5-43f6-4522-941d-e94f673776be.jpg`,
      alt: "Exterior Perspective",
      fullWidth: false
    },
    {
      id: 4,
      src: `images/4739fc21-ba1d-440d-bf1d-4e0eab23137e.jpg`,
      alt: "Panoramic View",
      fullWidth: true
    },
    {
      id: 5,
      src: `images/3e068969-f25e-497e-9fb9-8592b0b3b8f8.jpg`,
      alt: "Detail View",
      fullWidth: false
    },
    {
      id: 6,
      src: `images/44ed4b12-b46f-458d-8f1b-4528a7b0c5ae.jpg`,
      alt: "Final Render",
      fullWidth: false
    },
    {
      id: 7,
      src: `images/402304be-3f55-4473-8108-adbfddb34f04.jpg`,
      alt: "Final Render",
      fullWidth: true
    },
    {
      id: 8,
      src: `images/f6261533-e363-44c7-a18c-64ba7e84151c.jpg`,
      alt: "Final Render",
      fullWidth: false
    },
    {
      id: 9,
      src: `images/e58231ab-21b6-4b5c-bca7-1f097a857fd7.jpg`,
      alt: "Final Render",
      fullWidth: false
    },
    {
      id: 10,
      src: `images/e1ca5804-7d3e-44c7-891f-87ddd8fb4ba4.jpg`,
      alt: "Final Render",
      fullWidth: true
    },
    {
      id: 11,
      src: `images/da1f35ea-0ff4-4f06-bac4-c3f5adaadec3.jpg`,
      alt: "Final Render",
      fullWidth: false
    },
    {
      id: 12,
      src: `images/c25ff646-fdf9-4014-ad54-1b6dbfdfcae9.jpg`,
      alt: "Final Render",
      fullWidth: false
    },
    {
      id: 13,
      src: `images/402304be-3f55-4473-8108-adbfddb34f04.jpg`,
      alt: "Final Render",
      fullWidth: true
    },
    {
      id: 14,
      src: `images/34fe37a2-ba61-4ea1-9c93-c7b233e7b6b4.jpg`,
      alt: "Final Render",
      fullWidth: true
    },
    {
      id: 15,
      src: `images/bf01ec4b-99d6-4e77-981f-a51beab9d12d.jpg`,
      alt: "Final Render",
      fullWidth: false
    },
    {
      id: 16,
      src: `images/45911b29-1a11-4959-a039-349e1348dd45.jpg`,
      alt: "Final Render",
      fullWidth: false
    },
    {
      id: 17,
      src: `images/bb01475c-6f0a-4a3e-8c39-de5fdd193cad.jpg`,
      alt: "Final Render",
      fullWidth: false
    },
    {
      id: 18,
      src: `images/a5bf3270-1ab6-47b6-83d3-20f2b424efd3.jpg`,
      alt: "Final Render",
      fullWidth: false
    },
    {
      id: 19,
      src: `images/3c81f19e-acca-43e7-832b-e5430dd2f7d0.jpg`,
      alt: "Final Render",
      fullWidth: false
    },
    {
      id: 20,
      src: `images/60c91de0-bd49-449a-8bab-b9b5620f61ad.jpg`,
      alt: "Final Render",
      fullWidth: false
    },
    {
      id: 21,
      src: `images/3fcaddb5-ba1a-4b04-8ddb-7499ddd0e1ef.jpg`,
      alt: "Final Render",
      fullWidth: true
    },
    {
      id: 22,
      src: `images/9fadaf7c-316d-4618-8a57-f2be7a7253e1.jpg`,
      alt: "Final Render",
      fullWidth: false
    },
    {
      id: 23,
      src: `images/7d6b07a5-40c0-49c6-aa5a-8eac758518a5.jpg`,
      alt: "Final Render",
      fullWidth: false
    },
    {
      id: 24,
      src: `images/5eb8c0cb-7ae8-4462-bc32-ac01b88f24d6.jpg`,
      alt: "Final Render",
      fullWidth: true
    },
    {
      id: 25,
      src: `images/7b2d527e-1ae6-442f-8232-fd4414295d86.jpg`,
      alt: "Final Render",
      fullWidth: false
    },
    {
      id: 26,
      src: `images/644207c3-8f60-4152-a18c-d5a5c4e01474.jpg`,
      alt: "Final Render",
      fullWidth: false
    }
  ];

  return (
    <div className="project-details-container">
      <div className="project-details-header">
        <h1>Residential Design • 2025</h1>
        <p className="project-subtitle">Residential Design • 2025</p>
      </div>
      <div className="project-description">
        <p>
          Full project gallery.
        </p>
      </div>
      
      <div className="project-gallery">
        {projectImages.map(image => (
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

export default ProjectDetails;