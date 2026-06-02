import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Code2, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/projects';
import { Project } from '../types';

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group perspective"
    >
      <div className="relative transform-style-3d transition-transform duration-500 group-hover:rotate-x-12 group-hover:-rotate-y-12 glass-card rounded-2xl overflow-hidden h-full flex flex-col border border-white/10 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
        <div className="h-48 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        
        <div className="p-6 flex flex-col flex-grow relative z-20">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-gray-400 mb-4 line-clamp-3 text-sm">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.technologies.slice(0, 3).map(tech => (
              <span key={tech} className="px-2 py-1 text-xs font-semibold bg-white/5 border border-white/10 rounded-full text-accent">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 text-xs font-semibold bg-white/5 border border-white/10 rounded-full text-gray-500">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
            <div className="flex gap-3">
              <a href={project.github} target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-primary/20 rounded-full transition-colors text-gray-300 hover:text-white" aria-label="GitHub">
                <Code2 className="w-5 h-5" />
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-accent/20 rounded-full transition-colors text-gray-300 hover:text-white" aria-label="Live Demo">
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            
            <button 
              onClick={() => navigate(`/project/${project.id}`)}
              className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              Details <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Featured Projects</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my latest work in AI,  and Web Development.
            Hover over cards for 3D interactions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
