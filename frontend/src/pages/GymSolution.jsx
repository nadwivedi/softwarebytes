import { Link } from 'react-router-dom';

const GymSolution = () => {
  const features = [
    {
      title: 'Member Management',
      description: 'Keep every member profile, photo, contact and membership history in one place.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Plans & Fee Collection',
      description: 'Create monthly, quarterly and yearly plans. Track payments, dues and receipts easily.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Attendance Tracking',
      description: 'Record daily check-ins and see who is regular and who has stopped coming.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Renewal Reminders',
      description: 'Get alerts for expiring memberships and remind members before their plan ends.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
    },
  ];

  const benefits = [
    'No more registers or Excel sheets',
    'Never miss a membership renewal',
    'Know your pending fees at a glance',
    'Access your gym data from mobile or laptop',
    'Daily and monthly collection reports',
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-28">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-emerald-600/5 -skew-x-12 -translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium">
                <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></span>
                Product by Software Bytes
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
                Complete <span className="text-emerald-600">Gym Management</span> Software
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                GymSolution helps gym owners manage members, plans, fees, attendance and renewals from one simple dashboard.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://gymsolution.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  Visit GymSolution.in
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
              <div className="absolute inset-0 bg-emerald-600 blur-[100px] opacity-10"></div>
              <div className="relative aspect-[4/3] bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl shadow-2xl flex flex-col items-center justify-center text-white transform -rotate-3">
                <svg className="w-24 h-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 9v6M8 7v10M16 7v10M20 9v6M8 12h8" />
                </svg>
                <span className="text-4xl font-extrabold">GymSolution</span>
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
              Everything Your Gym Needs
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Spend less time on paperwork and more time training your members.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 mb-6">
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
      <section className="py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Why Gym Owners Choose GymSolution
              </h2>
              <div className="space-y-6">
                {benefits.map((item, index) => (
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
              <div className="aspect-square bg-gradient-to-br from-emerald-400 to-teal-600 rounded-[4rem] flex items-center justify-center text-white text-8xl font-bold shadow-2xl">
                GS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Ready to Run Your Gym Smarter?
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Get started with GymSolution and take control of members, fees and renewals today.
          </p>
          <a
            href="https://gymsolution.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Visit GymSolution.in
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default GymSolution;
