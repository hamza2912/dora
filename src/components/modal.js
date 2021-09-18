import React from 'react';
import Add_button from './add_button';

function Modal(props) {

    return (
      
        <div id={props.work_id} className="ui modal modal-width">
            <div className='w-full border-t-2 border-l-2 border-r-2 shadow-lg pb-0 z-10 bg-gray text-white'>
                <div className='w-full pb-3 z-10 bg-gray text-white'>
                    <div className='w-full px-3 py-1 bg-video-header flex flex-row items-center justify-between'>
                        <div className='flex flex-row items-center'>
                        <img className='w-5 h-auto' src="images/icons/searchFiles.png" alt="Search Files Icon 98" />
                        <p className='ml-2 font-presto italic text-xs'>Glitch Artwork</p>
                        </div>
                        <div className='flex flex-row'>
                            <i className="fas fa-times close-modal text-black z-50 p-1 bg-gray border text-sm shadow-md cursor-pointer"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-auto border-2 border-white bg-gray'>
                <img className='w-full h-auto' src={props.src}  alt="Modal Work" />
                <div className='w-full lg:pl-10 pl-5 pb-6'>
                    <h2 className='font-presto text-5xl text-black'>{props.title}</h2>
                    <ul className='lg:pl-10 pl-5 mt-2 mb-10 font-presto text-sm'>
                        <li className=' w-full flex flex-row items-center'>
                            <div className='w-1/4 flex flex-row items-center'>
                                <i className="fas fa-caret-right text-black mr-2"></i>
                                <p className='text-gray-600'>Artist:</p>
                            </div>
                            <div className='w-3/4'>
                                <p className='italic text-black'>{props.artist}</p>
                            </div>
                        </li>
                        <li className=' w-full flex flex-row items-center'>
                            <div className='w-1/4 flex flex-row items-center'>
                                <i className="fas fa-caret-right text-black mr-2"></i>
                                <p className='text-gray-600'>Date:</p>
                            </div>
                            <div className='w-3/4'>
                                <p className='italic text-black'>{props.date}</p>
                            </div>
                        </li>
                        <li className=' w-full flex flex-row items-center'>
                            <div className='w-1/4 flex flex-row items-center'>
                                <i className="fas fa-caret-right text-black mr-2"></i>
                                <p className='text-gray-600'>Glitched:</p>
                            </div>
                            <div className='w-3/4'>
                                <p className='italic text-black'>{props.glitched}</p>
                            </div>
                        </li>
                        <li className=' w-full flex flex-row items-center'>
                            <div className='w-1/4 flex flex-row items-center'>
                                <i className="fas fa-caret-right text-black mr-2"></i>
                                <p className='text-gray-600'>Location:</p>
                            </div>
                            <div className='w-3/4'>
                                <p className='italic text-black'>{props.location}</p>
                            </div>
                        </li>
                    </ul>
                    <div className='w-full lg:pr-16 lg:pl-6 px-3 grid grid-cols-1 lg:gap-8 gap-4'>
                        <div className='w-1/2 mx-auto flex flex-row justify-center font-semibold z-50 relative shades'>
                            <div className='w-full px-2 py-4 bg-gray border-2 border-black flex justify-center items-center'>
                                <a href="/shop" className='cursor-pointer font-presto'>View More</a>
                            </div>
                        </div>
                        {/* <Add_button url={props.url} /> */}
                    </div>
                </div>
            </div>
        </div>

    );
  }
  
export default Modal;