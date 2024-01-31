'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col items-center sm:flex-row sm:justify-center">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="sm:hidden">
        {/* Hamburger Icon */}
      </button>
      <div className={`flex flex-col sm:flex-row ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
        <Link href="/" className="text-blue-500 hover:text-blue-700">
            Home
        </Link>
        <Link href="/about" className="text-blue-500 hover:text-blue-700">
            About
        </Link>
        <Link href="/projects" className="text-blue-500 hover:text-blue-700">
            Projects
        </Link>
        <Link href="/contact" className="text-blue-500 hover:text-blue-700">
            Contact
        </Link>
      </div>
    </nav>
  );
}

