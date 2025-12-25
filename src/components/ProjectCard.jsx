import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-slate-900/40 border border-slate-800 rounded-[2.5rem] overflow-hidden backdrop-blur-xl hover:border-emerald-500/50 transition-all duration-500"
    >
      {/* Image Section */}
      <div className="relative h-52 w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tfrom-[#05080a] via-[#05080a]/20 to-transparent opacity-80" />
        
        {/* Floating Github Link on Image */}
        <div className="absolute top-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <a 
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="p-3 bg-emerald-500 text-black rounded-full hover:bg-white transition-colors block"
          >
            <Github size={20} />
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-emerald-500/5 text-emerald-400 text-[10px] font-mono uppercase tracking-widest rounded-lg border border-emerald-500/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Details Link */}
        {/* <a 
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-white font-bold text-sm hover:text-emerald-400 transition-colors group/link"
        >
          View Case Study
          <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
        </a> */}
      </div>
    </motion.div>
  );
};

export default ProjectCard;