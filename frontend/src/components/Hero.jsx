import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/50 pt-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-gradient-to-br from-indigo-400/15 to-purple-400/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 right-1/3 w-60 h-60 bg-gradient-to-br from-violet-400/10 to-pink-400/10 rounded-full blur-3xl"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

        {/* Floating elements */}
        <div className="absolute top-28 left-[12%] w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-[18%] w-3 h-3 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-[25%] w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="grid lg:grid-cols-5 gap-4 lg:gap-8 items-center">
          {/* Left content */}
          <div className="lg:col-span-2 space-y-3 lg:space-y-4 text-center lg:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Transforming Ideas Into <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Digital Reality</span>
            </h1>

            <p className="text-sm md:text-base text-gray-500 max-w-md mx-auto lg:mx-0">
              ERP Solutions • Web & Mobile Development • API Integration • Digital Marketing
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-2 lg:gap-3 justify-center lg:justify-start">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Our Services
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-700 text-sm font-semibold rounded-lg border border-gray-200 shadow-sm hover:border-blue-300 hover:text-blue-600 hover:shadow-md transition-all duration-300"
              >
                Free Quote
                <span className="text-blue-500 font-mono text-xs">&lt;/&gt;</span>
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="text-center">
                  <div className="text-lg lg:text-xl font-bold text-gray-900">500+</div>
                  <div className="text-[10px] lg:text-xs text-gray-500">Projects</div>
                </div>
                <div className="h-6 lg:h-8 w-px bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-lg lg:text-xl font-bold text-gray-900">200+</div>
                  <div className="text-[10px] lg:text-xs text-gray-500">Clients</div>
                </div>
                <div className="h-6 lg:h-8 w-px bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-lg lg:text-xl font-bold text-gray-900">15+</div>
                  <div className="text-[10px] lg:text-xs text-gray-500">Years</div>
                </div>
                <div className="h-6 lg:h-8 w-px bg-gray-200 hidden sm:block"></div>
                <div className="hidden sm:flex items-center gap-1">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 lg:w-3.5 h-3 lg:h-3.5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 ml-1">4.9</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Service cards grid */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="grid grid-cols-3 gap-3">
              {/* Web Development */}
              <div className="group bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-100 hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                    <span className="text-white font-mono text-sm font-bold">&lt;/&gt;</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Web Development</h3>
                    <p className="text-xs text-gray-500">Full Stack Solutions</p>
                  </div>
                </div>
              </div>

              {/* Mobile Apps */}
              <div className="group bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-green-100 hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center shadow-md shadow-green-500/20 group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Mobile Apps</h3>
                    <p className="text-xs text-gray-500">iOS & Android</p>
                  </div>
                </div>
              </div>

              {/* ERP Solutions */}
              <div className="group bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-purple-100 hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">ERP Solutions</h3>
                    <p className="text-xs text-gray-500">Enterprise Systems</p>
                  </div>
                </div>
              </div>

              {/* Digital Marketing */}
              <div className="group bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-orange-100 hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Digital Marketing</h3>
                    <p className="text-xs text-gray-500">SEO & Growth</p>
                  </div>
                </div>
              </div>

              {/* API Integration */}
              <div className="group bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-cyan-100 hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-lg flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">API Integration</h3>
                    <p className="text-xs text-gray-500">Seamless Connect</p>
                  </div>
                </div>
              </div>

              {/* Maintenance & Support */}
              <div className="group bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-rose-100 hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg flex items-center justify-center shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-sm">Maintenance</h3>
                    <p className="text-xs text-gray-500">24/7 Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile service cards */}
          <div className="lg:hidden">
            <div className="flex flex-wrap justify-center gap-2">
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full border border-gray-100 shadow-sm">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-mono text-[10px] font-bold">&lt;/&gt;</span>
                </div>
                <span className="text-xs font-medium text-gray-700">Web</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full border border-gray-100 shadow-sm">
                <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-md flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-700">Mobile</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full border border-gray-100 shadow-sm">
                <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-violet-600 rounded-md flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-700">ERP</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-full border border-gray-100 shadow-sm">
                <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-md flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-700">Marketing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="mt-2 lg:mt-2">
        <svg viewBox="0 0 1440 40" className="w-full h-auto" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,25 1440,20 L1440,40 L0,40 Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
