'use client';

import Link from 'next/link';

interface NavbarProps {
    username: string;
    onLogout: () => void;
    isAdmin: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ username, onLogout, isAdmin }) => {
    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center">
            <div className="text-white text-lg font-semibold">{username}</div>
            <div className="flex items-center">
                {isAdmin && (
                    <Link href="/user-management" className="text-white px-4 hover:bg-gray-700 rounded">
                        User Management
                    </Link>
                )}
                <button
                    onClick={onLogout}
                    className="text-white px-4 hover:bg-gray-700 rounded"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
