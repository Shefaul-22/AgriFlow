"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiBoxList } from "react-icons/ci";
import { RiMentalHealthLine } from "react-icons/ri"
import { MdOutlineInventory2, MdOutlineAnalytics } from "react-icons/md";
import { IoSettingsOutline, IoHomeOutline } from "react-icons/io5";
import Logo from '@/app/components/Logo';
import { RiLiveLine } from "react-icons/ri";

const sidebarLinks = [
  { name: 'Home', href: '/', icon: IoHomeOutline },
  { name: 'Dashboard', href: '/Dashboard', icon: CiBoxList },
  { name: 'Health', href: '/Dashboard/crop-health', icon: RiMentalHealthLine },
  { name: 'Inventory', href: '/Dashboard/inventory', icon: MdOutlineInventory2 },
  { name: 'Analytics', href: '/Dashboard/analytics', icon: MdOutlineAnalytics },
  { name: 'Settings', href: '/Dashboard/settings', icon: IoSettingsOutline },
 { name: 'Live Farm', href: '/Dashboard/live', icon: RiLiveLine  },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      
      {/* --- Desktop Sidebar (Hidden on Mobile) --- */}
      <aside className="hidden md:flex w-64 border-r border-gray-100 dark:border-zinc-800 flex-col p-6 fixed h-full bg-white dark:bg-zinc-900 z-50">
        <div className="text-2xl font-bold text-deep-green mb-8 flex items-center gap-2">
           <div className="w-8 h-8">
             <Logo />
           </div>
        </div>

        <nav className="flex-1 space-y-1">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                  isActive 
                  ? 'bg-green-600 text-white shadow-lg shadow-green-200 dark:shadow-none' 
                  : 'text-gray-500 hover:bg-green-50 dark:hover:bg-zinc-800'
                }`}
              >
                <Icon className="text-xl" />
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* User Profile */}
        <div className="mt-auto pt-6 border-t border-gray-100 dark:border-zinc-800">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-zinc-700"></div>
              <div>
                 <p className="text-sm font-bold dark:text-white">Profile Name</p>
                 <p className="text-xs text-gray-400">Pro Farmer</p>
              </div>
           </div>
        </div>
      </aside>

      {/* --- Mobile Bottom Navigation (Hidden on Desktop) --- */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 backdrop-blur-lg border-t border-gray-200 dark:border-zinc-800 px-2 py-3 z-50 flex justify-around items-center">
        {sidebarLinks.map((link) => { 
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.name} 
              href={link.href}
              className={`flex flex-col items-center gap-1 transition-all ${
                isActive ? 'text-green-600' : 'text-gray-400'
              }`}
            >
              <Icon className="text-2xl" />
              <span className="text-[10px] font-medium">{link.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* --- Main Content Area --- */}
      <main className="flex-1 md:ml-64 p-4 md:p-8 pb-24 md:pb-8">
        {children}
      </main>

    </div>
  );
}