import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    
    // Active section observer
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-900/95 border-b border-white/10 shadow-2xl shadow-black/30 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={(e) => handleSmoothScroll(e, "#home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/30">
              <span className="text-white font-bold text-sm">Mu7</span>
            </div>
            <span className="text-lg font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
              Mu7med <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Shahba</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`relative text-sm font-medium transition-all duration-300 group ${
                  activeSection === item.href.substring(1)
                    ? "text-orange-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-2 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400 transition-all duration-300 ${
                    activeSection === item.href.substring(1) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
                {/* Hover glow effect */}
                <span className="absolute inset-0 rounded-lg bg-orange-500/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 -z-10" />
              </a>
            ))}
            
            {/* CTA Button */}
            <button
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/30 border border-orange-400/30 flex items-center gap-2 group/cta"
            >
              <span>Let's Talk</span>
              <svg 
                className="w-4 h-4 transform group-hover/cta:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="lg:hidden p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-orange-500/30 hover:border-orange-400 transition-all duration-300"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <span
                className={`absolute w-4 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 top-3" : "-translate-y-1"
                }`}
              />
              <span
                className={`absolute w-4 h-0.5 bg-white transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute w-4 h-0.5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 top-3" : "translate-y-1"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen
              ? "max-h-96 opacity-100 border-t border-white/10"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`text-base font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "bg-orange-500/20 text-orange-400 border border-orange-400/30"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile CTA Button */}
            <button
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/30 border border-orange-400/30 flex items-center justify-center gap-2"
            >
              <span>Let's Talk</span>
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Background Blur Overlay for Mobile */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 mt-16"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;