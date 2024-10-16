// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-lg font-bold">
          Simple Blog
        </Link>
        <div>
          <Link href="/" className="mr-4 hover:text-gray-400">
            Home
          </Link>
          <Link href="/add-post" className="hover:text-gray-400">
            Add Post
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
