import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Services from '../components/home/Services';
import Projects from '../components/home/Projects';
import CTA from '../components/home/CTA';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'SolKaneak - Sustainable Solar Solutions';
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Projects />
      <CTA />
    </>
  );
};

export default Home;