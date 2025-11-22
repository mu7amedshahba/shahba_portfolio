/* eslint-disable no-unused-vars */
// import React from "react";
// import homeImg from "../../design/images/WhatsApp Image 2025-10-17 at 14.26.05_f031354f.jpg";

// const Hero = () => {
//   const scrollToSection = (sectionId) => {
//     const element = document.querySelector(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 relative overflow-hidden"
//       style={{
//         backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.9)), url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed",
//       }}
//     >
//       {/* Animated background overlay elements */}
//       <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-orange-500/5 animate-pulse"></div>

//       {/* Floating particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-float"></div>
//         <div
//           className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-float"
//           style={{ animationDelay: "1s" }}
//         ></div>
//         <div
//           className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white rounded-full animate-float"
//           style={{ animationDelay: "2s" }}
//         ></div>
//         <div
//           className="absolute top-1/2 right-1/4 w-1 h-1 bg-orange-300 rounded-full animate-float"
//           style={{ animationDelay: "1.5s" }}
//         ></div>
//       </div>

//       <div className="max-w-6xl mx-auto w-full relative z-10">
//         <div className="grid gap-12 lg:grid-cols-2 items-center">
//           {/* Text Content */}
//           <div className="space-y-6 text-center lg:text-left">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
//               <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//               <p className="text-sm uppercase tracking-widest text-white font-semibold">
//                 Fullstack Developer
//               </p>
//             </div>

//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
//               Hi, I'm{" "}
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
//                 Alex Johnson
//               </span>
//             </h1>

//             <p className="text-xl text-gray-200 leading-relaxed font-medium">
//               I build modern, fast, and beautiful web applications.
//             </p>

//             <p className="text-gray-300 max-w-xl leading-relaxed text-lg">
//               Specialized in{" "}
//               <span className="text-orange-300 font-semibold">React</span>,{" "}
//               <span className="text-orange-300 font-semibold">Node.js</span>,
//               and modern fullstack tooling. I care about clean code, smooth UX,
//               and pixel-perfect implementation.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <button
//                 onClick={() => scrollToSection("#projects")}
//                 className="px-8 py-4 text-base font-semibold bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/30 border border-orange-400/30"
//               >
//                 View My Projects
//               </button>

//               <button
//                 onClick={() => scrollToSection("#contact")}
//                 className="px-8 py-4 text-base font-semibold border-2 border-white/30 text-white rounded-full hover:border-orange-400 hover:bg-orange-500/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
//               >
//                 Contact Me
//               </button>
//             </div>

//             <div className="flex items-center justify-center lg:justify-start gap-3 pt-6 text-sm text-gray-300">
//               <span className="h-px w-12 bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
//               <span className="flex items-center gap-2">
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                 Available for remote & freelance work
//               </span>
//             </div>
//           </div>

//           {/* Profile Image Card */}
//           <div className="relative">
//             <div className="relative group">
//               {/* Main card with glass effect */}
//               <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl shadow-black/30">
//                 <div className="w-full h-100  bg-gradient-to-br from-orange-400/20 to-blue-400/20 rounded-2xl flex items-center justify-center relative overflow-hidden border border-white/10">
//                   {/* Subtle grid pattern */}
//                   <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

//                   {/* Profile content */}
//                   <div className="relative z-10 text-center">
//                     <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white/30 shadow-2xl">
//                       <svg
//                         className="w-16 h-16 text-white"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
//                       </svg>
//                     </div>
//                     <img src={homeImg} alt="" />
//                     <span className="text-white font-bold text-xl block">
//                       Alex Johnson
//                     </span>
//                     <p className="text-white/80 text-sm mt-2">
//                       Fullstack Developer
//                     </p>

//                     {/* Tech stack tags */}
//                     <div className="flex justify-center gap-2 mt-4">
//                       <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs backdrop-blur-sm">
//                         React
//                       </span>
//                       <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs backdrop-blur-sm">
//                         Node.js
//                       </span>
//                       <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs backdrop-blur-sm">
//                         TypeScript
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Glow effect */}
//               <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 -z-10"></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-20px) rotate(180deg);
//           }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;

import { motion } from 'framer-motion';
import { useState } from 'react';
import homeImg from "../../design/images/WhatsApp Image 2025-10-17 at 14.26.05_f031354f.jpg";

const Hero = () => {
  const [isDark, setIsDark] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    "Management Consulting",
    "HR & Organizational Development", 
    "Software Development",
    "Real Estate Advisory",
    "Corporate Documentation"
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    floatDelay: {
      y: [-15, 15, -15],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }
    }
  };

  const serviceTagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4
      }
    },
    hover: {
      scale: 1.05,
      backgroundColor: isDark ? "rgba(249, 115, 22, 1)" : "rgba(249, 115, 22, 1)",
      color: "#ffffff",
      borderColor: isDark ? "rgba(249, 115, 22, 1)" : "rgba(249, 115, 22, 1)",
      transition: {
        duration: 0.2
      }
    }
  };

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

  const scrollIndicatorVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 1.5
      }
    },
    hover: {
      color: "#f97316",
      transition: {
        duration: 0.2
      }
    }
  };

  const bounceVariants = {
    bounce: {
      y: [0, -8, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:scale-110 transition-transform"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>

      <section 
        id="home" 
        className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-orange-50 dark:bg-gradient-to-br dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 pb-8 sm:py-12 lg:py-32 relative overflow-hidden transition-colors duration-500"
      >
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs - Light theme optimized */}
          <motion.div 
            className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-orange-200 to-amber-200 dark:from-orange-500/10 dark:to-amber-500/10 rounded-full blur-3xl opacity-30 dark:opacity-40"
            animate={{
              opacity: [0.25, 0.35, 0.25],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-blue-200 to-cyan-200 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-3xl opacity-20 dark:opacity-30"
            animate={{
              opacity: [0.15, 0.25, 0.15],
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.3)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div 
            className="grid h-full gap-8 lg:gap-12 xl:gap-16 items-center lg:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left: Text content */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1 text-center lg:text-left">
              {/* Main Heading */}
              <motion.div 
                className="space-y-3 sm:space-y-4"
                variants={itemVariants}
              >
                <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight sm:leading-tight lg:leading-tight">
                  <motion.span 
                    className="block text-gray-900 dark:text-stone-100"
                    variants={itemVariants}
                  >
                    Hi, I'm{' '}
                  </motion.span>
                  <motion.span 
                    className="block text-orange-500 dark:text-orange-400"
                    variants={itemVariants}
                  >
                    Mu7med Shahba
                  </motion.span>
                </h1>
                
                {/* Professional Badge */}
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-300 dark:border-orange-400/20 mb-2"
                  variants={itemVariants}
                >
                  <motion.span 
                    className="w-2 h-2 bg-orange-500 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <span className="text-xs sm:text-sm uppercase tracking-widest text-orange-700 dark:text-orange-300 font-semibold">
                    Business & Technology Consultant
                  </span>
                </motion.div>

                {/* Subheading */}
                <motion.p 
                  className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-700 dark:text-gray-400 leading-relaxed"
                  variants={itemVariants}
                >
                  Transforming Businesses Through Technology & Strategy
                </motion.p>
              </motion.div>

              {/* Enhanced Description */}
              <motion.p 
                className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed sm:leading-loose"
                variants={itemVariants}
              >
                Fullstack Developer & Business Consultant specializing in digital transformation, 
                process optimization, and scalable software solutions. Bridging the gap between 
                business strategy and technical execution.
              </motion.p>

              {/* Service Highlights */}
              <motion.div 
                className="flex flex-wrap gap-2 justify-center lg:justify-start"
                variants={containerVariants}
              >
                {services.map((service, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-300 dark:border-gray-700 cursor-default shadow-sm"
                    variants={serviceTagVariants}
                    whileHover="hover"
                    custom={index}
                  >
                    {service}
                  </motion.span>
                ))}
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
                variants={containerVariants}
              >
                <motion.button
                  onClick={() => scrollToSection('services')}
                  className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold bg-orange-500 text-white rounded-full border border-orange-500 flex items-center gap-2 group shadow-lg shadow-orange-500/30"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span>Explore Services</span>
                  <motion.svg 
                    className="w-4 h-4"
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.button>
                
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 bg-white dark:bg-transparent rounded-full hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 flex items-center gap-2 group shadow-md"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span>Start Project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </motion.button>
              </motion.div>

              {/* Enhanced Availability */}
              <motion.div 
                className="flex items-center justify-center lg:justify-start gap-3 pt-2 sm:pt-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <span>Available for consulting & development projects</span>
                </div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-gray-600 dark:text-gray-500"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span>KSA Market Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Fullstack Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Business Strategy</span>
                </div>
              </motion.div>
            </div>

            {/* Right: Image */}
            <motion.div 
              className="order-1 lg:order-2 relative"
              variants={imageVariants}
              whileHover="hover"
            >
              {/* Enhanced Glow Effect */}
              <motion.div 
                className="absolute -inset-4 sm:-inset-6 lg:-inset-8 bg-gradient-to-br from-orange-200 to-amber-200 dark:from-orange-500/20 dark:to-amber-500/20 rounded-3xl blur-2xl sm:blur-3xl opacity-30 dark:opacity-40"
                animate={{
                  opacity: [0.25, 0.35, 0.25],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Enhanced Image Container */}
              <motion.div 
                className="relative bg-white dark:bg-gray-900 rounded-2xl lg:rounded-3xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 shadow-2xl group"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={homeImg}
                  alt="Mu7med Shahba - Business & Technology Consultant"
                  className="w-full h-auto object-cover aspect-square sm:aspect-[4/3] lg:aspect-square"
                />
                
                {/* Professional Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                
                {/* Profile Badge */}
                <motion.div 
                  className="absolute bottom-4 left-4 bg-white/95 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-3 border border-gray-200 dark:border-gray-700 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-gray-900 dark:text-white text-sm font-semibold">Mu7med Shahba</div>
                  <div className="text-orange-600 dark:text-orange-400 text-xs">Business Technology Consultant</div>
                </motion.div>
              </motion.div>

              {/* Enhanced Floating Elements */}
              <motion.div 
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 bg-orange-500 rounded-full shadow-lg"
                variants={floatingVariants}
                animate="float"
              />
              <motion.div 
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-5 h-5 bg-blue-500 rounded-full shadow-lg"
                variants={floatingVariants}
                animate="floatDelay"
              />
              <motion.div 
                className="absolute top-4 -right-4 sm:top-8 sm:-right-6 w-4 h-4 bg-purple-500 rounded-full shadow-md"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div 
            className="mt-12 sm:mt-16 lg:mt-20 flex justify-center"
            variants={scrollIndicatorVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <motion.button
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center text-gray-500 dark:text-gray-600 group"
              aria-label="Scroll to next section"
            >
              <span className="text-xs sm:text-sm mb-2 tracking-wide">DISCOVER SOLUTIONS</span>
              <div className="w-8 h-12 border-2 border-gray-400 dark:border-gray-700 rounded-full flex justify-center group-hover:border-orange-500 dark:group-hover:border-orange-500 transition-colors duration-300">
                <motion.div 
                  className="w-1 h-3 bg-gray-400 dark:bg-gray-700 rounded-full mt-2 group-hover:bg-orange-500 transition-colors duration-300"
                  variants={bounceVariants}
                  animate="bounce"
                />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;