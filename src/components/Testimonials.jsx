import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { text: "Lost 10kg in 3 months! The trainers here are incredibly supportive.", author: "Sarah Jenkins" },
  { text: "Best gym in the area! The equipment is top-notch and the community is great.", author: "Mike Ross" },
  { text: "The HIIT classes completely transformed my stamina. Highly recommend IronCore.", author: "David Wallace" }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>MEMBER <span className="text-accent">SUCCESS</span></h2>
        </div>
        
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevSlide}><ChevronLeft /></button>
          
          <div className="carousel-track">
            {testimonials.map((t, idx) => (
              <div 
                key={idx} 
                className={`testimonial-slide ${idx === currentIndex ? 'active' : ''}`}
                style={{ transform: `translateX(${100 * (idx - currentIndex)}%)` }}
              >
                <div className="testimonial-card glass-card">
                  <div className="quote-mark">"</div>
                  <p className="testimonial-text">{t.text}</p>
                  <h4 className="testimonial-author">- {t.author}</h4>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next" onClick={nextSlide}><ChevronRight /></button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, idx) => (
            <button 
              key={idx} 
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
