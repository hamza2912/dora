import React from 'react';
import Hero from '../sections/hero';
import About from '../sections/about';
import Services from '../sections/services';
import Footer from '../sections/footer';

function Home() {

    return (
      
      <div className='w-full h-auto overflow-x-hidden'>

        <Hero />
        <About />
        <Services />
        <Footer />

      </div>

    );
  }
  
export default Home;
