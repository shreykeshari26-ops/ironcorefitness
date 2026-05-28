import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink, MapPin, Shield } from 'lucide-react';
import './Footer.css';

// Inline SVGs for social icons not in lucide-react@1.x
const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Membership Plans', href: '#pricing' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Timetable', href: '#timetable' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: InstagramIcon,
    color: '#E1306C',
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: FacebookIcon,
    color: '#1877F2',
  },
  {
    label: 'Email',
    href: 'mailto:join@ironcorefitness.com',
    icon: Mail,
    color: '#FF5722',
  },
  {
    label: 'Portfolio',
    href: '#',
    icon: ExternalLink,
    color: '#FFB300',
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* ─── Brand Column ─── */}
          <div className="footer-brand">
            <div className="logo footer-logo">
              IRON<span className="text-accent">CORE</span>
            </div>
            <p className="footer-brand-tagline">
              Pushing limits, forging legends. Join the most elite fitness community — where champions are built.
            </p>
            <div className="footer-social-array">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="footer-social-node"
                    style={{ '--social-color': s.color }}
                    whileHover={{ y: -4, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title={s.label}
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* ─── Quick Links ─── */}
          <div className="footer-links">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul>
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* ─── Connection Details ─── */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Contact & Support</h4>

            <div className="footer-contact-item">
              <Phone size={15} className="footer-contact-icon" />
              <div>
                <span className="footer-contact-label">Phone / WhatsApp</span>
                <a href="tel:+917042249976" className="footer-contact-value">+91 70422 49976</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={15} className="footer-contact-icon" />
              <div>
                <span className="footer-contact-label">Member Enrollment</span>
                <a href="mailto:join@ironcorefitness.com" className="footer-contact-value">
                  join@ironcorefitness.com
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={15} className="footer-contact-icon" />
              <div>
                <span className="footer-contact-label">Support Desk</span>
                <a href="mailto:support@ironcorefitness.com" className="footer-contact-value">
                  support@ironcorefitness.com
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <MapPin size={15} className="footer-contact-icon" />
              <div>
                <span className="footer-contact-label">Location</span>
                <span className="footer-contact-value">Gurugram, Haryana, India</span>
              </div>
            </div>

            <div className="footer-quality-seal">
              <Shield size={16} className="seal-icon" />
              <span>Premium Quality Guaranteed — Certified Trainers. Elite Standards.</span>
            </div>
          </div>
        </div>

        {/* ─── Bottom Bar ─── */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} <strong>IronCore Fitness</strong>. All rights reserved. Crafted with ⚡ for champions.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
