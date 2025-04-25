import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import About from './components/About';
import PlantLibrary from './components/PlantLibrary';
import Weather from './components/Weather';
import GardenJournal from './components/GardenJournal';
import Design from './components/Design';
import Help from './components/Help';
import Contact from './components/Contact';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './styles/App.css';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Router>
        <div style={{ paddingTop: '2.75rem' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/plant-library" element={<PlantLibrary />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/journal" element={<GardenJournal />} />
            <Route path="/design" element={<Design />} />
            <Route path="/help" element={<Help />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </DndProvider>
  );
};

export default App;
