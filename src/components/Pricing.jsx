import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Crown, Dumbbell } from 'lucide-react';
import './Pricing.css';

const plans = [
  {
    id: 'basic',
    tier: 'Basic',
    price: '₹999',
    period: '/mo',
    tagline: 'Perfect start to your fitness journey',
    icon: Dumbbell,
    isPopular: false,
    features: [
      'General Gym Floor Access',
      'Cardio Theater',
      '1× Free Body Composition Analysis',
      'Free Pre-Workout Drinks Daily',
    ],
    cta: 'Start Basic',
    gradient: 'linear-gradient(145deg, #161616, #1a1a1a)',
  },
  {
    id: 'standard',
    tier: 'Standard',
    price: '₹1,999',
    period: '/mo',
    tagline: 'The most popular choice for serious athletes',
    icon: Zap,
    isPopular: true,
    features: [
      'All Basic Access Included',
      'Group Fitness & Strength Coaching',
      'Customized Workout Blueprint',
      'Free Daily Pre-Workout Drinks',
      'Free Premium Creatine (5g daily)',
    ],
    cta: 'Go Standard',
    gradient: 'linear-gradient(145deg, rgba(255,87,34,0.15), rgba(255,179,0,0.08))',
  },
  {
    id: 'premium',
    tier: 'Premium',
    price: '₹2,999',
    period: '/mo',
    tagline: 'Elite-tier training — zero compromises',
    icon: Crown,
    isPopular: false,
    features: [
      '1-on-1 Dedicated Elite Personal Training',
      'Pro Personalized Diet & Nutrition Mapping',
      '24/7 Trainer Chat Support',
      'Free Daily Pre-Workout Drinks',
      'Unlimited Creatine & Intra-Workout Aminos',
    ],
    cta: 'Go Premium',
    gradient: 'linear-gradient(145deg, #161616, #1f1a1a)',
  },
];

// Fires a custom event so Contact can listen & pre-fill
const dispatchPlanSelected = (plan) => {
  window.dispatchEvent(
    new CustomEvent('ironcore:planSelected', { detail: { plan } })
  );
};

const cardVariants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Pricing = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const handleSelectPlan = (plan) => {
    dispatchPlanSelected(plan);
    // Smooth scroll to contact
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">MEMBERSHIP</p>
          <h2>CHOOSE YOUR <span className="text-accent">PLAN</span></h2>
          <p className="section-sub">Transparent pricing. Zero hidden fees. Pure results.</p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const isHovered = hoveredId === plan.id;

            return (
              <motion.div
                key={plan.id}
                className={`pricing-card ${plan.isPopular ? 'popular' : ''} ${isHovered ? 'hovered' : ''}`}
                style={{ background: plan.gradient }}
                custom={i}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, margin: '-50px' }}
                onHoverStart={() => setHoveredId(plan.id)}
                onHoverEnd={() => setHoveredId(null)}
                animate={{
                  y: isHovered ? -10 : 0,
                  scale: isHovered ? 1.02 : 1,
                  transition: { duration: 0.25 },
                }}
              >
                {plan.isPopular && (
                  <div className="popular-badge">
                    <Zap size={12} /> MOST POPULAR
                  </div>
                )}

                <div className="plan-header">
                  <div className={`plan-icon-wrap ${isHovered ? 'icon-active' : ''}`}>
                    <Icon size={22} className="plan-icon" />
                  </div>
                  <div className="plan-name">{plan.tier}</div>
                  <p className="plan-tagline">{plan.tagline}</p>
                </div>

                <div className="plan-price-block">
                  <span className={`plan-price ${isHovered ? 'price-lit' : ''}`}>{plan.price}</span>
                  <span className="plan-period">{plan.period}</span>
                </div>

                <div className="plan-divider" />

                <ul className="plan-features">
                  {plan.features.map((feat, j) => (
                    <li key={j}>
                      <span className="feat-check">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <motion.button
                  className={`plan-cta ${plan.isPopular || isHovered ? 'btn-primary' : 'btn-outline'}`}
                  onClick={() => handleSelectPlan(plan)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
