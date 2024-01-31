'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ModeToggle } from './toggleMode';
import { BorderTopIcon } from '@radix-ui/react-icons';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col items-center sm:flex-row sm:justify-between p-4 bg-white text-gray-800 shadow-md">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="sm:hidden p-2">
        <BorderTopIcon className="h-6 w-6 text-gray-600" />
      </button>
      <div className={`flex flex-col sm:flex-row items-center ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
        <Link href="/" className="mx-2 py-1 hover:text-gray-600">
          Home
        </Link>
        <Link href="/about" className="mx-2 py-1 hover:text-gray-600">
          About
        </Link>
        <Link href="/projects" className="mx-2 py-1 hover:text-gray-600">
          Projects
        </Link>
        <Link href="/contact" className="mx-2 py-1 hover:text-gray-600">
          Contact
        </Link>
      </div>
      <ModeToggle />
    </nav>
  );
}

