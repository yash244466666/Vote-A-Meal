'use client'; // Mark only the client-side part
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavBar() {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    pathname === path
      ? 'text-white bg-blue-500 hover:bg-blue-600 rounded px-3 py-2'
      : 'text-gray-300 hover:text-white rounded px-3 py-2';

  return (
    <div className="bg-gray-800 p-4 sticky top-0 z-50">
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/" className={linkClasses('/')}>Home</Link></li>
          <li><Link href="/employee/add" className={linkClasses('/employee/add')}>Add new Employee</Link></li>
          <li><Link href="/employee/get" className={linkClasses('/employee/get')}>Get all Employee</Link></li>
          <li><Link href="/restaurant/get" className={linkClasses('/restaurant/get')}>Get all restaurant</Link></li>
          <li><Link href="/restaurant/add" className={linkClasses('/restaurant/add')}>Add Restaurant</Link></li>
          <li><Link href="/vote" className={linkClasses('/vote')}>Vote</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;