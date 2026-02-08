import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 border-b border-slate-800 transition-all duration-300 ${
        scrolled ? 'bg-slate-800/90 backdrop-blur-md shadow-lg shadow-black/40' : 'bg-black shadow-md shadow-black/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-4">
          <Link to="/" className="flex items-center group">
            <img src="/sofwarebytes.webp" alt="Software Bytes logo" className=" h-18 sm:h-20 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-cyan-300 bg-slate-700/70'
                    : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-700/60'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-300 rounded-full"></span>
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 inline-flex items-center gap-2 bg-cyan-500 text-slate-950 px-6 py-2.5 rounded-full font-semibold hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Started
              <span className="text-sm opacity-75">&lt;/&gt;</span>
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-900 transition-colors"
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

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-slate-800 border-t border-slate-600 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                isActive(link.path)
                  ? 'text-cyan-300 bg-slate-700'
                  : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-700/60'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
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
