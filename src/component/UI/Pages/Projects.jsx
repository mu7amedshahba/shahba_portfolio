import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import projectsData from "../../../dataBase/projects.json";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { projects } = projectsData;
  const categories = ["All", ...new Set(projects.map(project => project.category))];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter((project) => project.category === activeFilter);

  const handleLiveDemo = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleGithub = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      y: -12,
      scale: 1.03,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-28 lg:py-36 bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-950 dark:to-orange-900/20 scroll-mt-20 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-6 h-6 bg-orange-400 rounded-full opacity-20"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-8 h-8 bg-blue-400 rounded-full opacity-15"
          animate={{
            y: [0, 30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-10 h-10 bg-purple-400 rounded-full opacity-10"
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header Section */}
          <motion.div
            className="text-center mb-16 md:mb-20"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-orange-200 dark:border-orange-400/30 shadow-lg mb-6"
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="w-3 h-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                animate={{
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="text-sm font-semibold text-orange-700 dark:text-orange-300 tracking-wide">
                CREATIVE PORTFOLIO
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600">Digital</span> Craft
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
              variants={itemVariants}
            >
              Where innovation meets execution. Each project tells a story of problem-solving, 
              clean code, and user-centric design.
            </motion.p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12 md:mb-16"
            variants={containerVariants}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-500 backdrop-blur-sm border ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-2xl shadow-orange-500/30 border-transparent"
                    : "bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-400 hover:scale-105"
                }`}
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid gap-8 md:gap-10 lg:gap-12 md:grid-cols-2 xl:grid-cols-3"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-500"
                  variants={cardVariants}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover="hover"
                >
                  {/* Project Image Container */}
                  <div className="relative h-60 overflow-hidden">
                    {project.image ? (
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                    ) : (
                      <motion.div
                        className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-5xl">{project.icon}</span>
                      </motion.div>
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Action Buttons */}
                    <motion.div
                      className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
                      initial={{ y: -20 }}
                      whileHover={{ y: 0 }}
                    >
                      <motion.button
                        onClick={() => handleLiveDemo(project.liveUrl)}
                        className="p-3 bg-white text-gray-900 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.button>
                      <motion.button
                        onClick={() => handleGithub(project.githubUrl)}
                        className="p-3 bg-white text-gray-900 rounded-xl hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </motion.button>
                    </motion.div>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {project.featured && (
                        <motion.span
                          className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          ⭐ Featured
                        </motion.span>
                      )}
                      <motion.span
                        className={`px-4 py-2 text-xs font-bold rounded-full shadow-lg backdrop-blur-sm ${
                          project.status === 'Completed' 
                            ? 'bg-green-500/20 text-green-300 border border-green-400/30'
                            : project.status === 'Live'
                            ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                            : 'bg-yellow-500/20 text-yellow-300 border border-yellow-400/30'
                        }`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {project.status}
                      </motion.span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    {/* Category */}
                    <motion.span
                      className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 text-orange-700 dark:text-orange-300 text-sm font-semibold rounded-full mb-4 border border-orange-200 dark:border-orange-400/30"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.category}
                    </motion.span>

                    {/* Title */}
                    <motion.h3
                      className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-base line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <motion.div className="flex flex-wrap gap-3 mb-6" layout>
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-default border border-gray-200 dark:border-gray-600"
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
                      <motion.button
                        onClick={() => handleLiveDemo(project.liveUrl)}
                        className="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-semibold flex items-center gap-2 group/link transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        Explore Project
                        <motion.svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </motion.button>
                      
                      <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        #{project.id.toString().padStart(2, '0')}
                      </div>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-20"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-br from-white/80 to-orange-50/80 dark:from-gray-800/80 dark:to-orange-900/20 rounded-3xl p-12 border border-orange-200 dark:border-orange-400/30 shadow-2xl backdrop-blur-sm max-w-4xl mx-auto">
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
                variants={itemVariants}
              >
                Ready to Create Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Extraordinary</span>?
              </motion.h3>
              <motion.p
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
                variants={itemVariants}
              >
                Let's transform your ideas into exceptional digital experiences. 
                Your vision, my expertise - together we'll build something remarkable.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                variants={itemVariants}
              >
                <motion.button
                  onClick={() => setActiveFilter("All")}
                  className="px-10 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl font-bold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-2xl hover:shadow-orange-500/30 border border-orange-400/30 flex items-center gap-3 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Explore All Work</span>
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.button>
                <motion.button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-2xl font-bold border border-gray-300 dark:border-gray-600 hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center gap-3 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Start Conversation</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;