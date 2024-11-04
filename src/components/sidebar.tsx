'use client';

import Link from 'next/link';

const Sidebar: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white h-screen p-5">
            <h2 className="text-2xl font-bold mb-5">Dashboard</h2>
            <ul>
                <li>
                    <Link href="/sales-entry" className="block py-2 hover:bg-gray-700 rounded">
                        Sales Entry
                    </Link>
                </li>
                <li>
                    <Link href="/purchase-entry" className="block py-2 hover:bg-gray-700 rounded">
                        Purchase Entry
                    </Link>
                </li>
                <li>
                    <Link href="/payment-entry" className="block py-2 hover:bg-gray-700 rounded">
                        Payment Entry
                    </Link>
                </li>
                <li>
                    <Link href="/receipt-entry" className="block py-2 hover:bg-gray-700 rounded">
                        Receipt Entry
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
