import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import projectsData from "../../../dataBase/projects.json";

const PowerBIProjects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { projects } = projectsData;
  
  
  const powerBIProjects = projects.filter(project => 
    project.category === 'Business Intelligence' || project.type === 'powerbi'
  );

  const categories = ['All', 'Sales', 'Financial', 'HR', 'Supply Chain', 'Operations'];

  const filteredProjects = activeFilter === 'All' 
    ? powerBIProjects 
    : powerBIProjects.filter(project => 
        project.title.toLowerCase().includes(activeFilter.toLowerCase()) ||
        project.description.toLowerCase().includes(activeFilter.toLowerCase())
      );

  const powerBISkills = [
    {
      category: "Data Modeling",
      skills: ["Star Schema Design", "DAX Formulas", "Relationship Management", "Data Transformation"]
    },
    {
      category: "Visualization",
      skills: ["Interactive Dashboards", "Custom Visuals", "Drill-through Reports", "Mobile Layouts"]
    },
    {
      category: "Analytics",
      skills: ["KPI Tracking", "Trend Analysis", "Forecasting", "Performance Metrics"]
    },
    {
      category: "Integration",
      skills: ["SQL Database", "Excel Integration", "REST APIs", "Real-time Data"]
    }
  ];

  const handlePreview = (project) => {
    setSelectedProject(project);
  };

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
    hidden: { opacity: 0, scale: 0.9, y: 30 },
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
      y: -15,
      scale: 1.03,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="powerbi" className="py-20 bg-slate-900 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
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
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="w-2 h-2 bg-yellow-500 rounded-full"
                animate={{
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="text-sm font-medium text-yellow-300">Business Intelligence</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              Power BI <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-amber-400">Dashboards</span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Interactive data visualization dashboards that transform complex business data 
              into actionable insights and strategic decisions.
            </motion.p>
          </motion.div>

          {/* Skills Overview */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={containerVariants}
          >
            {powerBISkills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 backdrop-blur-sm"
                variants={itemVariants}
                custom={index}
              >
                <h4 className="text-lg font-semibold text-yellow-400 mb-4">{skillGroup.category}</h4>
                <div className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            variants={containerVariants}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 backdrop-blur-sm border ${
                  activeFilter === category
                    ? 'bg-linear-to-r from-yellow-500 to-amber-500 text-white shadow-lg shadow-yellow-500/25 border-transparent'
                    : 'bg-slate-800/50 text-gray-400 border-slate-600 hover:bg-yellow-500/20 hover:text-yellow-300 hover:border-yellow-500/30'
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
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  className="group relative bg-slate-800/50 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl hover:shadow-3xl backdrop-blur-sm"
                  variants={cardVariants}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover="hover"
                  custom={index}
                >
                  {/* Project Image */}
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
                        className={`w-full h-full bg-linear-to-br ${project.gradient} flex items-center justify-center`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-5xl">{project.icon}</span>
                      </motion.div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      <motion.span
                        className="px-3 py-2 bg-yellow-500 text-slate-900 text-xs font-bold rounded-full shadow-lg flex items-center gap-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        📊 Power BI
                      </motion.span>
                      {project.featured && (
                        <motion.span
                          className="px-3 py-2 bg-amber-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-2"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          ⭐ Featured
                        </motion.span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <motion.div
                      className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      <motion.button
                        onClick={() => handlePreview(project)}
                        className="px-4 py-2 bg-white/90 text-slate-900 rounded-xl hover:bg-yellow-500 transition-all duration-300 font-semibold text-sm flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Preview
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <motion.span
                        className="text-xs font-medium text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20"
                        whileHover={{ scale: 1.05 }}
                      >
                        {project.category}
                      </motion.span>
                    </div>

                    <motion.h3
                      className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300 line-clamp-1"
                      whileHover={{ x: 2 }}
                    >
                      {project.title}
                    </motion.h3>

                    <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <motion.div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-lg border border-slate-600 hover:bg-yellow-500 hover:text-slate-900 transition-all duration-300 cursor-default"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* View Details */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-600">
                      <motion.button
                        onClick={() => handlePreview(project)}
                        className="text-yellow-400 hover:text-yellow-300 font-medium text-sm flex items-center gap-2 group/link transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        View Dashboard
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center mt-16"
            variants={itemVariants}
          >
            <div className="bg-slate-800/50 rounded-3xl p-12 border border-slate-700 backdrop-blur-sm max-w-4xl mx-auto">
              <motion.h3
                className="text-3xl font-bold text-white mb-6"
                variants={itemVariants}
              >
                Need Custom Business Intelligence Solutions?
              </motion.h3>
              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
                variants={itemVariants}
              >
                Let's transform your data into powerful insights with interactive dashboards and comprehensive analytics.
              </motion.p>
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-4 bg-linear-to-r from-yellow-500 to-amber-500 text-white rounded-2xl font-bold hover:from-yellow-600 hover:to-amber-600 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/30 border border-yellow-400/30 flex items-center gap-3 mx-auto"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Discuss Your BI Project</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-slate-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-slate-600"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-slate-700 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                <div className="grid gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-yellow-500/10 text-yellow-300 rounded-lg text-sm border border-yellow-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-400 mb-3">Key Features</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• Interactive data visualizations and filters</li>
                      <li>• Real-time data updates and refresh</li>
                      <li>• Mobile-responsive dashboard design</li>
                      <li>• Custom DAX calculations and measures</li>
                      <li>• Drill-through capabilities and tooltips</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-slate-700 flex justify-end gap-4">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2 bg-slate-700 text-white rounded-xl hover:bg-slate-600 transition-colors"
                >
                  Close
                </button>
                <button className="px-6 py-2 bg-linear-to-r from-yellow-500 to-amber-500 text-white rounded-xl hover:from-yellow-600 hover:to-amber-600 transition-all duration-300">
                  Request Demo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PowerBIProjects;