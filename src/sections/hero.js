import React from 'react';

function Hero() {

    return (
      
      <div className='w-full lg:h-screen h-auto flex lg:flex-row flex-col relative'>
          <div className='lg:w-3/5 w-full lg:h-full h-auto'>
              <div className='container mx-auto w-full h-full lg:px-32 px-5 py-6'>
                  <p className='uppercase font-semibold tracking-widest'>Dora</p>
                  <div className='lg:w-3/4 w-full h-full flex flex-col justify-center lg:mt-0 mt-6'>
                      <h1 data-aos="fade-right" className='font-semibold lg:text-4xl text-2xl tracking-wide'>Build <span className='text-transparent bg-clip-text hero-text'>trust</span> in your customer relationships with Dora.</h1>
                      <ul className='mt-8'>
                          <li data-aos="fade-right" data-aos-delay="100" className='pl-8 border-l-2 border-black'>7 out of 10 people would rather buy from someone they trusted over someone who gave them the lowest price.</li>
                          <li data-aos="fade-right" data-aos-delay="150" className='mt-5 pl-8 border-l-2 border-black'>8 out of 10 people would would likely buy again from a company respresented by a person they trust.</li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className='lg:w-2/5 w-full lg:h-full h-auto flex justify-end'>
            <img className='lg:w-auto w-4/5 lg:h-screen h-auto' src="images/hero.png" alt="Dora building trust" />
          </div>
      </div>

    );
  }
  
export default Hero;
