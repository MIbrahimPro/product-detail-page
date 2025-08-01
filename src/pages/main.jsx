import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                Welcome to the 3D Product Showcase
            </h1>
            <p className="text-xl text-gray-700 mb-8">
                Explore our products in stunning 3D!
            </p>

            <div className="flex space-x-6">
                {/* Use Link component from react-router-dom */}
                <Link to="/before" className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300 ease-in-out">
                    View Before Products
                </Link>
                <Link to="/after" className="px-8 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transform hover:scale-105 transition duration-300 ease-in-out">
                    View After Products
                </Link>
            </div>

            {/* Credit Message */}
            <footer className="mt-12 text-center text-gray-500 text-sm">
                <p>
                    A big thank you to the kind person, Ivan Dnistrian, for providing this amazing 3D model!
                </p>
                <p>
                    "<a href="https://skfb.ly/6wKMo" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">Headphones</a>" by Ivan Dnistrian is licensed under <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">Creative Commons Attribution</a>.
                </p>
            </footer>
        </div>
    );
}

export default Home;