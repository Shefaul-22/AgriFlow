"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiBoxList } from "react-icons/ci";
import { RiMentalHealthLine } from "react-icons/ri"
import { MdOutlineInventory2 } from "react-icons/md";
import { MdOutlineAnalytics } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import Logo from '@/app/components/Logo';
import { IoHomeOutline } from "react-icons/io5";

const sidebarLinks = [
  { name: 'Home', href: '/', icon: IoHomeOutline },
  { name: 'Dashboard', href: '/Dashboard', icon: CiBoxList },
  { name: 'Crop Health', href: '/Dashboard/crop-health', icon: RiMentalHealthLine },
  { name: 'Inventory', href: '/Dashboard/inventory', icon: MdOutlineInventory2 },
  { name: 'Analytics', href: '/Dashboard/analytics', icon: MdOutlineAnalytics },
  { name: 'Settings', href: '/Dashboard/settings', icon: IoSettingsOutline },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen ">
      {/* Sidebar / Drawer */}
      <aside className="w-64  border-r border-gray-100 flex flex-col p-6 fixed h-full">
        <div className="text-2xl font-bold text-deep-green mb-5 flex items-center gap-2">
           <div className="w-8 h-8 bg-deep-green rounded-lg">
           <Logo></Logo>
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
                  ? 'bg-green-600 text-white' 
                  : 'text-gray-600 hover:bg-green-200 hover:text-white'
                }`}
              >
                <Icon className="text-xl" />
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* User Profile at Bottom */}
        <div className="mt-auto pt-6 border-t border-gray-100">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                 {/* <img src="" alt="user" /> */}
              </div>
              <div>
                 <p className="text-sm font-bold text-main-black">Profile Name</p>
                 <p className="text-xs text-gray-400">Pro Farmer</p>
              </div>
           </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}