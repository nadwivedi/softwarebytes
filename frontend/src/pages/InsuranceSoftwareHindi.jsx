import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const WHATSAPP_URL = `https://wa.me/916264682508?text=${encodeURIComponent(
  'नमस्ते Software Bytes, मुझे अपने insurance business के लिए software बनवाना है।'
)}`;

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
  chart:
    'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  phone: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  globe:
    'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
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

const problems = [
  'Customer और policy की जानकारी register या Excel में बिखरी रहती है',
  'Renewal की तारीख याद नहीं रहती और customer दूसरे agent के पास चला जाता है',
  'किस insurer से कितना commission आया और कितना बाकी है, पता नहीं चलता',
  'Sub-agent या POSP का business और payout हाथ से जोड़ना पड़ता है',
];

const howToSteps = [
  {
    title: 'अपनी ज़रूरत लिखें',
    description:
      'आप agent हैं, agency चलाते हैं या broker हैं? कितने लोग software चलाएंगे? कौन सा काम सबसे ज़्यादा समय लेता है? यह सब एक कागज़ पर लिख लें।',
  },
  {
    title: 'ज़रूरी modules तय करें',
    description:
      'शुरुआत में CRM, policy management और renewal reminder काफी हैं। बाद में commission, claims, reports और mobile app जोड़ सकते हैं।',
  },
  {
    title: 'सही तरीका चुनें',
    description:
      'Ready software, white label (अपने brand के नाम से) या पूरी तरह custom development। नीचे तीनों तरीकों की तुलना दी गई है।',
  },
  {
    title: 'भरोसेमंद software company चुनें',
    description:
      'ऐसी company चुनें जिसे insurance business की समझ हो, जो demo दिखाए, लिखित quote दे और launch के बाद support करे।',
  },
  {
    title: 'Demo देखें और लिखित quote लें',
    description:
      'काम शुरू करने से पहले demo देखें। Modules, समय सीमा, कीमत और yearly charges सब लिखित में लें ताकि बाद में कोई hidden charge न हो।',
  },
  {
    title: 'पुराना data डलवाएं और training लें',
    description:
      'Excel या पुराने software का data नए software में import करवाएं और अपनी team को training दिलवाएं, फिर software live करें।',
  },
];

const modules = [
  { icon: 'users', title: 'Customer CRM', description: 'Leads, customers, परिवार की जानकारी और follow-up एक जगह।' },
  { icon: 'shield', title: 'Policy Management', description: 'Life, health, motor और general insurance की सारी policies documents के साथ।' },
  { icon: 'bell', title: 'Renewal Reminder', description: 'Renewal और premium due की अपने-आप याद, WhatsApp और SMS पर customer को reminder।' },
  { icon: 'wallet', title: 'Commission Tracking', description: 'Insurer-wise और agent-wise commission, मिला हुआ और बाकी।' },
  { icon: 'clipboard', title: 'Claims Tracking', description: 'Claim की जानकारी, documents और status ताकि customer को समय पर update मिले।' },
  { icon: 'chart', title: 'Reports / MIS', description: 'महीने का business, renewal, commission और agent performance की reports।' },
  { icon: 'globe', title: 'Website', description: 'Lead और quote request लेने के लिए आपकी अपनी insurance website।' },
  { icon: 'phone', title: 'Mobile App', description: 'Android और iOS app ताकि field में भी सारा काम mobile से हो सके।' },
];

const options = [
  {
    title: 'Ready Software',
    tag: 'सबसे तेज़',
    points: ['जल्दी शुरू', 'कम खर्च', 'Features पहले से तय'],
    bestFor: 'छोटे insurance agents के लिए',
    link: '/insurance-software-development',
  },
  {
    title: 'White Label Software',
    tag: 'अपना brand',
    points: ['आपका नाम, logo और domain', 'Ready platform पर जल्दी launch', 'BimaMox और BimaOne इसी तरह launch हुए'],
    bestFor: 'Brokers, POSP network और startups के लिए',
    link: '/insurance-white-label-software',
  },
  {
    title: 'Custom Development',
    tag: 'पूरी आज़ादी',
    points: ['आपके काम के तरीके के हिसाब से', 'अपने commission और approval rules', 'जो चाहिए वो feature'],
    bestFor: 'बड़ी agency और brokers के लिए',
    link: '/custom-insurance-software-development',
  },
];

const checklist = [
  'Insurance software बनाने का अनुभव हो',
  'काम शुरू करने से पहले free demo दिखाए',
  'लिखित quote दे, कोई hidden charge न हो',
  'Data सुरक्षित server पर रखे, role-wise login दे',
  'WhatsApp और SMS integration कर सके',
  'Launch के बाद भी support और updates दे',
];

const faqs = [
  {
    q: 'Insurance के लिए software कैसे बनवाएं?',
    a: 'पहले अपनी ज़रूरत और ज़रूरी modules तय करें, फिर ready, white label या custom में से तरीका चुनें। उसके बाद किसी भरोसेमंद software company से demo देखें, लिखित quote लें और data import व training के साथ software live करवाएं। Software Bytes यह पूरा काम करती है।',
  },
  {
    q: 'Insurance software बनवाने में कितना खर्च आता है?',
    a: 'Software Bytes के साथ insurance software development ₹29,999 से शुरू होता है। आखिरी कीमत modules, users की संख्या, mobile app और integrations पर निर्भर करती है। सही quote के लिए WhatsApp पर संपर्क करें।',
  },
  {
    q: 'Insurance software बनने में कितना समय लगता है?',
    a: 'Ready और white label software जल्दी शुरू हो जाता है। Custom software में modules के हिसाब से ज़्यादा समय लगता है। Software Bytes quote के साथ साफ़ समय सीमा बताती है।',
  },
  {
    q: 'क्या LIC agent या छोटे insurance agent के लिए भी software बन सकता है?',
    a: 'हाँ। छोटे agents के लिए customer, policy और renewal reminder वाला सरल software बनाया जा सकता है, जिसे mobile पर भी चलाया जा सके।',
  },
  {
    q: 'क्या मैं अपने brand के नाम से insurance software launch कर सकता हूँ?',
    a: 'हाँ। White label software से आप अपने नाम, logo, domain और app के साथ insurance platform launch कर सकते हैं। BimaMox और BimaOne जैसे brands Software Bytes के white label platform पर launch हुए हैं।',
  },
  {
    q: 'Software Bytes कहाँ है?',
    a: 'Software Bytes रायपुर, छत्तीसगढ़ की IT company है। हम online meeting, WhatsApp और remote support के ज़रिए पूरे भारत में काम करते हैं।',
  },
];

const SectionHeading = ({ eyebrow, title, subtitle }) => (
  <div className="mx-auto mb-10 max-w-2xl text-center">
    <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">{eyebrow}</span>
    <h2 className="mt-2 text-2xl font-bold leading-snug tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
    {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
  </div>
);

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Insurance Software Development (Hindi)',
      serviceType: 'Insurance Software Development',
      inLanguage: 'hi',
      url: 'https://softwarebytes.in/insurance-ke-liye-software-kaise-banwaye',
      description:
        'Insurance के लिए software कैसे बनवाएं: Software Bytes, रायपुर छत्तीसगढ़ से insurance agents, agencies और brokers के लिए software, ₹29,999 से शुरू।',
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
      inLanguage: 'hi',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ],
};

const InsuranceSoftwareHindi = () => {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  return (
    <div lang="hi" className="bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"></div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-100">
              <Icon name="location" className="h-3.5 w-3.5" />
              Software Bytes, रायपुर, छत्तीसगढ़
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-snug tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Insurance के लिए Software <span className="text-blue-600">कैसे बनवाएं?</span>
            </h1>
            <p className="mt-2 text-sm font-medium text-slate-500">Insurance ke liye software kaise banwaye: पूरी जानकारी हिंदी में</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Insurance agent, agency या broker हैं और अपने काम के लिए software बनवाना चाहते हैं? इस page पर आसान भाषा में जानिए
              कि software कैसे बनवाएं, कौन से features चाहिए और खर्च कितना आता है। Software Bytes के साथ insurance software
              <strong className="text-slate-900"> ₹29,999 से शुरू</strong> होता है।
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-green-700"
              >
                <WhatsAppIcon className="h-5 w-5" />
                अभी संपर्क करें
              </a>
              <a
                href="#steps"
                className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-50"
              >
                6 आसान स्टेप देखें
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
              {['Free demo', 'लिखित quote', 'Launch के बाद support'].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <Icon name="check" className="h-4 w-4 text-green-600" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Problems card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
            <h2 className="text-lg font-bold text-slate-900">क्या आपके साथ भी ऐसा होता है?</h2>
            <ul className="mt-4 space-y-3">
              {problems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100 text-xs font-bold text-rose-600">
                    !
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-xl bg-green-50 p-4 text-sm font-medium text-green-800">
              सही insurance software इन सभी परेशानियों को एक जगह से हल कर देता है।
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="steps" className="scroll-mt-24 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="स्टेप बाय स्टेप"
            title="Insurance software बनवाने के 6 आसान स्टेप"
            subtitle="इन स्टेप को follow करेंगे तो सही software, सही कीमत पर बनेगा।"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {howToSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Features"
            title="Insurance software में कौन से features होने चाहिए?"
            subtitle="ज़रूरत के हिसाब से इनमें से modules चुनें। शुरुआत छोटे से करें, बाद में बढ़ाएं।"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map((item) => (
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

      {/* Options */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="तीन तरीके"
            title="Ready, White Label या Custom: आपके लिए कौन सा सही है?"
            subtitle="Software Bytes तीनों तरीकों से insurance software बनाती है।"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {options.map((item) => (
              <div key={item.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6">
                <span className="w-fit rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-700">{item.tag}</span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h3>
                <ul className="mt-4 flex-1 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 rounded-lg bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600">{item.bestFor}</p>
                <Link to={item.link} className="mt-4 text-sm font-semibold text-blue-600 hover:underline">
                  और जानें →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost + checklist */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl bg-slate-900 p-6 text-white sm:p-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">खर्च</span>
            <h2 className="mt-2 text-2xl font-bold">Insurance software बनवाने में कितना खर्च आता है?</h2>
            <div className="mt-5 flex items-end gap-2">
              <span className="text-4xl font-extrabold sm:text-5xl">₹29,999</span>
              <span className="pb-1 text-slate-400">से शुरू</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              आखिरी कीमत इस पर निर्भर करती है कि आपको कौन से modules चाहिए, कितने users होंगे, mobile app चाहिए या नहीं, और
              कौन से integrations (WhatsApp, SMS, payment) लगेंगे। काम शुरू करने से पहले लिखित quote मिलेगा।
            </p>
            <Link to="/insurance-software-development-cost" className="mt-5 inline-block text-sm font-semibold text-blue-300 hover:underline">
              कीमत की पूरी जानकारी →
            </Link>
          </div>
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Checklist</span>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">Software company चुनते समय क्या देखें?</h2>
            <ul className="mt-5 space-y-3">
              {checklist.map((item) => (
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

      {/* Why Software Bytes */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">Software Bytes क्यों?</span>
          <h2 className="mt-2 text-2xl font-bold leading-snug tracking-tight text-slate-900 sm:text-3xl">
            रायपुर, छत्तीसगढ़ की IT company, पूरे भारत में insurance software
          </h2>
          <p className="mt-4 leading-relaxed text-slate-600">
            Software Bytes insurance agents, agencies और brokers के लिए software बनाती है। हमने BimaMox और BimaOne जैसे insurance
            brands के लिए white label development किया है। हम आपकी ज़रूरत समझकर software बनाते हैं, पुराना data डालते हैं, team को
            training देते हैं और launch के बाद भी साथ रहते हैं।
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="सवाल-जवाब" title="Insurance software बनवाने से जुड़े आम सवाल" />
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
                <p className={`px-5 pb-4 text-sm leading-relaxed text-slate-600 ${openFaq === index ? '' : 'hidden'}`}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-slate-900 px-6 py-10 text-center sm:px-12 sm:py-14">
          <h2 className="text-2xl font-bold leading-snug text-white sm:text-3xl">अपना insurance software आज ही बनवाएं</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            Software Bytes, रायपुर, छत्तीसगढ़ से WhatsApp पर बात करें। Free demo और सही quote पाएं।
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              <WhatsAppIcon className="h-5 w-5" />
              अभी संपर्क करें
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
        aria-label="WhatsApp पर Software Bytes से संपर्क करें"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 font-semibold text-white shadow-lg transition hover:bg-green-600 sm:bottom-6 sm:right-6"
      >
        <WhatsAppIcon className="h-6 w-6" />
        <span className="hidden sm:inline">अभी संपर्क करें</span>
      </a>
    </div>
  );
};

export default InsuranceSoftwareHindi;
