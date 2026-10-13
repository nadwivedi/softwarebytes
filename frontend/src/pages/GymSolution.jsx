import { useState } from 'react';
import { Link } from 'react-router-dom';

const SITE_URL = 'https://gymsolution.in/';
const WHATSAPP_URL =
  'https://wa.me/916264682508?text=Hello%2C%20I%20want%20a%20demo%20of%20GymSolution%20software.';

const iconPaths = {
  users:
    'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  wallet:
    'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z',
  calendar: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  bell: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
  tag: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z',
  receipt: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z',
  chart:
    'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  phone: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  check: 'M5 13l4 4L19 7',
  arrow: 'M17 8l4 4m0 0l-4 4m4-4H3',
  chevron: 'M19 9l-7 7-7-7',
  external: 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14',
};

const Icon = ({ name, className = 'w-5 h-5' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPaths[name]} />
  </svg>
);

const features = [
  { icon: 'users', title: 'Member Management', description: 'Store every member profile, photo, contact and membership history in one place.' },
  { icon: 'tag', title: 'Membership Plans', description: 'Create monthly, quarterly, half-yearly and yearly plans with your own pricing.' },
  { icon: 'wallet', title: 'Fee Collection', description: 'Record payments, part payments and dues. See who has paid and who has not.' },
  { icon: 'bell', title: 'Renewal Reminders', description: 'Know which memberships are expiring soon and remind members on time.' },
  { icon: 'calendar', title: 'Attendance', description: 'Track daily check-ins and spot members who have stopped coming.' },
  { icon: 'receipt', title: 'Receipts', description: 'Give members clean, professional payment receipts.' },
  { icon: 'chart', title: 'Reports', description: 'Daily and monthly collection, active members and pending dues at a glance.' },
  { icon: 'phone', title: 'Works on Mobile', description: 'Manage your gym from your phone, front-desk PC or anywhere.' },
];

const steps = [
  { title: 'Add your plans', description: 'Set up your membership plans and prices once.' },
  { title: 'Register members', description: 'Add members, assign a plan and record the fee received.' },
  { title: 'Track & renew', description: 'Follow attendance, dues and expiring plans from the dashboard.' },
];

const audiences = ['Gyms', 'Fitness studios', 'Yoga centres', 'CrossFit & training clubs'];

const faqs = [
  { q: 'Who is GymSolution made for?', a: 'Gym owners, fitness studios and yoga centres who want to manage members and fees without registers or Excel.' },
  { q: 'Do I need to install anything?', a: 'No. GymSolution runs in the browser, so you can use it on a computer or mobile phone.' },
  { q: 'Can I manage multiple membership plans?', a: 'Yes. You can create as many plans as you need, with different durations and prices.' },
  { q: 'Can I get a demo before buying?', a: 'Yes. Contact us on WhatsApp or visit gymsolution.in and we will show you a free demo.' },
];

const mockRows = [
  { name: 'Amit Sharma', plan: 'Yearly', status: 'Active', tone: 'bg-green-100 text-green-700' },
  { name: 'Neha Patel', plan: 'Monthly', status: 'Expires in 3 days', tone: 'bg-amber-100 text-amber-700' },
  { name: 'Rahul Yadav', plan: 'Quarterly', status: 'Fee Due', tone: 'bg-rose-100 text-rose-700' },
  { name: 'Sneha Gupta', plan: 'Half-yearly', status: 'Active', tone: 'bg-green-100 text-green-700' },
];

const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <div className="mx-auto mb-10 max-w-2xl text-center">
    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">{eyebrow}</span>
    <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
    {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
  </div>
);

const GymSolution = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl"></div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Product by Software Bytes
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Complete <span className="text-emerald-600">Gym Management</span> Software
            </h1>
            <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
              Manage members, plans, fees, attendance and renewals from one simple dashboard. No more registers or Excel sheets.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Visit GymSolution.in
                <Icon name="external" className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                Book Free Demo
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
              {['Works on mobile & PC', 'No installation', 'Free demo'].map((item) => (
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
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-xs font-bold text-white">GS</div>
                  <span className="font-semibold text-slate-900">GymSolution</span>
                </div>
                <span className="text-xs text-slate-500">Today</span>
              </div>
              <div className="mb-4 grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { label: 'Active Members', value: '186' },
                  { label: 'Expiring Soon', value: '9' },
                  { label: 'Collected', value: '₹24,600' },
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
                    <div className="flex min-w-0 items-center gap-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xs font-semibold text-emerald-700">
                        {row.name.split(' ').map((p) => p[0]).join('')}
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-slate-900">{row.name}</p>
                        <p className="text-xs text-slate-500">{row.plan} plan</p>
                      </div>
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

      {/* Features */}
      <section id="features" className="scroll-mt-24 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Features"
            title="Everything your gym needs"
            subtitle="Spend less time on paperwork and more time training your members."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-emerald-200 hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Icon name={feature.icon} />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How it works" title="Get started in three simple steps" />
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-2xl bg-slate-50 p-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-1.5 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Who it's for</span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Built for fitness businesses of every size
            </h2>
            <p className="mt-3 text-slate-600">
              From a single-room gym to a busy fitness centre, GymSolution keeps members, fees and renewals under control.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {audiences.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-800">
                  <Icon name="check" className="h-4 w-4 shrink-0 text-green-600" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6 sm:p-8">
            <h3 className="font-semibold text-slate-900">Why gym owners choose GymSolution</h3>
            <ul className="mt-4 space-y-3">
              {[
                'No more registers or Excel sheets',
                'Never miss a membership renewal',
                'Know your pending fees at a glance',
                'Access your gym data from mobile or laptop',
                'Daily and monthly collection reports',
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
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200">
            {faqs.map((faq, index) => (
              <div key={faq.q}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-slate-900"
                >
                  {faq.q}
                  <Icon name="chevron" className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && <p className="px-5 pb-4 text-sm text-slate-600">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-slate-900 px-6 py-10 text-center sm:px-12 sm:py-14">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Ready to run your gym smarter?</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            Visit gymsolution.in or book a free demo to see how it fits your gym.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
            >
              Visit GymSolution.in
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

export default GymSolution;
