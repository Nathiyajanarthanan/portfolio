import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Code2, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import { projectsData } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = useMemo(() => projectsData.find(p => p.id === id), [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-white mb-4">Project Not Found</h2>
        <button onClick={() => navigate('/projects')} className="text-primary hover:underline">
          Return to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 md:px-12 bg-background relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <button 
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Projects
        </button>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-2xl overflow-hidden glass-card mb-12 border border-white/10">
            <img src={project.image} alt={project.title} className="w-full h-[400px] object-cover" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">{project.title}</h1>
              
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-semibold mb-4 text-white">Overview</h3>
                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  {project.description}
                </p>
                
                {project.features && (
                  <>
                    <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
                      <CheckCircle2 className="text-primary" /> Key Features
                    </h3>
                    <ul className="space-y-3 mb-8">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300 bg-white/5 p-4 rounded-lg border border-white/5">
                          <span className="w-2 h-2 mt-2 rounded-full bg-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {project.challenges && (
                  <>
                    <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
                      <AlertCircle className="text-secondary" /> Challenges Faced
                    </h3>
                    <ul className="space-y-3 mb-8">
                      {project.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300 bg-red-900/10 p-4 rounded-lg border border-red-500/20">
                          <span className="w-2 h-2 mt-2 rounded-full bg-secondary flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-white">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1.5 text-sm font-semibold bg-white/10 rounded-full text-accent">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="glass-card p-6 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-white">Links</h3>
                <div className="flex flex-col gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-white font-semibold"
                  >
                    <Code2 className="w-5 h-5" /> Source Code
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-primary hover:bg-primary/80 rounded-lg transition-colors text-white font-semibold shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  >
                    <ExternalLink className="w-5 h-5" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-6 text-white">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.screenshots.map((img, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden glass-card border border-white/10 group">
                    <img src={img} alt={`Screenshot ${idx + 1}`} className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
