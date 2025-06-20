'use client';

import { Icons } from '../icons';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

interface NavNewPageProps {
    /** The position of the current chip */
    position: number;
    /** A callback handler for creating a new chip */
    onClick: (position: number) => void;
}

export default function NavNewPage({ position, onClick }: NavNewPageProps) {
    const [shouldReveal, setShouldReveal] = useState(false);

    const searchParams = useSearchParams();
    const router = useRouter();

    const handleNewChipClick = () => {
        const params = new URLSearchParams(searchParams.toString());
        const newChipPosition = (position + 1) / 2;

        params.set('chip', (newChipPosition + 1).toString());
        onClick(newChipPosition);
        router.push(`?${params.toString()}`);
    };

    return (
        <div
            onMouseEnter={() => setShouldReveal(true)}
            onMouseLeave={() => setShouldReveal(false)}
            className={`flex h-8 items-center justify-center transition-all duration-300 ease-in-out ${
                shouldReveal ? 'w-18' : 'w-8'
            }`}
        >
            <button
                onClick={handleNewChipClick}
                onFocus={() => setShouldReveal(true)}
                onBlur={() => setShouldReveal(false)}
                className={`flex size-6 transform cursor-pointer items-center justify-center rounded-full border-[0.5px] border-[var(--color-border)] bg-[var(--color-button-secondary)] shadow-[var(--shadow-active)] transition-all duration-500 ease-in-out focus:border-[var(--color-chip-focus)] focus:outline-none ${
                    shouldReveal
                        ? 'scale-100 opacity-100'
                        : 'pointer-events-none scale-0 opacity-0'
                }`}
            >
                <span
                    className={`transition-all delay-275 duration-150 ease-in-out ${
                        shouldReveal
                            ? 'scale-100 opacity-100'
                            : 'scale-0 opacity-0'
                    }`}
                >
                    <Icons.Plus />
                </span>
            </button>
        </div>
    );
}
