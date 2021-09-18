import React from "react";

function Footer() {
    return (
        
        <footer className="w-full footer-page lg:p-3 p-1">
            <div className="w-full py-5 lg:px-16 px-3 bg-transparent h-auto flex flex-row items-center">
                <div className="lg:w-24 w-16">
                    <div className="logo">
                        <a href="/"><img className="lg:w-24 w-16 h-auto" src="images/logo/archive-91-footer.png" alt="Archive 91 Logo" /></a>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-between border-t-2 border-b-2 border-black py-2 lg:px-32 px-5 font-presto font-semibold">
                    <a href="/about">About</a>
                    <a href="/shop">Auction</a>
                    <a href="/digital">Digital Art</a>
                    {/* <a href="https://www.instagram.com/archiveninetyone/" rel="noreferrer" target="_blank">Instagram</a> */}
                    <a href="https://opensea.io/" rel="noreferrer" target="_blank">OpenSea</a>
                </div>
            </div>
            <div className="w-full flex justify-center pb-12 border-b-2 border-white">
                <div className="lg:w-48 w-1/2 flex flex-row justify-between items-center mt-10">
                    {/* <a href="/"><img className="w-8 h-auto" src="images/icons/facebook.png" alt="Facebook Icon" /></a> */}
                    <a href="https://www.instagram.com/archiveninetyone/" rel="noreferrer" target="_blank"><img className="w-8 h-auto" src="images/icons/instagram.png" alt="Instagram Icon" /></a>
                    {/* <a href="https://discord.com/" rel="noreferrer" target="_blank"><img className="w-10 h-auto" src="images/icons/discord.png" alt="Discord Icon" /></a> */}
                    <a href="https://twitter.com/archive_91_" rel="noreferrer" target="_blank"><img className="w-8 h-auto" src="images/icons/Twitter.png" alt="Twitter Icon" /></a>
                </div>
            </div>
            <div className="w-full flex justify-center lg:pt-24 pt-16 pb-8">
                <p className="text-white">© Copyright Reserved @ 2021</p>
            </div>
        </footer>

    );
}

export default Footer;