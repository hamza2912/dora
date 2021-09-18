import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

function About() {

    return (

      <div>
        <Header />
        <div className='w-full lg:px-16 px-5 lg:pb-16 pb-8 pt-32 about-page'>
          <h2 className='text-center text-6xl text-white font-presto text-shadow-lg font-bold'>About the <br />Archive</h2>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 lg:mt-12 mt-6 items-center'>
            <div className='archive-content flex flex-col justify-center'>
              <div className='mt-10'>
                {/* <h2 className='text-2xl font-presto italic text-white'>Narrative</h2> */}
                <p className='text-base font-courier mt-2'>It was early evening on March 18, 2021, when Bakkom began the time-consuming process of reviewing and digitizing photos he had taken over two decades prior. </p>
              </div>
              <div className='mt-5'>
                <p className='text-base font-courier mt-2'>During the photos’ transition from film to digital, a glitch occurred -- the images were dismantled and haphazardly conjoined back together, almost unrecognizable from their original takes.  Bakkom stepped back in confusion as the photos began to take on a new form.</p>
              </div>
              <div className='mt-5'>
                <p className='text-base font-courier mt-2'>Just twenty years shy of when he had originally intended, Bakkom decided to publish his work.</p>
              </div>
              {/* <div className='mt-5'>
                <p className='text-base font-courier mt-2'>This is the story of Smart World Technology, presented by Archive 91. Photographed by Matthew Bakkom.<br />1 World Trade Center, New York, NY.<br />February 2001.</p>
              </div> */}
              <div className='mt-5'>
                <p className='text-base font-courier mt-2'>In the fall of 2000, Bakkom, along with a handful of other up-and-coming NYC artists, were selected to join the <a className='text-blue-400' href="https://lmcc.net/about/history/" rel="noreferrer" target="_blank">Lower Manhattan Worldviews Studio Program</a> which provided space and community for local creatives on the 91st floor of 1 World Trade Center.</p>
              </div>
              <div className='mt-5'>
                <p className='text-base font-courier mt-2'>Despite the fact that the provided studio space was unfinished and unfurnished, the artists were ecstatic. In the early 2000s, The World Trade Center was viewed as the capitalist powerhouse of the world, the views were astounding and the rent was free.</p>
              </div>
            </div>
            <div className='archive-image'>
              <img src="images/about/1.jpg" alt="H" className='w-full h-about bg-gray-100' />
            </div>
          </div>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 lg:mt-12 mt-6 items-center'>
            <div className='archive-image'>
              <img src="images/about/2.jpg" alt="H" className='w-full h-about bg-gray-100' />
            </div>
            <div className='archive-content flex flex-col justify-center'>
              <div className='mt-10'>
                <p className='text-base font-courier mt-2'>Down the hall, however, things weren't as sweet. </p>
              </div>
              <div className='mt-5'>
                <p className='text-base font-courier mt-2'>Two Japanese holding companies went bankrupt and abandoned their offices during Bakkom’s first month working at the <a className='text-blue-400' href="https://en.wikipedia.org/wiki/World_Trade_Center_(1973%25E2%2580%25932001)" rel="noreferrer" target="_blank">WTC</a>.  The final office that shared the West Wing on the 91st floor belonged to a company named Smart World Technologies.  Their office also sat silent.<br />Until February 7, 2001.</p>
              </div>
              <div className='mt-5'>
                <p className='text-base font-courier mt-2'>Early that morning,  Bakkom arrived on the 91st floor and noticed the door to their lone remaining neighbour ajar. He stepped in, only to be met by a middle-aged man in formal business attire with heavy bags shadowing his eyes.</p>
              </div>
              <div className='mt-5'>
                <p className='text-base font-courier mt-2'>He introduced himself as an office manager at Smart World Technologies --  He had been coming into work for months now without pay.</p>
              </div>
              <div className='mt-5'>
                <p className='text-base font-courier mt-2'>Smart World Technologies, like many companies at the burst of the <a className='text-blue-400' href="https://searchcio.techtarget.com/definition/dot-com-bubble#_msocom_1" rel="noreferrer" target="_blank">dot-com bubble</a>, was sinking deep into bankruptcy.</p>
              </div>
              <div className='mt-5'>
                <p className='text-base font-courier mt-2'>Without any hope of standard compensation, the manager had begun the process of turning what was left of the office into a type of rummage sale.</p>
              </div>
            </div>
          </div>
          <div className='w-full lg:px-32 px-5 lg:py-16 py-8 font-presto italic lg:text-3xl text-2xl text-center'>
            {/* <h2 className='text-white font-presto italic'>Matthew Bakkom Quote</h2> */}
            <h2 className='text-black font-presto italic'>"The sight of the space, the remnants, and of what had once been a “promising provider of branded internet portals” during the peak of the dot-com Bubble, immediately struck me as something worthy of documentation; an exposé of the hidden failures obscured by the hype of the market, ridden with comic energy of mercantile hubris and in this case, all beneath the facade of one of Global Capitalism’s most revered icons" - M. Bakkom 2021</h2>
          </div>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 lg:mt-12 mt-6 items-center'>
            <div className='archive-content flex flex-col justify-center'>
              <div className='mt-10'>
                <p className='text-base font-courier mt-2'>Though his participation in the Worldview’s Studio Program came to an end in May of 2001, the images lingered in Bakkom’s mind.  He was eager to share his work with the rest of the world -- one still reeling from the financial repercussions of the dot-com bubble collapse and the ongoing internal contradictions of the market. </p>
              </div>
              <div className='mt-5'>
                {/* <h2 className='text-2xl font-presto italic text-white'>Narrative</h2> */}
                <p className='text-base font-courier mt-2'>Bakkom lent his ear and his sympathy -- and secured permission to photograph the office during the rummage sale.</p>
              </div>
              <div className='mt-5'>
                <p className='text-base font-courier mt-2'>That afternoon and into the evening, Bakkom took his photos on medium format film, in a forensic manner, one who he hoped would bear witness to the mute tragedy of expectations at hand. </p>
              </div>
              <div className='mt-5'>
                <p className='text-base font-courier mt-2'>Sale successfully executed, the office manager vanished.</p>
              </div>
              <div className='mt-5'>
                <p className='text-base font-courier mt-2'>Bakkom returned a week later to find the Smart World Technologies office slipping further along an entropic path -- papers littered the floor, shells of computers and old office equipment left behind. He pulled out his camera once more.</p>
              </div>
            </div>
            <div className='archive-image'>
              <img src="images/about/3.jpg" alt="H" className='w-full h-about bg-gray-100' />
            </div>
          </div>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 lg:mt-12 mt-6 items-center'>
            <div className='archive-image'>
              <img src="images/about/4.jpg" alt="H" className='w-full h-about bg-gray-100' />
            </div>
            <div className='archive-content flex flex-col justify-center'>
              <div className='mt-10'>
                <p className='text-base font-courier mt-2'>Venues were sought for the work and Bakkom was eagerly waiting for their exhibition that upcoming fall of 2001 in New York City.</p>
              </div>
              <div className='mt-5'>
                <p className='text-base font-courier mt-2'>The events that occurred at that very building; 1 World Trade Center - on September 11, 2001 inexorably altered the meaning of the photographs and the trajectory through which they would be presented to the public.</p>
              </div>
              <div className='mt-5'>
                <p className='text-base font-courier mt-2'>For a myriad of reasons -- out of respect for the victims, the buildings themselves and with regard to the ongoing legacy of destruction and the darkness that ensued globally, Bakkom’s exhibition never took place. Until now.</p>
              </div>
              <div className='mt-5'>
                <p className='text-base font-courier mt-2'>During the long winter of 2021, Bakkom returned to his own archive, mindful of the idea that at our current removal, it might be possible to see these images in a new light.</p>
              </div>
              <div className='mt-5'>
                <p className='text-base font-courier mt-2'>It was this process, the task of transporting antiquated artifacts into today’s digital world, that led to the glitch. An entirely new collection came to be, one that transcended intention and time; a machine error that blindly groped for meaning in unique variations of its misunderstood task. An accident that somehow unites the past and present.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full lg:p-16 p-5 about-page'>
          {/* <p className='text-center text-base text-white font-presto italic'>About the Artist</p> */}
          <h2 className='text-center text-6xl text-white font-presto text-shadow-lg font-bold'>About the <br />Artist</h2>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 lg:mt-12 mt-6 items-center'>
            <div className='archive-content flex flex-col justify-center'>
              <div className='mt-10'>
                <h2 className='text-2xl font-presto italic text-white'>About Matt</h2>
                <p className='text-base font-courier mt-5'>Matthew Bakkom (b. 1968 Minneapolis, MN) is an internationally established contemporary artist with special interests in history, material culture, political expression and aesthetic psychology.</p>
              </div>
              <div className='mt-5'>
                {/* <h2 className='text-2xl font-presto italic text-white'>Cont</h2> */}
                <p className='text-base font-courier mt-2'>Since the early 1990’s he has worked as an artist and organizer in North America and Europe. Educated at the University of Virginia (BA 1991), The Whitney Museum of American Art’s Independent Study Program (1999) and the University of Minnesota (MFA 2007). He has participated in numerous exhibitions, such as: Artists Space, Art in General, the Queens Museum of Art, The Irish Museum of Modern Art, The Philadelphia Institute of Contemporary Art, The Walker Art Center, The Vanne Abbemuseum and the  Musee des Arts Decoratifs, Paris.</p>
              </div>
              <div className='mt-5'>
                {/* <h2 className='text-2xl font-presto italic text-white'>Cont</h2> */}
                <p className='text-base font-courier mt-2'>Bakkom has twice been awarded residencies by the Mayor’s Office of Cultural Affairs of the City of Paris (2003, 2010).</p>
              </div>
              <div className='mt-5'>
                {/* <h2 className='text-2xl font-presto italic text-white'>Cont</h2> */}
                <p className='text-base font-courier mt-2'>His first book, New York City Museum was published in 2009 by Steidl-Miles, followed by Hustling Sunlight presented by MB Drapier in 2016. Between 2011-2017 he was an assistant professor at the University of Wisconsin-Madison and served as a visiting artist and critic at numerous institutions, including The University College London, The University of California - Irvine, The University of Florida, The Royal Danish Academy of Fine Arts, The University of Virginia and the Royal Academy of Art, and The Hague (KABK).</p>
              </div>
              <div className='mt-5'>
                {/* <h2 className='text-2xl font-presto italic text-white'>Cont</h2> */}
                <p className='text-base font-courier mt-2'>Currently, Bakkom operates All-Star Fine and Recorded Arts, a studio and exhibition space located in south Minneapolis.</p>
              </div>
            </div>
            <div className='archive-image mx-auto'>
              <img src="images/about/Bakkom2001.jpeg" alt="H" className='w-auto h-artist bg-gray-100' />
            </div>
          </div>
          {/* <div className='w-full lg:px-32 px-5 lg:py-16 py-8 lg:text-3xl text-2xl text-center'>
            <h2 className='text-white font-presto italic'>Matthew Bakkom Quote</h2>
            <h2 className='text-black font-presto italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h2>

          </div> */}
          {/* <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 mt-12'>
            <div className='archive-image'>
              <img src="images/artwork/artwork1.jpeg" alt="H" className='w-full h-product bg-gray-100' />
            </div>
            <div className='archive-content flex flex-col justify-center'>
              <div className='lg:mt-5 my-5'>
                <h2 className='text-2xl font-presto italic text-white'>Pacing new designs</h2>
                <p className='text-base font-courier my-2'>His first book, New York City Museum was published in 2009 by Steidl-Miles, followed by Hustling Sunlight presented by MB Drapier in 2016. Between 2011-2017 he was an assistant professor at the University of Wisconsin-Madison and served as a visiting artist and critic at numerous institutions, including The University College London, The University of California - Irvine, The University of Florida, The Royal Danish Academy of Fine Arts, The University of Virginia and the Royal Academy of Art, and The Hague (KABK). </p>
                <div className='w-full border-b-2 border-white'></div>
                <p className='text-base font-courier mt-2'>Currently, Bakkom operates All-Star Fine and Recorded Arts, a studio and exhibition space located in south Minneapolis. </p>
              </div>
            </div>
          </div> */}
        </div>
        <Footer />

      </div>

    );
  }
  
export default About;