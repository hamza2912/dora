import React from "react";
import Add_button from "./add_button";

function Work_tags(props) {

    return (
        
        <div className="lg:w-72 w-72 flex flex-row font-semibold z-50 relative shades">
            <div className="w-full px-2 py-3 bg-prd-title flex justify-center items-center">
                <p className="font-presto text-center">{props.title}</p>
            </div>
            {/* <div className='w-1/2'>
                <Add_button url={props.url} />
            </div> */}
            {/* <div className="w-1/2 px-2 py-3 bg-prd-price flex justify-center items-center text-white">
                <p className="font-presto italic">{props.price}</p>
            </div> */}
        </div>

    );
}

export default Work_tags;