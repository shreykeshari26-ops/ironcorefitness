import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Menu, X } from 'lucide-react';
import './Header.css';

// Fire contact form event + scroll
const fireContactEvent = (tier, tagline, query) => {
  window.dispatchEvent(
    new CustomEvent('ironcore:planSelected', {
      detail: { plan: { id: 'header-cta', tier, price: '', tagline, prefillQuery: query } },
    })
  );
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

// Inline SVGs for icons not in lucide-react@1.x
const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Plans', href: '#pricing' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Timetable', href: '#timetable' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Logo */}
        <motion.div
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          IRON<span className="text-accent">CORE</span>
        </motion.div>

        {/* Center Nav */}
        <nav className="nav-links desktop-nav">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={`nav-link ${activeLink === link.href ? 'active' : ''}`}
              onClick={() => setActiveLink(link.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ scale: 1.05, color: 'var(--accent-start)' }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>

        {/* Right Utility Dock */}
        <motion.div
          className="header-utility-dock"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.a
            href="tel:+917042249976"
            className="call-trigger"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={14} />
            <span>+91 70422 49976</span>
          </motion.a>

          <div className="social-dock">
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="social-icon-btn"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <InstagramIcon size={16} />
            </motion.a>
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="social-icon-btn"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FacebookIcon size={16} />
            </motion.a>
            <motion.a
              href="mailto:join@ironcorefitness.com"
              aria-label="Email"
              className="social-icon-btn"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail size={16} />
            </motion.a>
          </div>

          {/* Free Trial CTA */}
          <motion.button
            className="header-trial-btn btn-primary pulse-btn"
            onClick={() => fireContactEvent(
              'Free Trial',
              'Claim your complimentary first session!',
              'Hi IronCore Team, I am interested in booking a Free Trial session. Please let me know the available slots and timings.'
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Free Trial
          </motion.button>
        </motion.div>

        {/* Mobile Toggle */}
        <motion.button
          className="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => { setActiveLink(link.href); setMobileOpen(false); }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {link.label}
              </motion.a>
            ))}
            <a href="tel:+917042249976" className="mobile-call-btn">📞 +91 70422 49976</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
