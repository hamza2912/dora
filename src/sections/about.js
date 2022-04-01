import React from 'react';
import Agent from '../components/agent';

function About() {

    return (
      
      <div className='w-full h-auto flex flex-col bg-white'>
            <div className='w-full bg-blue md:pt-20 pt-10 lg:pb-40 md:pb-20 pb-10 flex flex-col items-center'>
                <h1 data-aos="fade-up" className='md:text-5xl text-2xl tracking-wide'>Dora is for <span className='text-transparent bg-clip-text hero-text uppercase font-semibold'>The Doers</span></h1>
                <p data-aos="fade-up" className='md:text-2xl text-xl text-gray lg:w-1/2 md:w-3/4 w-full px-5 text-center mt-8'>For those ready to uplevel new and existing customer relationships by using Dora for their process. Dora gives you an edge by ensuring your clients get a transparent and collaborative experience with you.</p>
            </div>
            <div className='w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-12 md:gap-16 gap-8 lg:px-32 px-16 bg-transparent lg:pb-40 pb-20 lg:-mt-20 mt-10 container mx-auto'>
                <div data-aos="zoom-in" data-aos-delay="100"><Agent src="images/s1.png" name="THE REAL ESTATE AGENT" desc="Collaborating with clients in every step of the home buying process." /></div>
                <div data-aos="zoom-in" data-aos-delay="200"><Agent src="images/s2.png" name="THE INTERIOR DESIGNER" desc="Creating visibility in each phase of the design experience." fix="true" /></div>
                <div data-aos="zoom-in" data-aos-delay="300"><Agent src="images/s4.png" name="THE BUSINESS COACH" desc="Communicating with customers during every milestone of their plan." /></div>
            </div>
      </div>

    );
  }
  
export default About;
