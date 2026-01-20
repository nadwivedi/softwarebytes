import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50 pt-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

        {/* Floating code symbols */}
        <div className="absolute top-32 left-[10%] text-blue-200/40 text-6xl font-mono animate-pulse">&lt;</div>
        <div className="absolute top-48 right-[15%] text-indigo-200/40 text-4xl font-mono animate-pulse delay-300">/&gt;</div>
        <div className="absolute bottom-40 left-[20%] text-purple-200/40 text-5xl font-mono animate-pulse delay-500">&lt;/&gt;</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left content */}
          <div className="space-y-4 lg:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100/80 backdrop-blur-sm rounded-full text-blue-700 text-xs font-medium">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
              Trusted by 200+ businesses in Raipur
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.1]">
              Transforming Ideas Into{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Digital Reality
                </span>
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 8" fill="none">
                  <path d="M2 6C50 2 100 1 150 4C200 6 250 2 298 5" stroke="url(#gradient)" strokeWidth="2.5" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2563eb"/>
                      <stop offset="100%" stopColor="#7c3aed"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
              Leading software company in Raipur, Chhattisgarh delivering innovative
              solutions for businesses worldwide.
            </p>

            {/* Service cards - Mobile only - between description and buttons */}
            <div className="lg:hidden space-y-3">
              <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-300">
                      <span className="text-white text-lg font-mono font-bold">&lt;/&gt;</span>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-0.5">Website Development</h3>
                    <p className="text-xs text-gray-600">Custom websites & web apps</p>
                  </div>
                  <span className="text-blue-600/20 text-4xl font-mono">01</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/80 backdrop-blur-sm p-3.5 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 text-xs">Mobile Apps</h3>
                  <p className="text-[10px] text-gray-600">iOS & Android</p>
                </div>

                <div className="bg-white/80 backdrop-blur-sm p-3.5 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 text-xs">ERP Solutions</h3>
                  <p className="text-[10px] text-gray-600">Enterprise Ready</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Services
                <span className="group-hover:translate-x-1 transition-transform duration-300">&lt;/&gt;</span>
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:shadow-lg transition-all duration-300"
              >
                Get In Touch
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-gray-500">200+ Happy Clients</span>
              </div>
              <div className="hidden sm:flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
                <span className="text-xs text-gray-500 ml-1">4.9/5</span>
              </div>
            </div>
          </div>

          {/* Right content - Service cards - Desktop only */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-3">
              {/* Main large card */}
              <div className="col-span-2 bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-300">
                      <span className="text-white text-lg font-mono font-bold">&lt;/&gt;</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-0.5">Website Development</h3>
                    <p className="text-xs text-gray-600">Custom websites & web apps</p>
                  </div>
                  <span className="text-blue-600/20 text-4xl font-mono">01</span>
                </div>
              </div>

              {/* Smaller cards */}
              <div className="bg-white/80 backdrop-blur-sm p-3.5 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-xs">Mobile Apps</h3>
                <p className="text-[10px] text-gray-600">iOS & Android</p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm p-3.5 rounded-2xl shadow-xl border border-white/50 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-xs">ERP Solutions</h3>
                <p className="text-[10px] text-gray-600">Enterprise Ready</p>
              </div>

              {/* Stats card */}
              <div className="col-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-2xl shadow-xl">
                <div className="flex justify-around text-white">
                  <div className="text-center">
                    <div className="text-xl font-bold">100+</div>
                    <div className="text-blue-100 text-[10px]">Projects</div>
                  </div>
                  <div className="w-px bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-xl font-bold">3+</div>
                    <div className="text-blue-100 text-[10px]">Years</div>
                  </div>
                  <div className="w-px bg-white/20"></div>
                  <div className="text-center">
                    <div className="text-xl font-bold">24/7</div>
                    <div className="text-blue-100 text-[10px]">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,85.3C672,75,768,53,864,48C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
