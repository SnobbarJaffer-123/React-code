{/*
//import React from 'react'
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl p-5">
                            Download Now
                            <span className="hidden sm:block text-xl ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A ea officia nam pariatur voluptatum optio sit architecto quam modi aliquam.</span>
                        </h2>

                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Download now
                        </Link>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full   ">
                    <img className="w-96" src="./src/assets/langingPageImg.jpeg" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src='./src/assets/landingPageImg2.jpeg' alt="image2" />
            </div>

            <h1 className="text-center text-sm sm:text-5xl py-10 font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio ullam porro eius beatae fugit aut, perferendis sequi nihil laboriosam.</h1>
        </div>
    );
}
*/}



import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex flex-col items-center justify-center px-4">
            {/* Hero Section */}
            <div className="text-center text-white mt-20">
                <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
                    Welcome to Your Next Adventure
                </h1>
                <p className="max-w-2xl mx-auto text-lg sm:text-2xl mt-4 mb-10 text-gray-100">
                    Unlock the power of innovation, creativity, and endless opportunities. Let's build something extraordinary together.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-white text-purple-700 hover:bg-purple-100 font-bold py-3 px-8 rounded-full text-xl transition-all duration-300 shadow-lg hover:scale-105"
                >
                    Get Started
                </Link>
            </div>

            {/* Hero Image */}
            <div className="relative mt-16">
                <img
                    src="./src/assets/langingPageImg.jpeg"
                    alt="Hero"
                    className="w-80 sm:w-[500px] rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
            </div>

             {/* Middle Section*/} 
            <div className="grid place-items-center my-20">
                <img
                    src="./src/assets/landingPageImg2.jpeg"
                    alt="Showcase"
                    className="rounded-2xl w-64 sm:w-96 shadow-2xl hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Final Call to Action*/ }
            <div className="text-center mb-20 px-6">
                <h2 className="text-white text-4xl sm:text-6xl font-bold mb-6">
                    Ready to Level Up?
                </h2>
                <p className="text-gray-200 text-lg sm:text-2xl max-w-2xl mx-auto mb-8">
                    Dive into a journey of transformation with tools, resources, and community support to achieve your dreams.
                </p>
                <Link
                    to="/"
                    className="inline-block bg-yellow-400 text-black hover:bg-yellow-300 font-bold py-3 px-8 rounded-full text-xl transition-all duration-300 shadow-lg hover:scale-105"
                >
                    Join Us Today
                </Link>
            </div>
        </div>
    );
}
