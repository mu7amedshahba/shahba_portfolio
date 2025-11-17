import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contacts = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

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
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
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

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "mu7med.shahba.com",
      link: "mailto:mu7med.shahba.com",
      description: "Send me an email anytime"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      value: "+20 102 533 6737",
      link: "tel:+201025336737",
      description: "Available for calls and WhatsApp"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      value: "Cairo, Egypt",
      link: "#",
      description: "Available for remote work worldwide"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      url: "https://linkedin.com/in/mohamed-shahba99",
      color: "hover:bg-blue-600 hover:text-white"
    },
    {
      name: "GitHub",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      url: "https://github.com/yourname",
      color: "hover:bg-gray-900 hover:text-white"
    },
    {
      name: "Email",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      url: "mailto:mu7med.shahba.com",
      color: "hover:bg-orange-500 hover:text-white"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-12 md:py-20 lg:py-28 bg-white dark:bg-gray-950 scroll-mt-20 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-10 left-5 md:left-10 w-32 h-32 bg-orange-100 dark:bg-orange-500/10 rounded-full blur-3xl opacity-40"
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
          className="absolute bottom-10 right-5 md:right-10 w-40 h-40 bg-blue-100 dark:bg-blue-500/10 rounded-full blur-3xl opacity-30"
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
          {/* Header Section */}
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
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">Get In Touch</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              variants={itemVariants}
            >
              Let's <span className="text-orange-500 dark:text-orange-400">Work Together</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed px-4"
              variants={itemVariants}
            >
              Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Contact Information */}
            <motion.div 
              className="space-y-6 md:space-y-8"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">Get in touch</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
                  I'm always interested in new opportunities, whether it's a consulting project, 
                  development work, or just a friendly chat about technology and business strategy.
                </p>
              </motion.div>

              {/* Contact Methods */}
              <motion.div 
                className="space-y-4 md:space-y-6"
                variants={containerVariants}
              >
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.link}
                    className="flex items-start gap-4 p-4 md:p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-orange-500 dark:hover:border-orange-400 hover:shadow-lg transition-all duration-300 group"
                    variants={cardVariants}
                    whileHover="hover"
                  >
                    <motion.div 
                      className="p-3 rounded-lg bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {method.icon}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300 text-base md:text-lg">
                        {method.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm md:text-base">
                        {method.value}
                      </p>
                      <p className="text-gray-500 dark:text-gray-500 mt-1 text-xs md:text-sm">
                        {method.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">Follow me</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      className={`p-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 transition-all duration-300 ${social.color}`}
                      aria-label={social.name}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-800 shadow-lg"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.h3 
                className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                variants={itemVariants}
              >
                Send a message
              </motion.h3>
              <motion.p 
                className="text-gray-600 dark:text-gray-400 mb-6 md:mb-8 text-base md:text-lg"
                variants={itemVariants}
              >
                Fill out the form below and I'll get back to you within 24 hours.
              </motion.p>

              <motion.form 
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit}
                variants={containerVariants}
              >
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-sm md:text-base"
                      placeholder="John Doe"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-sm md:text-base"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 text-sm md:text-base"
                    placeholder="Project Inquiry"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300 resize-none text-sm md:text-base"
                    placeholder="Tell me about your project, timeline, and requirements..."
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full py-3 md:py-4 px-6 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 border border-orange-500 flex items-center justify-center gap-2 text-sm md:text-base group"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <span>Send Message</span>
                  <motion.svg 
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </motion.svg>
                </motion.button>
              </motion.form>
            </motion.div>
          </div>

          {/* Quick Contact CTA */}
          <motion.div 
            className="mt-12 md:mt-16 text-center"
            variants={itemVariants}
          >
            <div className="bg-linear-to-r from-orange-500 to-amber-500 rounded-2xl p-6 md:p-8 text-white">
              <motion.h3 
                className="text-xl md:text-2xl font-bold mb-3 md:mb-4"
                variants={itemVariants}
              >
                Need an immediate response?
              </motion.h3>
              <motion.p 
                className="text-orange-100 mb-4 md:mb-6 text-base md:text-lg"
                variants={itemVariants}
              >
                For urgent inquiries, feel free to call me directly.
              </motion.p>
              <motion.a
                href="tel:+201025336737"
                className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-white text-orange-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 text-sm md:text-base group"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+20 102 533 6737</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacts;