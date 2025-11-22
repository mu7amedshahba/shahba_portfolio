/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import projectsData from "../../../dataBase/projects.json";
import { useNavigate } from "react-router-dom";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Projects = () => {
  const { projects } = projectsData;
  const nav = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfError, setPdfError] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories = ["All", ...new Set(projects.map((p) => p.category))];

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

  const handleGithub = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleViewAllProjects = () => {
    setActiveFilter("All");
    setSearchQuery("");
  };

  const handleContactMe = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  //
  const handleSelectedProject = (project) => {
    console.log(`to ${project.id}`);
    nav(`/projects/${project.id}`, { state: { project } });
  };

  // PDF handler functions
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPdfError(false);
  }

  function onDocumentLoadError(error) {
    console.error("Error loading PDF:", error);
    setPdfError(true);
  }

  function goToPreviousPage() {
    setPageNumber((prevPageNumber) => Math.max(1, prevPageNumber - 1));
  }

  function goToNextPage() {
    setPageNumber((prevPageNumber) => Math.min(numPages, prevPageNumber + 1));
  }

  // Reset PDF state when modal opens/closes
  React.useEffect(() => {
    if (selectedProject) {
      setPageNumber(1);
      setNumPages(null);
      setPdfError(false);
    }
  }, [selectedProject]);

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
              <input
                type="text"
                placeholder="Search by title, tech, description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500/70"
              />
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
                        className={`w-full h-full bg-linear-to-br ${project.gradient} flex items-center justify-center`}
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
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={`${project.id}-${tech}-${i}`}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-default"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
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
                Let&apos;s collaborate to create something amazing. Explore my
                complete portfolio and get in touch to start your next project.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={handleViewAllProjects}
                  className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 text-sm md:text-base group"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span>View All Projects</span>
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
                  onClick={handleContactMe}
                  className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-full font-semibold border border-gray-300 dark:border-gray-600 hover:bg-orange-500 hover:text-white transition-all duration-300 text-sm md:text-base"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span>Contact Me</span>
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal for project details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-700"
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {selectedProject.screenshot && (
                <div className="h-60 md:h-72 overflow-hidden rounded-t-2xl">
                  <img
                    src={selectedProject.screenshot}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Category: {selectedProject.category} · Status:{" "}
                      {selectedProject.status}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <span
                        key={`${selectedProject.id}-modal-${tech}-${i}`}
                        className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enhanced PDF Preview Section */}
                {selectedProject.reportPdf && (
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                        Project Report (PDF)
                      </h4>

                      {/* PDF Navigation Controls */}
                      {numPages && (
                        <div className="flex items-center gap-3">
                          <button
                            onClick={goToPreviousPage}
                            disabled={pageNumber <= 1}
                            className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                          >
                            Previous
                          </button>

                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Page {pageNumber} of {numPages}
                          </span>

                          <button
                            onClick={goToNextPage}
                            disabled={pageNumber >= numPages}
                            className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                          >
                            Next
                          </button>
                        </div>
                      )}
                    </div>

                    {/* PDF Viewer */}
                    <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
                      <Document
                        file={selectedProject.reportPdf}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={onDocumentLoadError}
                        loading={
                          <div className="flex flex-col items-center justify-center p-4">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500 mb-2"></div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Loading PDF...
                            </p>
                          </div>
                        }
                        error={
                          <div className="text-center p-4">
                            <div className="text-red-500 text-lg mb-2">⚠️</div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                              Failed to load PDF
                            </p>
                            <button
                              onClick={() =>
                                window.open(selectedProject.reportPdf, "_blank")
                              }
                              className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                            >
                              Open in new tab instead
                            </button>
                          </div>
                        }
                      >
                        <Page
                          pageNumber={pageNumber}
                          width={Math.min(600, window.innerWidth - 100)}
                          renderTextLayer={true}
                          renderAnnotationLayer={true}
                        />
                      </Document>
                    </div>

                    {/* PDF Actions */}
                    <div className="flex flex-wrap gap-3 justify-between items-center mt-3">
                      <button
                        onClick={() =>
                          window.open(
                            selectedProject.reportPdf,
                            "_blank",
                            "noopener,noreferrer"
                          )
                        }
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 3h7m0 0v7m0-7L10 14"
                          />
                        </svg>
                        Open report in new tab
                      </button>

                      {numPages && (
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {numPages} page{numPages !== 1 ? "s" : ""}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Case Study Section (for Power BI projects) */}
                {selectedProject.caseStudy && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
                      Case Study
                    </h4>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium text-gray-700 dark:text-gray-300">
                            Client:
                          </span>
                          <span className="ml-2 text-gray-600 dark:text-gray-400">
                            {selectedProject.caseStudy.client}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700 dark:text-gray-300">
                            Duration:
                          </span>
                          <span className="ml-2 text-gray-600 dark:text-gray-400">
                            {selectedProject.caseStudy.duration}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700 dark:text-gray-300">
                            Industry:
                          </span>
                          <span className="ml-2 text-gray-600 dark:text-gray-400">
                            {selectedProject.caseStudy.industry}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Challenge
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {selectedProject.caseStudy.challenge}
                        </p>
                      </div>

                      <div>
                        <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Solution
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {selectedProject.caseStudy.solution}
                        </p>
                      </div>

                      <div>
                        <h5 className="font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Results
                        </h5>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          {selectedProject.caseStudy.results.map(
                            (result, index) => (
                              <li key={index}>• {result}</li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-wrap gap-3 justify-end">
                  {/* Show More (details page) */}
                  {selectedProject.detailsUrl && (
                    <button
                      onClick={() =>
                        window.open(
                          selectedProject.detailsUrl,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                      className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-sm text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      Show More Details
                    </button>
                  )}

                  {/* GitHub */}
                  {selectedProject.githubUrl &&
                    selectedProject.githubUrl !== "#" && (
                      <button
                        onClick={() => handleGithub(selectedProject.githubUrl)}
                        className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-sm text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        View Source
                      </button>
                    )}

                  {/* Live Demo */}
                  {selectedProject.liveUrl &&
                    selectedProject.liveUrl !== "#" && (
                      <button
                        onClick={() => handleLiveDemo(selectedProject.liveUrl)}
                        className="px-4 py-2 rounded-full bg-orange-500 text-sm text-white font-semibold hover:bg-orange-600 transition-colors"
                      >
                        View Live Demo
                      </button>
                    )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
