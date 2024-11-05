// src/components/Navbar.tsx
"use client";

import Link from 'next/link';

interface NavbarProps {
  username: string | null;
  onLogout: () => void;
  isAdmin: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ username, onLogout, isAdmin }) => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-lg font-semibold">
            {username ? `Welcome, ${username}` : "Welcome, Guest"}
          </span>
          <Link href="/" className="hover:text-blue-300 transition duration-200">
            Home
          </Link>
          {isAdmin && (
            <Link href="/user-management" className="hover:text-blue-300 transition duration-200">
              User Management
            </Link>
          )}
        </div>
        <button
          onClick={onLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition duration-200"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
