import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, Presentation } from 'lucide-react';

const Certificates = () => {
  // 1. DATA DEFINITIONS (Must be inside the component or imported)
  const certifications = [
    {
      title: "Unleashing Innovation: The Generative AI Revolution",
      issuer: "AWS | SheKnowsAI | Aspire For Her",
      date: "Dec 2024",
      image: "participant1.png",
      link: "#",
      icon: <Award className="text-emerald-400" size={24} />
    },
    {
      title: "SIDDHA-HACKATHON 2023",
      issuer: "Shri Siddheshwar Women's Polytechnic, Solapur",
      date: "Sep 2023",
      image: "participant2.png",
      link: "#",
      icon: <ShieldCheck className="text-emerald-400" size={24} />
    },
    {
      title: "TECHATHON 1.0 ",
      issuer: "N B Navale Sinhgad College of Engineering, Solapur",
      date: "Oct 2025",
      image: "participant3.png",
      link: "#",
      icon: <ShieldCheck className="text-emerald-400" size={24} />
    }
  ];

  const completions = [
    {
      title: "Introduction to Prompt Engineering with GitHub Copilot",
      issuer: "Microsoft | Simplilearn SkillUp",
      date: "Dec 2025",
      image: "compeletion1.png",
      link: "https://certificates.simplicdn.net/share/9629167_9778914_1766577401168.pdf"
    },
    {
      title: "Introduction to Generative AI Studio",
      provider: "Google Cloud | Simplilearn SkillUp",
      date: "Dec 2025",
      image: "compeletion2.png",
      link: "https://certificates.simplicdn.net/share/9609558_97789141766156889655.pdf"
    },
    {
      title: "Get Started with Databricks for Generative AI",
      issuer: "Databricks | Simplilearn SkillUp",
      date: "Dec 2025",
      image: "compeletion3.png",
      link: "https://certificates.simplicdn.net/share/9511991_97789141764861421798.pdf"
    }
  ];

  const workshops = [
    {
      title: "Solution Architecture Workshop",
      organizer: "Shamgar Software Solutions(AICTE Internship Partner)",
      date: "Nov 2025",
      image: "workshop1.png",
      icon: <Presentation className="text-cyan-400" size={24} />
    },
    {
      title: "Workshop on AI Tools and Industry Best Practices",
      organizer: "Shamgar Software Solutions(AICTE Internship Partner)",
      date: "Nov 2025",
      image: "workshop2.png",
      icon: <Presentation className="text-cyan-400" size={24} />
    }
  ];

  return (
    <section id="certificates" className="py-24 bg-[#05080a]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- 01. PROFESSIONAL --- */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-emerald-500"></div>
            <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest">01. Professional</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Participants Certifications</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              // target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-900/40 border border-slate-800 rounded-[2.5rem] overflow-hidden hover:border-emerald-500/50 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden bg-slate-800">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-80" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">{cert.icon}</div>
                  <span className="text-slate-500 font-mono text-[10px] uppercase tracking-wider">{cert.issuer}</span>
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-4">{cert.title}</h4>
                <div className="flex justify-between items-center text-[11px] font-mono text-slate-600">
                  <span>DATE: {cert.date}</span>
                  {/* <span className="text-emerald-500 font-bold uppercase">Verified</span> */}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* --- 02. COURSEWORK --- */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-amber-500"></div>
            <span className="text-amber-400 font-mono text-xs uppercase tracking-widest">02. Coursework</span>
          </div>
          <h3 className="text-3xl font-bold text-white tracking-tight">Completion Certificates</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
          {completions.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="p-3 rounded-2xl bg-slate-900/30 border border-slate-800 hover:border-amber-500/40 flex items-center gap-4 group transition-all"
            >
              <div className="w-16 h-16 rounded-xl overflow-hiddenflex-shrink-0 border border-slate-700 bg-slate-800">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=Cert"; }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h5 className="text-white font-bold text-sm truncate group-hover:text-amber-400 transition-colors">{item.title}</h5>
                <p className="text-slate-500 text-[10px] font-mono uppercase">{item.issuer || item.provider} • {item.date}</p>
              </div>
              <ExternalLink size={14} className="text-slate-600 mr-2 group-hover:text-amber-500 transition-colors" />
            </motion.a>
          ))}
        </div>

        {/* --- 03. WORKSHOPS --- */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-cyan-500"></div>
            <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest">03. Participation</span>
          </div>
          <h3 className="text-3xl font-bold text-white tracking-tight">Workshops & Bootcamps</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workshops.map((work, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hiddenrounded-[2rem] bg-slate-900/20 border border-slate-800/50 flex flex-col sm:flex-row hover:bg-slate-800/40 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="w-full sm:w-40 h-32 sm:h-auto overflow-hidden bg-slate-800flex-shrink-0">
                <img 
                   src={work.image} 
                   alt={work.title} 
                   className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
                   onError={(e) => { e.target.src = "https://via.placeholder.com/300?text=Workshop"; }}
                />
              </div>
              <div className="p-6 flex items-center gap-6 relative z-10">
                <div className="hidden lg:block p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 text-cyan-400 group-hover:rotate-12 transition-all">
                  {work.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{work.title}</h4>
                  <p className="text-slate-500 text-sm mt-1">{work.organizer}</p>
                  <p className="text-slate-600 font-mono text-[10px] mt-2 uppercase tracking-wider">{work.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;