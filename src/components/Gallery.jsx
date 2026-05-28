import React from 'react';
import './Gallery.css';

const galleryImages = [
  'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1554344728-77cf90d9ed26?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop'
];

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="section-header">
          <h2>OUR <span className="text-accent">GALLERY</span></h2>
          <p>Take a look inside our state-of-the-art facility.</p>
        </div>
        
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <div key={index} className="gallery-item">
              <div className="gallery-image" style={{ backgroundImage: `url(${img})` }}></div>
              <div className="gallery-overlay">
                <span className="text-accent">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
