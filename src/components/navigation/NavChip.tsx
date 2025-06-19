'use client';

import IconLabel from '@/components/IconLabel';
import { MenuIcon } from '../icons/MenuIcon';
import { SettingsMenu } from '../settings/SettingsMenu';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface NavChipProps {
    /** Unique identifier for the chip */
    chipId?: string;
    /** Text label displayed on the chip */
    label?: string;
    /** Content to be rendered inside the chip */
    children: React.ReactNode;
}

export default function NavChip({
    chipId = '',
    label = '',
    children,
}: NavChipProps) {
    const searchParams = useSearchParams();
    const router = useRouter();

    const activeChip = searchParams.get('chip');
    const isActive = (activeChip ?? '1') === chipId;

    const [isSelected, setIsSelected] = useState(false);

    const handleChipClick = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('chip', chipId);
        router.push(`?${params.toString()}`);
    };

    const toggleMenu = () => {
        setIsSelected((prev) => !prev);
    };

    useEffect(() => {
        if (!isActive) {
            setIsSelected(false);
        }
    }, [isActive]);

    return (
        <button
            type="button"
            onClick={handleChipClick}
            className={`group relative z-10 flex cursor-pointer items-center rounded-lg border border-[var(--color-border)] px-[0.25rem] py-[.4rem] transition-all duration-200 ease-in-out focus:shadow-[var(--shadow-focus)] focus:ring-2 focus:ring-[rgba(47,114,226,0.25)] focus:outline-none ${isActive ? 'border-[var(--color-icon-active)] shadow-[var(--shadow-active)]' : 'bg-[var(--color-button-primary)] hover:bg-[var(--color-button-hover)]'} `}
        >
            <IconLabel label={label}>{children}</IconLabel>
            {isSelected && <SettingsMenu />}
            {isActive && (
                <span
                    role="button"
                    tabIndex={0}
                    onClick={toggleMenu}
                    className="flex"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') toggleMenu();
                    }}
                >
                    <span
                        className={`z-10 ml-1 transition-opacity duration-100 ease-in-out ${isSelected ? 'opacity-100' : 'opacity-0 group-focus-within:opacity-100 group-hover:opacity-100'} `}
                    >
                        <MenuIcon />
                    </span>
                </span>
            )}
        </button>
    );
}
