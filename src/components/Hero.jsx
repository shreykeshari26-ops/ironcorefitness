import React from 'react';
import './Hero.css';

const fireContactEvent = (tier, tagline, query) => {
  window.dispatchEvent(
    new CustomEvent('ironcore:planSelected', {
      detail: {
        plan: {
          id: 'cta',
          tier,
          price: '',
          tagline,
          prefillQuery: query,
        },
      },
    })
  );
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-badges">
          <div className="badge review-badge">
            <span className="star">⭐</span> 1.7k reviews
          </div>
          <div className="badge category-badge">Strength</div>
          <div className="badge category-badge">Cardio</div>
          <div className="badge category-badge">Personal Training</div>
        </div>

        <h1 className="hero-title">
          PUSH YOUR <br />
          <span className="text-accent">LIMITS WITH US</span>
        </h1>
        <p className="hero-subtitle">
          Transform your body with expert trainers and modern equipment.
        </p>
        <div className="hero-ctas">
          <button
            className="btn-primary"
            onClick={() => fireContactEvent(
              'Membership',
              'Ready to join the IronCore family!',
              'Hi IronCore Team, I am interested in joining IronCore Fitness. Please share membership details and availability.'
            )}
          >
            Join Now
          </button>
          <button
            className="btn-secondary"
            onClick={() => fireContactEvent(
              'Free Trial',
              'Claim your complimentary first session!',
              'Hi IronCore Team, I am interested in booking a Free Trial session. Please let me know the available slots.'
            )}
          >
            Book Free Trial
          </button>
        </div>
      </div>
      
      <div className="hero-stats">
        <div className="stat">
          <h3>10+ Years</h3>
          <p>Experience</p>
        </div>
        <div className="stat">
          <h3>5,000+</h3>
          <p>Members</p>
        </div>
        <div className="stat">
          <h3>20+</h3>
          <p>Trainers</p>
        </div>
        <div className="stat">
          <h3>100+</h3>
          <p>Transformations</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
