import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const projects = [
    {
      id: 1,
      title: "Tutora - Online Learning Platform",
      description: "A comprehensive online learning platform with course management, student progress tracking, and interactive learning features.",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      category: "Fullstack",
      status: "Live",
      featured: true,
      gradient: "from-blue-500 to-purple-600",
      icon: "🎓",
      liveUrl: "https://tutora-web.netlify.app/",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "BookStore - E-commerce Platform",
      description: "Modern e-book store with advanced search, user reviews, shopping cart, and secure payment integration.",
      tech: ["React", "CSS3", "JavaScript", "API Integration", "Responsive Design"],
      category: "Frontend",
      status: "Live",
      featured: true,
      gradient: "from-green-500 to-emerald-600",
      icon: "📚",
      liveUrl: "https://web-books-store99.netlify.app/",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management, secure payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      category: "Fullstack",
      status: "Completed",
      featured: true,
      gradient: "from-purple-500 to-blue-600",
      icon: "🛒",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team chat, and advanced analytics dashboard.",
      tech: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind", "Prisma"],
      category: "Web App",
      status: "Live",
      featured: false,
      gradient: "from-green-500 to-cyan-600",
      icon: "📊",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      description: "Mobile-first fitness application with personalized workout plans, progress tracking, and social features.",
      tech: ["React Native", "Firebase", "GraphQL", "Redux", "AWS"],
      category: "Mobile",
      status: "Completed",
      featured: true,
      gradient: "from-orange-500 to-red-500",
      icon: "💪",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "AI Content Generator",
      description: "AI-powered content creation platform with natural language processing and multi-language support.",
      tech: ["Python", "FastAPI", "React", "OpenAI", "Docker"],
      category: "AI/ML",
      status: "In Progress",
      featured: true,
      gradient: "from-indigo-500 to-purple-600",
      icon: "🤖",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 7,
      title: "Real Estate Platform",
      description: "Modern real estate marketplace with virtual tours, AI recommendations, and mortgage calculator.",
      tech: ["Vue.js", "Express", "MySQL", "Mapbox", "Cloudinary"],
      category: "Web App",
      status: "Live",
      featured: false,
      gradient: "from-teal-500 to-blue-500",
      icon: "🏠",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 8,
      title: "Crypto Portfolio Tracker",
      description: "Cryptocurrency portfolio tracker with real-time market data, alerts, and trading insights.",
      tech: ["TypeScript", "Node.js", "MongoDB", "WebSocket", "Chart.js"],
      category: "FinTech",
      status: "Completed",
      featured: true,
      gradient: "from-yellow-500 to-orange-500",
      icon: "💰",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];
  
  const categories = ["All", "Fullstack", "Frontend", "Web App", "Mobile", "AI/ML", "FinTech"];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleLiveDemo = (url) => {
    if (url && url !== "#") {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleGithub = (url) => {
    if (url && url !== "#") {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleViewAllProjects = () => {
    // Scroll to projects section or show all projects
    setActiveCategory("All");
  };

  const handleContactMe = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="projects" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.95)), url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-5 w-3 h-3 bg-orange-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/2 right-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-1/3 left-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-20 right-1/4 w-3 h-3 bg-green-400 rounded-full animate-bounce opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-white">Portfolio</span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Projects</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A showcase of innovative solutions built with modern technologies and best practices
          </motion.p>
        </div>

        {/* Category Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 border border-orange-400/30"
                  : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-orange-500/30 hover:border-orange-400"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden shadow-2xl shadow-black/30 hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-4"
              >
                {/* Project Header */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  {/* Pattern Overlay */}
                  <div className="absolute inset-0 bg-black/20"></div>
                  
                  {/* Project Icon */}
                  <div className="absolute top-6 left-6 text-3xl">
                    {project.icon}
                  </div>

                  {/* Badges */}
                  <div className="absolute top-6 right-6 flex flex-col gap-2">
                    {project.featured && (
                      <span className="px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full backdrop-blur-sm border border-orange-300/50">
                        ⭐ Featured
                      </span>
                    )}
                    <span className={`px-3 py-1 text-xs font-bold rounded-full backdrop-blur-sm border ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-300 border-green-400/50'
                        : project.status === 'Live'
                        ? 'bg-blue-500/20 text-blue-300 border-blue-400/50'
                        : 'bg-purple-500/20 text-purple-300 border-purple-400/50'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-orange-300 bg-orange-500/20 px-3 py-1 rounded-full border border-orange-400/30">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-lg border border-white/20 backdrop-blur-sm hover:bg-orange-500/30 hover:text-white transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <button className="text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors duration-300 flex items-center gap-2 group/link">
                      View Details
                      <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    
                    <div className="flex gap-3">
                      <motion.button 
                        onClick={() => handleLiveDemo(project.liveUrl)}
                        className="p-2 bg-white/10 rounded-lg border border-white/20 hover:bg-orange-500/30 hover:border-orange-400 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="Live Demo"
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.button>
                      <motion.button 
                        onClick={() => handleGithub(project.githubUrl)}
                        className="p-2 bg-white/10 rounded-lg border border-white/20 hover:bg-blue-500/30 hover:border-blue-400 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title="GitHub Repository"
                      >
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20 shadow-2xl shadow-black/30 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Bring Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Vision to Life</span>?
            </h3>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Let's collaborate to create something amazing. Explore my complete portfolio with detailed case studies, live demos, and client testimonials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                onClick={handleViewAllProjects}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-bold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/30 border border-orange-400/30 flex items-center gap-3 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Projects</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
              <motion.button 
                onClick={handleContactMe}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold border border-white/20 hover:bg-orange-500/30 hover:border-orange-400 transition-all duration-300 flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Contact Me</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;