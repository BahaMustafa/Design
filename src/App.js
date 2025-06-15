import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';
import CommercialDetails from './components/CommercialDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Portfolio />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/project-details" element={
            <>
              <ProjectDetails />
              <Footer />
            </>
          } />
          <Route path="/commercial-details" element={
            <>
              <CommercialDetails />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
