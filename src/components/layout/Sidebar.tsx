'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Subaccounts', path: '/' },
  { name: 'Trading', path: '/trading' },
  { name: 'Wallet Lookup', path: '/lookup' },
];

export function Sidebar() {
  const pathname = usePathname();
  
  return (
    <aside className="w-full md:w-48 border-r border-gray-800">
      <nav className="p-2">
        {navItems.map((item) => (
          <Link 
            key={item.path}
            href={item.path}
            className={cn(
              "block w-full p-2 mb-2 rounded-md text-sm font-medium transition-colors",
              pathname === item.path
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:text-white hover:bg-gray-800"
            )}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
