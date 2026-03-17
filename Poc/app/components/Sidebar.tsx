'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Kebutuhan Saya', href: '/dashboard/needs' },
  { name: 'Grup', href: '/dashboard/groups' },
  { name: 'Chatbot', href: '/dashboard/chatbot' },
  { name: 'Vendor', href: '/dashboard/vendors' },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex-shrink-0 bg-slate-800 p-6 hidden md:block">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
              pathname === item.href
                ? 'bg-cyan-500 text-white'
                : 'text-slate-300 hover:bg-slate-700 hover:text-white'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
