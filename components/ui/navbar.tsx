'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ModeToggle } from './toggleMode';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex flex-col items-center sm:flex-row sm:justify-between p-4 bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 shadow-md">
      <div className="flex justify-end items-center w-full sm:w-auto">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 mr-2 sm:hidden">
          <HamburgerMenuIcon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        </button>
        <ModeToggle className="mr-2" />
      </div>
      <div className={`flex flex-col sm:flex-row items-center ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
        <Link href="/" className="mx-2 py-1 hover:text-gray-600 dark:hover:text-gray-300">
            Home
        </Link>
        <Link href="/about" className="mx-2 py-1 hover:text-gray-600 dark:hover:text-gray-300">
            About
        </Link>
        <Link href="/projects" className="mx-2 py-1 hover:text-gray-600 dark:hover:text-gray-300">
            Projects
        </Link>
        <Link href="/contact" className="mx-2 py-1 hover:text-gray-600 dark:hover:text-gray-300">
            Contact
        </Link>
      </div>
    </nav>
  );
}
