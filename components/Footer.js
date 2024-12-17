
import React from 'react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer bg-aquamarine-900 text-gray-100 py-8">
      <div className="container mx-auto px-4">
        <p className="text-lg text-center">
          &copy; 2024 TechBridge Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


