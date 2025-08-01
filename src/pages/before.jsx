import React, { useState } from 'react';

// This is the main product page component, redesigned for a modern, premium feel.
export default function Before() {
    // Define the product details with an imaginary brand.
    const product = {
        brand: 'AuraFlow',
        model: 'Nova C1 Headphones',
        description: 'Experience unparalleled sound quality and comfort. These wireless headphones feature active noise cancellation and a battery life of up to 40 hours.',
        details: [
            { label: 'Driver Type', value: '40mm Dynamic Drivers' },
            { label: 'Connectivity', value: 'Bluetooth 5.2 with aptX™ HD' },
            { label: 'Battery Life', value: 'Up to 40 hours (ANC off)' },
            { label: 'Charging', value: 'USB-C Quick Charge (10 min for 5 hours)' },
            { label: 'Weight', value: '280g (9.9 oz)' },
        ],
        originalPrice: '$349',
        currentPrice: '$299',
        images: [
            './b (1).png',
            './b (2).png',
            './b (3).png',
            './b (4).png',
            './b (5).png',
        ],
    };

    // State to keep track of the currently displayed main image.
    const [mainImage, setMainImage] = useState(product.images[0]);

    return (
        // Main container with a subtle gradient background and modern styling.
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 font-sans text-gray-800 p-4 sm:p-8 md:p-12">
            <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-2xl p-6 sm:p-10 md:p-16">
                {/* Responsive layout: stacks on mobile, side-by-side on larger screens */}
                <div className="flex flex-col md:flex-row gap-8 lg:gap-16">

                    {/* Image Gallery Section */}
                    <div className="flex-1 flex flex-col items-center">
                        {/* Main Product Image with rounded corners and a soft shadow */}
                        <div className="w-full aspect-square overflow-hidden mb-6 shadow-xl rounded-xl">
                            <img
                                src={mainImage}
                                alt={`${product.model} - Main View`}
                                className="w-full h-full object-contain transition-transform duration-500 ease-in-out hover:scale-105"
                                // Fallback for image loading errors
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = 'https://placehold.co/800x800/e5e7eb/4b5563?text=Image+Not+Found';
                                }}
                            />
                        </div>

                        {/* Thumbnail Images for selection */}
                        {/* A flexible grid that wraps on smaller screens and shows all images */}
                        <div className="grid grid-cols-5 gap-3 w-full">
                            {product.images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`w-full aspect-square cursor-pointer shadow-md rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${mainImage === image
                                        ? 'ring-2 ring-offset-2 ring-blue-500'
                                        : 'ring-1 ring-gray-300 hover:ring-gray-400'
                                        }`}
                                    onClick={() => setMainImage(image)}
                                >
                                    <img
                                        src={image}
                                        alt={`${product.model} - View ${index + 1}`}
                                        className="w-full h-full object-cover rounded-lg"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = 'https://placehold.co/200x200/e5e7eb/4b5563?text=Thumb';
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Details Section */}
                    <div className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 uppercase tracking-wide text-gray-900">
                            {product.brand} {product.model}
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 border-gray">
                            {product.description}
                        </p>

                        {/* Product Information List */}
                        <h2 className="text-xl font-bold mb-2 mt-4 border-t border-gray-300 pt-2 text-gray-900">
                            Product Information
                        </h2>
                        <ul className="mb-6 space-y-2 text-gray-700 mb-6 border-b border-gray-300 pb-4">
                            {product.details.map((detail, index) => (
                                <li key={index} className="flex">
                                    <span className="font-semibold w-1/2">{detail.label}:</span>
                                    <span className="w-1/2">{detail.value}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Pricing Section */}
                        <div className="flex items-end gap-4 mb-8">
                            <span className="text-3xl sm:text-4xl font-extrabold text-blue-600">
                                {product.currentPrice}
                            </span>
                            <span className="text-xl sm:text-2xl text-gray-500 line-through">
                                {product.originalPrice}
                            </span>
                        </div>

                        {/* Add to Cart Button */}
                        <button className="w-full bg-blue-600 text-white text-lg font-bold py-4 px-6 uppercase tracking-wider shadow-md hover:bg-blue-700 transition-colors duration-300 ease-in-out rounded-lg">
                            Add to Cart
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

