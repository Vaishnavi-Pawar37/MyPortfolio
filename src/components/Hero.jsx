import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 bg-[#05080a] overflow-hidden">
      {/* Background radial highlight */}
      {/* FIXED: Removed the extra space after the comma in radial-gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent z-0" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
        
        {/* BIG CARD: Introduction */}
        <div 
          data-aos="zoom-in-up"
          data-aos-duration="1200"
          className="lg:col-span-2 p-8 md:p-12 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 backdrop-blur-md flex flex-col justify-center hover:border-emerald-500/30 transition-all duration-500"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase">Open for collaboration</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Frontend<br />
            <span className="bg-linear-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
              Web Developer.
            </span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-xl mb-8 leading-relaxed font-light">
            I'm <span className="text-white font-medium">Vaishnavi Pawar</span>, seeking a challenging position as a
            Frontend Web Developer. I focus on clean code and even cleaner user interfaces.
          </p>
        </div>

        {/* IMAGE CARD: Portrait */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="1200"
          /* FIXED: Changed h-[400px] to h-100 per Tailwind suggestion */
          className="rounded-[2.5rem] overflow-hidden border border-slate-800 bg-slate-900/40 relative group h-100 lg:h-auto"
        >
          <img 
            src="/image.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover grayscale brightness-90 contrast-110 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#05080a] via-transparent to-transparent opacity-60" />
        </div>

        {/* SMALL CARD: Tech Stack */}
        <div 
          data-aos="flip-left"
          data-aos-delay="500"
          data-aos-duration="1000"
          className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 flex flex-col justify-between hover:bg-slate-800/60 transition-colors"
        >
          <h4 className="text-slate-500 font-bold uppercase text-xs tracking-[0.2em] mb-4">Core Stack</h4>
          <div className="flex flex-wrap gap-2">
            {['HTML', 'CSS', 'JavaScript', 'React.js'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* SMALL CARD: Experience */}
        <div 
          data-aos="zoom-in-right"
          data-aos-delay="700"
          data-aos-duration="1000"
          /* FIXED: Cleaned up the spacing and syntax to resolve the "'...' expected" error */
          className="lg:col-span-2 p-8 rounded-[2.5rem] bg-linear-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 flex items-center justify-between group hover:scale-[1.01] transition-transform duration-500"
        >
          <div>
            <h4 className="text-white text-2xl font-bold">Full Stack Solutions</h4>
            <p className="text-slate-400 font-light">Specialized in responsive & accessible websites.</p>
          </div>
          <div className="text-emerald-400 text-5xl font-black opacity-40 italic group-hover:opacity-100 transition-opacity">2025</div>
        </div>

      </div>
    </section>
  );
};

export default Hero;