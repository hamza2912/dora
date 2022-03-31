import React from "react";

function Agent(props) {

    return (
        
        <div className='flex flex-col items-center relative text-center'>
            <div className='w-full border-2 border-black rounded-t-full z-10'>
                <img className='w-11/12 h-auto rounded-t-full opacity-0' src={props.src} alt="Real Estate Agent" />
            </div>
            <img className='w-11/12 h-auto rounded-t-full absolute top-6 img-s' src={props.src} alt="Dora Agents" />
            <h1 className='text-xl mt-10'>{props.name}</h1>
            <p className='w-3/4 mt-2'>{props.desc}</p>
        </div>

    );
}

export default Agent;