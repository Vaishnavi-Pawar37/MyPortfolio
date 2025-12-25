import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Cpu, Globe, MessageSquare, Lightbulb, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="text-emerald-400" size={24} />,
      skills: ["HTML","CSS","JavaScript","React.js", "Tailwind CSS"]
    },
    {
      title: "Backend",
      icon: <Database className="text-emerald-400" size={24} />,
      skills: ["Node.js","MySQL"]
    },
    {
      title: "Tools & Framework",
      icon: <Terminal className="text-emerald-400" size={24} />,
      skills: ["Git", "Bootstrap", "VS Code","Github"]
    },
    {
      title: "Soft Skills",
      icon: <Lightbulb className="text-emerald-400" size={24} />,
      skills: ["Problem Solving", "Team Leadership", "Communication", "Creativity", "Team work"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#05080a]">
      <div className="max-w-6xl mx-auto px-6">
        
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
              02. Expertise
            </span>
          </motion.div>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Technical Stack
          </h3>
        </div>

        {/* Skills Grid - Adjusted to grid-cols-2 for 4 items symmetry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 backdrop-blur-xl hover:border-emerald-500/30 transition-all group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-white">{category.title}</h4>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-slate-800/50 text-slate-300 text-xs font-mono rounded-xl border border-slate-700/50 hover:border-emerald-500/50 hover:text-emerald-400 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 p-6 rounded-[2rem]bg-gradient-to-rfrom-emerald-500/5 via-slate-900/40 to-transparent border border-slate-800 flex items-center justify-between"
        >
          <div className="flex items-center gap-4">
             <Cpu size={20} className="text-emerald-500" />
             <p className="text-slate-400 text-sm">Currently learning: <span className="text-white font-mono">Python</span></p>
          </div>
          <Globe size={18} className="text-slate-600 animate-spin-slow" />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;