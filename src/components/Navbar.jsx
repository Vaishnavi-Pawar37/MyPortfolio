import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#05080a]/80 backdrop-blur-md border-b border-slate-900/50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter"
        >
          <span className="bg-linear-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            &lt;VP /&gt;
          </span>
        </motion.div>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative text-slate-400 font-mono text-xs uppercase tracking-widest hover:text-emerald-400 transition-colors"
              whileHover="hover"
            >
              {link.name}
              <motion.div
                className="absolute -bottom-2 left-0 h-px bg-emerald-400"
                initial={{ width: 0 }}
                variants={{ hover: { width: '100%' } }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.a>
          ))}
        </div>

        <motion.a
          href="Vaishnavi Pawar.pdf"
          target="_blank"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="hidden md:block px-5 py-2 border border-emerald-500/30 text-emerald-400 text-xs font-mono rounded-full hover:bg-emerald-500/10 transition-all cursor-pointer"
        >
          Resume.pdf
        </motion.a>
      </div>
    </nav>
  );
};

// THIS LINE IS THE FIX FOR YOUR ERROR:
export default Navbar;