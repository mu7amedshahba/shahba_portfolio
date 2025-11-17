import React from "react";
import homeImg from "../../design/images/WhatsApp Image 2025-10-17 at 14.26.05_f031354f.jpg";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.9)), url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Animated background overlay elements */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-orange-500/5 animate-pulse"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full animate-float"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-1 h-1 bg-orange-300 rounded-full animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <p className="text-sm uppercase tracking-widest text-white font-semibold">
                Fullstack Developer
              </p>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
                Alex Johnson
              </span>
            </h1>

            <p className="text-xl text-gray-200 leading-relaxed font-medium">
              I build modern, fast, and beautiful web applications.
            </p>

            <p className="text-gray-300 max-w-xl leading-relaxed text-lg">
              Specialized in{" "}
              <span className="text-orange-300 font-semibold">React</span>,{" "}
              <span className="text-orange-300 font-semibold">Node.js</span>,
              and modern fullstack tooling. I care about clean code, smooth UX,
              and pixel-perfect implementation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("#projects")}
                className="px-8 py-4 text-base font-semibold bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-orange-500/30 border border-orange-400/30"
              >
                View My Projects
              </button>

              <button
                onClick={() => scrollToSection("#contact")}
                className="px-8 py-4 text-base font-semibold border-2 border-white/30 text-white rounded-full hover:border-orange-400 hover:bg-orange-500/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                Contact Me
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-3 pt-6 text-sm text-gray-300">
              <span className="h-px w-12 bg-gradient-to-r from-transparent via-white/50 to-transparent"></span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                Available for remote & freelance work
              </span>
            </div>
          </div>

          {/* Profile Image Card */}
          <div className="relative">
            <div className="relative group">
              {/* Main card with glass effect */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl shadow-black/30">
                <div className="w-full h-100  bg-gradient-to-br from-orange-400/20 to-blue-400/20 rounded-2xl flex items-center justify-center relative overflow-hidden border border-white/10">
                  {/* Subtle grid pattern */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                  {/* Profile content */}
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white/30 shadow-2xl">
                      <svg
                        className="w-16 h-16 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <img src={homeImg} alt="" />
                    <span className="text-white font-bold text-xl block">
                      Alex Johnson
                    </span>
                    <p className="text-white/80 text-sm mt-2">
                      Fullstack Developer
                    </p>

                    {/* Tech stack tags */}
                    <div className="flex justify-center gap-2 mt-4">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs backdrop-blur-sm">
                        React
                      </span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs backdrop-blur-sm">
                        Node.js
                      </span>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs backdrop-blur-sm">
                        TypeScript
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
