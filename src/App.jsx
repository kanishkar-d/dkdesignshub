import React, { useState } from 'react';
import VideoBackground from './components/VideoBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Interactive Modals with User's Freelancing Content
import WeDidModal from './components/modals/WeDidModal';
import ServicesModal from './components/modals/ServicesModal';
import AboutModal from './components/modals/AboutModal';
import ContactFAQModal from './components/modals/ContactFAQModal';

export default function App() {
  // Active navigation tab
  const [activeTab, setActiveTab] = useState('home');
  const [selectedService, setSelectedService] = useState('');

  // Modal visibilities
  const [weDidOpen, setWeDidOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const handleNavTabChange = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'wedid') setWeDidOpen(true);
    else if (tabId === 'services') setServicesOpen(true);
    else if (tabId === 'about') setAboutOpen(true);
    else if (tabId === 'contact') setContactOpen(true);
    else if (tabId === 'home') {
      setWeDidOpen(false);
      setServicesOpen(false);
      setAboutOpen(false);
      setContactOpen(false);
    }
  };

  const handleOpenWeDid = () => {
    setWeDidOpen(true);
    setActiveTab('wedid');
  };

  const handleOpenQuote = () => {
    setContactOpen(true);
    setActiveTab('contact');
  };

  const handleExploreServices = () => {
    setServicesOpen(true);
    setActiveTab('services');
  };

  const handleSelectServiceFromModal = (serviceName) => {
    setSelectedService(serviceName);
    setServicesOpen(false);
    setContactOpen(true);
    setActiveTab('contact');
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#002241] text-foreground font-body select-none">
      {/* 1. Fullscreen Looping Background Video */}
      <VideoBackground
        isPlaying={true}
        isMuted={true}
      />

      {/* 2. Glassmorphic Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavTabChange}
        onOpenWeDid={handleOpenWeDid}
        onOpenQuote={handleOpenQuote}
      />

      {/* 3. Minimalist Hero Section with Freelancing Copy */}
      <main>
        <Hero
          onOpenQuote={handleOpenQuote}
          onOpenWeDid={handleOpenWeDid}
        />
      </main>

      {/* 4. Modals & Interactive Overlays */}
      <WeDidModal
        isOpen={weDidOpen}
        onClose={() => {
          setWeDidOpen(false);
          setActiveTab('home');
        }}
        onOpenContact={handleOpenQuote}
      />

      <ServicesModal
        isOpen={servicesOpen}
        onClose={() => {
          setServicesOpen(false);
          setActiveTab('home');
        }}
        onSelectService={handleSelectServiceFromModal}
      />

      <AboutModal
        isOpen={aboutOpen}
        onClose={() => {
          setAboutOpen(false);
          setActiveTab('home');
        }}
        onOpenServices={handleExploreServices}
        onOpenContact={handleOpenQuote}
      />

      <ContactFAQModal
        isOpen={contactOpen}
        initialService={selectedService}
        onClose={() => {
          setContactOpen(false);
          setActiveTab('home');
        }}
      />
    </div>
  );
}
