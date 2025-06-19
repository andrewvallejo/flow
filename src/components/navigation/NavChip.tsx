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
    /** Text label displayed on the chip */
    variant?: 'primary' | 'secondary';
    /** Content to be rendered inside the chip */
    children: React.ReactNode;
}

export default function NavChip({
    chipId = '',
    label = '',
    variant = 'primary',
    children,
}: NavChipProps) {
    const [isSelected, setIsSelected] = useState(false);

    const [menuFocused, setMenuFocused] = useState(false);

    const searchParams = useSearchParams();
    const router = useRouter();

    const activeChip = searchParams.get('chip');
    const isActive = (activeChip ?? '1') === chipId;

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
            tabIndex={0}
            onClick={handleChipClick}
            className={`relative z-10 flex min-h-6 cursor-pointer flex-wrap content-start items-center justify-stretch rounded-lg border border-[var(--color-border)] ${variant === 'primary' ? 'bg-[var(--color-button-primary)]' : 'bg-[var(--color-button-secondary)]'} px-[0.25rem] py-[.4rem] transition-all duration-100 ease-in focus:shadow-[var(--shadow-focus)] focus:ring-[var(--color-icon-flag)] focus:outline-[.5px] ${
                isActive
                    ? 'border-none bg-[var(--color-button-secondary)] shadow-[var(--shadow-active)]'
                    : 'text-[var(--color-text-inactive)] hover:bg-[var(--color-button-hover)]'
            } `}
        >
            <IconLabel label={label}>{children}</IconLabel>
            {isActive && variant !== 'secondary' && (
                <span
                    role="button"
                    onClick={toggleMenu}
                    className="focus:outline-none"
                    onFocus={() => setMenuFocused(true)}
                    onBlur={() => setMenuFocused(false)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') toggleMenu();
                    }}
                    tabIndex={0}
                >
                    <span>
                        <MenuIcon
                            color={
                                isSelected
                                    ? 'var(--color-icon-flag)'
                                    : menuFocused
                                      ? 'var(--color-chip-focus)'
                                      : undefined
                            }
                        />
                    </span>
                </span>
            )}
            {isSelected && <SettingsMenu />}
        </button>
    );
}
