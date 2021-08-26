import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Artwork_modals from '../components/artwork_modals';
import Available_artworks from '../components/available_artworks';

function Shop() {

    return (

      <div>

        <Artwork_modals />

        <Header />
        <div className='w-full pb-16 pt-32 lg:px-32 px-5 shop-page'>
          <Available_artworks />
        </div>
        <Footer />
        
      </div>

    );
  }
  
export default Shop;













 {/* <Modal work_id='work1' src='images/artwork/artwork1.jpg' title='MAR.18.2021 19:15 EST' artist='Matthew Bakkom' date='25/12/1997' glitched='25/12/2012' location='World Trade Centre, New York' url='https://opensea.io/'  />

      <Modal work_id='work2' src='images/artwork/artwork2.jpg' title='MAR.18.2021 19:17 EST' artist='Matthew Bakkom' date='25/12/1997' glitched='25/12/2012' location='World Trade Centre, New York' url='https://opensea.io/'  />

      <Modal work_id='work3' src='images/artwork/artwork3.jpg' title='MAR.18.2021 19:19 EST' artist='Matthew Bakkom' date='25/12/1997' glitched='25/12/2012' location='World Trade Centre, New York' url='https://opensea.io/'  />

      <Modal work_id='work4' src='images/artwork/artwork4.jpg' title='MAR.18.2021 19:21 EST' artist='Matthew Bakkom' date='25/12/1997' glitched='25/12/2012' location='World Trade Centre, New York' url='https://opensea.io/'  />

<Modal work_id='work5' src='images/artwork/artwork5.jpg' title='MAR.18.2021 19:22 EST' artist='Matthew Bakkom' date='25/12/1997' glitched='25/12/2012' location='World Trade Centre, New York' url='https://opensea.io/'  /> */}


{/* <h2 className='text-center text-6xl text-white font-presto text-shadow-lg font-bold'>Available <br />Works</h2>
    <p className='text-center mt-10 font-presto italic text-white text-2xl'>Quantities Limited</p>
    <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-40 gap-y-12 lg:mt-24 mt-12'>
      <div className='lg:col-span-2 lg:w-1/2 w-full mx-auto'>
      <Work_item imgDim="w-full h-96 artwork1" src="images/artwork/artwork1.jpg" title="MAR.18.2021 19:15 EST" price="$3k" url="https://opensea.io/" artist="Matthew Bakkom" />
      </div>
      <Work_item imgDim="w-full h-96 artwork2" src="images/artwork/artwork2.jpg" title="MAR.18.2021 19:17 EST" price="$3k" url="https://opensea.io/" artist="Matthew Bakkom" />
      <Work_item imgDim="w-full h-96 artwork3" src="images/artwork/artwork3.jpg" title="MAR.18.2021 19:19 EST" price="$3k" url="https://opensea.io/" artist="Matthew Bakkom" />
      <Work_item imgDim="w-full h-96 artwork4" src="images/artwork/artwork4.jpg" title="MAR.18.2021 19:21 EST" price="$3k" url="https://opensea.io/" artist="Matthew Bakkom" />
      <Work_item imgDim="w-full h-96 artwork5" src="images/artwork/artwork5.jpg" title="MAR.18.2021 19:22 EST" price="$3k" url="https://opensea.io/" artist="Matthew Bakkom" />
    </div> */}