import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Link, Mail, Code2, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = useCallback(() => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }, [formData]);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success state after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
    }
  }, [validate]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 md:px-12 bg-background relative overflow-hidden flex items-center">
      {/* Holographic background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-r from-primary/10 to-secondary/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Let's Connect</h1>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col gap-6">
            <a href="mailto:email@example.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
              <div className="w-12 h-12 glass-card rounded-full flex items-center justify-center border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                <Mail className="w-5 h-5 group-hover:text-primary transition-colors" />
              </div>
              <span className="text-lg">nathiya.j2024aids@sece.ac.in</span>
            </a>
            
            <div className="flex gap-4 mt-4">
              {[
                { icon: Code2, link: 'https://github.com', color: 'hover:text-white hover:border-white' },
                { icon: Link, link: 'https://linkedin.com', color: 'hover:text-blue-500 hover:border-blue-500' },
                { icon: Code2, link: 'https://leetcode.com', color: 'hover:text-orange-500 hover:border-orange-500' },
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className={`w-12 h-12 glass-card rounded-full flex items-center justify-center border border-white/10 transition-all text-gray-400 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden backdrop-blur-xl bg-background/40">
            {/* Holographic grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50" />
            
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm z-20 rounded-3xl"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  >
                    <CheckCircle2 className="w-20 h-20 text-green-500 mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">I will get back to you shortly.</p>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="space-y-1">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`block px-4 pb-3 pt-6 w-full text-sm text-white bg-transparent rounded-lg border-2 appearance-none focus:outline-none focus:ring-0 peer ${errors.name ? 'border-red-500' : 'border-gray-600 focus:border-primary'}`}
                    placeholder=" "
                  />
                  <label htmlFor="name" className={`absolute text-sm duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 ${errors.name ? 'text-red-500' : 'text-gray-400 peer-focus:text-primary'}`}>
                    Your Name
                  </label>
                </div>
                {errors.name && <p className="text-xs text-red-500 ml-1">{errors.name}</p>}
              </div>

              <div className="space-y-1">
                <div className="relative">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`block px-4 pb-3 pt-6 w-full text-sm text-white bg-transparent rounded-lg border-2 appearance-none focus:outline-none focus:ring-0 peer ${errors.email ? 'border-red-500' : 'border-gray-600 focus:border-primary'}`}
                    placeholder=" "
                  />
                  <label htmlFor="email" className={`absolute text-sm duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 ${errors.email ? 'text-red-500' : 'text-gray-400 peer-focus:text-primary'}`}>
                    Your Email
                  </label>
                </div>
                {errors.email && <p className="text-xs text-red-500 ml-1">{errors.email}</p>}
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="block px-4 pb-3 pt-6 w-full text-sm text-white bg-transparent rounded-lg border-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                />
                <label htmlFor="subject" className="absolute text-sm text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">
                  Subject (Optional)
                </label>
              </div>

              <div className="space-y-1">
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`block px-4 pb-3 pt-6 w-full text-sm text-white bg-transparent rounded-lg border-2 appearance-none focus:outline-none focus:ring-0 peer resize-none ${errors.message ? 'border-red-500' : 'border-gray-600 focus:border-primary'}`}
                    placeholder=" "
                  ></textarea>
                  <label htmlFor="message" className={`absolute text-sm duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 ${errors.message ? 'text-red-500' : 'text-gray-400 peer-focus:text-primary'}`}>
                    Your Message
                  </label>
                </div>
                {errors.message && <p className="text-xs text-red-500 ml-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-lg bg-primary hover:bg-primary/90 text-white font-bold transition-all disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span className="relative z-10">Send Message</span>
                    <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
