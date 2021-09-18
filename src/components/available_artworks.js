import React from "react";
import Work_item from "./work_item";

function Available_artworks(props) {
    return (
        
        <div>
            <h2 className='text-center text-6xl text-white font-presto text-shadow-lg font-bold'>Upcoming <br />Auctions</h2>
            <p className='text-center mt-10 font-presto italic text-white text-2xl'>1-10 of 30 pieces available</p>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-x-40 gap-y-12 lg:mt-20 mt-12'>
                <div className='lg:col-span-2 lg:w-1/2 w-auto mx-auto'>
                <Work_item imgDim="w-full h-auto artwork1" src="images/artwork/artwork1.jpg" title="Smart World Technology MAR.18.2021 19:15 EST" price="$3k" url="https://opensea.io/" artist="Matthew Bakkom" />
                </div>
                <Work_item imgDim="w-full h-auto artwork2" src="images/artwork/artwork2.jpg" title="Smart World Technology MAR.18.2021 19:17 EST" price="$3k" url="https://opensea.io/" artist="Matthew Bakkom" />
                <Work_item imgDim="w-full h-auto artwork3" src="images/artwork/artwork3.jpg" title="Smart World Technology MAR.18.2021 19:19 EST" price="$3k" url="https://opensea.io/" artist="Matthew Bakkom" />
                <Work_item imgDim="w-full h-auto artwork4" src="images/artwork/artwork4.jpg" title="Smart World Technology MAR.18.2021 19:21 EST" price="$3k" url="https://opensea.io/" artist="Matthew Bakkom" />
                <Work_item imgDim="w-full h-auto artwork5" src="images/artwork/artwork5.jpg" title="Smart World Technology MAR.18.2021 19:22 EST" price="$3k" url="https://opensea.io/" artist="Matthew Bakkom" />
            </div>
        </div>

    );
}

export default Available_artworks;