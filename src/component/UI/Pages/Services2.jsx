/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const Services2 = () => {
  const nav = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState(null);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const servicesData = [
    {
      id: 1,
      title: "Business Analysis & Development",
      subtitle: "Management & Government Solutions",
      description: "Comprehensive business analysis and development services for management and government sectors. Transform complex requirements into actionable strategies.",
      longDescription: "I provide expert business analysis and development services tailored for management and government entities. From requirement gathering to process optimization, I help organizations achieve their strategic goals through data-driven decision making and efficient workflows.",
      category: "Business",
      icon: "🏛️",
      gradient: "from-blue-500 to-cyan-500",
      thumbnailGradient: "from-blue-400 to-blue-600",
      featured: true,
      status: "Active",
      stats: [
        { label: "Projects Completed", value: "25+" },
        { label: "Happy Clients", value: "20+" },
        { label: "Success Rate", value: "98%" }
      ],
      services: [
        "Requirements Analysis & Documentation",
        "Business Process Optimization",
        "Government Compliance & Regulations",
        "Stakeholder Management",
        "Strategic Planning",
        "Risk Assessment"
      ],
      deliverables: [
        "Business Requirements Document",
        "Process Flow Diagrams",
        "Feasibility Studies",
        "Impact Analysis Reports"
      ]
    },
    {
      id: 2,
      title: "Web Development & Portfolios",
      subtitle: "Startup & Organizational Solutions",
      description: "Professional web development services for startups and organizations. Build modern, responsive websites and portfolios that drive engagement.",
      longDescription: "I specialize in creating high-performance web applications and stunning portfolios for startups and established organizations. Using cutting-edge technologies, I deliver solutions that are fast, secure, and scalable to help you establish a strong online presence.",
      category: "Development",
      icon: "🌐",
      gradient: "from-purple-500 to-pink-500",
      thumbnailGradient: "from-purple-400 to-purple-600",
      featured: true,
      status: "Active",
      stats: [
        { label: "Websites Built", value: "35+" },
        { label: "Startups Helped", value: "15+" },
        { label: "Avg Load Time", value: "<2s" }
      ],
      services: [
        "Custom Website Development",
        "Portfolio Design & Development",
        "Startup MVP Development",
        "E-commerce Solutions",
        "CMS Integration",
        "Performance Optimization"
      ],
      deliverables: [
        "Fully Responsive Website",
        "Source Code & Documentation",
        "SEO Optimization",
        "Analytics Integration"
      ]
    },
    {
      id: 3,
      title: "Data Analysis & Power BI",
      subtitle: "Monthly & Annual Reporting",
      description: "Professional data analysis services using Excel, SQL, and Python. Create insightful Power BI dashboards and reports.",
      longDescription: "Transform raw data into actionable insights with my comprehensive data analysis services. I specialize in creating interactive Power BI dashboards, automated Excel reports, and data pipelines using SQL and Python. Perfect for monthly and annual reporting needs.",
      category: "Data",
      icon: "📊",
      gradient: "from-green-500 to-emerald-500",
      thumbnailGradient: "from-green-400 to-green-600",
      featured: true,
      status: "Active",
      stats: [
        { label: "Dashboards Created", value: "40+" },
        { label: "Data Processed", value: "1M+" },
        { label: "Reports Generated", value: "100+" }
      ],
      services: [
        "Power BI Dashboard Development",
        "SQL Database Management",
        "Python Data Analysis",
        "Excel Automation",
        "Monthly/Annual Report Generation",
        "Data Visualization"
      ],
      deliverables: [
        "Interactive Dashboards",
        "Automated Reports",
        "Data Cleaning Scripts",
        "Performance Metrics"
      ]
    }
  ];

  const categories = ["All", ...new Set(servicesData.map((s) => s.category))];

  const filteredServices = useMemo(() => {
    let result = [...servicesData];

    if (activeFilter !== "All") {
      result = result.filter((s) => s.category === activeFilter);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((s) => {
        const inTitle = s.title.toLowerCase().includes(q);
        const inDesc = s.description.toLowerCase().includes(q);
        const inServices = s.services.join(" ").toLowerCase().includes(q);
        return inTitle || inDesc || inServices;
      });
    }

    return result;
  }, [activeFilter, searchQuery, servicesData]);

  const handleContactMe = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
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
      y: -12,
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

  return (
    <section
      id="services"
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
          <motion.div className="text-center mb-10 md:mb-14" variants={itemVariants}>
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
                Professional Services
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              variants={itemVariants}
            >
              What I{" "}
              <span className="text-orange-500 dark:text-orange-400">
                Offer
              </span>
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4"
              variants={itemVariants}
            >
              Comprehensive solutions for business analysis, web development, 
              and data analytics to help you achieve your goals.
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
                  placeholder="Search services..."
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

          {/* Services Grid */}
          <motion.div
            className="grid gap-6 md:gap-8 lg:gap-8 md:grid-cols-2 lg:grid-cols-3"
            layout
          >
            <AnimatePresence>
              {filteredServices.map((service, idx) => (
                <motion.article
                  key={service.id}
                  className="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer"
                  variants={cardVariants}
                  layout
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover="hover"
                  onClick={() => setSelectedService(service)}
                >
                  {/* Modern Thumbnail */}
                  <div className="relative h-48 overflow-hidden">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.thumbnailGradient} opacity-90`} />
                    
                    {/* Animated Pattern Overlay */}
                    <div className="absolute inset-0 opacity-20">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                          <pattern id={`grid-${service.id}`} patternUnits="userSpaceOnUse" width="10" height="10">
                            <circle cx="2" cy="2" r="1" fill="white" />
                          </pattern>
                        </defs>
                        <rect width="100" height="100" fill={`url(#grid-${service.id})`} />
                      </svg>
                    </div>

                    {/* Floating Icon */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                    >
                      <motion.div
                        className="text-7xl"
                        animate={{ 
                          y: [0, -10, 0],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: idx * 0.5
                        }}
                      >
                        {service.icon}
                      </motion.div>
                    </motion.div>

                    {/* Floating Particles */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                        initial={{ 
                          x: Math.random() * 100, 
                          y: Math.random() * 100,
                          scale: 0
                        }}
                        animate={{ 
                          y: [null, -20, -40],
                          opacity: [0, 0.8, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                          ease: "easeOut"
                        }}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                      />
                    ))}

                    {/* Status Badge */}
                    <motion.div
                      className="absolute top-4 right-4 z-10"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-green-500 text-white shadow-lg backdrop-blur-sm">
                        {service.status}
                      </span>
                    </motion.div>

                    {/* Featured Badge */}
                    {service.featured && (
                      <motion.div
                        className="absolute top-4 left-4 z-10"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-orange-500 text-white shadow-lg backdrop-blur-sm flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          Featured
                        </span>
                      </motion.div>
                    )}

                    {/* Overlay Gradient on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      whileHover={{ opacity: 1 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <motion.span
                        className="text-xs font-medium text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded"
                        whileHover={{ scale: 1.05 }}
                      >
                        {service.category}
                      </motion.span>
                    </div>

                    <motion.h3
                      className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors duration-300 line-clamp-1"
                      whileHover={{ x: 2 }}
                    >
                      {service.title}
                    </motion.h3>

                    <p className="text-sm text-orange-600 dark:text-orange-400 mb-3 font-medium">
                      {service.subtitle}
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Stats Section */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {service.stats.map((stat, i) => (
                        <motion.div
                          key={i}
                          className="text-center p-2 rounded-lg bg-gray-50 dark:bg-gray-800"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="text-sm font-bold text-orange-500">{stat.value}</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Key Services Tags */}
                    <motion.div className="flex flex-wrap gap-2 mb-4" layout>
                      {service.services.slice(0, 2).map((item, i) => (
                        <motion.span
                          key={`${service.id}-${item}-${i}`}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-default"
                          whileHover={{ scale: 1.05 }}
                        >
                          {item.length > 20 ? item.substring(0, 18) + "..." : item}
                        </motion.span>
                      ))}
                      {service.services.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md">
                          +{service.services.length - 2} more
                        </span>
                      )}
                    </motion.div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedService(service);
                        }}
                        className="text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors duration-300 flex items-center gap-2 group/link"
                        whileHover={{ x: 2 }}
                      >
                        Learn More
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
                        Service #{service.id}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div className="text-center mt-12 md:mt-16" variants={itemVariants}>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 max-w-3xl mx-auto">
              <motion.h3
                className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
                variants={itemVariants}
              >
                Ready to Transform Your Business?
              </motion.h3>
              <motion.p
                className="text-gray-600 dark:text-gray-400 mb-6 text-base md:text-lg"
                variants={itemVariants}
              >
                Let&apos;s discuss how my services can help you achieve your goals. 
                Get in touch for a free consultation.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={handleContactMe}
                  className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 text-sm md:text-base group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Schedule Consultation</span>
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View All Services</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-700"
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Gradient */}
              <div className={`relative h-40 bg-gradient-to-br ${selectedService.gradient} flex items-center justify-center rounded-t-2xl overflow-hidden`}>
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="modalGrid" patternUnits="userSpaceOnUse" width="20" height="20">
                        <rect width="20" height="20" fill="none" stroke="white" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#modalGrid)" />
                  </svg>
                </div>
                
                <motion.div
                  className="text-7xl relative z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {selectedService.icon}
                </motion.div>
              </div>

              <div className="p-6 md:p-8">
                {/* Header Info */}
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {selectedService.title}
                    </h3>
                    <p className="text-orange-600 dark:text-orange-400 font-medium mb-1">
                      {selectedService.subtitle}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Category: {selectedService.category} · Status: {selectedService.status}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {selectedService.longDescription}
                </p>

                {/* Stats Section */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {selectedService.stats.map((stat, i) => (
                    <div key={i} className="text-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800">
                      <div className="text-xl font-bold text-orange-500">{stat.value}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Services List */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    What I Offer
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedService.services.map((service, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                        {service}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Deliverables
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.deliverables.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 justify-end pt-4 border-t border-gray-200 dark:border-gray-700">
                  <motion.button
                    onClick={handleContactMe}
                    className="px-6 py-2.5 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Request this Service
                  </motion.button>
                  <motion.button
                    onClick={() => setSelectedService(null)}
                    className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services2;