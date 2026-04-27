import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const products = [
    { 
      path: '/crusherbook', 
      label: 'Crusherbook', 
      description: 'Crusher Plant ERP',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    { 
      path: '/rtosarthi', 
      label: 'RTO Sarthi', 
      description: 'RTO Agent Software',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-black/15' : 'bg-white shadow-md shadow-black/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-4">
          <Link to="/" className="flex items-center group">
            <img src="/softwhite.webp" alt="Software Bytes logo" className=" h-18 sm:h-20 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/') ? 'text-slate-900 bg-slate-100' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  location.pathname.includes('crusherbook') || location.pathname.includes('rtosarthi')
                    ? 'text-slate-900 bg-slate-100'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Products
                <svg className={`w-4 h-4 transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`absolute top-full left-0 w-64 pt-2 transition-all duration-300 ${isProductsOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 overflow-hidden">
                  {products.map((product) => (
                    <Link
                      key={product.path}
                      to={product.path}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                    >
                      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                        {product.icon}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">{product.label}</div>
                        <div className="text-[11px] text-slate-500">{product.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/services"
              className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/services') ? 'text-slate-900 bg-slate-100' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Services
            </Link>
            <Link
              to="/about"
              className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/about') ? 'text-slate-900 bg-slate-100' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isActive('/contact') ? 'text-slate-900 bg-slate-100' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="ml-4 inline-flex items-center gap-2 bg-cyan-500 text-slate-950 px-6 py-2.5 rounded-full font-semibold hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Started
              <span className="text-sm opacity-75">&lt;/&gt;</span>
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white px-4 py-4 space-y-2 shadow-md shadow-black/10">
          <Link
            to="/"
            className={`block px-4 py-3 rounded-xl font-medium ${isActive('/') ? 'text-slate-900 bg-slate-100' : 'text-slate-700'}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          
          <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">Products</div>
          {products.map((product) => (
            <Link
              key={product.path}
              to={product.path}
              className={`block px-4 py-3 rounded-xl font-medium ml-2 ${isActive(product.path) ? 'text-slate-900 bg-slate-100' : 'text-slate-700'}`}
              onClick={() => setIsOpen(false)}
            >
              {product.label}
            </Link>
          ))}

          <Link
            to="/services"
            className={`block px-4 py-3 rounded-xl font-medium ${isActive('/services') ? 'text-slate-900 bg-slate-100' : 'text-slate-700'}`}
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/about"
            className={`block px-4 py-3 rounded-xl font-medium ${isActive('/about') ? 'text-slate-900 bg-slate-100' : 'text-slate-700'}`}
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`block px-4 py-3 rounded-xl font-medium ${isActive('/contact') ? 'text-slate-900 bg-slate-100' : 'text-slate-700'}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          <Link
            to="/contact"
            className="block bg-cyan-500 text-slate-950 px-4 py-3 rounded-xl text-center font-semibold mt-4"
            onClick={() => setIsOpen(false)}
          >
            Get Started &lt;/&gt;
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

