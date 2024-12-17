
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

interface ServicesProps {}

const Services: React.FC<ServicesProps> = () => {
  return (
    <div className="bg-white h-screen">
      <Header />
      <main className="container mx-auto p-4 pt-6 md:p-6 lg:p-8 xl:p-10">
        <h1 className="text-purple-700 text-4xl font-bold mb-4">
          Our Services
        </h1>
        <div className="flex flex-wrap justify-center mb-8">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4 mb-4">
            <div
              className="bg-cover bg-center h-64 mb-4"
              style={{ backgroundImage: `url(/software-development.jpg)` }}
            >
              <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
                <h2 className="text-white text-lg font-bold">
                  Software Development Solutions
                </h2>
              </div>
            </div>
            <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">
              <a href="#" className="text-white text-lg">
                Learn More
              </a>
            </button>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4 mb-4">
            <div
              className="bg-cover bg-center h-64 mb-4"
              style={{ backgroundImage: `url(/business-digitization.jpg)` }}
            >
              <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
                <h2 className="text-white text-lg font-bold">
                  Business Digitization
                </h2>
              </div>
            </div>
            <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">
              <a href="#" className="text-white text-lg">
                Learn More
              </a>
            </button>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4 mb-4">
            <div
              className="bg-cover bg-center h-64 mb-4"
              style={{ backgroundImage: `url(/seo-services.jpg)` }}
            >
              <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
                <h2 className="text-white text-lg font-bold">
                  SEO Services
                </h2>
              </div>
            </div>
            <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">
              <a href="#" className="text-white text-lg">
                Learn More
              </a>
            </button>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4 mb-4">
            <div
              className="bg-cover bg-center h-64 mb-4"
              style={{ backgroundImage: `url(/rpa-solutions.jpg)` }}
            >
              <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
                <h2 className="text-white text-lg font-bold">
                  RPA Solutions
                </h2>
              </div>
            </div>
            <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">
              <a href="#" className="text-white text-lg">
                Learn More
              </a>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
