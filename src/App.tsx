'use client';

import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer, WhatsAppButton } from '@/components/footer';
import HomePage from '@/src/pages/HomePage';
import { AboutPage } from '@/src/pages/AboutPage';
import { ServicesPage } from '@/src/pages/ServicesPage';
import { ProjectsPage } from '@/src/pages/ProjectsPage';
import { TeamPage } from '@/src/pages/TeamPage';
import { ContactPage } from '@/src/pages/ContactPage';

export function App() {
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    // Initial path from window
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname || '/');

      const handlePopState = () => {
        setCurrentPath(window.location.pathname || '/');
      };

      window.addEventListener('popstate', handlePopState);
      return () => window.removeEventListener('popstate', handlePopState);
    }
  }, []);

  const navigate = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  // Route Resolver (Instant 0ms Client Side Rendering)
  const renderPage = () => {
    if (currentPath === '/about') return <AboutPage />;
    if (currentPath === '/services') return <ServicesPage />;
    if (currentPath === '/projects') return <ProjectsPage />;
    if (currentPath === '/team') return <TeamPage />;
    if (currentPath === '/contact') return <ContactPage />;
    return <HomePage />;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      <Navbar />
      <div className="flex-1">
        {renderPage()}
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
