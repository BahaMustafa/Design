import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Bostany Design. All Rights Reserved.</p>
        <a href="https://techdevprime.com/" target="_blank" rel="noopener noreferrer">
          Designed and Developed by techdevprime.com 2025
        </a>
      </div>
    </footer>
  );
};

export default Footer;
