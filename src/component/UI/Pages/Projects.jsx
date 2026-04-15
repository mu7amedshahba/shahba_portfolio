/* eslint-disable react-hooks/set-state-in-effect */
// src/component/UI/Pages/Projects.jsx
/* eslint-disable no-unused-vars */
import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate, useLocation } from "react-router-dom";
import projectsData from './../../../dataBase/projects.json';

const Projects = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const { projects, categories: allCategories } = projectsData;
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Handle filter from navigation state (coming from services page)
  useEffect(() => {
    if (location.state?.filter) {
      setActiveFilter(location.state.filter);
      // Scroll to projects section
      setTimeout(() => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      // Clear the state to prevent re-applying on refresh
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const categories = ["All", ...allCategories];

  const filteredProjects = useMemo(() => {
    let result = [...projects];

    if (activeFilter !== "All") {
      result = result.filter((p) => p.category === activeFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((p) => {
        const inTitle = p.title.toLowerCase().includes(q);
        const inDesc = p.description.toLowerCase().includes(q);
        const inTech = (p.tech || []).join(" ").toLowerCase().includes(q);
        return inTitle || inDesc || inTech;
      });
    }

    return result;
  }, [activeFilter, searchQuery, projects]);

  const handleLiveDemo = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleContactMe = () => {
    navigate("/contact");
  };

  const handleSelectedProject = (project) => {
    navigate(`/projects/${project.id}`, { state: { project } });
  };

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const filterButtonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: custom * 0.08,
      },
    }),
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.1 } },
  };

  const statusVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95, transition: { duration: 0.1 } },
  };

  return (
    <section
      id="projects"
      className="py-12 md:py-20 lg:py-28 bg-white dark:bg-gray-950 scroll-mt-20 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-5 md:left-10 w-32 h-32 bg-orange-100 dark:bg-orange-500/10 rounded-full blur-3xl opacity-40"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-5 md:right-10 w-40 h-40 bg-blue-100 dark:bg-blue-500/10 rounded-full blur-3xl opacity-30"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 5,
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
          {/* Header */}
          <motion.div
            className="text-center mb-10 md:mb-14"
            variants={itemVariants}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-400/20 mb-4 md:mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.span
                className="w-2 h-2 bg-orange-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
                Portfolio
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              variants={itemVariants}
            >
              Featured{" "}
              <span className="text-orange-500 dark:text-orange-400">
                Projects
              </span>
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed px-4"
              variants={itemVariants}
            >
              A showcase of innovative solutions built with modern technologies
              and best practices.
            </motion.p>
          </motion.div>

          {/* Filters + Search */}
          <motion.div
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 md:mb-10"
            variants={containerVariants}
          >
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-orange-500 hover:text-white"
                  }`}
                  variants={filterButtonVariants}
                  custom={index}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {category}
                </motion.button>
              ))}
            </div>

            <motion.div className="w-full md:w-72" variants={itemVariants}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by title, tech, description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 pl-10 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500/70"
                />
                <svg
                  className="absolute left-3 top-3 w-4 h-4 text-gray-400 dark:text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </motion.div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid gap-6 md:gap-8 lg:gap-8 md:grid-cols-2 xl:grid-cols-3"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  className="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer"
                  variants={cardVariants}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover="hover"
                  onClick={() => handleSelectedProject(project)}
                >
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    {project.image ? (
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                      />
                    ) : (
                      <motion.div
                        className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                      >
                        <span className="text-4xl">{project.icon}</span>
                      </motion.div>
                    )}

                    <div className="absolute inset-0 bg-black/20" />

                    {/* Featured Badge */}
                    {project.featured && (
                      <motion.div
                        className="absolute top-4 left-4"
                        variants={statusVariants}
                      >
                        <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full flex items-center gap-1 shadow-lg">
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Featured
                        </span>
                      </motion.div>
                    )}

                    {/* Status Badge */}
                    <motion.div
                      className="absolute top-4 right-4"
                      variants={statusVariants}
                    >
                      <span
                        className={`px-3 py-1 text-xs font-medium rounded-full shadow-lg ${
                          project.status === "Completed"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                            : project.status === "Live"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                        }`}
                      >
                        {project.status}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <motion.span
                        className="text-xs font-medium text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.category}
                      </motion.span>
                    </div>

                    <motion.h3
                      className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-1"
                      whileHover={{ x: 2 }}
                    >
                      {project.title}
                    </motion.h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed text-sm md:text-base">
                      {project.description}
                    </p>

                    <motion.div className="flex flex-wrap gap-2 mb-4" layout>
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <motion.span
                          key={`${project.id}-${tech}-${i}`}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-default"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </motion.div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLiveDemo(project.liveUrl);
                        }}
                        className="text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors duration-300 flex items-center gap-2 group/link"
                        whileHover={{ x: 2 }}
                      >
                        View Project
                        <motion.svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ x: [0, 4, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </motion.svg>
                      </motion.button>

                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Project #{project.id}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-12 md:mt-16"
            variants={itemVariants}
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
              <motion.h3
                className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                variants={itemVariants}
              >
                Ready to Bring Your Vision to Life?
              </motion.h3>
              <motion.p
                className="text-gray-600 dark:text-gray-400 mb-6 text-base md:text-lg"
                variants={itemVariants}
              >
                Let&apos;s collaborate to create something amazing. Get in touch
                to start your next project.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={handleContactMe}
                  className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 text-sm md:text-base group"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span>Contact Me</span>
                  <motion.svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </motion.button>
                <motion.button
                  onClick={() => setActiveFilter("All")}
                  className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-full font-semibold border border-gray-300 dark:border-gray-600 hover:bg-orange-500 hover:text-white transition-all duration-300 text-sm md:text-base"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span>Explore All Projects</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;