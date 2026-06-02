import React, { useState, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code2 } from 'lucide-react';
import SkillsGalaxyScene from '../components/3d/SkillsGalaxyScene';
import { Skill } from '../types';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const handleSkillClick = useCallback((skill: Skill) => {
    setSelectedSkill(skill);
  }, []);

  const closePanel = useCallback(() => {
    setSelectedSkill(null);
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 cursor-move">
        <Canvas camera={{ position: [0, 5, 20], fov: 60 }}>
          <SkillsGalaxyScene onSkillClick={handleSkillClick} />
        </Canvas>
      </div>

      {/* Overlay Title */}
      <div className="absolute top-24 left-6 md:left-12 z-10 pointer-events-none">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-2">Skills Galaxy</h1>
        {/*<p className="text-gray-400 max-w-md">
          Explore my technical universe. Drag to rotate, scroll to zoom, click on a node to see details.
        </p>*/}
      </div>

      {/* Selected Skill Panel */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 bottom-0 w-full md:w-96 glass-card border-l border-white/10 z-20 flex flex-col pt-24 pb-8 px-6"
          >
            <button 
              onClick={closePanel}
              className="absolute top-24 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/20 rounded-lg border border-primary/50">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold neon-text-blue">{selectedSkill.name}</h2>
                <span className="text-accent text-sm font-semibold tracking-wider uppercase">{selectedSkill.category}</span>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300">Proficiency</span>
                <span className="text-primary font-bold">{selectedSkill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2.5">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${selectedSkill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="bg-gradient-to-r from-primary to-accent h-2.5 rounded-full"
                ></motion.div>
              </div>
            </div>
            
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-4 border-b border-white/10 pb-2">Experience</h3>
              <p className="text-gray-400 leading-relaxed">
                Extensive practical experience using {selectedSkill.name} in various academic and personal projects.
                Continuously learning and applying best practices to build robust solutions.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Skills;
