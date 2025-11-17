// src/components/Hero.jsx
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import homeImg from '../../design/images/WhatsApp Image 2025-10-17 at 14.26.05_f031354f.jpg';

const Hero = () => {
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
      backgroundColor: "rgba(249, 115, 22, 1)",
      color: "#ffffff",
      borderColor: "rgba(249, 115, 22, 1)",
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
    <section 
      id="home" 
      className="min-h-screen w-full bg-white dark:bg-gray-950 flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 pb-8 sm:py-12 lg:py-32 relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-64 h-64 bg-linear-to-r from-orange-100 to-amber-100 dark:from-orange-500/10 dark:to-amber-500/10 rounded-full blur-3xl opacity-40"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-64 h-64 bg-linear-to-r from-blue-100 to-cyan-100 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-3xl opacity-30"
          animate={{
            opacity: [0.2, 0.4, 0.2],
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
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.3)_1px,transparent_1px)] bg-size:50px_50px]"></div>
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
            {/* Professional Badge */}
         

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
              
              {/* Subheading */}

                 <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-400/20 mb-2"
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
              <motion.p 
                className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-600 dark:text-gray-400 leading-relaxed"
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
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-gray-700 cursor-default"
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
                className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold bg-orange-500 text-white rounded-full border border-orange-500 flex items-center gap-2 group"
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
                className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400 flex items-center gap-2 group"
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
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-gray-500 dark:text-gray-500"
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
              className="absolute -inset-4 sm:-inset-6 lg:-inset-8 bg-linear-to-br from-orange-100 to-amber-100 dark:from-orange-500/20 dark:to-amber-500/20 rounded-3xl blur-2xl sm:blur-3xl opacity-40"
              animate={{
                opacity: [0.3, 0.5, 0.3],
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
              className="relative bg-white dark:bg-gray-900 rounded-2xl lg:rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl group"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(249, 115, 22, 0.25)"
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={homeImg}
                alt="Mu7med Shahba - Business & Technology Consultant"
                className="w-full h-auto object-cover aspect-square sm:aspect-video lg:aspect-square"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
              />
              
              {/* Professional Overlay */}
              <motion.div 
                className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-black/10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Profile Badge */}
              <motion.div 
                className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl p-3 border border-gray-200 dark:border-gray-700"
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
              className="absolute top-4 -right-4 sm:top-8 sm:-right-6 w-4 h-4 bg-purple-500 rounded-full"
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
            className="flex flex-col items-center text-gray-400 dark:text-gray-600 group"
            aria-label="Scroll to next section"
          >
            <span className="text-xs sm:text-sm mb-2 tracking-wide">DISCOVER SOLUTIONS</span>
            <div className="w-8 h-12 border-2 border-gray-300 dark:border-gray-700 rounded-full flex justify-center group-hover:border-orange-500 dark:group-hover:border-orange-500 transition-colors duration-300">
              <motion.div 
                className="w-1 h-3 bg-gray-300 dark:bg-gray-700 rounded-full mt-2 group-hover:bg-orange-500 transition-colors duration-300"
                variants={bounceVariants}
                animate="bounce"
              />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;