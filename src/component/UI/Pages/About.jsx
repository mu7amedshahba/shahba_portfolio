import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const profileData = {
    "name": "Mu7med Shahba",
    "title": "Business Analyst, Management Consultant & Full-Stack Developer",
    "short_bio": "I am a Business Analyst, Management Consultant, and Full-Stack Developer specializing in building strategies, optimizing operations, and developing digital solutions that help companies grow efficiently and sustainably.",
    "full_bio": [
      "I combine management consulting expertise with hands-on technical development to deliver complete solutions that improve business performance and accelerate digital transformation.",
      "With experience across multiple industries including real estate, financial services, technology, and corporate services, I help organizations design strategies, streamline operations, and build systems that scale.",
      "I work closely with founders, CEOs, and management teams to translate business needs into actionable plans, automated workflows, and modern software applications."
    ],
    "what_i_do": [
      "Management consulting, strategy building, and business analysis",
      "Process improvement, OKRs, KPIs, and performance systems",
      "PMO setup, governance, project tracking, and risk management",
      "Web and mobile app development using React, Node.js, and modern stacks",
      "UI/UX design for platforms, dashboards, and business systems",
      "Automation, digital transformation, and AI integrations",
      "Training in Lean Six Sigma, project management, and business analysis"
    ],
    "core_strengths": [
      "Ability to understand both business and technical sides",
      "Building scalable and modern digital solutions",
      "Strong analytical and strategic thinking",
      "Project management and operations optimization",
      "Creating workflows, dashboards, and performance systems",
      "Clear communication and problem-solving",
      "Delivering fast, reliable, and high-quality results"
    ],
    "skills": {
      "consulting": [
        "Strategic planning",
        "Business process optimization",
        "Market research",
        "OKR & KPI design",
        "Operational efficiency",
        "PMO setup",
        "Risk management"
      ],
      "technical": [
        "React.js, Next.js, Vite",
        "Node.js, Express.js",
        "MongoDB, SQL",
        "REST API design",
        "UI/UX design",
        "Automation & AI tools"
      ],
      "tools": [
        "Jira",
        "Notion",
        "Figma",
        "PowerBI",
        "Excel Modeling",
        "Trello",
        "GitHub"
      ]
    },
    "philosophy": "I believe the best solutions come from combining strategic clarity, operational discipline, and modern technology. My mission is to help businesses operate smarter—not harder.",
    "years_of_experience": 7,
    "languages": [
      "Arabic (Native)",
      "English (Fluent)"
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (custom) => ({
      width: `${custom}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.8
      }
    })
  };

  const stats = [
    { number: profileData.years_of_experience + "+", label: "Years Experience", icon: "💼" },
    { number: "50+", label: "Projects Delivered", icon: "🚀" },
    { number: "100%", label: "Client Satisfaction", icon: "⭐" },
    { number: "KSA", label: "Market Expertise", icon: "🌍" }
  ];

  const skillLevels = {
    "Strategic Planning": 95,
    "Business Analysis": 90,
    "Process Optimization": 88,
    "Fullstack Development": 85,
    "UI/UX Design": 80,
    "Project Management": 92
  };

  return (
    <section 
      id="about" 
      className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 bg-orange-100 dark:bg-orange-500/10 rounded-full blur-3xl"
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
          className="absolute bottom-10 right-10 w-40 h-40 bg-blue-100 dark:bg-blue-500/10 rounded-full blur-3xl"
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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-400/20 mb-6"
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
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">About Me</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              variants={itemVariants}
            >
              Strategic <span className="text-orange-500 dark:text-orange-400">Business & Technology</span> Leader
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              {profileData.short_bio}
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Profile & Story */}
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
            >
              {/* Profile Card */}
              <motion.div 
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="flex items-start gap-6 mb-6"
                  variants={itemVariants}
                >
                  <div className="w-16 h-16 bg-linear-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">👨‍💼</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {profileData.name}
                    </h3>
                    <p className="text-orange-500 dark:text-orange-400 font-semibold">
                      {profileData.title}
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed"
                  variants={containerVariants}
                >
                  {profileData.full_bio.map((paragraph, index) => (
                    <motion.p key={index} variants={itemVariants}>
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.div>

                {/* Philosophy */}
                <motion.div 
                  className="mt-6 p-4 bg-orange-50 dark:bg-orange-500/10 rounded-xl border border-orange-200 dark:border-orange-400/20"
                  variants={itemVariants}
                >
                  <p className="text-orange-800 dark:text-orange-300 text-sm italic text-center">
                    "{profileData.philosophy}"
                  </p>
                </motion.div>
              </motion.div>

              {/* Core Strengths */}
              <motion.div 
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3"
                  variants={itemVariants}
                >
                  <span className="text-2xl">💪</span>
                  Core Strengths
                </motion.h3>
                <div className="grid gap-3">
                  {profileData.core_strengths.map((strength, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-orange-50 dark:hover:bg-orange-500/10 transition-colors duration-300"
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{strength}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Skills & Stats */}
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
            >
              {/* Skills Progress */}
              <motion.div 
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3"
                  variants={itemVariants}
                >
                  <span className="text-2xl">📊</span>
                  Expertise Levels
                </motion.h3>
                <div className="space-y-6">
                  {Object.entries(skillLevels).map(([skill, level]) => (
                    <motion.div key={skill} variants={itemVariants}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                          {skill}
                        </span>
                        <span className="text-orange-500 dark:text-orange-400 font-bold text-sm">
                          {level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="bg-linear-to-r from-orange-500 to-amber-500 h-2 rounded-full"
                          variants={skillBarVariants}
                          custom={level}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Skills Categories */}
              <motion.div 
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.h3 
                  className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3"
                  variants={itemVariants}
                >
                  <span className="text-2xl">🛠️</span>
                  Skills & Tools
                </motion.h3>
                
                <div className="space-y-6">
                  {Object.entries(profileData.skills).map(([category, skills]) => (
                    <motion.div key={category} variants={itemVariants}>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 capitalize">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill, skillIndex) => (
                          <motion.span
                            key={skillIndex}
                            className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 cursor-default"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Stats Grid */}
              <motion.div 
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                    variants={statsVariants}
                    whileHover="hover"
                    custom={index}
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-orange-500 dark:text-orange-400 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* What I Do Section */}
          <motion.div 
            className="mt-16 bg-linear-to-r from-orange-50 to-amber-50 dark:from-orange-500/10 dark:to-amber-500/10 rounded-2xl p-8 border border-orange-200 dark:border-orange-400/20"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center"
              variants={itemVariants}
            >
              What I Do
            </motion.h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {profileData.what_i_do.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-orange-300 dark:hover:border-orange-500 transition-colors duration-300"
                  variants={itemVariants}
                  whileHover={{ x: 5, backgroundColor: "rgba(249, 115, 22, 0.05)" }}
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full shrink-0"></div>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Add missing variants
const statsVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: custom * 0.1
    }
  }),
  hover: {
    scale: 1.05,
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

export default About;