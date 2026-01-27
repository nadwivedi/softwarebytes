import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-20 overflow-hidden">
      {/* Slider Container */}
      <div className="relative">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* Slide 1 - Services Hero */}
          <div className="w-full flex-shrink-0">
            <div className="relative bg-gradient-to-br from-white via-blue-50/40 to-indigo-50/50 overflow-hidden min-h-[340px] lg:min-h-[300px] flex flex-col justify-center">
              {/* Background decorations */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 -left-20 w-80 h-80 bg-gradient-to-br from-indigo-400/15 to-purple-400/15 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 right-1/3 w-60 h-60 bg-gradient-to-br from-violet-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="absolute top-28 left-[12%] w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-[18%] w-3 h-3 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-8">
                <div className="grid lg:grid-cols-5 gap-4 lg:gap-8 items-center">
                  {/* Left content */}
                  <div className="lg:col-span-2 space-y-2 lg:space-y-4 text-center lg:text-left">
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
                      Transforming Ideas Into <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Digital Reality</span>
                    </h1>

                    <p className="text-xs md:text-sm text-gray-500 max-w-md mx-auto lg:mx-0">
                      ERP Solutions • Web & Mobile Development • API Integration • Digital Marketing
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-row gap-2 justify-center lg:justify-start">
                      <Link
                        to="/services"
                        className="group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all duration-300"
                      >
                        Our Services
                        <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                      <Link
                        to="/contact"
                        className="group inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-700 text-xs font-semibold rounded-lg border border-gray-200 shadow-sm hover:border-blue-300 hover:text-blue-600 hover:shadow-md transition-all duration-300"
                      >
                        Free Quote
                        <span className="text-blue-500 font-mono text-[10px]">&lt;/&gt;</span>
                      </Link>
                    </div>

                    {/* Stats row */}
                    <div className="flex items-center justify-center lg:justify-start">
                      <div className="flex items-center gap-2 lg:gap-4">
                        <div className="text-center">
                          <div className="text-base lg:text-xl font-bold text-gray-900">500+</div>
                          <div className="text-[10px] lg:text-xs text-gray-500">Projects</div>
                        </div>
                        <div className="h-5 lg:h-8 w-px bg-gray-200"></div>
                        <div className="text-center">
                          <div className="text-base lg:text-xl font-bold text-gray-900">200+</div>
                          <div className="text-[10px] lg:text-xs text-gray-500">Clients</div>
                        </div>
                        <div className="h-5 lg:h-8 w-px bg-gray-200"></div>
                        <div className="text-center">
                          <div className="text-base lg:text-xl font-bold text-gray-900">15+</div>
                          <div className="text-[10px] lg:text-xs text-gray-500">Years</div>
                        </div>
                        <div className="h-5 lg:h-8 w-px bg-gray-200"></div>
                        <div className="flex items-center gap-1">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-2.5 lg:w-3.5 h-2.5 lg:h-3.5 fill-current" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                              </svg>
                            ))}
                          </div>
                          <span className="text-[10px] text-gray-500 ml-1">4.9</span>
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

                      {/* Maintenance */}
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
                    <div className="flex flex-wrap justify-center gap-1.5">
                      <div className="flex items-center gap-1.5 bg-white px-2 py-1.5 rounded-full border border-gray-100 shadow-sm">
                        <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-md flex items-center justify-center">
                          <span className="text-white font-mono text-[9px] font-bold">&lt;/&gt;</span>
                        </div>
                        <span className="text-[11px] font-medium text-gray-700">Web</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-white px-2 py-1.5 rounded-full border border-gray-100 shadow-sm">
                        <div className="w-5 h-5 bg-gradient-to-br from-emerald-500 to-green-600 rounded-md flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-[11px] font-medium text-gray-700">Mobile</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-white px-2 py-1.5 rounded-full border border-gray-100 shadow-sm">
                        <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-violet-600 rounded-md flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <span className="text-[11px] font-medium text-gray-700">ERP</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-white px-2 py-1.5 rounded-full border border-gray-100 shadow-sm">
                        <div className="w-5 h-5 bg-gradient-to-br from-orange-500 to-red-500 rounded-md flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                          </svg>
                        </div>
                        <span className="text-[11px] font-medium text-gray-700">Marketing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 - Pricing Hero */}
          <div className="w-full flex-shrink-0">
            <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden min-h-[340px] lg:min-h-[300px] flex flex-col justify-center">
              {/* Background decorations */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 -left-20 w-80 h-80 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 right-1/3 w-60 h-60 bg-gradient-to-br from-violet-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="absolute top-28 left-[12%] w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute top-40 right-[18%] w-3 h-3 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-8">
                <div className="grid lg:grid-cols-5 gap-4 lg:gap-8 items-center">
                  {/* Left content */}
                  <div className="lg:col-span-2 space-y-2 lg:space-y-3 text-center lg:text-left">
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-white leading-tight">
                      Launch Your <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Online Presence</span>
                    </h1>

                    <p className="text-xs md:text-sm text-blue-100/70 max-w-md mx-auto lg:mx-0">
                      Professional websites with free domain & hosting
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-row gap-2 justify-center lg:justify-start">
                      <Link
                        to="/contact"
                        className="group inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 text-xs font-semibold rounded-lg shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:shadow-yellow-500/30 hover:-translate-y-0.5 transition-all duration-300"
                      >
                        Get Started
                        <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>

                    {/* Stats row - Hidden on mobile */}
                    <div className="hidden lg:flex items-center justify-center lg:justify-start">
                      <div className="flex items-center gap-3 lg:gap-4">
                        <div className="text-center">
                          <div className="text-lg lg:text-xl font-bold text-white">500+</div>
                          <div className="text-[10px] lg:text-xs text-blue-200/60">Projects</div>
                        </div>
                        <div className="h-6 lg:h-8 w-px bg-white/20"></div>
                        <div className="text-center">
                          <div className="text-lg lg:text-xl font-bold text-white">200+</div>
                          <div className="text-[10px] lg:text-xs text-blue-200/60">Clients</div>
                        </div>
                        <div className="h-6 lg:h-8 w-px bg-white/20"></div>
                        <div className="text-center">
                          <div className="text-lg lg:text-xl font-bold text-white">15+</div>
                          <div className="text-[10px] lg:text-xs text-blue-200/60">Years</div>
                        </div>
                        <div className="h-6 lg:h-8 w-px bg-white/20 hidden sm:block"></div>
                        <div className="hidden sm:block">
                          <div className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-500/20 rounded-full border border-yellow-500/30">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                            </span>
                            <span className="text-[10px] font-semibold text-yellow-300">LIMITED OFFER</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right content - Pricing cards */}
                  <div className="hidden lg:block lg:col-span-3">
                    <div className="grid grid-cols-2 gap-3">
                      {/* Portfolio Site */}
                      <div className="relative bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 group">
                        <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-[10px] font-bold text-white shadow-lg">
                          POPULAR
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-white text-xs">Portfolio Site</h3>
                            <div className="flex items-baseline gap-1 mt-1">
                              <span className="text-xl font-bold text-white">₹2,599</span>
                            </div>
                            <div className="mt-2 space-y-1">
                              <div className="flex items-center gap-1 text-[10px] text-blue-100/80">
                                <svg className="w-2.5 h-2.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Free Domain</span>
                              </div>
                              <div className="flex items-center gap-1 text-[10px] text-blue-100/80">
                                <svg className="w-2.5 h-2.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Free Deployment</span>
                              </div>
                              <div className="flex items-center gap-1 text-[10px] text-blue-100/80">
                                <svg className="w-2.5 h-2.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Mobile Responsive</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* E-commerce Site */}
                      <div className="relative bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm p-3 rounded-xl border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 group">
                        <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-[10px] font-bold text-gray-900 shadow-lg">
                          BEST VALUE
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-9 h-9 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-white text-xs">E-Commerce Site</h3>
                            <div className="flex items-baseline gap-1 mt-1">
                              <span className="text-xl font-bold text-white">₹6,999</span>
                            </div>
                            <div className="mt-2 space-y-1">
                              <div className="flex items-center gap-1 text-[10px] text-yellow-100/90">
                                <svg className="w-2.5 h-2.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Free Domain</span>
                              </div>
                              <div className="flex items-center gap-1 text-[10px] text-yellow-100/90">
                                <svg className="w-2.5 h-2.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Free Hosting</span>
                              </div>
                              <div className="flex items-center gap-1 text-[10px] text-yellow-100/90">
                                <svg className="w-2.5 h-2.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Payment Gateway</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Mobile pricing cards */}
                  <div className="lg:hidden">
                    <div className="grid grid-cols-2 gap-3">
                      {/* Portfolio Site */}
                      <div className="relative bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 group">
                        <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-[10px] font-bold text-white shadow-lg">
                          POPULAR
                        </div>

                        <div className="flex flex-col items-center text-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold text-white text-xs">Portfolio Site</h3>
                            <div className="flex items-baseline gap-1 mt-1">
                              <span className="text-lg font-bold text-white">₹2,599</span>
                            </div>
                          </div>
                          <div className="mt-1 space-y-1 w-full">
                            <div className="flex items-center gap-1 text-[10px] text-blue-100/80">
                              <svg className="w-2.5 h-2.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>Free Domain</span>
                            </div>
                            <div className="flex items-center gap-1 text-[10px] text-blue-100/80">
                              <svg className="w-2.5 h-2.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>Free Deployment</span>
                            </div>
                            <div className="flex items-center gap-1 text-[10px] text-blue-100/80">
                              <svg className="w-2.5 h-2.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>Mobile Responsive</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* E-commerce Site */}
                      <div className="relative bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm p-3 rounded-xl border border-yellow-500/30 group">
                        <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-[10px] font-bold text-gray-900 shadow-lg">
                          BEST VALUE
                        </div>

                        <div className="flex flex-col items-center text-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg flex-shrink-0">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold text-white text-xs">E-Commerce Site</h3>
                            <div className="flex items-baseline gap-1 mt-1">
                              <span className="text-lg font-bold text-white">₹6,999</span>
                            </div>
                          </div>
                          <div className="mt-1 space-y-1 w-full">
                            <div className="flex items-center gap-1 text-[10px] text-yellow-100/90">
                              <svg className="w-2.5 h-2.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>Free Domain</span>
                            </div>
                            <div className="flex items-center gap-1 text-[10px] text-yellow-100/90">
                              <svg className="w-2.5 h-2.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>Free Hosting</span>
                            </div>
                            <div className="flex items-center gap-1 text-[10px] text-yellow-100/90">
                              <svg className="w-2.5 h-2.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>Payment Gateway</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        <button
          onClick={() => setCurrentSlide(0)}
          className={`h-2 rounded-full transition-all duration-300 ${currentSlide === 0 ? 'w-8 bg-blue-600' : 'w-2 bg-gray-400 hover:bg-gray-500'}`}
        />
        <button
          onClick={() => setCurrentSlide(1)}
          className={`h-2 rounded-full transition-all duration-300 ${currentSlide === 1 ? 'w-8 bg-blue-600' : 'w-2 bg-gray-400 hover:bg-gray-500'}`}
        />
      </div>

      {/* Bottom curve */}
      <div className="mt-0">
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

export default HeroSlider;
