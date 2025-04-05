import React from 'react';
import './Contact.css'; // Make sure to create this CSS file

function Contact() {
  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>I'd be delighted to discuss your project</p>
        <div className="masked-email">
          <span className="email-label">Email:</span>
          <button 
            className="reveal-email-btn"
            onClick={() => {
              window.location.href = "mailto:bostanydesign@yahoo.com";
            }}
          >
            Click to reveal email
          </button>
        </div>
        <div className="contact-decoration">
          <span className="decoration-line"></span>
          <span className="decoration-icon">✉</span>
          <span className="decoration-line"></span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
