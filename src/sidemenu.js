'use client';

import { useState } from "react";
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function SideMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <button className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded" onClick={() => setIsNavOpen(true)}>
        <Menu className="w-6 h-6" />
      </button>

      <div className={`fixed md:static w-60 md:w-[15%] bg-gray-800 text-white p-4 transition-transform duration-300 h-full ${isNavOpen ? 'translate-x-0' : '-translate-x-60'} md:translate-x-0`}>
        <button className="md:hidden mb-4" onClick={() => setIsNavOpen(false)}>
          <X className="w-6 h-6" />
        </button>
        
        <nav>
          <ul>
            <li className="py-2"><Link href="/" onClick={() => setIsNavOpen(false)}>Home</Link></li>
            <li className="py-2"><Link href="/about" onClick={() => setIsNavOpen(false)}>About</Link></li>
            <li className="py-2"><Link href="/contact" onClick={() => setIsNavOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
}
