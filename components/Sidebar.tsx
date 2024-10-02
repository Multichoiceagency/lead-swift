// components/Sidebar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import {
  Home,
  Briefcase,
  Users,
  FileText,
  CreditCard,
  PieChart,
  Settings,
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const menuItems = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'Diensten', icon: Briefcase, href: '/diensten' },
    { name: 'Contacten', icon: Users, href: '/contacten' },
    { name: 'Offertes', icon: FileText, href: '/offertes' },
    { name: 'Facturen', icon: CreditCard, href: '/facturen' },
    { name: 'Inzichten', icon: PieChart, href: '/analytics' },
    { name: 'Instellingen', icon: Settings, href: '/instellingen' },
  ];

  return (
    <div className="bg-white w-64 space-y-6 py-7 px-2 hidden md:block">
      <h1 className="text-2xl font-semibold text-center">Bedrijfsnaam</h1>
      <nav>
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href}>
            <a className="flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 hover:bg-gray-100">
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
