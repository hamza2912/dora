import React from 'react';

function Footer() {

    const [isHoverInsta, setisHoverInsta] = React.useState(false);
    const [isHoverfb, setisHoverfb] = React.useState(false);
    const [isHovertwitter, setisHovertwitter] = React.useState(false);
    const [showModal, setshowModal] = React.useState(false);
    const [email, setemail] = React.useState("");
    const [firstname, setfirstname] = React.useState("");
    const [lastname, setlastname] = React.useState("");
    const [profession, setprofession] = React.useState("");



    return (
      
      <div className='w-full h-auto'>
          <div className='flex flex-col lg:w-1/3 w-full px-5 lg:px-0 mx-auto items-center pt-24 pb-16'>
                <h1 data-aos="fade-up" className='lg:text-4xl md:text-4xl text-2xl tracking-wide'>Join the waitlist</h1>
                <p className='text-xl mt-5'>Get notified when we launch.</p>
                <div className='lg:w-full w-3/4 grid md:grid-cols-3 grid-cols-1 gap-2 mt-8'>
                    <input value={email} onChange={(event) => setemail(event.target.val)} className='md:col-span-2 bg-gray px-4 py-2 rounded-md input-border focus:outline-none' placeholder='Email address' type="email" />
                    <button onClick={()=>{setshowModal(true)}} className='bg-brown py-3 text-white rounded-md text-sm'>Join the waitlist</button>
                </div>
                <div className='lg:w-1/3 md:w-1/4 w-1/2 grid grid-cols-3 gap-0 place-items-center mt-24'>
                    <a className={isHoverInsta ? 'flex justify-center items-center rounded-full bg-insta w-10 h-10 transition-all' : 'flex justify-center items-center rounded-full bg-gray w-10 h-10 transition-all'} href="" target="_blank"
                    onMouseOver={()=>setisHoverInsta(true)} 
                    onMouseOut={()=>setisHoverInsta(false)}
                    ><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={isHoverInsta ? 'text-white' : 'text-black'} d="M8.00357 3.95708C5.73214 3.95708 3.89999 5.76059 3.89999 7.99653C3.89999 10.2325 5.73214 12.036 8.00357 12.036C10.275 12.036 12.1071 10.2325 12.1071 7.99653C12.1071 5.76059 10.275 3.95708 8.00357 3.95708ZM8.00357 10.6227C6.53571 10.6227 5.33571 9.44497 5.33571 7.99653C5.33571 6.54809 6.53214 5.37036 8.00357 5.37036C9.47499 5.37036 10.6714 6.54809 10.6714 7.99653C10.6714 9.44497 9.47142 10.6227 8.00357 10.6227ZM13.2321 3.79185C13.2321 4.31567 12.8036 4.73403 12.275 4.73403C11.7429 4.73403 11.3179 4.31216 11.3179 3.79185C11.3179 3.27153 11.7464 2.84966 12.275 2.84966C12.8036 2.84966 13.2321 3.27153 13.2321 3.79185ZM15.95 4.7481C15.8893 3.48599 15.5964 2.36802 14.6571 1.44692C13.7214 0.52583 12.5857 0.237549 11.3036 0.174268C9.98214 0.100439 6.02142 0.100439 4.69999 0.174268C3.42142 0.234033 2.28571 0.522314 1.34642 1.44341C0.407136 2.3645 0.11785 3.48247 0.0535645 4.74458C-0.0214355 6.04536 -0.0214355 9.94419 0.0535645 11.245C0.114279 12.5071 0.407136 13.625 1.34642 14.5461C2.28571 15.4672 3.41785 15.7555 4.69999 15.8188C6.02142 15.8926 9.98214 15.8926 11.3036 15.8188C12.5857 15.759 13.7214 15.4707 14.6571 14.5461C15.5929 13.625 15.8857 12.5071 15.95 11.245C16.025 9.94419 16.025 6.04888 15.95 4.7481ZM14.2429 12.6407C13.9643 13.3297 13.425 13.8606 12.7214 14.1383C11.6679 14.5497 9.16785 14.4547 8.00357 14.4547C6.83928 14.4547 4.33571 14.5461 3.28571 14.1383C2.58571 13.8641 2.04642 13.3333 1.76428 12.6407C1.34642 11.6036 1.44285 9.14263 1.44285 7.99653C1.44285 6.85044 1.34999 4.38599 1.76428 3.35239C2.04285 2.66333 2.58214 2.13247 3.28571 1.85474C4.33928 1.44341 6.83928 1.53833 8.00357 1.53833C9.16785 1.53833 11.6714 1.44692 12.7214 1.85474C13.4214 2.12895 13.9607 2.65981 14.2429 3.35239C14.6607 4.3895 14.5643 6.85044 14.5643 7.99653C14.5643 9.14263 14.6607 11.6071 14.2429 12.6407Z" fill="currentColor"/>
                    </svg></a>
                    <a className={isHoverfb ? 'flex justify-center items-center rounded-full bg-fb w-10 h-10 transition-all' : 'flex justify-center items-center rounded-full bg-gray w-10 h-10 transition-all'} href="" target="_blank"
                    onMouseOver={()=>setisHoverfb(true)} 
                    onMouseOut={()=>setisHoverfb(false)}><svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={isHoverfb ? 'text-white' : 'text-black'} d="M10.4678 10.6875L11.001 7.24895H7.6669V5.01756C7.6669 4.07684 8.13265 3.15986 9.6259 3.15986H11.1416V0.232305C11.1416 0.232305 9.76615 0 8.45102 0C5.70527 0 3.91052 1.64691 3.91052 4.62828V7.24895H0.858398V10.6875H3.91052V19H7.6669V10.6875H10.4678Z" fill="currentColor"/>
                     </svg></a>
                     <a className={isHovertwitter ? 'flex justify-center items-center rounded-full bg-twitter w-10 h-10 transition-all' : 'flex justify-center items-center rounded-full bg-gray w-10 h-10 transition-all'} href="" target="_blank"
                     onMouseOver={()=>setisHovertwitter(true)} 
                     onMouseOut={()=>setisHovertwitter(false)}><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={isHovertwitter ? 'text-white' : 'text-black'} d="M16.1498 3.51837C16.1612 3.67277 16.1612 3.82721 16.1612 3.98162C16.1612 8.69115 12.4493 14.1176 5.66499 14.1176C3.57488 14.1176 1.63326 13.5331 0 12.5184C0.296966 12.5515 0.582471 12.5625 0.890863 12.5625C2.61546 12.5625 4.20305 12 5.47083 11.0405C3.84899 11.0074 2.48985 9.98163 2.02156 8.56985C2.25001 8.60292 2.47842 8.62498 2.71829 8.62498C3.0495 8.62498 3.38074 8.58085 3.6891 8.50368C1.99875 8.17277 0.730936 6.73896 0.730936 5.00735V4.96325C1.22204 5.22795 1.79315 5.39339 2.39844 5.41542C1.40478 4.77571 0.753788 3.68381 0.753788 2.4485C0.753788 1.78675 0.936496 1.18013 1.25631 0.650719C3.07232 2.81248 5.80203 4.22422 8.86293 4.37866C8.80583 4.11395 8.77155 3.83825 8.77155 3.5625C8.77155 1.59925 10.4162 0 12.4607 0C13.5228 0 14.4822 0.430146 15.1561 1.125C15.9898 0.970595 16.7893 0.672786 17.4975 0.264708C17.2233 1.09193 16.6409 1.78679 15.8756 2.22793C16.618 2.15076 17.3376 1.95219 18 1.67648C17.4975 2.38234 16.8693 3.01099 16.1498 3.51837Z" fill="currentColor"/>
                    </svg></a>
                </div>
                <h1 className='lg:text-xl tracking-wide mt-20'>we are <span className='text-transparent bg-clip-text hero-text'>latina founded</span></h1>
                <p className='mt-2'>Say hi at hello@trydora.com</p>
          </div>
          {
            showModal ?    
                <div>
                    <div className='dimmer'></div>
                    <div className='messageBox lg:w-1/3 w-4/5 bg-white h-auto z-10 fadein'>
                        <div className='w-full h-2 hero-text'></div>
                        <div className='lg:w-3/4 w-4/5 flex flex-col items-center mx-auto pt-8 pb-10'>
                            <p className='text-2xl'>You’re on the list!</p>
                            <p className='text-center lg:text-sm text-xs mt-2'>Be considered to join our beta program and use Dora for 90 days in full free.</p>
                            <input value={firstname} onChange={(event) => setfirstname(event.target.val)} className='lg:w-3/4 w-4/5 mt-4 bg-gray px-4 py-2 rounded-md input-border focus:outline-none' placeholder='First Name' type="text" />
                            <input value={lastname} onChange={(event) => setlastname(event.target.val)} className='lg:w-3/4 w-4/5 mt-2 bg-gray px-4 py-2 rounded-md input-border focus:outline-none' placeholder='Last Name' type="text" />
                            <input value={profession} onChange={(event) => setprofession(event.target.val)} className='lg:w-3/4 w-4/5 mt-2 bg-gray px-4 py-2 rounded-md input-border focus:outline-none' placeholder='Profession' type="text" />
                            <button onClick={()=>{setshowModal(false)}} className='w-3/4 mt-4 py-3 bg-brown text-white rounded-md text-xs'>Submit</button>
                        </div>
                        <i onClick={()=>setshowModal(false)} className="fas fa-close absolute top-5 right-5 cursor-pointer"></i>
                    </div> 
                </div>
                : null
          }
            
      </div>

    );
  }
  
export default Footer;
