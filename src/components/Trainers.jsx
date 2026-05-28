import React from 'react';
import { motion } from 'framer-motion';
import './Trainers.css';

const trainers = [
  {
    name: 'Marcus Thorne',
    role: 'Head Strength Coach',
    experience: '12+ Years',
    speciality: 'Powerlifting & Mass Building',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Elena Rostova',
    role: 'HIIT & Conditioning',
    experience: '8+ Years',
    speciality: 'Fat Loss & Athleticism',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'David Chen',
    role: 'Nutritionist & PT',
    experience: '10+ Years',
    speciality: 'Body Recomposition',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Vikram Singh',
    role: 'Head of Strength & Conditioning',
    experience: '8+ Years',
    speciality: 'Olympic Lifting & Periodization',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Rohan Mehra',
    role: 'Elite Bodybuilding Coach & Nutritionist',
    experience: '6+ Years',
    speciality: 'Competition Prep & Aesthetics',
    image: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Aakash Rai',
    role: 'Functional Hypertrophy Specialist',
    experience: '7+ Years',
    speciality: 'Muscle Gain & Functional Strength',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop',
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Trainers = () => {
  return (
    <section className="trainers" id="trainers">
      <div className="container">
        <motion.div
          className="trainers-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="trainers-title-block">
            <p className="section-eyebrow">OUR TEAM</p>
            <h2>TRAIN WITH <span className="text-accent">EXPERTS</span></h2>
          </div>
          <motion.a
            href="tel:+917042249976"
            className="call-expert-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            CALL OUR EXPERT
          </motion.a>
        </motion.div>

        <div className="trainers-grid">
          {trainers.map((trainer, idx) => (
            <motion.div
              key={idx}
              className="trainer-card"
              custom={idx}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div
                className="trainer-image"
                style={{ backgroundImage: `url(${trainer.image})` }}
              >
                <div className="trainer-image-overlay" />
                <div className="trainer-badge">{trainer.experience}</div>
              </div>

              <div className="trainer-info">
                <h3>{trainer.name}</h3>
                <div className="trainer-role text-accent">{trainer.role}</div>
                <div className="trainer-speciality">{trainer.speciality}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
