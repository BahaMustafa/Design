import React from 'react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import House3DViewer from './components/House3DViewer'; // Import the 3D Viewer component

function App() {
  return (
    <div className="App">
      <Hero />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
