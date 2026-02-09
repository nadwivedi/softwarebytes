import { Link } from 'react-router-dom';

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Software Development',
    description: 'Custom software built to automate workflows and improve productivity.',
    features: [
      'Custom Applications',
      'Legacy Modernization',
      'API Integration',
      'Support & Maintenance',
    ],
    gradient: 'from-blue-500 to-indigo-600',
    number: '01',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'ERP Solutions',
    description: 'Practical ERP systems for daily operations, tracking, and reporting.',
    features: [
      'Hostel Manager ERP',
      'RtoSarthi ERP',
      'Business ERP',
      'Setup & Support',
    ],
    gradient: 'from-purple-500 to-violet-600',
    number: '02',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: 'Website Design & Full Stack Development',
    description: 'Responsive websites and full-stack apps built for speed and conversion.',
    features: [
      'Responsive Design',
      'E-Commerce',
      'CMS Setup',
      'SEO Basics',
    ],
    gradient: 'from-cyan-500 to-blue-600',
    number: '03',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile App Development',
    description: 'Reliable mobile apps for Android and iOS with smooth user experience.',
    features: [
      'Android Apps',
      'iOS Apps',
      'Cross-Platform',
      'App Maintenance',
    ],
    gradient: 'from-green-500 to-emerald-600',
    number: '04',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-28">
      {/* Page Heading */}
      <section className="pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
            <span className="font-mono">&lt;/&gt;</span>
            Our Services
          </span>
          <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
            Solutions Built For Real Business Growth
          </h1>
          <p className="text-xs md:text-sm text-slate-600 max-w-3xl mx-auto">
            From custom software to specialized ERP products, we design and deliver practical systems that help your team move faster and work smarter.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl md:rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="absolute top-4 right-4 md:top-6 md:right-6 text-5xl md:text-7xl font-bold text-slate-100 group-hover:text-blue-100 transition-colors duration-300">
                  {service.number}
                </div>

                <div className="relative p-5 md:p-7">
                  <div className="flex items-center gap-3 md:gap-4 mb-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">{service.description}</p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 md:gap-4 mt-3 md:mt-0">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 md:gap-3">
                        <span className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-100 flex items-center justify-center">
                          <svg className="w-3 h-3 md:w-4 md:h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-gray-700 text-xs md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="group/btn inline-flex items-center gap-2 mt-5 md:mt-8 px-4 py-2 rounded-xl bg-blue-50 text-blue-700 text-sm md:text-base font-semibold hover:bg-blue-100 hover:gap-3 transition-all duration-300"
                  >
                    Get Started
                    <span className="font-mono">&lt;/&gt;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
              <span className="font-mono">&lt;/&gt;</span>
              How We Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-600">
              A streamlined approach to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your requirements and goals' },
              { step: '02', title: 'Planning', description: 'Creating detailed roadmap and architecture' },
              { step: '03', title: 'Development', description: 'Building your solution with agile methodology' },
              { step: '04', title: 'Delivery', description: 'Deploying and providing ongoing support' },
            ].map((item, index) => (
              <div key={index} className="relative bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="text-center">
                  <div className="relative inline-block">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto">
                      {item.step}
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 text-[200px] font-mono font-bold">
            &lt;/&gt;
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help bring your ideas to life
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Project
            <span className="group-hover:translate-x-1 transition-transform duration-300 font-mono">&lt;/&gt;</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
