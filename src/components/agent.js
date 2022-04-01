import React from "react";
import { useEffect } from "react/cjs/react.production.min";

function Agent(props) {

    const [mobile, setmobile] = React.useState(window.matchMedia('(min-width: 767px)').matches);
    const [desktop, setdesktop ] = React.useState(window.matchMedia('(max-width: 992px)').matches);

    React.useEffect(() => {
        const handler = e => {
            setmobile(e.matches);
            setdesktop(e.matches);
        }
        window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
    });

    if(mobile && desktop){

        return (
        
        
            <div className='flex flex-row items-center text-center'>
                <div className="w-1/2 relative">
                    <div className='w-full border-2 border-black rounded-t-full h-auto z-10 p-16'>
                        <img className='w-full h-auto rounded-t-full opacity-0' src={props.src} alt="Real Estate Agent" />
                    </div>
                    <img className='w-full p-4 h-arc rounded-t-full absolute top-0 img-s z-minus' src={props.src} alt="Dora Agents" />
                </div>
                <div className="w-1/2 ml-10 flex flex-col items-center">
                    <h1 className='text-2xl mt-10'>{props.name}</h1>
                    <p className='text-mate w-4/5 text-lg mt-2'>{props.desc}</p>
                </div>
            </div>
    
        );

    } else {

        return (
        
        
            <div className='flex flex-col items-center relative text-center'>
                <div className='w-full border-2 border-black rounded-t-full h-auto z-10 p-16'>
                    <img className='w-full h-auto rounded-t-full opacity-0' src={props.src} alt="Real Estate Agent" />
                </div>
                <img className={props.fix == "true" ? 'w-full p-4 h-arc2 rounded-t-full absolute top-0 img-s' : 'w-full p-4 h-arc rounded-t-full absolute top-0 img-s'} src={props.src} alt="Dora Agents" />
                <h1 className='md:text-2xl text-lg lg:mt-16 mt-10'>{props.name}</h1>
                <p className='text-mate lg:w-11/12 w-full text-lg mt-2'>{props.desc}</p>
            </div>
    
        );

    }

    
}

export default Agent;