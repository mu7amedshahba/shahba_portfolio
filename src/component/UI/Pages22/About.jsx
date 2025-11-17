import React from 'react';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
      icon: "🎨"
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "Python", "Django", "FastAPI"],
      icon: "⚙️"
    },
    {
      category: "Database",
      technologies: ["MongoDB", "PostgreSQL", "Redis", "MySQL"],
      icon: "🗄️"
    },
    {
      category: "Tools & Others",
      technologies: ["Git", "Docker", "AWS", "Vercel", "Firebase"],
      icon: "🛠️"
    }
  ];

  const stats = [
    { number: "3+", label: "Years Experience", icon: "🚀" },
    { number: "50+", label: "Projects Completed", icon: "💼" },
    { number: "100%", label: "Client Satisfaction", icon: "⭐" },
    { number: "24/7", label: "Support Available", icon: "🛡️" }
  ];

  return (
    <section 
      id="about" 
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
        <div className="absolute top-20 left-10 w-4 h-4 bg-orange-500 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-500 rounded-full animate-bounce opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-white rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-orange-400 rounded-full animate-bounce opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-white">About Me</span>
          </div>
          
          <h2 className="text-4xl font-bold text-white mb-4">
            Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Digital Excellence</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate fullstack developer with a focus on creating seamless user experiences 
            that drive results and exceed expectations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Journey Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl shadow-black/30 hover:shadow-orange-500/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg">👨‍💻</span>
                </div>
                <h3 className="text-2xl font-bold text-white">My Journey</h3>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Hello! I'm <span className="text-orange-300 font-semibold">Alex Johnson</span>, a passionate fullstack developer with over 3 years of experience 
                  in creating digital solutions that make a real difference.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I believe in the power of <span className="text-orange-300">clean code</span> and <span className="text-orange-300">thoughtful design</span>. Every project is an opportunity 
                  to solve problems creatively and deliver exceptional user experiences that drive business growth.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                  and staying at the forefront of web development trends.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-orange-500/10 transition-all duration-300 group hover:scale-105"
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-orange-400 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl shadow-black/30 hover:shadow-orange-500/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
            </div>
            
            <div className="space-y-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{skillGroup.icon}</span>
                    <h4 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors duration-300">
                      {skillGroup.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-white/10 text-white text-sm rounded-xl border border-white/20 backdrop-blur-sm hover:bg-orange-500/30 hover:border-orange-400 hover:scale-105 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-xl border border-orange-400/30">
              <p className="text-gray-300 text-sm text-center">
                Always learning and adapting to new technologies and methodologies
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/30 border border-orange-400/30">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;