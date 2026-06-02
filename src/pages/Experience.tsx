import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experienceData } from '../data/experience';

const Experience = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 md:px-12 bg-background relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Experience & Education</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey through academia and professional development in the world of technology.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2">
          {experienceData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`mb-12 relative w-full md:w-1/2 ${
                  isLeft ? 'md:pr-12 md:mr-auto' : 'md:pl-12 md:ml-auto'
                } pl-8 md:pl-${isLeft ? '0' : '12'}`}
              >
                {/* Timeline Node */}
                <div 
                  className={`absolute top-0 w-8 h-8 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10 
                    left-[-17px] md:left-auto ${isLeft ? 'md:-right-4' : 'md:-left-4'}`}
                >
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>

                {/* Content Card */}
                <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-accent uppercase tracking-wider">
                      {item.year}
                    </span>
                    {item.company?.includes('Academic') ? (
                      <GraduationCap className="w-5 h-5 text-gray-400" />
                    ) : (
                      <Briefcase className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <h4 className="text-sm font-semibold text-primary mb-4">{item.company}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
