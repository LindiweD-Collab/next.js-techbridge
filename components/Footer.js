import React from 'react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer bg-white py-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <p className="text-purple-700 text-lg text-center mb-4">
          &copy; 2024 TechBridge Solutions. All rights reserved.
        </p>
        <div className="flex flex-row justify-center mb-4">
          <a
            href="(link unavailable)"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Facebook
          </a>
          <a
            href="(link unavailable)"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Twitter
          </a>
          <a
            href="(link unavailable)"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-lime-500 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



