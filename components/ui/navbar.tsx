import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex justify-center space-x-4">
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
    </nav>
  );
}

