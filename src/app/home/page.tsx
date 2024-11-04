// src/app/home/page.tsx
'use client';

import React from 'react';

// Functional component for the Navbar
function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tally Web System</h1>
        <ul className="flex space-x-6">
          <li><a href="/sales-entry" className="hover:underline">Sales Entry</a></li>
          <li><a href="/purchase-entry" className="hover:underline">Purchase Entry</a></li>
          <li><a href="/payment-entry" className="hover:underline">Payment Entry</a></li>
          <li><a href="/receipt-entry" className="hover:underline">Receipt Entry</a></li>
          <li><a href="/verification" className="hover:underline">Verification Page</a></li>
          <li><a href="/user-management" className="hover:underline">User Management</a></li>
        </ul>
      </div>
    </nav>
  );
}

// Functional component for the Footer
function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Tally Web System. All rights reserved.</p>
      </div>
    </footer>
  );
}

// Home page component
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-100 to-gray-300">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-800">Welcome to the Tally Web System</h1>
          <p className="mt-4 text-lg text-gray-600">
            Manage your entries seamlessly with our user-friendly system.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition duration-200">
            Get Started
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
