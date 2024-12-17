
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="bg-white h-screen">
      <Header />
      <main className="container mx-auto p-4 pt-6 md:p-6 lg:p-8 xl:p-10">
        <section
          className="hero bg-cover bg-center h-screen"
          style={{ backgroundImage: `url(/bg-image.jpg)` }}
        >
          <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-8 xl:p-10 text-white text-center">
            <h1 className="text-5xl font-bold mb-4">
              Welcome to TechBridge Solutions
            </h1>
            <p className="text-lg mb-8">
              Innovative Software Solutions for Your Business Needs
            </p>
            <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
