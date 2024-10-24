// components/Navbar.tsx
import React from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <button 
          onClick={() => handleNavigate('/')} 
          className="text-lg font-bold hover:text-gray-400 focus:outline-none"
        >
          Simple Blog
        </button>
        <div className="flex space-x-4">
          <button 
            onClick={() => handleNavigate('/')} 
            className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 focus:outline-none"
          >
            Home
          </button>
         
          <button 
            onClick={() => handleNavigate('/edit-posts')} 
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 focus:outline-none"
          >
            Edit Posts
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
