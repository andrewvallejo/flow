'use client';

import { Icons } from '../icons';
import { useState } from 'react';

interface NavNewPageProps {
    /** Optional callback function */
    onClick?: () => void;
}

// TODO: When focused, reveal chip
export default function NavNewPage({ onClick }: NavNewPageProps) {
    const [hovering, setHovering] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={`flex h-8 items-center justify-center transition-all duration-300 ease-in-out ${
                hovering ? 'w-16' : 'w-6'
            }`}
        >
            <button
                onClick={onClick}
                className={`flex size-4 transform cursor-pointer items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-add-page-hover)] transition-all duration-300 ease-in-out ${
                    hovering
                        ? 'scale-125 rotate-90 opacity-100'
                        : 'pointer-events-none scale-75 rotate-0 opacity-0'
                }`}
            >
                <Icons.Plus />
            </button>
        </div>
    );
}
