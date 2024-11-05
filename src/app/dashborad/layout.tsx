// src/app/dashboard/layout.tsx
"use client";

import { useEffect, useState } from 'react';
import Navbar from "@/components/navbar"; // Ensure correct path

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/auth/me');
        if (response.ok) {
          const data = await response.json();
          setUsername(data.username);
          setIsAdmin(data.isAdmin);
        } else {
          console.log('User not authenticated');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUsername(null);
    setIsAdmin(false);
    window.location.href = '/login';
  };

  return (
    <div>
      <Navbar username={username} onLogout={handleLogout} isAdmin={isAdmin} />
      {children}
    </div>
  );
};

export default DashboardLayout;
