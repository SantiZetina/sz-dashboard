'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ModeToggle } from './toggleMode';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 flex justify-end items-center p-4 shadow-md">
        <div className="flex items-center">
          <ModeToggle />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            <HamburgerMenuIcon className="h-6 w-6 text-gray-800 dark:text-white" />
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-black p-5 pt-20 animate-slide-in">
          <div className="flex flex-col items-center space-y-6">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-5 left-5 p-2">
              <Cross1Icon className="h-8 w-4 text-gray-600 dark:text-gray-300" />
            </button>
            <Link href="/" className="text-xl hover:text-gray-600 dark:hover:text-gray-300">Home</Link>
            <Link href="/about" className="text-xl hover:text-gray-600 dark:hover:text-gray-300">About</Link>
            <Link href="/projects" className="text-xl hover:text-gray-600 dark:hover:text-gray-300">Projects</Link>
            <Link href="/contact" className="text-xl hover:text-gray-600 dark:hover:text-gray-300">Contact</Link>
          </div>
        </div>
      )}
    </>
  );
}
