import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 flex flex-col items-center justify-center px-4">
            {/* Hero Section */}
            <div className="text-center text-white mt-16 sm:mt-32">
                <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
                    Elevate Your Journey with Us
                </h1>
                <p className="max-w-3xl mx-auto text-lg sm:text-2xl mt-4 mb-10 text-gray-100">
                    Unlock unlimited possibilities with cutting-edge tools, exciting resources, and a vibrant community.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-yellow-500 text-black hover:bg-yellow-400 font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 shadow-lg hover:scale-105"
                >
                    Start Now
                </Link>
            </div>

            {/* Hero Image */}
            <div className="relative mt-16">
                <img
                    src="./src/assets/langingPageImg.jpeg"
                    alt="Hero"
                    className="w-full sm:w-[500px] rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500 mx-auto"
                />
            </div>

            {/* Clean Section */}
            <div className="text-center mt-32 px-4 sm:px-8">
                <h2 className="text-white text-4xl sm:text-5xl font-semibold mb-6">
                    Transform Your Experience
                </h2>
                <p className="text-white text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
                    We provide the resources you need to succeed, learn, and grow in every aspect of your journey. Discover endless potential today.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 px-8 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
                >
                    Explore More
                </Link>
            </div>

            {/* Middle Image */}
            <div className="grid place-items-center my-24">
                <img
                    src="./src/assets/landingPageImg2.jpeg"
                    alt="Showcase"
                    className="w-96 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Modern Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-24 px-6 sm:px-16">
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Innovative Tools</h3>
                    <p className="text-gray-600 mb-6">
                        Access powerful tools to bring your ideas to life with cutting-edge technology.
                    </p>
                    <Link
                        to="/"
                        className="text-purple-500 hover:text-purple-700 text-lg font-medium"
                    >
                        Learn More
                    </Link>
                </div>
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Vibrant Community</h3>
                    <p className="text-gray-600 mb-6">
                        Join a community of like-minded individuals passionate about growth and success.
                    </p>
                    <Link
                        to="/"
                        className="text-purple-500 hover:text-purple-700 text-lg font-medium"
                    >
                        Join Now
                    </Link>
                </div>
                <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Endless Resources</h3>
                    <p className="text-gray-600 mb-6">
                        Get access to an endless library of resources designed to help you succeed.
                    </p>
                    <Link
                        to="/"
                        className="text-purple-500 hover:text-purple-700 text-lg font-medium"
                    >
                        Get Started
                    </Link>
                </div>
            </div>

            {/* Final Call to Action */}
            <div className="mt-32 py-12 px-6 bg-gray-900 text-center text-white">
                <p className="text-xl sm:text-2xl mb-4">Start Your Journey Today!</p>
                <Link
                    to="/"
                    className="inline-block bg-yellow-500 text-black hover:bg-yellow-400 font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 shadow-lg hover:scale-105"
                >
                    Get Started
                </Link>
            </div>
        </div>
    );
}
