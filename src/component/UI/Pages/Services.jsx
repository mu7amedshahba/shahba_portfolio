import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import servicesData from '../../../dataBase/services.json';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const gradientColors = [
    "from-purple-500 to-blue-600",
    "from-green-500 to-cyan-600",
    "from-orange-500 to-amber-500",
    "from-indigo-500 to-purple-600",
    "from-blue-500 to-cyan-500",
    "from-red-500 to-pink-600",
    "from-teal-500 to-green-500"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const serviceItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      x: 5,
      transition: {
        duration: 0.2
      }
    }
  };

  const categorySwitchVariants = {
    enter: {
      opacity: 0,
      y: 20
    },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section 
      id="services" 
      className="py-12 md:py-20 bg-white dark:bg-gray-950 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-10 left-5 md:left-10 w-4 h-4 bg-orange-400 rounded-full opacity-60"
          animate={{
            y: [-10, 10, -10],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-20 right-5 md:right-20 w-6 h-6 bg-blue-400 rounded-full opacity-40"
          animate={{
            y: [-15, 15, -15],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-5 md:left-20 w-3 h-3 bg-purple-400 rounded-full opacity-50"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
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
            className="text-center mb-12 md:mb-16"
            variants={itemVariants}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-400/20 mb-4 md:mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.span 
                className="w-2 h-2 bg-orange-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Services</span>
            </motion.div>

            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              variants={itemVariants}
            >
              Comprehensive <span className="text-orange-500 dark:text-orange-400">Business Solutions</span>
            </motion.h2>

            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-4"
              variants={itemVariants}
            >
              End-to-end consulting and development services tailored to transform your business operations, 
              from strategic planning to technical implementation.
            </motion.p>
          </motion.div>

          {/* Mobile Category Selector */}
          <motion.div 
            className="lg:hidden mb-6"
            variants={itemVariants}
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-200 dark:border-gray-800 shadow-lg">
              <select 
                value={activeCategory}
                onChange={(e) => setActiveCategory(Number(e.target.value))}
                className="w-full bg-transparent text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 dark:focus:border-orange-400 text-sm"
              >
                {servicesData.map((category, index) => (
                  <option key={index} value={index} className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
                    {category.icon} {category.category}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Category Navigation - Desktop */}
            <motion.div 
              className="hidden lg:block lg:w-1/3 xl:w-1/4"
              variants={itemVariants}
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-xl sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Service Categories</h3>
                <div className="space-y-2">
                  {servicesData.map((category, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setActiveCategory(index)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-3 group ${
                        activeCategory === index
                          ? "bg-orange-50 dark:bg-orange-500/20 border border-orange-200 dark:border-orange-400/30 text-orange-700 dark:text-orange-300"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 border border-transparent"
                      }`}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <motion.span 
                        className="text-2xl"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {category.icon}
                      </motion.span>
                      <span className="font-medium text-sm flex-1 text-left">{category.category}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        activeCategory === index 
                          ? "bg-orange-500 text-white" 
                          : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                      }`}>
                        {category.items.length}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Services Content */}
            <div className="lg:w-2/3 xl:w-3/4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  variants={categorySwitchVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <motion.div 
                    className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-800 shadow-xl"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    {/* Category Header */}
                    <motion.div 
                      className="flex items-center gap-4 mb-6 md:mb-8"
                      variants={itemVariants}
                    >
                      <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${gradientColors[activeCategory]} rounded-2xl flex items-center justify-center text-2xl md:text-3xl text-white shadow-lg`}>
                        {servicesData[activeCategory].icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                          {servicesData[activeCategory].category}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                          {servicesData[activeCategory].items.length} specialized services
                        </p>
                      </div>
                    </motion.div>

                    {/* Services Grid */}
                    <motion.div 
                      className="grid gap-4 md:gap-6"
                      variants={containerVariants}
                    >
                      {servicesData[activeCategory].items.map((service, index) => (
                        <motion.div
                          key={index}
                          className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 md:p-6 border border-gray-200 dark:border-gray-700 hover:border-orange-300 dark:hover:border-orange-500 transition-all duration-300 group"
                          variants={serviceItemVariants}
                          whileHover="hover"
                        >
                          <div className="flex items-start gap-3 md:gap-4">
                            <motion.div 
                              className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl flex items-center justify-center border border-orange-300 dark:border-orange-500/50 group-hover:from-orange-500/30 group-hover:to-amber-500/30 transition-all duration-300 flex-shrink-0"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                              <span className="text-orange-500 dark:text-orange-400 text-sm md:text-lg">✓</span>
                            </motion.div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300 leading-tight">
                                {service.name}
                              </h4>
                              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Category Stats */}
                    <motion.div 
                      className="mt-6 md:mt-8 p-4 md:p-6 bg-orange-50 dark:bg-orange-500/10 rounded-xl border border-orange-200 dark:border-orange-400/20"
                      variants={itemVariants}
                    >
                      <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-between text-center">
                        {[
                          { value: servicesData[activeCategory].items.length, label: "Services" },
                          { value: "100%", label: "Satisfaction" },
                          { value: "24/7", label: "Support" },
                          { value: "KSA", label: "Experience" }
                        ].map((stat, index) => (
                          <motion.div 
                            key={index}
                            className="text-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="text-xl md:text-2xl font-bold text-orange-500 dark:text-orange-400 mb-1">
                              {stat.value}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400 text-xs md:text-sm">
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Quick Category Navigation */}
              <motion.div 
                className="mt-6"
                variants={itemVariants}
              >
                <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
                  {servicesData.map((category, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setActiveCategory(index)}
                      className={`flex-shrink-0 p-4 rounded-xl border transition-all duration-300 text-center group min-w-[120px] ${
                        activeCategory === index
                          ? "bg-gradient-to-br from-orange-500 to-amber-500 border-orange-400 text-white shadow-lg"
                          : "bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-orange-500 hover:text-white hover:border-orange-500"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div 
                        className="text-2xl mb-2"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {category.icon}
                      </motion.div>
                      <div className="text-xs font-medium leading-tight">
                        {category.category.split(' ')[0]}
                      </div>
                      <div className="text-xs opacity-70 mt-1">
                        {category.items.length}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-12 md:mt-16"
            variants={itemVariants}
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 lg:p-12 border border-gray-200 dark:border-gray-800 shadow-xl max-w-4xl mx-auto">
              <motion.h3 
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                variants={itemVariants}
              >
                Ready to <span className="text-orange-500 dark:text-orange-400">Transform Your Business</span>?
              </motion.h3>
              <motion.p 
                className="text-gray-600 dark:text-gray-400 mb-6 md:mb-8 text-base md:text-lg max-w-2xl mx-auto"
                variants={itemVariants}
              >
                Let's discuss how my comprehensive consulting and development services can drive growth, 
                efficiency, and innovation for your organization.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                variants={containerVariants}
              >
                <motion.button
                  className="px-6 py-3 md:px-8 md:py-4 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-all duration-300 border border-orange-500 flex items-center justify-center gap-3 text-sm md:text-base group"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span>Start a Project</span>
                  <motion.svg 
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </motion.button>
                <motion.button
                  className="px-6 py-3 md:px-8 md:py-4 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-bold hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 transition-all duration-300 flex items-center justify-center gap-3 text-sm md:text-base"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span>Download Catalog</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom CSS for horizontal scroll hiding */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

// Button variants
const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1
    }
  }
};

export default Services;