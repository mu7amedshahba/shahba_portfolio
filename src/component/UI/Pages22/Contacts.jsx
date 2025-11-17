import React, { useState } from "react";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const contactMethods = [
    {
      icon: "✉️",
      title: "Email",
      value: "hello@alexjohnson.com",
      link: "mailto:hello@alexjohnson.com",
      description: "Send me an email anytime"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      description: "Mon - Fri from 8am to 6pm"
    },
    {
      icon: "📍",
      title: "Location",
      value: "New York, NY",
      link: "#",
      description: "Available for remote work worldwide"
    },
    {
      icon: "💬",
      title: "Social",
      value: "LinkedIn / GitHub",
      link: "#",
      description: "Connect with me online"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: "💻",
      url: "https://github.com",
      color: "hover:bg-gray-500/20"
    },
    {
      name: "LinkedIn",
      icon: "💼",
      url: "https://linkedin.com",
      color: "hover:bg-blue-500/20"
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "https://twitter.com",
      color: "hover:bg-sky-500/20"
    },
    {
      name: "Discord",
      icon: "💬",
      url: "#",
      color: "hover:bg-purple-500/20"
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section 
      id="contact" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.95)), url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-white">Get In Touch</span>
          </div>
          
          <h2 className="text-5xl font-bold text-white mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Work Together</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Introduction Card */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl shadow-black/30">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Start a Conversation</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm always interested in new opportunities, exciting projects, and collaborating with 
                innovative teams. Whether you have a project in mind or just want to connect, 
                I'd love to hear from you.
              </p>
              
              {/* Response Time */}
              <div className="mt-6 p-4 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-xl border border-orange-400/30">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white text-sm font-medium">Typically replies within 2 hours</span>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  className="flex items-center gap-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-orange-400 hover:bg-orange-500/10 transition-all duration-300 group"
                >
                  <div className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-lg mb-1">{method.title}</h4>
                    <p className="text-orange-300 font-semibold mb-1">{method.value}</p>
                    <p className="text-gray-400 text-sm">{method.description}</p>
                  </div>
                  <svg 
                    className="w-5 h-5 text-gray-400 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <h4 className="text-white font-bold mb-4 text-center">Follow Me</h4>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white text-lg hover:scale-110 transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl shadow-black/30">
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-white font-medium">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:bg-white/10 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-white font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:bg-white/10 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-white font-medium">Your Message</label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and budget..."
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:bg-white/10 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/30 border border-orange-400/30 flex items-center justify-center gap-3"
              >
                <span>Send Message</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>

              {/* Privacy Note */}
              <p className="text-gray-400 text-sm text-center">
                Your information is secure and will never be shared with third parties.
              </p>
            </form>
          </div>
        </div>

        {/* Quick Response Banner */}
        <div className="mt-16 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-2xl p-8 border border-orange-400/30 text-center max-w-2xl mx-auto">
          <h4 className="text-white font-bold text-lg mb-2">Quick Response Guaranteed</h4>
          <p className="text-gray-300">
            I typically respond to all inquiries within 2-4 hours during business hours.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contacts;