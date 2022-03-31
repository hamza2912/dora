import React from 'react';
import Agent from '../components/agent';

function About() {

    return (
      
      <div className='w-full h-auto flex flex-col bg-white'>
            <div className='w-full bg-blue pt-20 pb-40 flex flex-col items-center'>
                <h1 data-aos="fade-up" className='font-semibold lg:text-4xl text-2xl tracking-wide'>Dora is for <span className='text-transparent bg-clip-text hero-text uppercase'>The Doers</span></h1>
                <p data-aos="fade-up" className='text-lg text-gray lg:w-1/2 w-3/4 text-center mt-8'>For those ready to uplevel new and existing customer relationships by using Dora for their process. Dora gives you an edge by ensuring your clients get a transparent and collaborative experience with you.</p>
            </div>
            <div className='w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-16 gap-8 lg:px-32 px-10 bg-transparent pb-40 -mt-20 container mx-auto'>
                <div data-aos="zoom-in" data-aos-delay="100"><Agent src="images/s1.png" name="THE REAL ESTATE AGENT" desc="Collaborating with clients in every step of the home buying process." /></div>
                <div data-aos="zoom-in" data-aos-delay="200"><Agent src="images/s2.png" name="THE INTERIOR DESIGNER" desc="Creating visibility in each phase of the design experience." /></div>
                <div data-aos="zoom-in" data-aos-delay="300"><Agent src="images/s3.png" name="THE BUSINESS COACH" desc="Communicating with customers during every milestone of their plan." /></div>
            </div>
      </div>

    );
  }
  
export default About;
