/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../../../dataBase/projects.json";

const SingleProduct = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const projectId = Number(id);
  const [imageLoaded, setImageLoaded] = useState(false);
  //
  const { projects } = projectsData;
  //
  const project = useMemo(() => {
    if (location.state?.project) return location.state.project;
    return projects.find((p) => Number(p.id) === projectId);
  }, [location.state, projects, projectId]);

  const caseStudy = project?.caseStudy;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  //
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  //
  const slideInVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
        <motion.div
          className="text-center px-4 max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-500/25">
            <span className="text-3xl">🔍</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Project Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            The project you're looking for doesn't exist or may have been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.button
              onClick={() => navigate("/projects")}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse All Projects
            </motion.button>
            <motion.button
              onClick={() => navigate(-1)}
              className="px-8 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Go Back
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-100 to-amber-100 dark:from-orange-500/10 dark:to-amber-500/10 rounded-full blur-3xl opacity-40"
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
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-3xl opacity-30"
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate(-1)}
          className="group mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-300 dark:hover:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{ x: -5 }}
        >
          <motion.svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            whileHover={{ x: -2 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </motion.svg>
          <span className="font-medium">Back to Projects</span>
        </motion.button>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4">
            {/* Project Header */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <motion.span
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-500/20 dark:to-amber-500/20 border border-orange-200 dark:border-orange-400/30 text-orange-700 dark:text-orange-300 text-sm font-semibold mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                    Case Study · {project.category}
                  </motion.span>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    {project.title}
                  </h1>

                  <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
              </div>

              {caseStudy && (
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-600"
                  variants={itemVariants}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-lg">👤</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                      Client
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {caseStudy.client}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-lg">🏢</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                      Industry
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {caseStudy.industry}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-lg">⏱️</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                      Duration
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {caseStudy.duration}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Project Image */}
            {project.screenshot && (
              <motion.div variants={itemVariants} className="relative group">
                <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl">
                  <AnimatePresence>
                    {!imageLoaded && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <motion.img
                    src={project.screenshot}
                    alt={project.title}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                    onLoad={() => setImageLoaded(true)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: imageLoaded ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            )}

            {/* Content Sections */}
            <div className="space-y-8">
              {/* The Challenge */}
              {caseStudy?.challenge && (
                <motion.section
                  variants={slideInVariants}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-lg">⚡</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      The Challenge
                    </h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </motion.section>
              )}

              {/* Our Approach */}
              {caseStudy?.solution && (
                <motion.section
                  variants={slideInVariants}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-lg">💡</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      Our Approach
                    </h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
                    {caseStudy.solution}
                  </p>

                  {caseStudy.features && (
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-2xl p-6 border border-blue-200 dark:border-blue-400/30">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <span className="text-blue-500">✨</span>
                        Key Features Delivered
                      </h3>
                      <div className="grid gap-3">
                        {caseStudy.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-colors duration-300"
                            whileHover={{ x: 5 }}
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-700 dark:text-gray-300">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.section>
              )}

              {/* Results & Impact */}
              {caseStudy?.results && (
                <motion.section
                  variants={slideInVariants}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-lg">📈</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      Results & Impact
                    </h2>
                  </div>
                  <div className="grid gap-4">
                    {caseStudy.results.map((result, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-500/10 dark:to-emerald-500/10 border border-green-200 dark:border-green-400/30"
                        whileHover={{ scale: 1.02 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-lg">
                          {result}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* PDF Report */}
              {project.reportPdf && (
                <motion.section
                  variants={slideInVariants}
                  className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-500/10 dark:to-amber-500/10 rounded-3xl p-8 border border-orange-200 dark:border-orange-400/30 shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-lg">📄</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Detailed Report
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        Full project documentation and analysis
                      </p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() =>
                      window.open(
                        project.reportPdf,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    className="group inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-white dark:bg-gray-800 border border-orange-300 dark:border-orange-500 text-orange-600 dark:text-orange-400 font-semibold hover:bg-orange-50 dark:hover:bg-orange-500/10 transition-all duration-300 shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Visit the Live Site</span>
                    <motion.svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 3h7m0 0v7m0-7L10 14"
                      />
                    </motion.svg>
                  </motion.button>
                </motion.section>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-purple-500">🛠️</span>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech?.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="px-3 py-2 rounded-xl bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-500/10 dark:to-violet-500/10 border border-purple-200 dark:border-purple-400/30 text-purple-700 dark:text-purple-300 text-sm font-medium hover:from-purple-100 hover:to-violet-100 dark:hover:from-purple-500/20 dark:hover:to-violet-500/20 transition-all duration-300 cursor-default"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Project Info */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-blue-500">📋</span>
                Project Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-500/10 dark:to-cyan-500/10 border border-blue-200 dark:border-blue-400/30">
                  <span className="text-gray-600 dark:text-gray-400">
                    Status
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm">
                    {project.status}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-500/10 dark:to-amber-500/10 border border-orange-200 dark:border-orange-400/30">
                  <span className="text-gray-600 dark:text-gray-400">
                    Category
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Project Links */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-6 shadow-2xl shadow-orange-500/25"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span>🚀</span>
                Project Links
              </h3>
              <div className="space-y-3">
                {project.liveUrl && project.liveUrl !== "#" && (
                  <motion.button
                    onClick={() =>
                      window.open(
                        project.liveUrl,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white text-orange-600 font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>View Live Demo</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </motion.button>
                )}
                {project.githubUrl && project.githubUrl !== "#" && (
                  <motion.button
                    onClick={() =>
                      window.open(
                        project.githubUrl,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/20 text-white font-semibold hover:bg-white/30 border border-white/30 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Source Code</span>
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </motion.button>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SingleProduct;
