import { Link } from 'react-router-dom';

const Crusherbook = () => {
  const features = [
    {
      title: 'Production Tracking',
      description: 'Log daily production data, monitor efficiency, and track raw material consumption in real-time.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: 'Sales & Invoicing',
      description: 'Generate GST-compliant invoices instantly. Manage weighbridge data and vehicle dispatch logs.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Inventory Management',
      description: 'Keep track of crushed stone stock levels, explosives, fuel, and spare parts automatically.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: 'Financial Reports',
      description: 'Detailed GST reports, profit & loss statements, and expense tracking tailored for crusher plants.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-28">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                Product by Software Bytes
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                Complete <span className="text-blue-600">Crusher Plant</span> Management System
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Crusherbook is a specialized ERP solution designed specifically for stone crusher owners to automate daily operations, tracking, and compliance.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://crusherbook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  Visit Crusherbook.com
                </a>
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all duration-300"
                >
                  Request a Demo
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 blur-[100px] opacity-10"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 transform rotate-3">
                <img 
                  src="/crusherbook-preview.webp" 
                  alt="Crusherbook Dashboard" 
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Powerful Features for Your Plant
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to run your crusher business efficiently and transparently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-600 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-600 rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Stop Managing on Paper. <br /> Start Managing with <span className="text-blue-400">Crusherbook.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-3xl mx-auto">
            Join 100+ crusher plants that have transformed their operations with our digital solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://crusherbook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              Get Started Today
            </a>
            <Link
              to="/contact"
              className="px-10 py-5 bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Crusherbook;
