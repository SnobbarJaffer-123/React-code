{/*
//import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-4 text-gray-600 md:px-12 2xl:px-6">
              <div className="space-y-0 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-2 ">
                  <div className="md:5/12 lg:w-5/12">
                      <img 
                          src="./src/assets/bgImg.jpeg"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                          accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                          aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                      </p>
                      <p className="mt-4 text-gray-600">
                          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}*/}

export default function About() {
    return (
      <div className="py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="w-full lg:w-6/12 text-white">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Building the Future with React
            </h2>
            <p className="text-lg sm:text-xl text-gray-100 mb-6">
              We are passionate developers dedicated to crafting innovative, scalable, and beautiful web applications using the power of React. 
            </p>
            <p className="text-md sm:text-lg text-gray-200 mb-8">
              With a strong belief in clean code, smooth performance, and intuitive designs, we aim to transform ideas into stunning realities. 
              Let's create something that truly stands out in the digital world.
            </p>
            <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold text-lg shadow-md hover:bg-gray-200 hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
  
          {/* Image Section */}
          <div className="w-full lg:w-6/12">
            <img 
              src="./src/assets/bgImg.jpeg"
              alt="About Image"
              className="w-full rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
  
        </div>
      </div>
    )
  }
  