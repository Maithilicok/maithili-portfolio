import React, { useState } from 'react';
import ShutterLoader from './components/ShutterLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Leadership from './components/Leadership';
import FloatingDock from './components/FloatingDock';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';
import AllProjectsView from './components/AllProjectsView';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'all-projects'

  const handleNavigateAllProjects = () => {
    setCurrentView('all-projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#09090B] min-h-screen text-white font-sans relative selection:bg-blue-600 selection:text-white">
      {/* Left Measurement Scale Line matching swamii.me */}
      <div className="hidden md:block fixed top-0 left-0 h-full w-8 bg-[#09090B] z-[40] pointer-events-none select-none border-r border-[#1C1C1F]">
        <div className="h-full w-full flex flex-col justify-between py-12 items-end pr-1 opacity-40">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="w-2 h-[1px] bg-[#39393D]" />
          ))}
        </div>
      </div>

      {/* Shutter Entry Animation Curtain */}
      <ShutterLoader />

      {/* Navigation */}
      <Navbar
        onOpenContact={() => setContactOpen(true)}
        onNavigateAllProjects={handleNavigateAllProjects}
        currentView={currentView}
      />

      {/* Main Content View Switcher */}
      {currentView === 'all-projects' ? (
        <AllProjectsView onBack={handleNavigateHome} />
      ) : (
        <main className="max-w-[1600px] mx-auto md:pl-6">
          <Hero onOpenContact={() => setContactOpen(true)} />
          <Projects onNavigateAllProjects={handleNavigateAllProjects} />
          <Experience />
          <Skills />
          <Leadership />
        </main>
      )}

      {/* Footer matching swamii.me */}
      <Footer />

      {/* Floating Bottom Social Dock */}
      <FloatingDock
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}
