import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, BrainCircuit, Rocket, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">About Me</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A passionate AI & Data Science student blending analytical thinking with modern web development to build intelligent, interactive solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 rounded-3xl border border-white/10"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Rocket className="text-primary w-6 h-6" /> Professional Summary
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Hello! I'm Nathiya J, an AI & Data Science undergraduate passionate about building intelligent, impactful, and user-centric digital solutions.
              </p>
              <p>
               My journey in technology began with a curiosity about how software systems work and how data can be transformed into meaningful insights. Over time, this curiosity evolved into a strong interest in Artificial Intelligence, Data Science, Software Development, and Modern Web Technologies.
              </p>
              <p>
                I have developed a solid foundation in programming languages including C, C++, Java, and Python, while continuously expanding my expertise in React, TypeScript, Data Structures & Algorithms, and Full-Stack Development. I enjoy solving real-world problems through technology and creating applications that combine powerful functionality with exceptional user experiences.
              </p>
              <p>My goal is to become a versatile software engineer capable of developing intelligent systems that create meaningful impact. I am always eager to learn, collaborate, and take on new challenges that push me beyond my comfort zone.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Code, title: 'Frontend Dev', value: 'React, TS', color: 'text-blue-400', bg: 'bg-blue-400/10 border-blue-400/20' },
              { icon: BrainCircuit, title: 'MongoDB', value: 'MongoDB Atlas, Compass', color: 'text-purple-400', bg: 'bg-purple-400/10 border-purple-400/20' },
              { icon: Database, title: 'Data Science', value: 'Pandas, SQL', color: 'text-cyan-400', bg: 'bg-cyan-400/10 border-cyan-400/20' },
              { icon: Server, title: 'Backend Dev', value: 'Node, Java', color: 'text-green-400', bg: 'bg-green-400/10 border-green-400/20' },
            ].map((stat, idx) => (
              <div key={idx} className={`glass-card p-6 rounded-2xl border ${stat.bg} flex flex-col items-center justify-center text-center transition-transform hover:scale-105`}>
                <stat.icon className={`w-10 h-10 mb-4 ${stat.color}`} />
                <h3 className="text-white font-semibold mb-1">{stat.title}</h3>
                <span className="text-sm text-gray-400">{stat.value}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Learning Journey Timeline Horizontal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
            <Target className="text-accent w-6 h-6" /> Learning Journey
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {['C', 'C++', 'Java', 'Python', 'React', 'TypeScript', 'AI & Data Science'].map((tech, idx, arr) => (
              <React.Fragment key={tech}>
                <div className="glass-card px-4 py-2 rounded-full border border-white/10 font-mono text-sm text-gray-300 hover:text-white hover:border-primary transition-colors">
                  {tech}
                </div>
                {idx < arr.length - 1 && (
                  <div className="w-4 md:w-8 h-[2px] bg-gradient-to-r from-primary to-transparent opacity-50" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
