import React from 'react';
import Appointment from '../Appointment';
import HeroSection from '../HeroSection';
import Navigation from '../Navigation';
import Services from '../Services';

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection/>
      <Services />
      <Appointment />
    </>
  );
}
