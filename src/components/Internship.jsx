import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Clock } from 'lucide-react';

const Internship = () => {
  const experiences = [
    {
      company: "Shamgar Software Solution",
      role: "Web Programming Intern",
      duration: "13 Nov 2025 - Present", // Currently Pursuing
      location: "Remote",
      isPursuing: true,
      highlights: [
        "Working on MERN stack development for scalable web applications.",,
        "Collaborating with senior developers to implement real-time features and improve application functionality.",
        "Learning AWS Cloud fundamentals such as EC2, S3, IAM security, and SageMaker basics."
      ],
      skills: ["React", "Node.js", "Tailwind CSS", "JavaScript","HTML/CSS","MySQL","Bootstrap"]
    },
    {
      company: "CODETECH IT SOLUTION PVT .LTD",
      role: "Frontend Developer Intern",
      duration: "10 July 2025 - 10 Aug 2025", // Completed
      location: "Remote",
      isPursuing: false,
      highlights: [
       "Worked as a Frontend Developer Intern building responsive web pages using HTML, CSS, JavaScript, and React.",
       "Collaborated remotely with the team to fix UI issues and meet project deadlines.",
       "Gained practical experience in frontend development, responsive design, and basic SEO."
      ],
      skills: ["JavaScript", "HTML/CSS", "React","MySQL","Bootstrap"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#05080a] relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="h-[1px]w-8 bg-emerald-500"></div>
            <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest">
              04.Career Timeline
            </span>
          </motion.div>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Work Experience
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2 space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`p-8 md:p-10 rounded-[2.5rem] bg-slate-900/40 border transition-all duration-500 group relative overflow-hidden ${
                  exp.isPursuing ? 'border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.05)]' : 'border-slate-800'
                }`}
              >
                {/* Pursuing Badge */}
                {exp.isPursuing && (
                  <div className="absolute top-0 right-0 px-6 py-2 bg-emerald-500/10 border-b border-l border-emerald-500/20 rounded-bl-2xl">
                    <span className="flex items-center gap-2 text-emerald-400 text-[10px] font-mono uppercase tracking-tighter">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Currently Pursuing
                    </span>
                  </div>
                )}

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                  <div>
                    <h4 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {exp.role}
                    </h4>
                    <p className="text-emerald-500 font-medium text-lg flex items-center gap-2 mt-1">
                      <Briefcase size={18} /> {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col md:items-end text-sm font-mono text-slate-500 gap-2">
                    <span className={`flex items-center gap-2 px-3 py-1 rounded-full border ${
                      exp.isPursuing ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-slate-800/50 border-slate-700/50'
                    }`}>
                      <Calendar size={14} /> {exp.duration}
                    </span>
                    <span className="flex items-center gap-2 italic">
                      <MapPin size={14}/> {exp.location}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {exp.highlights.map((item, i) => (
                    <div key={i} className="flex gap-3 text-slate-400">
                      <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" />
                      <p className="text-sm md:text-base leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <span key={skill} className="px-4 py-1.5 bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono rounded-full group-hover:border-emerald-500/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column Bento Box: Professional Summary */}
          <div className="flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-gradient-to-brfrom-emerald-500/10 via-slate-900/40 to-transparent border border-emerald-500/20 flex flex-col items-center justify-center text-center h-fullmin-h-[350px]"
            >
              <div className="relative mb-6">
                 <Award className="text-emerald-400" size={48} />
                 <span className="absolute -top-1 -right-1 flex h-3 w-3">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                 </span>
              </div>
              
              <div className="flex gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">01</div>
                  <div className="text-[10px] text-slate-500 uppercase">Completed</div>
                </div>
                <div className="w-[1px]h-10 bg-slate-800 mt-2" />
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-500">01</div>
                  <div className="text-[10px] text-slate-500 uppercase">Ongoing</div>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed px-4">
                Actively applying industry standards and learning new architectural patterns in real-time environments.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 flex flex-col items-center justify-center text-center"
            >
              <Clock className="text-slate-500 mb-3" size={20} />
              <p className="text-white font-medium text-sm">Open to Roles</p>
              <p className="text-slate-500 text-[10px] mb-4 uppercase tracking-widest">Early 2026 Grad</p>
              <a href="#contact" className="w-full py-3 bg-emerald-500 text-black font-bold rounded-xl text-xs hover:bg-emerald-400 transition-all">
                Get in Touch
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Internship;