import React from 'react';
import './Services.css';

const services = [
  {
    id: 1,
    title: 'Personal Training',
    description: 'Every body has unique needs. Our certified personal trainers design customized workout plans to match your body type, fitness level, and objectives.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Strength Training & Weightlifting',
    description: 'Boost your strength, build lean muscle, and rev up your metabolism. Sculpt your body and reach new performance levels.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Cardio Training',
    description: 'Torch calories, optimize heart health, and build explosive endurance with our modern dynamic pacing configurations.',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Group Fitness Classes',
    description: 'Motivation grows in numbers. Energetic community sessions including Yoga, Aerobics, and high-intensity structural intervals.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Weight Loss Programs',
    description: 'Targeted nutritional counseling, structured caloric deficits, and active weight tracking designed for sustainable physical shifts.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=600&auto=format&fit=crop'
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header">
          <h2>OUR <span className="text-accent">SERVICES</span></h2>
          <p>We provide a wide range of fitness solutions tailored for your ultimate transformation.</p>
        </div>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card glass-card">
              <div className="service-image" style={{ backgroundImage: `url(${service.image})` }}></div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
