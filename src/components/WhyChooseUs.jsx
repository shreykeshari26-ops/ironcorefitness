import React from 'react';
import { Dumbbell, Utensils, ClipboardList, Target } from 'lucide-react';
import './WhyChooseUs.css';

const reasons = [
  {
    icon: <Dumbbell size={32} />,
    title: 'Modern Equipment',
    description: 'Get all the modern and latest equipment to work out easily and efficiently. Comfortable equipment will make your exercise effective and less time-consuming.'
  },
  {
    icon: <Utensils size={32} />,
    title: 'Healthy Nutrition Plan',
    description: 'Nutritious diet is the key of getting a healthy body. Get a healthy nutrition plan for your body from trained experts.'
  },
  {
    icon: <ClipboardList size={32} />,
    title: 'Professional Training Plan',
    description: 'It is necessary to work out with a plan because only a professional planned workout can give you the body of your dreams.'
  },
  {
    icon: <Target size={32} />,
    title: 'Unique to Your Needs',
    description: 'Everybody needs special attention, different diet & workout to develop according to its needs. Get focused personal attention.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us" id="about">
      <div className="container">
        <div className="section-header">
          <h2>WHY <span className="text-accent">CHOOSE US</span></h2>
          <p>We are more than just a gym. We are a comprehensive fitness ecosystem.</p>
        </div>
        
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card glass-card">
              <div className="reason-icon icon-accent">
                {reason.icon}
              </div>
              <div className="reason-content">
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
