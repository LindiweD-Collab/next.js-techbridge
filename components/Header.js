
import Link from 'next/link';
import React from 'react';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header bg-white py-4">
      <nav className="container mx-auto px-4 flex justify-between items-center">
        <ul className="flex flex-row justify-center items-center">
          <li className="mr-4">
            <Link href="/">
              <a className="text-purple-700 hover:text-lime-500 transition duration-300 ease-in-out">
                Home
              </a>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/services">
              <a className="text-purple-700 hover:text-lime-500 transition duration-300 ease-in-out">
                Services
              </a>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/academy">
              <a className="text-purple-700 hover:text-lime-500 transition duration-300 ease-in-out">
                Academy
              </a>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/webinars">
              <a className="text-purple-700 hover:text-lime-500 transition duration-300 ease-in-out">
                Webinars
              </a>
            </Link>
          </li>
          <li className="mr-4">
            <Link href="/blogs">
              <a className="text-purple-700 hover:text-lime-500 transition duration-300 ease-in-out">
                Blogs
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="text-purple-700 hover:text-lime-500 transition duration-300 ease-in-out">
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
 
