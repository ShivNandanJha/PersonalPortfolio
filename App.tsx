import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import GalleryView from './components/GalleryView';
import ExperienceDetail from './components/ExperienceDetail';
import Lightbox from './components/Lightbox';
import { Project, Experience } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const navigateToGallery = (project: Project) => {
    setSelectedProject(project);
    setCurrentPage('gallery-detail');
  };

  const navigateToExperience = (experience: Experience) => {
    setSelectedExperience(experience);
    setCurrentPage('experience-detail');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero setCurrentPage={setCurrentPage} />;
      case 'projects':
        return <Projects navigateToGallery={navigateToGallery} />;
      case 'about':
        return <About navigateToExperience={navigateToExperience} />;
      case 'contact':
        return <Contact />;
      case 'gallery-detail':
        return selectedProject ? (
          <GalleryView 
            project={selectedProject} 
            setCurrentPage={setCurrentPage}
            openLightbox={setLightboxImage}
          />
        ) : null;
      case 'experience-detail':
        return selectedExperience ? (
          <ExperienceDetail 
            experience={selectedExperience} 
            setCurrentPage={setCurrentPage}
            openLightbox={setLightboxImage}
          />
        ) : null;
      default:
        return <Hero setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#020617] text-white font-sans">
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1 lg:ml-20">
        {renderPage()}
      </main>
      {lightboxImage && (
        <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
      )}
    </div>
  );
}

export default App;