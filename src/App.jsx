import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ObsidianShader from './components/ObsidianShader';
import CustomCursor from './components/CustomCursor';
import TerminalModal from './components/TerminalModal';
import ProjectModal from './components/ProjectModal';

import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import ServicesPage from './pages/ServicesPage';
import ProcessPage from './pages/ProcessPage';
import AboutPage from './pages/AboutPage';
import AuditPage from './pages/AuditPage';
import StartProjectPage from './pages/StartProjectPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-background text-on-surface relative selection:bg-electric-gold selection:text-black">
      <ScrollToTop />
      
      {/* WebGL Ambient Shader Background ported directly from Stitch */}
      <ObsidianShader opacity={0.38} />

      {/* Sleek Custom Glowing Cursor for Desktop */}
      <CustomCursor />

      {/* Interactive Global Terminal CLI */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
      />

      {/* Project Deep-Dive Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Shared Responsive Navigation Bar */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Routed View */}
      <main className="relative z-10">
        <Routes>
          <Route 
            path="/" 
            element={<HomePage onSelectProject={setSelectedProject} />} 
          />
          <Route 
            path="/work" 
            element={<WorkPage onSelectProject={setSelectedProject} />} 
          />
          <Route 
            path="/services" 
            element={<ServicesPage />} 
          />
          <Route 
            path="/process" 
            element={<ProcessPage />} 
          />
          <Route 
            path="/about" 
            element={<AboutPage />} 
          />
          <Route 
            path="/audit" 
            element={<AuditPage />} 
          />
          <Route 
            path="/start-project" 
            element={<StartProjectPage />} 
          />
          <Route 
            path="/inquire" 
            element={<StartProjectPage />} 
          />
          <Route 
            path="*" 
            element={<HomePage onSelectProject={setSelectedProject} />} 
          />
        </Routes>
      </main>

      {/* Shared Responsive Footer */}
      <Footer onOpenTerminal={() => setTerminalOpen(true)} />
    </div>
  );
}
