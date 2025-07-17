import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Servicios from './Servicios';
import Proyectos from './Proyectos';
import Contacto from './Contacto';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Servicios />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
};

export default Home; 