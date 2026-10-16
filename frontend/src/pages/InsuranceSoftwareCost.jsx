import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const WHATSAPP_URL =
  'https://wa.me/916264682508?text=Hello%2C%20I%20want%20to%20know%20the%20cost%20of%20insurance%20software%20development%20with%20Software%20Bytes.';

const iconPaths = {
  shield:
    'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  users:
    'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  phone: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  link: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
  palette:
    'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
  chart:
    'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
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

const starterIncludes = [
  'Customer and lead management (insurance CRM)',
  'Policy management for life, health, motor and general insurance',
  'Renewal and premium due reminders',
  'Basic commission tracking',
  'Web based software with secure login',
  'Setup, training and support from our Raipur team',
];

const costFactors = [
  { icon: 'users', title: 'Users & Roles', description: 'A single agent costs less than an agency or broker with branches, staff, sub-agents and POSP hierarchy.' },
  { icon: 'shield', title: 'Modules Needed', description: 'CRM and policies are the base. Claims, payouts, MIS reports and quote engines add to the scope.' },
  { icon: 'phone', title: 'Mobile App', description: 'Android and iOS apps for agents or customers are priced separately from the web software.' },
  { icon: 'link', title: 'Integrations', description: 'WhatsApp, SMS, email, payment gateway or insurer API integrations depend on the provider and effort.' },
  { icon: 'palette', title: 'Branding & White Label', description: 'Your own brand, domain, website and app store listing for launching an insurance platform.' },
  { icon: 'chart', title: 'Custom Features', description: 'Special workflows, reports or calculations built only for your business are quoted after discussion.' },
];

const faqs = [
  {
    q: 'What is the cost of insurance software development?',
    a: 'Insurance software development with Software Bytes starts at ₹29,999. The final cost depends on the modules, number of users, mobile app and integrations you need. Contact us on WhatsApp for an exact quote.',
  },
  {
    q: 'What do I get in the ₹29,999 starting package?',
    a: 'The starting package covers the core insurance software: customer and lead management, policy management, renewal reminders, basic commission tracking, secure web login, setup and training.',
  },
  {
    q: 'Why should I choose Software Bytes for insurance software development?',
    a: 'Software Bytes is an IT company based in Raipur, Chhattisgarh with experience in insurance software development, including white label platforms for insurance brands like BimaMox and BimaOne. We offer affordable pricing, custom development and direct support.',
  },
  {
    q: 'Do you work with clients outside Raipur and Chhattisgarh?',
    a: 'Yes. We are based in Raipur, Chhattisgarh and work with insurance agents, agencies and brokers across India through online meetings, WhatsApp and remote support.',
  },
  {
    q: 'Are there any hidden charges?',
    a: 'No. We share a clear quote before starting, with the scope, timeline and any yearly hosting or support charges written down.',
  },
  {
    q: 'Can I see a demo before paying?',
    a: 'Yes. Message us on WhatsApp and we will show you a free demo and discuss your requirement.',
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
      name: 'Insurance Software Development',
      serviceType: 'Insurance Software Development',
      url: 'https://softwarebytes.in/insurance-software-development-cost',
      description:
        'Insurance software development cost starts at ₹29,999 with Software Bytes, an IT company based in Raipur, Chhattisgarh.',
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
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: '29999',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'INR',
          minPrice: '29999',
        },
      },
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

const InsuranceSoftwareCost = () => {
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
              Insurance Software Development Cost <span className="text-blue-600">Starts at ₹29,999</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
              Get insurance software for your agency or brokerage at an affordable price. Contact Software Bytes, an IT company
              based in Raipur, Chhattisgarh, for insurance software development with clear pricing and no hidden charges.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-green-700"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Get a Quote on WhatsApp
              </a>
              <a
                href="#cost-factors"
                className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                What Affects Cost
              </a>
            </div>
          </div>

          {/* Price card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Starting package</p>
            <div className="mt-2 flex items-end gap-2">
              <span className="text-sm text-slate-500">from</span>
              <span className="text-4xl font-extrabold text-slate-900 sm:text-5xl">₹29,999</span>
            </div>
            <p className="mt-2 text-sm text-slate-500">Final price depends on your modules, users and integrations.</p>
            <ul className="mt-6 space-y-3">
              {starterIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Contact Software Bytes
            </a>
          </div>
        </div>
      </section>

      {/* Cost factors */}
      <section id="cost-factors" className="scroll-mt-24 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pricing explained"
            title="What decides your insurance software development cost"
            subtitle="Every insurance business is different. These are the main things that change the final price above ₹29,999."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {costFactors.map((item) => (
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

      {/* About Software Bytes */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Who we are</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Software Bytes: IT company in Raipur, Chhattisgarh
            </h2>
            <p className="mt-3 text-slate-600">
              Software Bytes is an IT company based in Raipur, Chhattisgarh. We build insurance software for agents, agencies and
              brokers, and have done white label insurance development for brands like BimaMox and BimaOne. We work with clients
              across India and give direct support after launch.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
              <Link to="/insurance-software-development" className="text-blue-600 hover:underline">
                Insurance software development →
              </Link>
              <Link to="/insurance-white-label-software" className="text-blue-600 hover:underline">
                White label insurance software →
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
            <h3 className="font-semibold text-slate-900">Why our pricing works for insurance businesses</h3>
            <ul className="mt-4 space-y-3">
              {[
                'Starts at ₹29,999, so small agents can afford it too',
                'Ready insurance modules keep development cost low',
                'Clear written quote before work starts',
                'Pay only for the features you need, add more later',
                'Local Raipur team with direct WhatsApp support',
              ].map((item) => (
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

      {/* FAQ */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Insurance software development cost: common questions" />
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
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Get your insurance software from ₹29,999</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            Contact Software Bytes, Raipur, Chhattisgarh, for a free demo and an exact quote for your insurance software.
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

export default InsuranceSoftwareCost;
