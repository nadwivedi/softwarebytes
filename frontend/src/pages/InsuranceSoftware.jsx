import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const WHATSAPP_URL =
  'https://wa.me/916264682508?text=Hello%2C%20I%20want%20to%20discuss%20insurance%20software%20development%20with%20Software%20Bytes.';

const iconPaths = {
  shield:
    'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  users:
    'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  bell: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
  wallet:
    'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
  clipboard:
    'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
  folder: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
  chart:
    'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  phone: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  code: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  globe:
    'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
  link: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
  check: 'M5 13l4 4L19 7',
  arrow: 'M17 8l4 4m0 0l-4 4m4-4H3',
  chevron: 'M19 9l-7 7-7-7',
};

const Icon = ({ name, className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPaths[name]} />
  </svg>
);

const solutions = [
  { icon: 'users', title: 'Insurance Agent CRM', description: 'Manage leads, customers, families and follow-ups so agents never lose a prospect or a referral.' },
  { icon: 'shield', title: 'Policy Management System', description: 'Store every policy across life, health, motor and general insurance with insurer, plan, premium and documents.' },
  { icon: 'bell', title: 'Renewal & Premium Reminders', description: 'Automatic alerts for renewals and premium due dates, with WhatsApp and SMS reminders to customers.' },
  { icon: 'wallet', title: 'Commission Tracking', description: 'Track commission and brokerage by insurer, product and sub-agent, and see what is received and pending.' },
  { icon: 'clipboard', title: 'Claims Management', description: 'Record claim intimation, documents and status so customers get updates and nothing gets stuck.' },
  { icon: 'chart', title: 'Broker & Agency ERP', description: 'Multi-branch, multi-user software for agencies and brokers with roles, POSP/sub-agent hierarchy and MIS reports.' },
  { icon: 'globe', title: 'Insurance Portals & Websites', description: 'Customer portals, lead capture websites and quote request forms that bring new business online.' },
  { icon: 'phone', title: 'Mobile Apps for Agents', description: 'Android and iOS apps so agents can check policies, renewals and customer details in the field.' },
];

const audiences = [
  { title: 'Insurance Agents', description: 'LIC agents, health and motor insurance advisors who want to manage customers and renewals without registers and Excel sheets.' },
  { title: 'Insurance Agencies', description: 'Growing agencies that need one system for staff, sub-agents, policies, commissions and daily reports.' },
  { title: 'Insurance Brokers', description: 'Brokers and POSP networks that need multi-insurer data, hierarchy-wise commission and detailed MIS.' },
];

const whyUs = [
  'Experience building software for insurance agents, agencies and brokers',
  'Custom development around your workflow, not a rigid template',
  'Ready modules for CRM, policies, renewals and commissions to save time and cost',
  'Secure cloud hosting with role-based access for your team',
  'WhatsApp, SMS and email integration for customer reminders',
  'Local team in Raipur with direct support after launch',
];

const process = [
  { title: 'Understand your business', description: 'We study how you sell, service and renew policies today and where time and money is lost.' },
  { title: 'Plan & design', description: 'We define modules, screens and reports, and share a clear scope with timeline and cost.' },
  { title: 'Develop & test', description: 'We build in stages and show you working software regularly for feedback.' },
  { title: 'Launch & support', description: 'We import your existing data, train your team and keep supporting you after go-live.' },
];

const technologies = ['React', 'Node.js', 'MongoDB', 'MySQL', 'React Native', 'WhatsApp API', 'Cloud Hosting', 'REST APIs'];

const faqs = [
  {
    q: 'Is Software Bytes an insurance software development company?',
    a: 'Yes. Software Bytes is an IT company based in Raipur, India with strong expertise in insurance software development. We build CRM, policy management, renewal reminder, commission tracking and broker ERP software for insurance agents, agencies and brokers.',
  },
  {
    q: 'What kind of insurance software can you build?',
    a: 'We build insurance agent CRM, policy management systems, renewal and premium reminder software, commission and brokerage tracking, claims tracking, broker and agency ERP, customer portals, insurance websites and mobile apps for agents.',
  },
  {
    q: 'Can the software handle life, health, motor and general insurance?',
    a: 'Yes. The software can store policies of all types and insurers in one place, with fields and reports designed for each line of business.',
  },
  {
    q: 'Do you provide custom insurance software or a ready product?',
    a: 'Both. We have ready modules that can be set up quickly, and we customise or build new features based on your exact workflow as an agent, agency or broker.',
  },
  {
    q: 'How much does insurance software development cost?',
    a: 'Insurance software development with Software Bytes starts at ₹29,999. The final cost depends on the modules, number of users and integrations you need. Share your requirement on WhatsApp or through the contact page and we will give you a clear quote.',
  },
  {
    q: 'Can I see a demo before starting?',
    a: 'Yes. Contact Software Bytes and we will show you a free demo of our insurance software and discuss your requirements.',
  },
];

const mockRows = [
  { name: 'Anil Sharma', work: 'Health Policy Renewal', status: 'Due in 3 days', tone: 'bg-amber-100 text-amber-700' },
  { name: 'CG04 MN 4521', work: 'Motor Insurance', status: 'Renewed', tone: 'bg-green-100 text-green-700' },
  { name: 'Sunita Patel', work: 'Term Life Premium', status: 'Reminder Sent', tone: 'bg-blue-100 text-blue-700' },
  { name: 'Verma Traders', work: 'Shop Insurance Claim', status: 'Docs Pending', tone: 'bg-rose-100 text-rose-700' },
];

const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <div className="mx-auto mb-10 max-w-2xl text-center">
    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">{eyebrow}</span>
    <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
    {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
  </div>
);

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Insurance Software Development',
      serviceType: 'Insurance Software Development',
      url: 'https://softwarebytes.in/insurance-software-development',
      description:
        'Custom insurance software development for insurance agents, agencies and brokers: CRM, policy management, renewal reminders, commission tracking, claims and broker ERP.',
      provider: {
        '@type': 'Organization',
        name: 'Software Bytes',
        url: 'https://softwarebytes.in',
        telephone: '+91-6264682508',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Raipur',
          addressRegion: 'Chhattisgarh',
          addressCountry: 'IN',
        },
      },
      areaServed: { '@type': 'Country', name: 'India' },
      audience: { '@type': 'BusinessAudience', audienceType: 'Insurance agents, insurance agencies and insurance brokers' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ],
};

const InsuranceSoftware = () => {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <div className="bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"></div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-100">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
              Insurance Software Development Company
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Insurance Software Development for <span className="text-blue-600">Agents, Agencies & Brokers</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
              Software Bytes is an IT company with deep expertise in insurance software development. We have built software
              for insurance agents, agencies and brokers to manage customers, policies, renewals, commissions and claims in one place.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Discuss Your Project
                <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a
                href="#solutions"
                className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                See Solutions
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
              {['Custom development', 'Free demo & consultation', 'Support after launch'].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <Icon name="check" className="h-4 w-4 text-green-600" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <Icon name="shield" className="h-4 w-4" />
                  </div>
                  <span className="font-semibold text-slate-900">Agency Dashboard</span>
                </div>
                <span className="text-xs text-slate-500">This Month</span>
              </div>
              <div className="mb-4 grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { label: 'Active Policies', value: '1,284' },
                  { label: 'Renewals Due', value: '37' },
                  { label: 'Commission', value: '₹1.2L' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-slate-50 p-2.5 sm:p-3">
                    <p className="text-[11px] text-slate-500 sm:text-xs">{stat.label}</p>
                    <p className="mt-1 text-sm font-bold text-slate-900 sm:text-lg">{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="divide-y divide-slate-100 rounded-xl border border-slate-100">
                {mockRows.map((row) => (
                  <div key={row.name} className="flex items-center justify-between gap-2 px-3 py-2.5">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-slate-900">{row.name}</p>
                      <p className="text-xs text-slate-500">{row.work}</p>
                    </div>
                    <span className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-medium ${row.tone}`}>{row.status}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-2 text-center text-xs text-slate-400">Sample data for illustration</p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="scroll-mt-24 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Insurance software solutions"
            title="Insurance software we develop"
            subtitle="From a simple agent CRM to a complete broker ERP, we build the software your insurance business needs."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon name={item.icon} />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we build for */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who we work with"
            title="Software for insurance agents, agencies and brokers"
            subtitle="Every insurance business works differently. We build around the way you sell and service policies."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {audiences.map((item) => (
              <div key={item.title} className="rounded-2xl bg-slate-50 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Software Bytes */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Why Software Bytes</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Among insurance software development companies, we focus on what agents actually use
            </h2>
            <p className="mt-3 text-slate-600">
              Many insurance software development companies sell large, complex systems. Software Bytes builds practical software
              for Indian insurance agents, agencies and brokers: easy for staff to learn, fast on mobile, and focused on renewals,
              commissions and customer service.
            </p>
            <p className="mt-3 text-slate-600">
              Want to launch under your own brand?{' '}
              <Link to="/insurance-white-label-software" className="font-semibold text-blue-600 hover:underline">
                See our white label insurance software
              </Link>
              , used by brands like BimaMox and BimaOne.
            </p>
            <p className="mt-3 text-slate-600">
              Pricing starts at ₹29,999.{' '}
              <Link to="/insurance-software-development-cost" className="font-semibold text-blue-600 hover:underline">
                See insurance software development cost
              </Link>
              {' '}or explore{' '}
              <Link to="/custom-insurance-software-development" className="font-semibold text-blue-600 hover:underline">
                custom insurance software development
              </Link>
              . हिंदी में पढ़ें:{' '}
              <Link to="/insurance-ke-liye-software-kaise-banwaye" className="font-semibold text-blue-600 hover:underline">
                Insurance के लिए software कैसे बनवाएं
              </Link>
              .
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
            <h3 className="font-semibold text-slate-900">What you get with Software Bytes</h3>
            <ul className="mt-4 space-y-3">
              {whyUs.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our process" title="How we develop your insurance software" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={step.title} className="rounded-2xl bg-slate-50 p-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Insurance software development: common questions" />
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
            {faqs.map((faq, index) => (
              <div key={faq.q}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-slate-900"
                >
                  <h3>{faq.q}</h3>
                  <Icon name="chevron" className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <p className={`px-5 pb-4 text-sm text-slate-600 ${openFaq === index ? '' : 'hidden'}`}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-slate-900 px-6 py-10 text-center sm:px-12 sm:py-14">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Looking for an insurance software development company?</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            Contact Software Bytes to discuss software for your insurance agency or brokerage. Free consultation and demo.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Chat on WhatsApp
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsuranceSoftware;
