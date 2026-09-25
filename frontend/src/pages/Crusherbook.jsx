import { useState } from 'react';
import { Link } from 'react-router-dom';

const WHATSAPP_URL =
  'https://wa.me/916264682508?text=Hello%20Crusherbook%2C%20I%20want%20a%20demo%20for%20the%20software.';

const CALL_URL = 'tel:+916264682508';

const heroHighlights = [
  { icon: 'sparkles', title: 'AI Slip Entry' },
  { icon: 'scale', title: 'Weighbridge Integration' },
  { icon: 'book', title: 'Party Ledger & Accounts' },
  { icon: 'chart', title: 'Daily Profit Reports' },
];

const iconPaths = {
  camera:
    'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z',
  sparkles:
    'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  check: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  scale: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
  truck:
    'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0',
  chat: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  calendar:
    'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  users:
    'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
  chart:
    'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  wallet:
    'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
  cube: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
  book: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  trend: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
  shield:
    'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  phone: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  desktop:
    'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  cloud: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
  offline:
    'M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414',
  bolt: 'M13 10V3L4 14h7v7l9-11h-7z',
  arrow: 'M17 8l4 4m0 0l-4 4m4-4H3',
  chevron: 'M19 9l-7 7-7-7',
  star: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
};

const Icon = ({ name, className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPaths[name]} />
  </svg>
);

const WhatsAppIcon = ({ className = 'w-6 h-6' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const aiSteps = [
  {
    icon: 'camera',
    title: 'Snap a photo',
    description:
      'Your operator or driver clicks a picture of the physical weighbridge or sales slip using the mobile app, or uploads it from the web.',
  },
  {
    icon: 'sparkles',
    title: 'AI reads the slip',
    description:
      'Our AI engine instantly reads the date, vehicle number, party, material, gross weight and tare weight — no manual typing.',
  },
  {
    icon: 'check',
    title: 'Entry is saved',
    description:
      'The sales or boulder entry is created automatically and the party ledger, stock and daily report update the same minute.',
  },
];

const weighbridgeCards = [
  { icon: 'scale', title: 'Live weight capture', description: 'Gross and tare read from the scale' },
  { icon: 'book', title: 'Auto sales slip', description: 'Created before the truck leaves' },
  { icon: 'wallet', title: 'Ledger updated', description: 'Party balance changes instantly' },
  { icon: 'chat', title: 'WhatsApp update', description: 'Party gets the slip on WhatsApp' },
];

const featureColors = ['bg-orange-500', 'bg-blue-600', 'bg-emerald-500', 'bg-violet-600', 'bg-rose-500', 'bg-sky-600'];

const coreFeatures = [
  {
    icon: 'sparkles',
    title: 'AI Auto Entry (Slip Upload)',
    description:
      'Snap a photo of your weighbridge or sales slip. AI reads vehicle number, weight, date and party, and fills the entry for you.',
  },
  {
    icon: 'scale',
    title: 'Weighbridge Integration',
    description:
      'Connect your weighbridge directly. Weights flow automatically from the scale to your system in real time.',
  },
  {
    icon: 'chat',
    title: 'Automated WhatsApp Alerts',
    description:
      'Send pending balance notifications, payment reminders and transaction updates to parties on WhatsApp automatically.',
  },
  {
    icon: 'calendar',
    title: 'Daily Report (Daybook)',
    description:
      'Automatic end-of-day summary of all entries, total sales, boulder moved and cash collected. Share it with your accountant in one click.',
  },
  {
    icon: 'book',
    title: 'Party Ledger',
    description:
      'See what every customer owes you — transactions, pending amounts, payment history and credit limits in one clear ledger.',
  },
  {
    icon: 'trend',
    title: 'Sales Ledger Report',
    description:
      'Daily, weekly and monthly sales summaries. Find your top parties, seasonal trends and best-selling material grades.',
  },
  {
    icon: 'cube',
    title: 'Stock Movement',
    description:
      'Track boulder coming in and crushed material going out. Know your live stock of every size without counting heaps.',
  },
  {
    icon: 'wallet',
    title: 'Expense Tracking',
    description:
      'Record fuel, labour, maintenance and repairs by category. See exactly where money goes every single day.',
  },
  {
    icon: 'users',
    title: 'Payroll & Employee Panel',
    description:
      'Manage staff work records and wages. Role-based access lets employees see only their assigned data — not pricing or ledgers.',
  },
];

const plans = [
  {
    name: 'Basic',
    price: '₹3,999',
    description: 'For entry, records and ledger.',
    features: [
      'Crusher entry & records',
      'Sales & boulder entry',
      'Party wise ledger',
      'Expense management',
      'Stock movement',
      '1 employee login',
    ],
  },
  {
    name: 'Advanced',
    price: '₹5,999',
    badge: 'Most Popular',
    popular: true,
    description: 'For AI auto entry and weighbridge entry.',
    features: [
      'Everything in Basic',
      'AI auto entry (slip photo upload)',
      'Weighbridge entry & faster weight capture',
      'Automated WhatsApp alerts',
      'Dispatch flow',
      '3 employee logins',
    ],
  },
  {
    name: 'Enterprise',
    price: '₹7,999',
    badge: 'Best Value',
    description: 'For multi-plant control and priority support.',
    features: [
      'Everything in Advanced',
      'Multi-plant management',
      'Advanced profit & analytics',
      'Custom user roles',
      'Data export & backup',
      'Priority support · 10 logins',
    ],
  },
];

const testimonials = [
  {
    quote:
      'Manual slip entry used to take our staff hours every evening. With CrusherBook, boulder entries and party ledger update the same minute the truck leaves the weighbridge.',
    name: 'Rajesh Sahu',
    role: 'Crusher Plant Owner',
    location: 'Raipur, Chhattisgarh',
  },
  {
    quote:
      'Our dispatch team loves how fast sales slips get created now. Weighbridge readings flow straight into billing without any retyping.',
    name: 'Suresh Mahato',
    role: 'Operations Head',
    location: 'Dhanbad, Jharkhand',
  },
  {
    quote:
      'We run two crushers and CrusherBook gives us combined stock and profit reports instantly. No more waiting for the accountant to reconcile registers.',
    name: 'Biswajit Patra',
    role: 'Crusher Plant Owner',
    location: 'Rourkela, Odisha',
  },
];

const faqs = [
  {
    question: 'How does AI slip photo entry work?',
    answer:
      'Take a photo of any weighbridge or sales slip with the CrusherBook app. The AI reads the date, vehicle number, party, material and weights, fills the entry, and you just confirm. It saves hours of manual typing every day and removes entry mistakes.',
  },
  {
    question: 'Can CrusherBook connect to my existing weighbridge?',
    answer:
      'Yes. CrusherBook works with slip-based entry today and can be connected to your weighbridge so weights flow automatically into the system. Talk to our team on WhatsApp and we will check your weighbridge setup.',
  },
  {
    question: 'Will my employees see my prices and ledger?',
    answer:
      'No. The employee panel is role-based. Staff only see the work you assign — like sales entry or slip upload — while pricing, ledger and profit reports stay with the owner.',
  },
  {
    question: 'Does it work without internet?',
    answer:
      'Yes. Along with the cloud version we offer an offline variant with a one-time lifetime plan, perfect for plants with poor connectivity.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Every plan comes with a 14-day free trial and no credit card is required. Our team also helps you set up parties, materials and rates on day one.',
  },
];

const heroStats = [
  { icon: 'star', value: 'Since 2021', label: 'Serving crusher plants', tint: 'border-blue-200 bg-blue-50', dot: 'bg-blue-600', text: 'text-blue-700' },
  { icon: 'star', value: '4.8 / 5', label: 'Rated by plant owners', tint: 'border-emerald-200 bg-emerald-50', dot: 'bg-emerald-600', text: 'text-emerald-700' },
  { icon: 'wallet', value: '₹3,999', label: 'Plans from, per year', tint: 'border-amber-200 bg-amber-50', dot: 'bg-amber-500', text: 'text-amber-700' },
  { icon: 'calendar', value: '14 days', label: 'Free trial, no card', tint: 'border-violet-200 bg-violet-50', dot: 'bg-violet-600', text: 'text-violet-700' },
];

const stepTints = [
  { card: 'border-blue-200 bg-blue-50/60', num: 'bg-blue-600' },
  { card: 'border-emerald-200 bg-emerald-50/60', num: 'bg-emerald-600' },
  { card: 'border-amber-200 bg-amber-50/60', num: 'bg-amber-500' },
];

const Pill = ({ children }) => (
  <span className="inline-block rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
    {children}
  </span>
);

const SectionHeading = ({ pill, title, subtitle }) => (
  <div className="mx-auto mb-10 max-w-2xl text-center">
    <Pill>{pill}</Pill>
    <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">{title}</h2>
    {subtitle && <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">{subtitle}</p>}
  </div>
);

const Crusherbook = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 pt-28 pb-24 sm:pb-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 right-0 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]"></div>
        </div>

        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Trusted by crusher plants since 2021
          </span>

          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Crusher plant management software
            <span className="block bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              CrusherBook
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            CrusherBook is software for managing your crusher plant. It makes daily crusher plant operations
            paperless and accounting easy for crusher plant owners.
          </p>

          <div className="mx-auto mt-7 grid max-w-3xl grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-4">
            {heroHighlights.map((item, index) => (
              <div
                key={item.title}
                className={`${index === 3 ? 'hidden lg:flex' : 'flex'} flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-2 py-3`}
              >
                <Icon name={item.icon} className="h-5 w-5 text-orange-400" />
                <span className="text-xs font-semibold leading-tight text-slate-100 sm:text-sm">{item.title}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-100"
            >
              Book a Free Demo
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <a
              href={CALL_URL}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              <Icon name="phone" className="h-4 w-4" />
              Call +91 62646 82508
            </a>
          </div>
        </div>
      </section>

      {/* Stat cards overlapping hero */}
      <div className="relative z-10 mx-auto -mt-12 grid max-w-6xl grid-cols-2 gap-3 px-4 sm:px-6 lg:grid-cols-4 lg:gap-4 lg:px-8">
        {heroStats.map((stat) => (
          <div key={stat.label} className={`flex items-center gap-3 rounded-xl border p-3 shadow-sm sm:p-4 ${stat.tint}`}>
            <span className={`hidden h-10 w-10 shrink-0 items-center justify-center rounded-full text-white sm:flex ${stat.dot}`}>
              <Icon name={stat.icon} className="h-5 w-5" />
            </span>
            <div>
              <p className={`text-lg font-extrabold sm:text-2xl ${stat.text}`}>{stat.value}</p>
              <p className="text-xs text-slate-600 sm:text-sm">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Features */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            pill="Features"
            title="Crusher management software built for plant owners"
            subtitle="From slip entry to party ledger to daily profit — everything a crusher plant needs, in one app."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.slice(0, 6).map((feature, index) => (
              <div key={feature.title} className="rounded-xl border border-slate-200 bg-white p-5 transition-shadow hover:shadow-md">
                <span className={`flex h-9 w-9 items-center justify-center rounded-lg text-white ${featureColors[index]}`}>
                  <Icon name={feature.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://crusherbook.com/features"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-orange-600"
            >
              View all features
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* How AI slip entry works */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading pill="AI Slip Entry" title="Slip to entry in three simple steps" />
          <div className="grid gap-4 md:grid-cols-3">
            {aiSteps.map((step, index) => (
              <div key={step.title} className={`rounded-xl border p-5 sm:p-6 ${stepTints[index].card}`}>
                <span className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white ${stepTints[index].num}`}>
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weighbridge panel */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 rounded-2xl bg-slate-800 p-6 sm:p-10 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-slate-200">
                Weighbridge Integration
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-tight text-white sm:text-4xl">
                From the scale straight into your books
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                Connect your weighbridge to CrusherBook and every reading flows in automatically — no retyping, no
                mistakes. Start with slip-based entry today and connect your weighbridge when you are ready.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-400 hover:text-orange-300"
              >
                Ask about your weighbridge
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {weighbridgeCards.map((card) => (
                <div key={card.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-slate-200">
                    <Icon name={card.icon} className="h-4 w-4" />
                  </span>
                  <p className="mt-3 text-sm font-bold text-white">{card.title}</p>
                  <p className="mt-0.5 text-xs text-slate-400">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading pill="Pricing" title="Simple yearly plans" subtitle="Every plan includes a 14-day free trial. No credit card required." />
          <div className="grid gap-4 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-xl border bg-white p-6 ${
                  plan.popular ? 'border-orange-400 shadow-lg shadow-orange-500/10' : 'border-slate-200'
                }`}
              >
                {plan.badge && (
                  <span
                    className={`absolute -top-3 left-6 rounded-full px-2.5 py-0.5 text-xs font-bold ${
                      plan.popular ? 'bg-orange-500 text-white' : 'bg-slate-800 text-white'
                    }`}
                  >
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{plan.description}</p>
                <p className="mt-5 text-3xl font-extrabold text-slate-900">
                  {plan.price}
                  <span className="text-sm font-medium text-slate-500"> / year</span>
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                      <Icon name="check" className="h-4 w-4 shrink-0 translate-y-0.5 text-emerald-500" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 rounded-lg px-4 py-2.5 text-center text-sm font-bold transition-colors ${
                    plan.popular
                      ? 'bg-orange-500 text-white hover:bg-orange-600'
                      : 'border border-slate-300 text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  Start Free Trial
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading pill="Testimonials" title="Loved by crusher plant owners" />
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d={iconPaths.star} />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">“{t.quote}”</blockquote>
                <figcaption className="mt-4 border-t border-slate-100 pt-3">
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">
                    {t.role} · {t.location}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading pill="FAQ" title="Questions about CrusherBook" />
          <div className="divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-slate-900 sm:text-base"
                    aria-expanded={isOpen}
                  >
                    {faq.question}
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-50 text-lg leading-none text-orange-600">
                      {isOpen ? '×' : '+'}
                    </span>
                  </button>
                  {isOpen && <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 rounded-2xl border border-orange-200 bg-orange-50 p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-xl font-bold leading-snug text-slate-900 sm:text-3xl">
                Stop managing on paper. <br className="hidden sm:block" />
                Run your crusher plant with CrusherBook.
              </h2>
              <p className="mt-2 text-sm text-slate-600">14-day free trial. No credit card required.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-orange-600"
              >
                Book a Free Demo
                <Icon name="arrow" className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-800 transition-colors hover:bg-slate-50"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with CrusherBook on WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
};

export default Crusherbook;
