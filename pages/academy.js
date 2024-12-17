
import React from 'react';
import Head from 'next/head';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from 'next/link';

interface AcademyProps {}

const Academy: React.FC<AcademyProps> = () => {
  return (
    <div className="bg-white h-screen">
      <Head>
        <title>TechBridge Academy</title>
        <meta name="description" content="Coming Soon!" />
      </Head>
      <Header />
      <main className="container mx-auto p-4 pt-6 md:p-6 lg:p-8 xl:p-10">
        <h1 className="text-purple-700 text-4xl font-bold mb-4">
          TechBridge Academy
        </h1>
        <p className="text-purple-700 text-lg mb-8">
          Coming Soon!
        </p>
        <Link href="/contact">
          <a className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </a>
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Academy;
