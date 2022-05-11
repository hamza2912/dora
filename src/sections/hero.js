import React from 'react';

function Hero() {

    return (
      
      <div className='w-full h-auto flex lg:flex-row flex-col relative'>
          <div className='lg:w-3/5 w-full h-auto'>
              <div className='container mx-auto w-full h-full lg:pl-32 lg:pr-10 px-5 md:pt-16 pt-10 pb-10'>
                  <p className='uppercase md:text-4xl text-2xl font-semibold tracking-widest text-center lg:text-left'>Dora</p>
                  <div className='w-full h-full flex flex-col justify-center lg:pl-0 md:pl-10 pl-2 lg:-mt-4 mt-32 md:mt-56'>
                      <h1 data-aos="fade-right" className='lg:w-full md:w-3/4 w-4/5 tracking-wide'>Build <span className='text-transparent bg-clip-text hero-text font-semibold'>trust</span> in your customer relationships with Dora.</h1>
                      <ul className='lg:w-full md:w-11/12 w-full lg:mt-8 md:mt-64 mt-56'>
                          <li data-aos="fade-right" data-aos-delay="100" className='md:pl-8 pl-4 border-l-2 border-black'><h3>7 out of 10 people would rather buy from someone they trusted over someone who gave them the lowest price.</h3></li>
                          <li data-aos="fade-right" data-aos-delay="150" className='mt-5 md:pl-8 pl-4 border-l-2 border-black'><h3>8 out of 10 people would would likely buy again from a company respresented by a person they trust.</h3></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className='lg:w-2/5 w-full flex justify-end hidden lg:block'>
            <img className='lg:w-full w-4/5 h-auto' src="images/hero.png" alt="Dora building trust" />
          </div>
          <div className='lg:w-2/5 md:w-4/5 w-full flex justify-end absolute top-32 right-0 z-minus lg:hidden'>
            <img className='lg:w-full w-4/5 h-auto' src="images/hero.png" alt="Dora building trust" />
          </div>
      </div>

    );
  }
  
export default Hero;
