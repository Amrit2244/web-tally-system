// src/components/Sidebar.tsx
import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800 text-white fixed">
      <div className="p-6 text-2xl font-bold">Dashboard</div>
      <nav className="mt-4">
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-700">
              Home
            </Link>
          </li>
          <li>
            <Link href="/dashboard/sales-entry" className="block px-4 py-2 hover:bg-gray-700">
              Sales Entry
            </Link>
          </li>
          <li>
            <Link href="/dashboard/purchase-entry" className="block px-4 py-2 hover:bg-gray-700">
              Purchase Entry
            </Link>
          </li>
          <li>
            <Link href="/dashboard/payment-entry" className="block px-4 py-2 hover:bg-gray-700">
              Payment Entry
            </Link>
          </li>
          <li>
            <Link href="/dashboard/receipt-entry" className="block px-4 py-2 hover:bg-gray-700">
              Receipt Entry
            </Link>
          </li>
          <li>
            <Link href="/dashboard/verification" className="block px-4 py-2 hover:bg-gray-700">
              Verification
            </Link>
          </li>
          <li>
            <Link href="/dashboard/user-management" className="block px-4 py-2 hover:bg-gray-700">
              User Management
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
