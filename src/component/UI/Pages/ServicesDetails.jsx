/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
// src/component/UI/Pages/ServicesDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import projectsData from '../../../dataBase/projects.json';

const ServicesDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  // Complete service data for each type
  const serviceDataMap = {
    "business-analysis": {
      id: 1,
      title: "Business Analysis & Development",
      subtitle: "Management & Government Solutions",
      category: "Business Analysis",
      filter: "Business Analysis",
      icon: "🏛️",
      gradient: "from-blue-500 to-cyan-500",
      thumbnailGradient: "from-blue-400 to-blue-600",
      heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      status: "Active",
      featured: true,
      stats: [
        { label: "Projects Completed", value: "25+", icon: "✅" },
        { label: "Happy Clients", value: "20+", icon: "😊" },
        { label: "Success Rate", value: "98%", icon: "📈" }
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
      ],
      tools: ["JIRA", "Confluence", "MS Visio", "Lucidchart", "Tableau", "Power BI"],
      description: "Comprehensive business analysis and development services for management and government sectors.",
      longDescription: "I provide expert business analysis and development services tailored for management and government entities. From requirement gathering to process optimization, I help organizations achieve their strategic goals through data-driven decision making and efficient workflows."
    },
    "web-development": {
      id: 2,
      title: "Web Development & Portfolios",
      subtitle: "Startup & Organizational Solutions",
      category: "Development",
      filter: "Fullstack",
      icon: "🌐",
      gradient: "from-purple-500 to-pink-500",
      thumbnailGradient: "from-purple-400 to-purple-600",
      heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1172&q=80",
      status: "Active",
      featured: true,
      stats: [
        { label: "Websites Built", value: "35+", icon: "🖥️" },
        { label: "Startups Helped", value: "15+", icon: "🚀" },
        { label: "Avg Load Time", value: "<2s", icon: "⚡" }
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
      ],
      tools: ["React", "Next.js", "Node.js", "Tailwind CSS", "Figma", "Vercel"],
      description: "Professional web development services for startups and organizations.",
      longDescription: "I specialize in creating high-performance web applications and stunning portfolios for startups and established organizations. Using cutting-edge technologies, I deliver solutions that are fast, secure, and scalable."
    },
    "data-analysis": {
      id: 3,
      title: "Data Analysis & Power BI",
      subtitle: "Monthly & Annual Reporting",
      category: "Data",
      filter: "Business Intelligence",
      icon: "📊",
      gradient: "from-green-500 to-emerald-500",
      thumbnailGradient: "from-green-400 to-green-600",
      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      status: "Active",
      featured: true,
      stats: [
        { label: "Dashboards Created", value: "40+", icon: "📉" },
        { label: "Data Processed", value: "1M+", icon: "💾" },
        { label: "Reports Generated", value: "100+", icon: "📋" }
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
      ],
      tools: ["Power BI", "SQL", "Python", "Excel", "Tableau", "Pandas"],
      description: "Professional data analysis services using Excel, SQL, and Python.",
      longDescription: "Transform raw data into actionable insights with my comprehensive data analysis services. I specialize in creating interactive Power BI dashboards, automated Excel reports, and data pipelines using SQL and Python."
    }
  };

  useEffect(() => {
    setLoading(true);
    const currentService = serviceDataMap[serviceId];
    
    if (currentService) {
      setService(currentService);

      const { projects } = projectsData;
      let filtered = [];
      
      if (serviceId === "business-analysis") {
        filtered = projects.filter(p => p.category === "Business Analysis");
      } else if (serviceId === "web-development") {
        filtered = projects.filter(p => p.category === "Fullstack" || p.category === "Frontend");
      } else if (serviceId === "data-analysis") {
        filtered = projects.filter(p => p.category === "Business Intelligence");
      }
      
      setRelatedProjects(filtered);
    }
    setLoading(false);
  }, [serviceId]);

  const handleViewProject = (project) => {
    navigate(`/projects/${project.id}`, { state: { project } });
  };

  const handleContactMe = () => {
    navigate("/contact");
  };

  const handleBackToServices = () => {
    navigate("/services");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { y: -8, scale: 1.02, transition: { duration: 0.3 } }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading service details...</p>
        </div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-8xl mb-6">🔍</div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Service Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The service you're looking for doesn't exist or has been moved.</p>
          <button
            onClick={handleBackToServices}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Browse All Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute top-20 left-10 w-72 h-72 bg-gradient-to-r ${service.gradient} rounded-full blur-3xl opacity-10`}
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={`absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r ${service.gradient} rounded-full blur-3xl opacity-10`}
          animate={{ scale: [1.2, 1, 1.2], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          {/* Back Button */}
          <motion.button
            onClick={handleBackToServices}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-all duration-300 group"
            whileHover={{ x: -5 }}
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Services
          </motion.button>

          {/* Hero Section with Image */}
          <motion.div className="relative rounded-3xl overflow-hidden mb-16 shadow-2xl" variants={itemVariants}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
            <img 
              src={service.heroImage} 
              alt={service.title}
              className="w-full h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
              <motion.div 
                className="text-8xl mb-6 bg-white/20 backdrop-blur-sm rounded-full p-6 inline-block"
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {service.icon}
              </motion.div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-orange-300 font-medium">
                {service.subtitle}
              </p>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div className="text-center mb-16 max-w-4xl mx-auto" variants={itemVariants}>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              {service.longDescription}
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16" variants={itemVariants}>
            {service.stats.map((stat, i) => (
              <motion.div 
                key={i} 
                className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-orange-500 mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tab Navigation */}
          <motion.div className="mb-12" variants={itemVariants}>
            <div className="flex flex-wrap justify-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-4">
              {["overview", "services", "deliverables", "tools"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 capitalize ${
                    activeTab === tab
                      ? `bg-gradient-to-r ${service.gradient} text-white shadow-lg`
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div className="mb-16" variants={itemVariants}>
            {activeTab === "overview" && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Choose This Service?</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    I bring extensive experience and a proven track record in delivering high-quality solutions 
                    that meet and exceed client expectations. My approach combines industry best practices with 
                    innovative thinking to solve complex challenges.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Approach</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    I follow a structured yet flexible methodology that ensures transparency, collaboration, 
                    and timely delivery. Every project is treated uniquely, with tailored solutions that align 
                    with your specific goals and constraints.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "services" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {service.services.map((item, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "deliverables" && (
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {service.deliverables.map((item, i) => (
                  <motion.span 
                    key={i} 
                    className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            )}

            {activeTab === "tools" && (
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {service.tools.map((tool, i) => (
                  <motion.span 
                    key={i} 
                    className={`px-6 py-3 rounded-full font-medium shadow-md transition-all duration-300 bg-gradient-to-r ${service.gradient} text-white`}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            )}
          </motion.div>

          {/* Related Projects Section */}
          <motion.div variants={itemVariants}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Related <span className="text-orange-500">Projects</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Explore my recent work in {service.title}
              </p>
            </div>

            {relatedProjects.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {relatedProjects.map((project) => (
                  <motion.article
                    key={project.id}
                    className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-500"
                    variants={cardVariants}
                    whileHover="hover"
                    onClick={() => handleViewProject(project)}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={project.image || project.screenshot} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-orange-500 text-white text-xs font-medium rounded-full flex items-center gap-1 shadow-lg">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            Featured
                          </span>
                        </div>
                      )}
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full shadow-lg ${
                          project.status === "Completed" 
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" 
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="inline-block text-xs font-medium text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30 px-3 py-1 rounded-full mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.tech && project.tech.slice(0, 3).map((tech, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <motion.div 
                className="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
                variants={itemVariants}
              >
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">No projects found for this service yet.</p>
                <button
                  onClick={handleBackToServices}
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Browse Other Services
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div className="text-center mt-20" variants={itemVariants}>
            <div className={`relative overflow-hidden rounded-3xl p-10 md:p-14 bg-gradient-to-r ${service.gradient}`}>
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="cta-pattern" patternUnits="userSpaceOnUse" width="20" height="20">
                      <circle cx="10" cy="10" r="2" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#cta-pattern)" />
                </svg>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Let's discuss how I can help you with {service.title.toLowerCase()}. 
                  Schedule a free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    onClick={handleContactMe}
                    className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Me Today
                  </motion.button>
                  <motion.button
                    onClick={handleBackToServices}
                    className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Other Services
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesDetails;