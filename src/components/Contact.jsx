import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare, Send, User, AlertCircle, Star } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', query: '' });
  const [errors, setErrors] = useState({});
  const [selectedPlan, setSelectedPlan] = useState(null);
  const formRef = useRef(null);

  // Listen for plan selection from Pricing / Hero / Header
  useEffect(() => {
    const handler = (e) => {
      const { plan } = e.detail;
      setSelectedPlan(plan);
      // Use custom prefill message if provided, otherwise build from plan
      const query = plan.prefillQuery
        ? plan.prefillQuery
        : `I'm interested in the ${plan.tier} Plan (${plan.price}/mo). Please send me more details.`;
      setForm((prev) => ({ ...prev, query }));
      setErrors({});
      // Scroll into view & focus first empty field
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        const first = formRef.current?.querySelector('input[name="name"]');
        first?.focus();
      }, 350);
    };
    window.addEventListener('ironcore:planSelected', handler);
    return () => window.removeEventListener('ironcore:planSelected', handler);
  }, []);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim() || !/^\+?[\d\s\-]{7,15}$/.test(form.phone.trim()))
      e.phone = 'Enter a valid phone number';
    if (!form.query.trim() || form.query.trim().length < 10)
      e.query = 'Please describe your query (min 10 chars)';
    return e;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleEmail = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    const subject = encodeURIComponent(`IronCore Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Hi IronCore Fitness,\n\nMy name is ${form.name}.\nPhone: ${form.phone}\n${selectedPlan ? `Interested In: ${selectedPlan.tier} Plan (${selectedPlan.price}/mo)\n` : ''}\nQuery:\n${form.query}`
    );
    window.location.href = `mailto:join@ironcorefitness.com?subject=${subject}&body=${body}`;
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    const text = encodeURIComponent(
      `Hi IronCore Fitness! My name is ${form.name}.${selectedPlan ? ` I'm interested in the *${selectedPlan.tier} Plan* (${selectedPlan.price}/mo).` : ''} My Query: ${form.query}`
    );
    window.open(`https://wa.me/917042249976?text=${text}`, '_blank');
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">ENTERPRISE INQUIRY</p>
          <h2>GET IN <span className="text-accent">TOUCH</span></h2>
          <p className="section-sub">Send us your query — we'll respond within hours.</p>
        </motion.div>

        <div className="contact-grid">
          {/* Info Column */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="contact-map-embed glass-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.9897213295267!2d77.0255!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjAiTiA3N8KwMDEnMzEuOCJF!5e0!3m2!1sen!2sin!4v1716893699999"
                width="100%"
                height="180"
                style={{ border: 0, borderRadius: '10px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IronCore Fitness Location"
              />
            </div>

            <div className="info-card glass-card">
              <div className="info-icon-wrap">
                <Phone size={20} className="info-icon" />
              </div>
              <div className="info-text">
                <h4>Call / WhatsApp</h4>
                <a href="tel:+917042249976">+91 70422 49976</a>
              </div>
            </div>

            <div className="info-card glass-card">
              <div className="info-icon-wrap">
                <Mail size={20} className="info-icon" />
              </div>
              <div className="info-text">
                <h4>Email Support</h4>
                <a href="mailto:join@ironcorefitness.com">join@ironcorefitness.com</a>
                <a href="mailto:support@ironcorefitness.com">support@ironcorefitness.com</a>
              </div>
            </div>

            <div className="quality-badge glass-card">
              <span className="quality-star">★</span>
              <div>
                <strong>Premium Quality Guaranteed</strong>
                <p>Certified trainers. Proven results. Elite standards.</p>
              </div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            className="contact-form-wrapper glass-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            ref={formRef}
          >
            <div className="form-title-row">
              <MessageSquare size={22} className="form-title-icon" />
              <h3>
                {selectedPlan
                  ? <>You selected: <span className="selected-plan-label">{selectedPlan.tier} Plan</span></>
                  : 'Send Your Inquiry'}
              </h3>
            </div>

            {/* Selected Plan Banner */}
            {selectedPlan && (
              <motion.div
                className="selected-plan-banner"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Star size={14} />
                <span>
                  <strong>{selectedPlan.tier} — {selectedPlan.price}/mo</strong>
                  &nbsp;· {selectedPlan.tagline}
                </span>
                <button
                  className="clear-plan-btn"
                  onClick={() => {
                    setSelectedPlan(null);
                    setForm((p) => ({ ...p, query: '' }));
                  }}
                  title="Clear selection"
                >✕</button>
              </motion.div>
            )}

            <form className="contact-form" noValidate>
              {/* Full Name */}
              <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                <label htmlFor="contact-name">
                  <User size={14} /> Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="e.g. Arjun Sharma"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
                {errors.name && (
                  <span className="field-error">
                    <AlertCircle size={12} /> {errors.name}
                  </span>
                )}
              </div>

              {/* Phone */}
              <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
                <label htmlFor="contact-phone">
                  <Phone size={14} /> Phone Number
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
                {errors.phone && (
                  <span className="field-error">
                    <AlertCircle size={12} /> {errors.phone}
                  </span>
                )}
              </div>

              {/* Query */}
              <div className={`form-group ${errors.query ? 'has-error' : ''}`}>
                <label htmlFor="contact-query">
                  <MessageSquare size={14} /> Your Message
                </label>
                <textarea
                  id="contact-query"
                  name="query"
                  placeholder="Tell us about your fitness goals, membership questions, or any other inquiry..."
                  rows={5}
                  value={form.query}
                  onChange={handleChange}
                />
                {errors.query && (
                  <span className="field-error">
                    <AlertCircle size={12} /> {errors.query}
                  </span>
                )}
              </div>

              {/* Dual Action Row */}
              <div className="dual-action-row">
                <motion.button
                  type="submit"
                  className="action-btn email-btn"
                  onClick={handleEmail}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Mail size={17} />
                  Send via Email
                </motion.button>

                <motion.button
                  type="button"
                  className="action-btn whatsapp-btn"
                  onClick={handleWhatsApp}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Send size={17} />
                  Chat on WhatsApp
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
