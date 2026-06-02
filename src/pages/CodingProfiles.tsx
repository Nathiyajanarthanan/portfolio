import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, GitCommit, Star, Target, Flame } from 'lucide-react';

const AnimatedCounter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);
      
      if (progress < 1) {
        setCount(Math.min(Math.floor(value * progress), value));
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    
    requestAnimationFrame(animate);
  }, [value, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const CodingProfiles = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-6 md:px-12 bg-background relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Coding Profiles</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A real-time dashboard of my coding journey, achievements, and open-source contributions.
          </p>
        </motion.div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* GitHub Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-primary/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Code2 className="w-32 h-32 text-primary" />
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/5 rounded-xl">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">GitHub Activity</h2>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-primary hover:underline text-sm">
                  @nathiyaj
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-background/50 p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <GitCommit className="w-4 h-4 text-primary" /> Commits (Year)
                </div>
                <div className="text-3xl font-bold text-white"><AnimatedCounter value={1420} /></div>
              </div>
              <div className="bg-background/50 p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Star className="w-4 h-4 text-accent" /> Stars Earned
                </div>
                <div className="text-3xl font-bold text-white"><AnimatedCounter value={45} /></div>
              </div>
              <div className="bg-background/50 p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Code2 className="w-4 h-4 text-secondary" /> Repositories
                </div>
                <div className="text-3xl font-bold text-white"><AnimatedCounter value={32} /></div>
              </div>
              <div className="bg-background/50 p-4 rounded-xl border border-white/5">
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <Flame className="w-4 h-4 text-orange-500" /> Longest Streak
                </div>
                <div className="text-3xl font-bold text-white"><AnimatedCounter value={28} /> days</div>
              </div>
            </div>
          </motion.div>

          {/* LeetCode Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden group hover:border-orange-500/50 transition-colors"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Code2 className="w-32 h-32 text-orange-500" />
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/5 rounded-xl">
                <Code2 className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">LeetCode Stats</h2>
                <a href="https://leetcode.com" target="_blank" rel="noreferrer" className="text-orange-500 hover:underline text-sm">
                  @nathiyaj
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between bg-background/50 p-4 rounded-xl border border-white/5">
                <div className="flex flex-col">
                  <span className="text-gray-400 mb-1">Problems Solved</span>
                  <span className="text-3xl font-bold text-white"><AnimatedCounter value={200} /></span>
                </div>
                <div className="w-24 h-24 rounded-full border-4 border-white/10 flex items-center justify-center relative">
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,161,22,0.2)" strokeWidth="8" />
                    <circle cx="50" cy="50" r="46" fill="none" stroke="#ffa116" strokeWidth="8" strokeDasharray="289" strokeDashoffset="100" />
                  </svg>
                  <span className="text-lg font-bold text-orange-500">Top 15%</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white/5 p-3 rounded-lg text-center border border-green-500/20">
                  <div className="text-green-500 font-semibold mb-1">Easy</div>
                  <div className="text-xl text-white font-bold"><AnimatedCounter value={110} /></div>
                </div>
                <div className="bg-white/5 p-3 rounded-lg text-center border border-yellow-500/20">
                  <div className="text-yellow-500 font-semibold mb-1">Medium</div>
                  <div className="text-xl text-white font-bold"><AnimatedCounter value={75} /></div>
                </div>
                <div className="bg-white/5 p-3 rounded-lg text-center border border-red-500/20">
                  <div className="text-red-500 font-semibold mb-1">Hard</div>
                  <div className="text-xl text-white font-bold"><AnimatedCounter value={15} /></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Section */}
       {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Trophy className="text-yellow-500" /> Notable Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {[
              { title: "Hackathon Winner", desc: "First place at National AI Hackathon 2025", icon: Trophy, color: "text-yellow-500" },
              { title: "Open Source Contributor", desc: "Merged 10+ PRs in popular React libraries", icon: GitCommit, color: "text-primary" },
              { title: "Top Rated Coder", desc: "Achieved Knight badge on LeetCode", icon: Target, color: "text-accent" },
            ].map((badge, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl flex flex-col items-center text-center border border-white/10 hover:border-white/30 transition-colors">
                <div className={`p-4 rounded-full bg-white/5 mb-4 ${badge.color}`}>
                  <badge.icon className="w-8 h-8" />
                </div>
                <h3 className="text-white font-bold mb-2">{badge.title}</h3>
                <p className="text-sm text-gray-400">{badge.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
*/}
      </div>
    </div>
  );
};
export default CodingProfiles;
