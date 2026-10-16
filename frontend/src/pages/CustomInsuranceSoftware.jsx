import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const WHATSAPP_URL =
  'https://wa.me/916264682508?text=Hello%2C%20I%20want%20custom%20insurance%20software%20development%20from%20Software%20Bytes.';

const iconPaths = {
  shield:
    'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  users:
    'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  wallet:
    'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
  clipboard:
    'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
  calculator:
    'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
  chart:
    'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  globe:
    'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
  phone: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  link: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
  cog: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z',
  location:
    'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
  check: 'M5 13l4 4L19 7',
  x: 'M6 18L18 6M6 6l12 12',
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

const customModules = [
  { icon: 'users', title: 'Custom Insurance CRM', description: 'Lead stages, follow-ups and customer fields designed around how your team actually sells.' },
  { icon: 'shield', title: 'Policy Administration', description: 'Policy records, endorsements and documents with fields specific to your lines of business.' },
  { icon: 'calculator', title: 'Quote & Premium Calculators', description: 'Your own premium rules, comparison screens and quote PDFs for customers.' },
  { icon: 'wallet', title: 'Commission & Payout Engine', description: 'Complex slab-wise, insurer-wise and hierarchy-wise commission rules calculated automatically.' },
  { icon: 'clipboard', title: 'Claims Workflow', description: 'Claim intimation, document checklist, approvals and status updates matched to your process.' },
  { icon: 'chart', title: 'Custom MIS & Dashboards', description: 'The exact reports your management, branches and partners ask for, with exports.' },
  { icon: 'globe', title: 'Customer & Partner Portals', description: 'Self-service portals for customers, POSPs, sub-agents or corporate clients.' },
  { icon: 'phone', title: 'Custom Mobile Apps', description: 'Android and iOS apps for agents in the field or customers buying and renewing policies.' },
];

const integrations = [
  'WhatsApp Business API',
  'SMS & email',
  'Payment gateway',
  'Insurer APIs',
  'KYC & document verification',
  'Accounting software',
  'Google Sheets & Excel import',
  'Your existing systems',
];

const comparison = [
  { point: 'Built around your exact workflow', custom: true, ready: false },
  { point: 'Your own premium, commission and approval rules', custom: true, ready: false },
  { point: 'Integrations with your insurers and tools', custom: true, ready: false },
  { point: 'Reports designed for your management', custom: true, ready: false },
  { point: 'New features added as you grow', custom: true, ready: false },
];

const process = [
  { title: 'Requirement study', description: 'We understand your products, team structure, rules and pain points in detail.' },
  { title: 'Scope & quote', description: 'You get a written scope with modules, screens, timeline and cost before we start.' },
  { title: 'Design & development', description: 'We build in stages and show you working software regularly for feedback.' },
  { title: 'Testing & data migration', description: 'We test with your team and move your existing data from Excel or old software.' },
  { title: 'Launch & support', description: 'We go live, train your staff and keep supporting and improving the software.' },
];

const faqs = [
  {
    q: 'What is custom insurance software development?',
    a: 'Custom insurance software development means building software specifically for your insurance business, with your own workflows, rules, reports and integrations, instead of using a fixed ready-made product.',
  },
  {
    q: 'Who needs custom insurance software?',
    a: 'Insurance agencies, brokers, POSP networks, corporate agents and insurtech startups whose processes, commission rules or integrations do not fit ready-made software.',
  },
  {
    q: 'How much does custom insurance software development cost?',
    a: 'Insurance software development with Software Bytes starts at ₹29,999. Custom projects are quoted after understanding your modules, users, integrations and mobile app needs. Message us on WhatsApp for a quote.',
  },
  {
    q: 'How long does custom insurance software take to build?',
    a: 'It depends on the scope. Smaller projects take a few weeks, while larger platforms with portals, apps and integrations take longer. We share a clear timeline with the quote.',
  },
  {
    q: 'Can you migrate data from my current software or Excel?',
    a: 'Yes. We import your existing customer, policy and commission data from Excel sheets or your old software during setup.',
  },
  {
    q: 'Where is Software Bytes located?',
    a: 'Software Bytes is an IT company based in Raipur, Chhattisgarh. We work with insurance businesses across India through online meetings, WhatsApp and remote support.',
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
      name: 'Custom Insurance Software Development',
      serviceType: 'Custom Insurance Software Development',
      url: 'https://softwarebytes.in/custom-insurance-software-development',
      description:
        'Custom insurance software development by Software Bytes, Raipur: CRM, policy administration, quote engines, commission rules, claims workflows, portals, mobile apps and integrations built for your insurance business.',
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

const CustomInsuranceSoftware = () => {
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
              <Icon name="location" className="h-3.5 w-3.5" />
              Software Bytes, Raipur, Chhattisgarh
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Custom Insurance Software Development <span className="text-blue-600">Built Around Your Business</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
              When ready-made software does not fit, Software Bytes builds custom insurance software for agencies, brokers, POSP
              networks and insurtech startups, with your workflows, rules, reports and integrations.
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
                href="#modules"
                className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                What We Build
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
              {['Starts at ₹29,999', 'Written scope & quote', 'Support after launch'].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <Icon name="check" className="h-4 w-4 text-green-600" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Custom vs ready comparison */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl sm:p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Icon name="cog" className="h-4 w-4" />
              </div>
              <span className="font-semibold text-slate-900">Custom vs ready-made software</span>
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-100">
              <div className="grid grid-cols-[1fr_auto_auto] gap-x-3 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-500 sm:gap-x-5">
                <span></span>
                <span className="w-14 text-center text-blue-700">Custom</span>
                <span className="w-14 text-center">Ready</span>
              </div>
              {comparison.map((row) => (
                <div key={row.point} className="grid grid-cols-[1fr_auto_auto] items-center gap-x-3 border-t border-slate-100 px-3 py-2.5 text-sm sm:gap-x-5">
                  <span className="text-slate-700">{row.point}</span>
                  <span className="flex w-14 justify-center">
                    <Icon name="check" className="h-4 w-4 text-green-600" />
                  </span>
                  <span className="flex w-14 justify-center">
                    <Icon name="x" className="h-4 w-4 text-slate-300" />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section id="modules" className="scroll-mt-24 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What we build"
            title="Custom insurance software modules"
            subtitle="Pick the modules you need. Each one is designed and built for your process, not forced into a template."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {customModules.map((item) => (
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

      {/* Integrations */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Integrations</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Connected to the tools your insurance business uses
            </h2>
            <p className="mt-3 text-slate-600">
              Custom software can talk to your existing systems. We integrate messaging, payments, insurer systems and data
              imports so your team stops copying data between tools.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {integrations.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-medium text-slate-800">
                <Icon name="link" className="h-4 w-4 shrink-0 text-blue-600" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our process" title="How we build your custom insurance software" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-5">
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

      {/* Other options */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Other ways to start"
            title="Not sure you need fully custom software?"
            subtitle="Software Bytes also offers faster and lower-cost ways to get your insurance software."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                to: '/insurance-software-development',
                title: 'Insurance Software Development',
                description: 'Ready modules for CRM, policies, renewals and commissions, customised for you.',
              },
              {
                to: '/insurance-white-label-software',
                title: 'White Label Insurance Software',
                description: 'Launch under your own brand, like BimaMox and BimaOne.',
              },
              {
                to: '/insurance-software-development-cost',
                title: 'Insurance Software Cost',
                description: 'See what affects the price. Development starts at ₹29,999.',
              },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-white hover:shadow-md"
              >
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-700">{item.title} →</h3>
                <p className="mt-1.5 text-sm text-slate-600">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Custom insurance software development: common questions" />
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
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Tell us what your insurance business needs</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            Contact Software Bytes, Raipur, Chhattisgarh, for custom insurance software development. Free consultation and a
            written quote.
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

export default CustomInsuranceSoftware;
