import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import Internship from './components/Internship';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import { projects } from './data';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-back', // Adds a slight "bounce" to the zoom/fade
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return (
    <div className="bg-[#05080a] min-h-screen text-white selection:bg-emerald-500/30 transition-colors duration-500">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6">
        
        {/* 01. HOME (Hero) */}
        <Hero />
        
        {/* 02. EDUCATION */}
        <div data-aos="fade-up">
          <Education />
        </div>

        {/* 03. SKILLS */}
        <div data-aos="fade-up">
          <Skills />
        </div>
        
        {/* 04. PROJECTS */}
        <section id="projects" className="py-24">
          <div className="mb-16" data-aos="fade-right">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px]w-8 bg-emerald-500"></div>
              <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest">03. Portfolio</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Featured Work</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div key={i} data-aos="zoom-in" data-aos-delay={i * 100}>
                <ProjectCard project={p} index={i} />
              </div>
            ))}
          </div>
        </section>

        {/* 05. EXPERIENCE (Internship) */}
        <div data-aos="fade-up">
          <Internship />
        </div>

        {/* 06. CERTIFICATES */}
        <div data-aos="fade-up">
          <Certificates />
        </div>

        {/* 07. CONTACT */}
        <div data-aos="fade-up">
          <Contact />
        </div>

      </main>

      <footer className="py-12 text-center border-t border-slate-900 bg-[#030507]">
        <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.3em]">
          Designed & Built by <span className="text-emerald-500">Vaishnavi Pawar</span>
        </p>
        <p className="text-slate-600 text-[10px] mt-2">© 2025 All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;