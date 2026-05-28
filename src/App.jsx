import React from 'react';
import Header from './components/Header';
import FloatingAction from './components/FloatingAction';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import FitnessHub from './components/FitnessHub';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Trainers from './components/Trainers';
import Timetable from './components/Timetable';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <FitnessHub />
        <Pricing />
        <Gallery />
        <Trainers />
        <Timetable />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <FloatingAction />
    </div>
  );
}

export default App;
