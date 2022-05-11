import React from 'react';
import Agent from '../components/agent';

function About() {

    return (
      
      <div className='w-full h-auto flex flex-col bg-white'>
            <div className='w-full bg-blue md:pt-20 pt-10 lg:pb-40 md:pb-20 pb-10 flex flex-col items-center'>
                <h2 data-aos="fade-up" className='tracking-wide'>Dora is for <span className='text-transparent bg-clip-text hero-text uppercase font-bold'>The Doers</span></h2>
                <h3 data-aos="fade-up" className='text-gray lg:w-3/5 md:w-10/12 w-full px-5 text-center mt-8'>For those ready to uplevel new and existing customer relationships by using Dora for their process. Dora gives you an edge by ensuring your clients get a transparent and collaborative experience with you.</h3>
            </div>
            <div className='w-full grid lg:grid-cols-3 grid-cols-1 lg:gap-16 md:gap-20 gap-12 lg:px-32 md:px-24 px-24 bg-transparent lg:pb-40 md:pb-24 pb-12 lg:-mt-20 md:mt-24 mt-12 container mx-auto'>
                <div data-aos="zoom-in" data-aos-delay="100"><Agent src="images/agent.png" name="THE REAL ESTATE AGENT" desc="Collaborating with clients in every step of the home buying process." /></div>
                <div data-aos="zoom-in" data-aos-delay="200"><Agent src="images/designer.png" name="THE INTERIOR DESIGNER" desc="Creating visibility in each phase of the design experience." /></div>
                <div data-aos="zoom-in" data-aos-delay="300"><Agent src="images/coach.png" name="THE BUSINESS COACH" desc="Communicating with customers during every milestone of their plan." /></div>
            </div>
      </div>

    );
  }
  
export default About;
