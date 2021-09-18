import React from 'react';
import Header from '../components/header';
import Artwork_modals from '../components/artwork_modals';
import Footer from '../components/footer';
import Available_artworks from '../components/available_artworks';

function Home() {

    return (
      
      <div>

        <Artwork_modals />

        <Header />

        <div className='main_body bg-home'>
          {/* landing page */}
          <div className='w-full lg:h-auto lg:pt-32 pt-32 lg:px-16 px-5 landing-page'>
            {/* <div className='w-full flex lg:flex-row flex-col h-full'>
              <div className='lg:w-1/2 w-full hidden'>

              </div>
              <div className='lg:w-full w-full h-full flex justify-center items-center mt-2 lg:mt-0'>
                <p className='lg:text-3xl text-xl text-white font-courier lg:max-w-2xl text-justify'>Moments in time met with computer error, glitched into an entirely new phenomenon — all tangible via NFT. Archive91 displays the raw truth of the dot com bubble collapse while reminding us of our human tendency to repeat the past.</p>
              </div>
            </div> */}
          </div>
          {/* our collection */}
          <div className='w-full lg:py-8 lg:px-32 px-5 py-5 mt-6'>
            <Available_artworks />
          </div>
          {/* read more */}
          <div className='w-full py-16 read-page'>
            <h2 className='text-right text-5xl text-black font-presto italic text-white text-shadow-lg lg:mr-32 mr-10'>More on Artist...</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 p-6 border-2 border-white my-12'>
              <div className='w-full lg:h-96 h-56 bg-gray border-2 border-black flex justify-center items-center cursor-pointer'>
                <a className='w-4/5' href="https://www.nytimes.com/2001/07/30/nyregion/a-debut-in-queens-nighthawks-at-the-museum.html?searchResultPosition=7" rel="noreferrer" target="_blank">
                  <img src="images/logo/new_york_times_logo.png" alt="New York Times" />
                </a>              
              </div>
              <div className='w-full lg:h-96 h-56 bg-gray border-2 border-black flex justify-center items-center cursor-pointer'>
                <a className='w-4/5' href="https://www.startribune.com/artist-matthew-bakkom-marks-minneapolis-homecoming-with-diy-exhibit-of-wwi-photography/500151282/" rel="noreferrer" target="_blank">
                  <img src="images/logo/star_tribune_logo.png" alt="New York Times" />
                </a>
              </div>
              <div className='w-full lg:h-96 h-56 bg-gray border-2 border-black flex justify-center items-center cursor-pointer'>
                <a className='w-1/4' href="https://madparis.fr/francais/bibliotheque/expositions/expositions-terminees/presentation-2904" rel="noreferrer" target="_blank">
                  <img src="images/logo/mad_paris_logo.png" alt="New York Times" />
                </a>
              </div>
            </div>
          </div>
          {/* footer */}
          <Footer></Footer>
        </div>

      </div>

    );
  }
  
export default Home;
