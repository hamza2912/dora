import React from 'react';

function Services() {

    const [transparency, setTransparency] = React.useState(true);
    const [collaboration, setCollaboration] = React.useState(false);
    const [communication, setCommunication] = React.useState(false);

    function selectService(service){

        setTransparency(false);
        setCollaboration(false);
        setCommunication(false);

        if(service == "transparency"){
            setTransparency(!transparency);
        } else if(service == "collaboration"){
            setCollaboration(!collaboration);
        } else {
            setCommunication(!communication);
        }

    }

    return (
      
      <div className='w-full lg:h-screen h-auto bg-mate lg:py-24 py-12'>
          <div className='container mx-auto lg:px-32 px-5'>
          <h1 data-aos="fade-right" className='text-white lg:text-3xl text-xl tracking-wider'>How do you build <br /> trust with Dora?</h1>
          <div className='grid lg:grid-cols-2 grid-cols-1 mt-12'>
            <div className='flex flex-col w-3/4'>
                <ul>
                    <li data-aos="fade-right" data-aos-delay="100" onClick={()=>selectService("transparency")} className='text-white cursor-pointer'>
                        <div className='flex items-center'>
                            <i className={transparency ? "fas fa-plus lg:text-lg text-base mr-2" : "fas fa-minus lg:text-lg text-base mr-2" }></i>
                            <h1 className='lg:text-2xl text-xl font-semibold uppercase tracking-widestt'>Transparency</h1>
                        </div>
                        {
                            transparency ?
                            <p className='mt-8 text-white fadein'>Create transparency for your client by setting them up with a workspace that takes them through every stage in your process. From understanding their needs all the way through the after steps of the process.</p> : null
                        }
                        
                    </li>
                    <li data-aos="fade-right" data-aos-delay="150" onClick={()=>selectService("collaboration")} className='text-white cursor-pointer mt-10'>
                        <div className='flex items-center'>
                            <i className={collaboration ? "fas fa-plus lg:text-lg text-base mr-2" : "fas fa-minus lg:text-lg text-base mr-2" }></i>
                            <h1 className='lg:text-2xl text-xl font-semibold uppercase tracking-widestt'>Collaboration</h1>
                        </div>
                        {
                            collaboration ?
                            <p className='mt-8 text-white fadein'>Invite your clients to collaborate with you in the process. Inviting them to the workspace allows them to share links and files during each stage of the process. They will be to comment and react to any links and files shared by you.</p> : null
                        }
                    </li>
                    <li data-aos="fade-right" data-aos-delay="200" onClick={()=>selectService("communication")} className='text-white cursor-pointer mt-10'>
                        <div className='flex items-center'>
                            <i className={communication ? "fas fa-plus lg:text-lg text-base mr-2" : "fas fa-minus lg:text-lg text-base mr-2" }></i>
                            <h1 className='lg:text-2xl text-xl font-semibold uppercase tracking-widestt'>Communication</h1>
                        </div>
                        {
                            communication ?
                            <p className='mt-8 text-white fadein'>Communicate through the comments of links and files shared throughout each stage of the process or choose to communicate directly in the chat with your client.</p> : null
                        }
                    </li>
                </ul>
            </div>
            <div data-aos="fade-left" className='w-full lg:h-full border border-white rounded-md px-8 py-6 lg:mt-0 mt-10'>
                {communication ? 
                    <img className='w-3/4 mx-auto my-4 h-auto fadein' src="images/vectors/comm_img.svg" alt="Service Image" /> : null 
                }
                {collaboration ? 
                    <img className='w-full h-auto fadein' src="images/vectors/collab_img.svg" alt="Service Image" /> : null 
                }
                {transparency ? 
                    <img className='w-full h-auto fadein' src="images/vectors/transparency_img.svg" alt="Service Image" /> : null
                }
                {!transparency && !collaboration && !communication ? 
                    <img className='w-full h-auto fadein' src="images/vectors/transparency_img.svg" alt="Service Image" /> : null
                }
            </div>
          </div>
          </div>
      </div>

    );
  }
  
export default Services;
