import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, School, BookOpen, CheckCircle2 } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      institution: "Brahmdevdada Mane Institute Of Technology, Solapur.",
      degree: "Bachelor of Technology in Computer Science Engineering",
      duration: "2024 - 2027",
      location: "Solapur, Maharashtra",
      score: "CGPA: 8.70/10",
      status: "Pursuing", // Status Flag
      icon: <GraduationCap size={28} />,
      details: [
        "Gaining hands-on experience in programming, web development, and database management.",
        "Worked on academic projects involving Python, HTML, CSS, JavaScript, and MySQL.",
        "Actively participating in technical workshops, seminars, and skill enhancement programs."
      ]
    },
    {
      institution: "Shri Siddheshwar Women's Polytechnic, Solapur.",
      degree: "Diploma in Computer Engineering.",
      duration: "2021 - 2024",
      location: "Solapur, Maharashtra",
      score: "Percentage: 78.40%",
      status: "Completed", // Status Flag
      icon: <School size={28} />,
      details: [
       "Achieved 78.40% overall with consistent academic performance throughout the diploma.",
       "Developed practical skills in software development, databases, and computer networks.",
       "Completed multiple mini-projects and one major academic project."
      ]
    },
    {
      institution: "Shri D V Dhepe English Medium School, Bale.",
      degree: "Secondary School Certificate (SSC)",
      duration: "2020 - 2021",
      location: "Solapur, Maharashtra",
      score: "Percentage: 87.60%",
      status: "Completed", // Status Flag
      icon: <BookOpen size={28} />,
      details: [
        "Focused on Mathematics and Sciences.",
        "Monitor of the 10th Class.",
        "Second Rank in 10th Class."
      ]
    }
  ];

  return (
    <section id="education" className="py-24 bg-[#05080a] relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
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
              01. Learning Path
            </span>
          </motion.div>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Education History
          </h3>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 md:p-10 rounded-[2.5rem] bg-slate-900/40 border backdrop-blur-xl transition-all duration-500 group relative overflow-hidden ${
                edu.status === "Pursuing" ? "border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.05)]" : "border-slate-800"
              }`}
            >
              {/* Status Badge */}
              <div className="absolute top-0 right-0 px-6 py-2 bg-slate-800/50 border-b border-l border-slate-700/50 rounded-bl-2xl">
                {edu.status === "Pursuing" ? (
                  <span className="flex items-center gap-2 text-emerald-400 text-[10px] font-mono uppercase tracking-tighter">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Currently Pursuing
                  </span>
                ) : (
                  <span className="flex items-center gap-2 text-slate-500 text-[10px] font-mono uppercase tracking-tighter">
                    <CheckCircle2 size={10} />
                    Completed
                  </span>
                )}
              </div>

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 mt-4 md:mt-0">
                <div className="flex gap-5">
                  <div className={`mt-1 p-3 rounded-2xl border transition-colors ${
                    edu.status === "Pursuing" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" : "bg-slate-800/50 border-slate-700/50 text-slate-400"
                  }`}>
                    {edu.icon}
                  </div>
                  <div>
                    <h4 className={`text-2xl font-bold transition-colors ${
                      edu.status === "Pursuing" ? "text-white group-hover:text-emerald-400" : "text-slate-300"
                    }`}>
                      {edu.degree}
                    </h4>
                    <p className="text-emerald-500/80 font-medium text-lg mt-1">{edu.institution}</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:items-end text-sm font-mono text-slate-500 gap-2">
                  <span className="flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700/50">
                    <Calendar size={14} className="text-emerald-500"/> {edu.duration}
                  </span>
                  <span className="flex items-center gap-2 italic">
                    <MapPin size={14}/> {edu.location}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {edu.details.map((item, i) => (
                  <div key={i} className="flex gap-3 text-slate-400">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                    <p className="text-sm md:text-base leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>

              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold border ${
                edu.status === "Pursuing" 
                ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" 
                : "bg-slate-800/30 border-slate-700/30 text-slate-500"
              }`}>
                <Award size={18} />
                {edu.score}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;