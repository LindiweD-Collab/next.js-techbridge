import Link from 'next/link';

const Header = () => (
  <header className="header">
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/academy">Academy</Link></li>
        <li><Link href="/webinars">Webinars</Link></li>
        <li><Link href="/blogs">Blogs</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
