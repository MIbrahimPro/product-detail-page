import React from 'react';
import Product from '../components/afterProduct';
import "./after.css";

export default function After() {
    return (
        <div className="relative h-screen w-full text-gray-800 overflow-hidden" style={{ backgroundColor: "red" }}>

            <div className="text-white text-5xl bg-text absolute top-4 left-1/2 -translate-x-1/2">
                AuraFlow
            </div>

            <svg width="100%" height="100%" viewBox="0 0 1366 768" preserveAspectRatio="xMidYMid meet">
                <defs>
                    <clipPath id="clipper-shape">
                        <path d="M1360.8,35.8v696.3c0,15.6-11.8,28.3-26.4,28.3H31.6c-14.6,0-26.4-12.7-26.4-28.3V35.8c0-15.6,11.8-28.3,26.4-28.3h517.9
	c14.6,0,26.4,12.7,26.4,28.3v0c0,15.6,11.8,28.3,26.4,28.3h161.3c14.6,0,26.4-12.7,26.4-28.3v0c0-15.6,11.8-28.3,26.4-28.3h517.9
	C1348.9,7.5,1360.8,20.2,1360.8,35.8z"/>
                    </clipPath>
                </defs>
                <foreignObject width="100%" height="100%" style={{ clipPath: 'url(#clipper-shape)' }}>
                    <div className="flex bg-gray-50 items-center justify-between w-full h-full relative">
                        <div className="bg-gray-50 from-down opacity-0 absolute inset-0 aspect-square overflow-hidden z-2 h-4/5 m-auto">
                            <Product className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col items-center justify-center ml-[100px] gap-[20px] z-10 from-left opacity-0">



                            <div class="w-[6rem] mx-auto ml-[10%]">
                                <div class="bg-white shadow-lg rounded-lg p-1 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
                                    <div class="overflow-hidden">
                                        <img
                                            class="w-full aspect-square object-cover rounded-md transition-transform duration-300 ease-out hover:scale-110"
                                            src="./d (1).png"
                                            alt="Card Image"
                                        />
                                    </div>
                                </div>
                                <div class="text-left mt-2 mr-2">
                                    <p class="text-gray-800 font-bold text-xs">Bluetooth 5.2</p>
                                </div>
                            </div>



                            <div className="w-[7.5rem] mx-auto ml-[50%]">
                                <div className="bg-white shadow-lg rounded-lg p-1 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
                                    <div className='overflow-hidden'>
                                        <img className="w-full aspect-square object-cover rounded-md transition-transform duration-300 ease-out hover:scale-110" src="./d (2).png" alt="Card Image" />
                                    </div>
                                </div>
                                <div className="text-left mt-2 mr-2">
                                    <p className="text-gray-800 font-bold text-xs">Flexible Base</p>
                                </div>
                            </div>



                            <div className="w-[4.75rem] mx-auto">
                                <div className="bg-white shadow-lg rounded-lg p-1 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
                                    <div className='overflow-hidden'>
                                        <img className="w-full aspect-square object-cover rounded-md transition-transform duration-300 ease-out hover:scale-110" src="./d (3).png" alt="Card Image" />
                                    </div>
                                </div>
                                <div className="text-left mt-2 mr-2">
                                    <p className="text-gray-800 font-bold text-xs">In Ear Design</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[300px] mr-[100px] relative p-4 font-sans antialiased from-right opacity-0">
                            <h1 className="text-2xl font-extrabold text-gray-900 leading-tight mb-2">
                                AuroFlow Nova C1 Headphones
                            </h1>
                            <p className="text-gray-600 text-sm mb-4">
                                Experience unparalleled sound quality and comfort. These wireless headphones feature active noise cancellation and a battery life of up to 40 hours.
                            </p>
                            <div className="border-t border-gray-200 pt-4 mt-4 border-b pb-4 mb-4">
                                <h2 className="text-lg font-bold text-gray-900 mb-2">Product Information</h2>
                                <ul className="text-gray-700 space-y-1 text-xs list-disc list-inside">
                                    <li><span className="font-bold">Driver Type:</span> 40mm Dynamic Drivers</li>
                                    <li><span className="font-bold">Connectivity:</span> Bluetooth 5.2 with aptX™ HD</li>
                                    <li><span className="font-bold">Battery Life:</span> Up to 40 hours (ANC off)</li>
                                    <li><span className="font-bold">Charging:</span> USB-C Quick Charge (10 min for 5 hours)</li>
                                    <li><span className="font-bold">Weight:</span> 280g (9.9 oz)</li>
                                </ul>
                            </div>
                            <div className="flex items-baseline space-x-2 mb-4">
                                <span className="text-3xl font-bold text-gray-900">$299</span>
                                <span className="text-sm text-gray-500 line-through">$349</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <button className="flex items-center justify-center px-6 py-2 bg-gray-900 text-white rounded-full font-bold text-base hover:bg-gray-700 transition-colors duration-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 mr-2">
                                        <circle cx="9" cy="21" r="1" />
                                        <circle cx="20" cy="21" r="1" />
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                    </svg>
                                    Add to Cart
                                </button>
                                <button className="flex items-center justify-center p-2 bg-gray-100 text-gray-900 rounded-full hover:bg-gray-200 transition-colors duration-200 border border-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </foreignObject>
            </svg>
        </div>
    );
}