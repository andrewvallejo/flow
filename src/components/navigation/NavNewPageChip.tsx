'use client';

import { Icons } from '../icons';
import { useState } from 'react';

interface NavNewPageChipProps {
  onClick?: () => void;
}

export default function NavNewPageChip({ onClick }: NavNewPageChipProps) {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`h-8 w-12 transition-all duration-300 ease-in-out  overflow-hidden
        ${hovering ? 'w-10 mx-1' : 'w-1'}
        flex items-center justify-center rounded-full bg-transparent`}
    >
      <button
        onClick={onClick}
        className={`w-6 h-6 flex items-center justify-center rounded-full
          bg-[var(--color-add-page-hover)] text-white text-sm
          transition-opacity duration-200 ease-in-out cursor-pointer
          ${
            hovering
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-75 pointer-events-none '
          }`}
      >
        <Icons.Plus />
      </button>
    </div>
  );
}
