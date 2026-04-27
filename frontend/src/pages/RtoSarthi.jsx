import { Link } from 'react-router-dom';

const RtoSarthi = () => {
  const features = [
    {
      title: 'Application Tracking',
      description: 'Easily track DL, RC, and Permit applications from start to finish. Never miss a deadline again.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      title: 'Document Management',
      description: 'Store and manage scanned copies of client documents securely. Access them anytime from any device.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
    },
    {
      title: 'Automated SMS Alerts',
      description: 'Send automated updates to clients about their application status, renewal dates, and payments.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      title: 'Accounts & Ledger',
      description: 'Manage client payments, RTO fees, and your commissions with detailed ledgers and reports.',
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
        <div className="absolute top-0 left-0 w-1/2 h-full bg-orange-600/5 -skew-x-12 -translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium">
                <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
                Product by Software Bytes
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                Empower Your <span className="text-orange-600">RTO Consultancy</span> Business
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                RTO Sarthi is India's most trusted software for RTO agents and consultants. Simplify application filing, document tracking, and client management.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-orange-600 text-white font-bold rounded-2xl hover:bg-orange-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  Get Started Now
                </Link>
                <button
                  onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                  className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:bg-slate-50 transition-all duration-300"
                >
                  Explore Features
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-orange-600 blur-[100px] opacity-10"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 transform -rotate-3">
                <img 
                  src="/rtosarthi-preview.webp" 
                  alt="RTO Sarthi Dashboard" 
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
              Built for RTO Experts
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Focus on your clients while our software handles the complex tracking and documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange-600 shadow-sm group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Why RTO Agents Love RTO Sarthi
              </h2>
              <div className="space-y-6">
                {[
                  'Reduce manual data entry by 70%',
                  'Never miss insurance or permit expiry dates',
                  'Access client records from your smartphone',
                  'Professional invoices that build trust',
                  'Secure cloud storage for all documents'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-square bg-gradient-to-br from-orange-400 to-red-500 rounded-[4rem] flex items-center justify-center text-white text-8xl font-bold shadow-2xl">
                RS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Ready to Scale Your RTO Business?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Join thousands of RTO consultants across India who use RTO Sarthi to run their business efficiently.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-orange-600 text-white font-bold rounded-2xl hover:bg-orange-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Request Free Demo
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RtoSarthi;
