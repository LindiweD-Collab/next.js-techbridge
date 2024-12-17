
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

interface BlogsProps {}

const Blogs: React.FC<BlogsProps> = () => {
  return (
    <div className="bg-white h-screen">
      <Header />
      <main className="container mx-auto p-4 pt-6 md:p-6 lg:p-8 xl:p-10">
        <h1 className="text-purple-700 text-4xl font-bold mb-4">
          Our Blog
        </h1>
        <p className="text-purple-700 text-lg mb-8">
          Stay updated with the latest insights and updates.
        </p>
        <button className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">
          Read Our Latest Blog Post
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
