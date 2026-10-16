import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Service';
import Contact from './pages/Contact';
import About from './pages/About';
import Crusherbook from './pages/Crusherbook';
import RtoSarthi from './pages/RtoSarthi';
import GymSolution from './pages/GymSolution';
import InsuranceSoftware from './pages/InsuranceSoftware';
import InsuranceWhiteLabel from './pages/InsuranceWhiteLabel';
import InsuranceSoftwareCost from './pages/InsuranceSoftwareCost';
import GymWhiteLabel from './pages/GymWhiteLabel';
import CustomInsuranceSoftware from './pages/CustomInsuranceSoftware';
import InsurancePlatformIndia from './pages/InsurancePlatformIndia';
import InsuranceSoftwareHindi from './pages/InsuranceSoftwareHindi';

const seoByPath = {
  '/': {
    title: 'Software Bytes | ERP, Software, Web and Mobile Development',
    description:
      'Software Bytes is a professional IT company in Raipur offering ERP solutions, custom software development, website development, and mobile app services.',
  },
  '/services': {
    title: 'Services | Software Bytes',
    description:
      'Explore Software Bytes services: ERP solutions, custom software, web development, and mobile app development for growing businesses.',
  },
  '/about': {
    title: 'About Us | Software Bytes',
    description:
      'Learn about Software Bytes, a Raipur-based IT company delivering reliable ERP products and digital solutions for modern businesses.',
  },
  '/contact': {
    title: 'Contact | Software Bytes',
    description:
      'Contact Software Bytes for ERP, software, website, and mobile app requirements. Talk to our team for a free consultation.',
  },
  '/crusherbook': {
    title: 'Crusherbook | Stone Crusher Plant ERP with AI Slip Entry & Weighbridge Integration',
    description:
      'Crusherbook is stone crusher ERP software with AI slip photo entry, weighbridge integration, WhatsApp alerts, party ledger, stock, expenses and daily profit reports.',
  },
  '/rtosarthi': {
    title: 'RTO Sarthi | Software for RTO Agents and Consultants',
    description:
      'RTO Sarthi simplifies application tracking, document management, and client accounting for RTO consultancy businesses.',
  },
  '/gymsolution': {
    title: 'GymSolution | Gym Management Software by Software Bytes',
    description:
      'GymSolution is gym management software to manage members, plans, fee collection, attendance and membership renewals.',
  },
  '/insurance-software-development': {
    title: 'Insurance Software Development Company | Software for Agents, Agencies & Brokers',
    description:
      'Software Bytes is an insurance software development company building CRM, policy management, renewal reminders, commission tracking and broker ERP for insurance agents, agencies and brokers.',
  },
  '/insurance-white-label-software': {
    title: 'White Label Insurance Software | Launch Your Own Insurance Platform | Software Bytes',
    description:
      'Launch your own insurance software under your brand with Software Bytes white label insurance platform. Trusted by insurance brands like BimaMox and BimaOne.',
  },
  '/insurance-software-development-cost': {
    title: 'Insurance Software Development Cost | Starts at ₹29,999 | Software Bytes Raipur',
    description:
      'Insurance software development cost starts at ₹29,999. Contact Software Bytes, an IT company based in Raipur, Chhattisgarh, for insurance CRM, policy and renewal software.',
  },
  '/white-label-gym-software': {
    title: 'White Label Gym Software | Launch Your Own Gym Management Software | Software Bytes',
    description:
      'Launch gym management software under your own brand with Software Bytes white label gym software, built on GymSolution. Your logo, domain and mobile app.',
  },
  '/custom-insurance-software-development': {
    title: 'Custom Insurance Software Development | Software Bytes Raipur',
    description:
      'Custom insurance software development for agencies, brokers and insurtech startups: CRM, policy admin, quote engines, commissions, claims, portals, apps and integrations. Starts at ₹29,999.',
  },
  '/white-label-insurance-platform-india': {
    title: 'White Label Insurance Platform India | For Brokers, POSP Networks & IMFs | Software Bytes',
    description:
      'Launch your insurance brand in India with Software Bytes white label insurance platform for POSPs, brokers, IMFs and insurtech startups. Used by BimaMox and BimaOne.',
  },
  '/insurance-ke-liye-software-kaise-banwaye': {
    title: 'Insurance के लिए Software कैसे बनवाएं? | Insurance ke liye software kaise banwaye | Software Bytes',
    description:
      'Insurance के लिए software कैसे बनवाएं: 6 आसान स्टेप, ज़रूरी features और खर्च। Software Bytes, रायपुर छत्तीसगढ़ से insurance software ₹29,999 से शुरू।',
  },
};

const setMetaTag = (selector, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const setCanonical = (url) => {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
};

const SeoManager = () => {
  const location = useLocation();

  useEffect(() => {
    const data = seoByPath[location.pathname] || seoByPath['/'];
    const canonicalUrl = `https://softwarebytes.in${location.pathname === '/' ? '/' : location.pathname}`;

    document.title = data.title;
    setCanonical(canonicalUrl);

    setMetaTag('meta[name="description"]', { name: 'description', content: data.description });
    setMetaTag('meta[property="og:title"]', { property: 'og:title', content: data.title });
    setMetaTag('meta[property="og:description"]', { property: 'og:description', content: data.description });
    setMetaTag('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    setMetaTag('meta[name="twitter:title"]', { name: 'twitter:title', content: data.title });
    setMetaTag('meta[name="twitter:description"]', { name: 'twitter:description', content: data.description });
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <SeoManager />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/crusherbook" element={<Crusherbook />} />
            <Route path="/rtosarthi" element={<RtoSarthi />} />
            <Route path="/gymsolution" element={<GymSolution />} />
            <Route path="/insurance-software-development" element={<InsuranceSoftware />} />
            <Route path="/insurance-white-label-software" element={<InsuranceWhiteLabel />} />
            <Route path="/insurance-software-development-cost" element={<InsuranceSoftwareCost />} />
            <Route path="/white-label-gym-software" element={<GymWhiteLabel />} />
            <Route path="/custom-insurance-software-development" element={<CustomInsuranceSoftware />} />
            <Route path="/white-label-insurance-platform-india" element={<InsurancePlatformIndia />} />
            <Route path="/insurance-ke-liye-software-kaise-banwaye" element={<InsuranceSoftwareHindi />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
