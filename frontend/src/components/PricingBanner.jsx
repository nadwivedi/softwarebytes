import { Link } from 'react-router-dom';

const PricingBanner = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full border border-yellow-500/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              <span className="text-xs font-semibold text-yellow-300 tracking-wide">LIMITED TIME OFFER</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Launch Your Online Presence <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Today!</span>
            </h2>

            <p className="text-sm md:text-base text-blue-100/70 max-w-md mx-auto lg:mx-0">
              Get your professional website with free domain & hosting. Start your digital journey now!
            </p>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 text-sm font-bold rounded-lg shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:shadow-yellow-500/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Started Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right content - Pricing cards */}
          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            {/* Portfolio Site */}
            <div className="relative bg-white/10 backdrop-blur-sm p-4 lg:p-5 rounded-2xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 group">
              <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-[10px] font-bold text-white shadow-lg">
                POPULAR
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>

                <div>
                  <h3 className="font-bold text-white text-sm lg:text-base">Portfolio Site</h3>
                  <p className="text-[10px] lg:text-xs text-blue-200/60">Personal / Business</p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-2xl lg:text-3xl font-bold text-white">₹2,599</span>
                  <span className="text-xs text-blue-200/60">only</span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center gap-2 text-xs text-blue-100/80">
                    <svg className="w-3.5 h-3.5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free Domain (1 Year)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-blue-100/80">
                    <svg className="w-3.5 h-3.5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free Deployment</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-blue-100/80">
                    <svg className="w-3.5 h-3.5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mobile Responsive</span>
                  </div>
                </div>
              </div>
            </div>

            {/* E-commerce Site */}
            <div className="relative bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm p-4 lg:p-5 rounded-2xl border border-yellow-500/30 hover:border-yellow-500/50 transition-all duration-300 group">
              <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-[10px] font-bold text-gray-900 shadow-lg">
                BEST VALUE
              </div>

              <div className="space-y-3">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>

                <div>
                  <h3 className="font-bold text-white text-sm lg:text-base">E-Commerce Site</h3>
                  <p className="text-[10px] lg:text-xs text-yellow-200/70">Online Store</p>
                </div>

                <div className="flex items-baseline gap-1">
                  <span className="text-2xl lg:text-3xl font-bold text-white">₹6,999</span>
                  <span className="text-xs text-yellow-200/60">only</span>
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center gap-2 text-xs text-yellow-100/90">
                    <svg className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free Domain (1 Year)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-yellow-100/90">
                    <svg className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Free Hosting (1 Year)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-yellow-100/90">
                    <svg className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    </section>
  );
};

export default PricingBanner;
