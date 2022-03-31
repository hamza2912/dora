import React from 'react';

function Hero() {

    return (
      
      <div className='w-full h-screen flex lg:flex-row flex-col relative'>
          <div className='lg:w-3/5 w-full lg:h-full h-1/2'>
              <div className='container mx-auto w-full h-full lg:px-32 px-5 py-6'>
                  <p className='uppercase font-semibold tracking-widest'>Dora</p>
                  <div className='lg:w-3/4 w-full h-full flex flex-col justify-center'>
                      <h1 data-aos="fade-right" className='font-semibold lg:text-4xl text-2xl tracking-wide'>Build <span className='text-transparent bg-clip-text hero-text'>trust</span> in your customer relationships with Dora.</h1>
                      <ul className='mt-8'>
                          <li data-aos="fade-right" data-aos-delay="100" className='pl-8 border-l-2 border-black'>7 out of 10 people would rather buy from someone they trusted over someone who gave them the lowest price.</li>
                          <li data-aos="fade-right" data-aos-delay="150" className='mt-5 pl-8 border-l-2 border-black'>8 out of 10 people would would likely buy again from a company respresented by a person they trust.</li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className='lg:w-2/5 w-full lg:h-full h-1/2 flex justify-end'>
            <img className='w-auto lg:h-screen h-full' src="images/hero.png" alt="Dora building trust" />
          </div>
      </div>

    );
  }
  
export default Hero;
