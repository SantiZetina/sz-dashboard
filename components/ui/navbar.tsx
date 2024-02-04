'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ModeToggle } from './toggleMode';
import { HamburgerMenuIcon, Cross1Icon } from '@radix-ui/react-icons';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log('NavBar component mounted');
    return () => console.log('NavBar component unmounted');
  }, []);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full flex justify-end items-center p-4">
        <div className="flex items-center">
          <ModeToggle />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            <HamburgerMenuIcon className="h-6 w-6 text-gray-800 dark:text-white" />
          </button>
        </div>
      </nav>
      {isMenuOpen && (
       <div className="fixed inset-0 z-40 bg-white bg-opacity-95 dark:bg-black dark:bg-opacity-95 p-5 pt-20 animate-slide-in">
          <div className="flex flex-col items-end space-y-6">
            <button onClick={() => setIsMenuOpen(false)} className="absolute top-5 left-5 p-2">
              <Cross1Icon className="h-8 w-4 text-gray-600 dark:text-gray-300" />
            </button>
            <Link href="/" className="text-gray-800 dark:text-white text-4xl font-bold tracking-widest uppercase">
            Home
          </Link>
          <Link href="/work" className="text-gray-800 dark:text-white text-4xl font-bold tracking-widest uppercase">
            Work
          </Link>
          <Link href="/about" className="text-gray-800 dark:text-white text-4xl font-bold tracking-widest uppercase">
            About
          </Link>
          <Link href="/contact" className="text-gray-800 dark:text-white text-4xl font-bold tracking-widest uppercase">
            Contact
          </Link>
          </div>
        </div>
      )}
    </>
  );
}
