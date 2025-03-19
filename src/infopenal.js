'use client';

import { useState } from "react";
import { X } from 'lucide-react';

export default function InfoPanel() {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <div className={`fixed md:static w-60 md:w-[15%] bg-gray-100 p-4 transition-all md:block ${isInfoOpen ? 'right-0' : '-right-60'} md:right-0`}>
      <button className="md:hidden mb-2" onClick={() => setIsInfoOpen(false)}>
        <X className="w-6 h-6" />
      </button>
      <h2 className="text-xl font-semibold">Info Panel</h2>
      <p className="text-gray-700 mt-2">Additional information goes here.</p>
    </div>
  );
}
