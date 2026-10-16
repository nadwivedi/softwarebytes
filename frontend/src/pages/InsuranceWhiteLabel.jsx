import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const WHATSAPP_URL =
  'https://wa.me/916264682508?text=Hello%2C%20I%20want%20to%20launch%20my%20own%20insurance%20software%20with%20Software%20Bytes%20(white%20label).';

const iconPaths = {
  shield:
    'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  users:
    'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  bell: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
  wallet:
    'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
  palette:
    'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
  globe:
    'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
  phone: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  chart:
    'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  rocket: 'M13 10V3L4 14h7v7l9-11h-7z',
  check: 'M5 13l4 4L19 7',
  arrow: 'M17 8l4 4m0 0l-4 4m4-4H3',
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

const references = [
  {
    name: 'BimaMox',
    initials: 'BM',
    color: 'from-blue-600 to-indigo-600',
    description:
      'An insurance platform launched under its own brand on Software Bytes white label insurance software, with its own name, logo, domain and app.',
  },
  {
    name: 'BimaOne',
    initials: 'B1',
    color: 'from-emerald-600 to-teal-600',
    description:
      'Another insurance brand running on our white label platform, launched with custom branding and the modules its business needed.',
  },
];

const features = [
  { icon: 'palette', title: 'Your Brand, Your Logo', description: 'Your company name, logo, colours and domain on the software. Software Bytes stays in the background.' },
  { icon: 'users', title: 'Agent & POSP Management', description: 'Onboard agents, sub-agents and POSPs with their own logins, hierarchy and performance tracking.' },
  { icon: 'shield', title: 'Policy Management', description: 'Life, health, motor and general insurance policies of every insurer stored in one place with documents.' },
  { icon: 'bell', title: 'Renewal Reminders', description: 'Automatic renewal and premium due alerts with WhatsApp and SMS reminders to customers.' },
  { icon: 'wallet', title: 'Commission & Payouts', description: 'Insurer-wise and agent-wise commission, payout calculation and pending payment tracking.' },
  { icon: 'chart', title: 'MIS & Reports', description: 'Business, renewal, commission and agent reports for owners and branch managers.' },
  { icon: 'globe', title: 'Website & Customer Portal', description: 'A branded website with lead capture and quote request forms, plus a portal for your customers.' },
  { icon: 'phone', title: 'Android & iOS App', description: 'Mobile app published under your brand name so agents and customers can use it on the go.' },
];

const benefits = [
  'Launch in weeks instead of building from scratch for months',
  'Much lower cost than custom development from zero',
  'Proven platform already used by live insurance brands like BimaMox and BimaOne',
  'Full white labelling: your name, logo, domain and app',
  'Add custom features and modules as your business grows',
  'Hosting, updates, security and support handled by Software Bytes',
];

const steps = [
  { title: 'Share your requirement', description: 'Tell us about your insurance business, agent network and the modules you need.' },
  { title: 'Branding & setup', description: 'We set up the platform with your name, logo, colours, domain and business settings.' },
  { title: 'Customise & test', description: 'We add any custom features, import your data and test everything with your team.' },
  { title: 'Launch your brand', description: 'Your insurance software, website and app go live under your brand, with ongoing support.' },
];

const faqs = [
  {
    q: 'What is white label insurance software?',
    a: 'White label insurance software is a ready insurance platform that you launch under your own brand name, logo and domain. Software Bytes builds and maintains the technology, and your customers and agents only see your brand.',
  },
  {
    q: 'Which insurance brands use Software Bytes white label software?',
    a: 'Insurance brands such as BimaMox and BimaOne have been launched on Software Bytes white label insurance software. You can launch your own insurance brand in the same way.',
  },
  {
    q: 'How long does it take to launch my own insurance software?',
    a: 'Because the core platform is ready, a branded launch takes much less time than custom development. The exact timeline depends on the modules and custom features you need. Contact us on WhatsApp for a clear timeline.',
  },
  {
    q: 'Can I get a mobile app under my own brand?',
    a: 'Yes. We can publish Android and iOS apps with your brand name and logo along with the web software and website.',
  },
  {
    q: 'Can you add custom features to the white label platform?',
    a: 'Yes. Software Bytes is an insurance software development company, so we can add new modules, reports and integrations based on your workflow.',
  },
  {
    q: 'How much does white label insurance software cost?',
    a: 'Cost depends on the modules, number of users, app requirement and custom work. Message us on WhatsApp and we will share a quote and a free demo.',
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
      name: 'White Label Insurance Software',
      serviceType: 'White Label Insurance Software',
      url: 'https://softwarebytes.in/insurance-white-label-software',
      description:
        'Launch your own insurance software under your brand with Software Bytes white label insurance platform: agent and POSP management, policies, renewals, commissions, website and mobile app.',
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

const InsuranceWhiteLabel = () => {
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
              White Label Insurance Software
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Launch Your Own <span className="text-blue-600">Insurance Software</span> Under Your Brand
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
              Get a ready insurance platform with your name, logo, domain and mobile app. Software Bytes has done white label
              development for insurance brands like <strong className="text-slate-900">BimaMox</strong> and{' '}
              <strong className="text-slate-900">BimaOne</strong>. You can also launch your insurance software with Software Bytes.
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
                href="#references"
                className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                See Our Work
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
              {['Your brand & domain', 'Web + mobile app', 'Free demo'].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <Icon name="check" className="h-4 w-4 text-green-600" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Branding mockup */}
          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:p-5">
              <div className="mb-4 flex items-center justify-between rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-white">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-sm font-bold">YB</div>
                  <div>
                    <p className="font-semibold leading-tight">Your Brand Insurance</p>
                    <p className="text-xs text-blue-100">yourbrand.in</p>
                  </div>
                </div>
                <Icon name="shield" className="h-5 w-5 text-blue-100" />
              </div>
              <div className="mb-4 grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { label: 'Agents', value: '86' },
                  { label: 'Policies', value: '2,410' },
                  { label: 'Renewals', value: '54' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-slate-50 p-2.5 sm:p-3">
                    <p className="text-[11px] text-slate-500 sm:text-xs">{stat.label}</p>
                    <p className="mt-1 text-sm font-bold text-slate-900 sm:text-lg">{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {['Your logo & colours', 'Your domain & website', 'Your Android / iOS app'].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-lg border border-slate-100 px-3 py-2 text-sm text-slate-700">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-2 text-center text-xs text-slate-400">Sample branding for illustration</p>
          </div>
        </div>
      </section>

      {/* References */}
      <section id="references" className="scroll-mt-24 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our white label work"
            title="Insurance brands launched with Software Bytes"
            subtitle="We have done white label insurance software development for these brands. Yours can be next."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {references.map((item) => (
              <div key={item.name} className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-md">
                <div className="flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-lg font-bold text-white`}>
                    {item.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                    <p className="text-xs font-medium text-green-700">Live on Software Bytes white label</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl border border-dashed border-blue-300 bg-blue-50 p-6 text-center">
            <p className="font-semibold text-slate-900">You can also launch your insurance software with Software Bytes</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-2.5 font-semibold text-white transition hover:bg-green-700"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Contact Now on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What you get"
            title="Everything to run your insurance business, under your name"
            subtitle="A complete insurance platform for agencies, brokers and POSP networks, ready to brand and launch."
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

      {/* Why white label */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Why white label</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Your own insurance software without building it from zero
            </h2>
            <p className="mt-3 text-slate-600">
              Building insurance software from scratch takes months and a big budget. With Software Bytes white label insurance
              software, you start from a proven platform, put your brand on it and go live faster, while we handle the technology.
            </p>
            <p className="mt-3 text-slate-600">
              Want something fully custom instead?{' '}
              <Link to="/insurance-software-development" className="font-semibold text-blue-600 hover:underline">
                See our insurance software development services
              </Link>
              .
            </p>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
            <h3 className="font-semibold text-slate-900">Benefits of white label with Software Bytes</h3>
            <ul className="mt-4 space-y-3">
              {benefits.map((item) => (
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

      {/* Steps */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How it works" title="Launch your insurance brand in 4 steps" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
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
          <SectionHeading eyebrow="FAQ" title="White label insurance software: common questions" />
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
          <Icon name="rocket" className="mx-auto h-8 w-8 text-blue-400" />
          <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Launch your insurance software with Software Bytes</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            Like BimaMox and BimaOne, get your own branded insurance platform, website and app. Free demo and consultation.
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

export default InsuranceWhiteLabel;
