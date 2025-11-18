import React from "react";

const Services = () => {
  const services = [
    {
      title: "React Development",
      description:
        "Building modern, responsive user interfaces with reusable components, clean architecture, and state management using React, Next.js, and TypeScript.",
      icon: "⚡",
      featured: true,
      gradient: "from-purple-500 to-blue-600",
      features: ["Component Library", "State Management", "Performance Optimization", "Testing"]
    },
    {
      title: "Backend API Development",
      description:
        "Designing and building robust RESTful & GraphQL APIs, microservices architecture, and serverless functions with Node.js, Express, and Python.",
      icon: "🔧",
      featured: true,
      gradient: "from-green-500 to-cyan-600",
      features: ["REST/GraphQL APIs", "Microservices", "Authentication", "API Documentation"]
    },
    {
      title: "Fullstack Applications",
      description:
        "End-to-end web applications with modern frontend frameworks, scalable backend architecture, and seamless deployment pipelines.",
      icon: "🚀",
      featured: false,
      gradient: "from-orange-500 to-amber-500",
      features: ["Fullstack Architecture", "Database Design", "DevOps", "CI/CD Pipelines"]
    },
    {
      title: "Database Design & Optimization",
      description:
        "SQL and NoSQL database architecture, query optimization, data modeling, and real-time database solutions for high-performance applications.",
      icon: "💾",
      featured: false,
      gradient: "from-indigo-500 to-purple-600",
      features: ["Database Design", "Query Optimization", "Data Modeling", "Real-time DB"]
    },
    {
      title: "Cloud Deployment & DevOps",
      description:
        "Cloud infrastructure setup, containerization with Docker, CI/CD pipelines, and scalable deployment on AWS, Vercel, and other platforms.",
      icon: "☁️",
      featured: false,
      gradient: "from-blue-500 to-cyan-500",
      features: ["AWS Services", "Docker", "CI/CD", "Serverless Architecture"]
    },
    {
      title: "Performance Optimization",
      description:
        "Application performance monitoring, code splitting, lazy loading, and optimization techniques to ensure lightning-fast user experiences.",
      icon: "⚡",
      featured: false,
      gradient: "from-red-500 to-pink-600",
      features: ["Performance Audit", "Code Splitting", "Caching", "Bundle Optimization"]
    },
    {
      title: "Technical Consulting",
      description:
        "Strategic technology guidance, architecture reviews, code audits, and mentorship to help teams build better software solutions.",
      icon: "🎯",
      featured: false,
      gradient: "from-teal-500 to-green-500",
      features: ["Architecture Review", "Code Audit", "Tech Strategy", "Team Mentorship"]
    },
    {
      title: "Maintenance & Support",
      description:
        "Ongoing application maintenance, bug fixes, feature updates, and 24/7 support to keep your applications running smoothly.",
      icon: "🛡️",
      featured: false,
      gradient: "from-gray-500 to-blue-500",
      features: ["Bug Fixes", "Feature Updates", "Security Patches", "24/7 Support"]
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.95)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-orange-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-400 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-green-400 rounded-full animate-bounce opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-white">Services</span>
          </div>

          <h2 className="text-5xl font-bold text-white mb-4">
            What I Can <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-400">Do For You</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive full-stack solutions tailored to your business needs, from concept and design 
            to deployment, scaling, and ongoing maintenance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group rounded-2xl p-8 transition-all duration-500 hover:-translate-y-4 overflow-hidden ${
                service.featured
                  ? "bg-linear-to-br from-orange-500 to-amber-500 border border-orange-400 shadow-2xl shadow-orange-500/30"
                  : "bg-white/10 backdrop-blur-md border border-white/20 hover:border-orange-400 shadow-lg hover:shadow-orange-500/20"
              }`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-length:20px_20px"></div>
              </div>

              {/* Service Icon */}
              <div className={`text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300 ${
                service.featured ? "text-white" : "text-orange-400"
              }`}>
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className={`text-xl font-bold mb-4 ${
                service.featured ? "text-white" : "text-white"
              }`}>
                {service.title}
              </h3>

              {/* Service Description */}
              <p className={`leading-relaxed mb-6 ${
                service.featured ? "text-white/90" : "text-gray-300"
              }`}>
                {service.description}
              </p>

              {/* Features List */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2 text-sm">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      service.featured ? "bg-white" : "bg-orange-400"
                    }`}></div>
                    <span className={service.featured ? "text-white/80" : "text-gray-400"}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Learn More Link */}
              <div className={`flex items-center gap-2 text-sm font-semibold ${
                service.featured ? "text-white/90" : "text-orange-400"
              } group-hover:gap-3 transition-all duration-300`}>
                <span>Learn more</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              {/* Hover Glow Effect */}
              {!service.featured && (
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 mb-12">
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "3+", label: "Years Experience" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-orange-400 transition-all duration-300 group">
              <div className="text-3xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20 shadow-2xl shadow-black/30 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-400">Start Your Project</span>?
            </h3>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Let's work together to bring your ideas to life using clean architecture, modern tech stacks, 
              and a strong focus on quality, performance, and user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-linear-to-r from-orange-500 to-amber-500 text-white rounded-full font-bold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/30 border border-orange-400/30 flex items-center gap-3">
                <span>Start a Project</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold border border-white/20 hover:bg-orange-500/30 hover:border-orange-400 transition-all duration-300 hover:scale-105 flex items-center gap-3">
                <span>View Case Studies</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;