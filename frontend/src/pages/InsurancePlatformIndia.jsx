import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const WHATSAPP_URL =
  'https://wa.me/916264682508?text=Hello%2C%20I%20want%20to%20launch%20a%20white%20label%20insurance%20platform%20in%20India%20with%20Software%20Bytes.';

const iconPaths = {
  shield:
    'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  users:
    'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  building:
    'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  briefcase:
    'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  rocket: 'M13 10V3L4 14h7v7l9-11h-7z',
  wallet:
    'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
  bell: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
  chart:
    'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  palette:
    'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
  phone: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  globe:
    'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
  clipboard:
    'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
  info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  location:
    'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
  check: 'M5 13l4 4L19 7',
  chevron: 'M19 9l-7 7-7-7',
};

const Icon = ({ name, className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPaths[name]} />
  </svg>
);

const WhatsAppIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const businessTypes = [
  { icon: 'users', title: 'POSP Networks', description: 'Onboard and manage hundreds of POSPs with their own logins, hierarchy, business tracking and payouts.' },
  { icon: 'briefcase', title: 'Insurance Brokers', description: 'Direct and composite brokers who want their own branded platform for staff, partners and clients.' },
  { icon: 'building', title: 'IMFs & Corporate Agents', description: 'Insurance marketing firms and corporate agents managing multiple insurers, products and branches.' },
  { icon: 'rocket', title: 'Insurtech Startups', description: 'Founders who want to launch an insurance brand in India quickly without building technology from scratch.' },
];

const insuranceLines = ['Motor insurance', 'Health insurance', 'Term & life insurance', 'Travel insurance', 'Shop & SME insurance', 'Home insurance'];

const features = [
  { icon: 'palette', title: 'Your Brand Across India', description: 'Your name, logo, domain, website and app. Your partners and customers only see your brand.' },
  { icon: 'users', title: 'POSP & Partner Hierarchy', description: 'Partner onboarding with document upload, multi-level hierarchy and partner-wise business view.' },
  { icon: 'wallet', title: 'Payouts in ₹', description: 'Insurer-wise and partner-wise payout rules, with received, pending and paid tracking.' },
  { icon: 'shield', title: 'Multi-Insurer Policy Records', description: 'Policies from different Indian insurers in one place, with vehicle number, policy number and documents.' },
  { icon: 'bell', title: 'WhatsApp Renewal Reminders', description: 'Automatic renewal reminders on WhatsApp and SMS, the way Indian customers prefer to be contacted.' },
  { icon: 'clipboard', title: 'Leads & Quote Requests', description: 'Capture leads from your website and partners, and track every quote request to closure.' },
  { icon: 'chart', title: 'MIS for Management', description: 'Business, renewal, payout and partner reports by month, insurer, product, branch and state.' },
  { icon: 'phone', title: 'Partner & Customer App', description: 'Android and iOS apps under your brand for partners in the field and customers.' },
];

const regions = [
  'Chhattisgarh',
  'Madhya Pradesh',
  'Maharashtra',
  'Delhi NCR',
  'Uttar Pradesh',
  'Gujarat',
  'Rajasthan',
  'Odisha',
  'Bihar & Jharkhand',
  'Telangana',
  'Karnataka',
  'and across India',
];

const faqs = [
  {
    q: 'What is a white label insurance platform in India?',
    a: 'A white label insurance platform is ready insurance technology that an Indian broker, POSP network, IMF, corporate agent or startup launches under its own brand name, logo, domain and app. Software Bytes builds and maintains the technology in the background.',
  },
  {
    q: 'Which Indian insurance brands use Software Bytes white label platform?',
    a: 'Insurance brands such as BimaMox and BimaOne have been launched on Software Bytes white label insurance software. You can launch your own insurance brand in India in the same way.',
  },
  {
    q: 'Do I need an IRDAI licence to use a white label insurance platform?',
    a: 'Software Bytes provides the technology platform. Selling or distributing insurance in India requires the appropriate IRDAI registration, such as a broker, corporate agent, IMF or POSP arrangement. You should confirm your licensing requirement with your insurer partner or a compliance advisor.',
  },
  {
    q: 'Can the platform manage POSPs and partner payouts?',
    a: 'Yes. You can onboard POSPs and partners, set up a hierarchy, and track business and payouts partner-wise and insurer-wise.',
  },
  {
    q: 'Do you work with clients outside Chhattisgarh?',
    a: 'Yes. Software Bytes is based in Raipur, Chhattisgarh and works with insurance businesses across India through online meetings, WhatsApp and remote support.',
  },
  {
    q: 'What is the cost of a white label insurance platform?',
    a: 'Cost depends on the modules, number of partners, mobile app and custom work you need. Message us on WhatsApp for a quote and a free demo.',
  },
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
      name: 'White Label Insurance Platform India',
      serviceType: 'White Label Insurance Platform',
      url: 'https://softwarebytes.in/white-label-insurance-platform-india',
      description:
        'White label insurance platform for Indian brokers, POSP networks, IMFs, corporate agents and insurtech startups, by Software Bytes, Raipur, Chhattisgarh.',
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

const InsurancePlatformIndia = () => {
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
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green-200/30 blur-3xl"></div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-100">
              <Icon name="location" className="h-3.5 w-3.5" />
              Made in India by Software Bytes, Raipur
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              White Label Insurance Platform <span className="text-blue-600">for India</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
              Launch your own insurance brand in India with a ready platform for POSPs, partners, policies, renewals and payouts.
              Indian insurance brands like <strong className="text-slate-900">BimaMox</strong> and{' '}
              <strong className="text-slate-900">BimaOne</strong> are launched on Software Bytes white label technology.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-green-700"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Contact Now
              </a>
              <a
                href="#features"
                className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Platform Features
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
              {['Built for Indian insurance', 'POSP & partner ready', 'Free demo'].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <Icon name="check" className="h-4 w-4 text-green-600" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Partner dashboard mockup */}
          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">YB</div>
                  <span className="font-semibold text-slate-900">Your Brand Insurance</span>
                </div>
                <span className="text-xs text-slate-500">This Month</span>
              </div>
              <div className="mb-4 grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { label: 'Active POSPs', value: '320' },
                  { label: 'Policies', value: '4,180' },
                  { label: 'Payouts', value: '₹6.8L' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-slate-50 p-2.5 sm:p-3">
                    <p className="text-[11px] text-slate-500 sm:text-xs">{stat.label}</p>
                    <p className="mt-1 text-sm font-bold text-slate-900 sm:text-lg">{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="divide-y divide-slate-100 rounded-xl border border-slate-100">
                {[
                  { name: 'Partner: Raipur', work: 'Motor · 142 policies', status: 'Top state', tone: 'bg-green-100 text-green-700' },
                  { name: 'Partner: Indore', work: 'Health · 86 policies', status: 'Payout due', tone: 'bg-amber-100 text-amber-700' },
                  { name: 'Partner: Nagpur', work: 'Term life · 39 policies', status: 'New POSP', tone: 'bg-blue-100 text-blue-700' },
                ].map((row) => (
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

      {/* Business types */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Who it is for"
            title="Built for the Indian insurance distribution business"
            subtitle="Whether you run a POSP network or are starting an insurtech brand, launch on a platform made for how insurance is sold in India."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {businessTypes.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon name={item.icon} />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {insuranceLines.map((line) => (
              <span key={line} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700">
                {line}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-24 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Platform features"
            title="Everything an Indian insurance brand needs"
            subtitle="Partners, policies, renewals, payouts and reports, ready to launch under your name."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-white hover:shadow-md">
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

      {/* References + compliance note */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Our white label work</span>
            <h2 className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">Indian insurance brands launched with Software Bytes</h2>
            <div className="mt-5 space-y-3">
              {[
                { name: 'BimaMox', initials: 'BM', color: 'from-blue-600 to-indigo-600' },
                { name: 'BimaOne', initials: 'B1', color: 'from-emerald-600 to-teal-600' },
              ].map((brand) => (
                <div key={brand.name} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${brand.color} font-bold text-white`}>
                    {brand.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{brand.name}</p>
                    <p className="text-xs text-slate-500">Launched on Software Bytes white label platform</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/insurance-white-label-software" className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:underline">
              More about our white label insurance software →
            </Link>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
              <Icon name="info" />
            </div>
            <h2 className="mt-4 text-xl font-bold text-slate-900">A note on IRDAI licensing</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              Software Bytes provides the technology platform. Selling or distributing insurance in India needs the right IRDAI
              registration, such as a broker, corporate agent, IMF or POSP tie-up with a licensed intermediary. We build the
              platform around your licence type and business model. Please confirm your licensing with your insurer partner or a
              compliance advisor.
            </p>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pan-India"
            title="Serving insurance businesses across India"
            subtitle="Based in Raipur, Chhattisgarh. We work with clients anywhere in India through online meetings, WhatsApp and remote support."
          />
          <div className="flex flex-wrap justify-center gap-2">
            {regions.map((region) => (
              <span key={region} className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1.5 text-sm text-slate-700 ring-1 ring-slate-200">
                <Icon name="globe" className="h-3.5 w-3.5 text-blue-600" />
                {region}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-semibold">
            <Link to="/custom-insurance-software-development" className="text-blue-600 hover:underline">
              Custom insurance software →
            </Link>
            <Link to="/insurance-software-development-cost" className="text-blue-600 hover:underline">
              Insurance software cost →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="White label insurance platform in India: common questions" />
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
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Launch your insurance brand in India</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            Like BimaMox and BimaOne, get your own white label insurance platform with Software Bytes. Free demo and consultation.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Contact Now
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

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Software Bytes on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 font-semibold text-white shadow-lg transition hover:bg-green-600 sm:bottom-6 sm:right-6"
      >
        <WhatsAppIcon className="h-6 w-6" />
        <span className="hidden sm:inline">Contact Now</span>
      </a>
    </div>
  );
};

export default InsurancePlatformIndia;
