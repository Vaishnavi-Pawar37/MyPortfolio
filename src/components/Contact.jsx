import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Connection Error:", error);
      setStatus('error');
    }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#05080a]">
      {/* 1. FIXED: Changed -z-0 to z-0 (Zero cannot be negative) */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full z-0" />

      <div className="max-w-6xl mx-auto relative z-10 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Left Side: Connect Card */}
          <div 
            data-aos="zoom-out"
            data-aos-duration="1000"
            /* 2. FIXED: Changed bg-gradient-to-br to bg-linear-to-br (Tailwind v4 standard) */
            className="lg:col-span-2 p-10 rounded-[2.5rem] bg-linear-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-4xl font-bold text-white mb-6">
                Let's build something <span className="text-emerald-400">great</span>.
              </h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                I'm currently looking for new opportunities. My inbox is always open for questions or just a friendly hello!
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-slate-900 rounded-2xl border border-slate-800">
                  <Mail className="text-emerald-400" size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Email Me</p>
                  <p className="font-medium">vaishnavipawar0520@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-slate-900 rounded-2xl border border-slate-800">
                  <MapPin className="text-emerald-400" size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Location</p>
                  <p className="font-medium">Solapur, Maharashtra.</p>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://www.linkedin.com/in/vaishnavi-pawar-11695a376?" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://github.com/Vaishnavi-Pawar37" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div 
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="lg:col-span-3 p-10 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 backdrop-blur-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest ml-1">Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest ml-1">Email</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500/50 transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <motion.button 
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-emerald-500 text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-emerald-400 transition-all disabled:opacity-50 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
              >
                {isSubmitting ? "Sending..." : <><Send size={18} /> Send Message</>}
              </motion.button>

              {/* Status Notifications */}
              {status === 'success' && (
                <p className="text-emerald-400 text-sm text-center font-mono uppercase tracking-tighter">
                   ✔ Message sent & saved to MySQL!
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center font-mono uppercase tracking-tighter">
                   ✘ Error: Is the Backend Running?
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;