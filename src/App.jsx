
import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials'; // Import the new Testimonials component
import Work from './components/Work';
import FunFact from './components/FunFact';
import Projects from './components/Projects';
import Team from './components/Team';
import Faqs from './components/Faqs';
import Quote from './components/Quote';
import Client from './components/Client';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Services />
      <About />
      <Testimonials /> 
      <Work />
      <FunFact />
      <Projects />
      <Team />
      <Faqs />
      <Quote />
      <Client />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
