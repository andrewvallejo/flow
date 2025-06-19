'use client';

import { iconColors } from '@/utils/iconColors';
import { Icons } from '../icons';
import { useState } from 'react';

interface NavNewPageProps {
    /** Optional callback function */
    onClick?: () => void;
}

// TODO: When focused, reveal chip
export default function NavNewPage({ onClick }: NavNewPageProps) {
    const [shouldReveal, setShouldReveal] = useState(false);

    return (
        <div
            onMouseEnter={() => setShouldReveal(true)}
            onMouseLeave={() => setShouldReveal(false)}
            className={`flex h-8 items-center justify-center transition-all duration-300 ease-in-out ${
                shouldReveal ? 'w-18' : 'w-6'
            }`}
        >
            <button
                onClick={onClick}
                onFocus={() => setShouldReveal(true)}
                onBlur={() => setShouldReveal(false)}
                className={`flex size-4 transform cursor-pointer items-center justify-center rounded-full border-[0.5px] border-[var(--color-border)] bg-[var(--color-button-secondary)] shadow-[var(--shadow-active)] transition-all duration-300 ease-in-out focus:border-[var(--color-chip-focus)] focus:outline-none ${
                    shouldReveal
                        ? 'scale-150 rotate-90 opacity-100'
                        : 'pointer-events-none scale-75 rotate-0 opacity-0'
                }`}
            >
                <Icons.Plus />
            </button>
        </div>
    );
}
