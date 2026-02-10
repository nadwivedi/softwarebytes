import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Service';
import Contact from './pages/Contact';
import About from './pages/About';

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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
