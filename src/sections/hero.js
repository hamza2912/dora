import React from 'react';

function Hero() {

    return (
      
      <div className='w-full h-auto flex lg:flex-row flex-col relative'>
          <div className='lg:w-3/5 w-full h-auto'>
              <div className='container mx-auto w-full h-full lg:px-32 px-5 pt-6 pb-10'>
                  <p className='uppercase text-xl font-semibold tracking-widest text-center lg:text-left'>Dora</p>
                  <div className='lg:w-3/4 w-full h-full flex flex-col justify-center lg:-mt-4 mt-32 md:mt-56'>
                      <h1 data-aos="fade-right" className='w-3/4 lg:w-full md:text-5xl text-4xl tracking-wide'>Build <span className='text-transparent bg-clip-text hero-text font-semibold'>trust</span> in your customer relationships with Dora.</h1>
                      <ul className='lg:mt-8 md:mt-96 mt-48 text-lg md:text-2xl lg:text-lg'>
                          <li data-aos="fade-right" data-aos-delay="100" className='pl-8 border-l-2 border-black'>7 out of 10 people would rather buy from someone they trusted over someone who gave them the lowest price.</li>
                          <li data-aos="fade-right" data-aos-delay="150" className='mt-5 pl-8 border-l-2 border-black'>8 out of 10 people would would likely buy again from a company respresented by a person they trust.</li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className='lg:w-2/5 w-full flex justify-end hidden lg:block'>
            <img className='lg:w-full w-4/5 h-auto' src="images/hero.png" alt="Dora building trust" />
          </div>
          <div className='lg:w-2/5 md:w-4/5 w-full flex justify-end absolute top-24 right-0 z-minus lg:hidden'>
            <img className='lg:w-full w-4/5 h-auto' src="images/hero.png" alt="Dora building trust" />
          </div>
      </div>

    );
  }
  
export default Hero;
