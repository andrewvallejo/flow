'use client';

import IconLabel from '@/components/IconLabel';
import { DragIcon } from '../icons/DragIcon';
import { SettingsMenu } from '../SettingsMenu';
import { useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface NavChipProps {
    /** Unique identifier for the chip */
    chipId?: string;
    /** Text label displayed on the chip */
    label?: string;
    /** Text label displayed on the chip */
    variant?: 'primary' | 'secondary';
    /** Event listeners for drag functionality */
    dragListeners?: React.HTMLAttributes<HTMLElement>;
    /** Indicates whether the chip is currently being dragged */
    isDragging?: boolean;
    /** A callback handler for creating a new chip */
    onClick?: (position: number) => void;
    /** Content to be rendered inside the chip */
    children: React.ReactNode;
}

export default function NavChip({
    chipId = '',
    label = '',
    variant = 'primary',
    dragListeners,
    isDragging,
    onClick,
    children,
}: NavChipProps) {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const settingsRef = useRef<HTMLDivElement>(null);

    const searchParams = useSearchParams();
    const router = useRouter();

    const activeChip = searchParams.get('chip');
    const isActive = (activeChip ?? '1') === chipId;

    const handleChipClick = () => {
        if (!isActive) {
            onClick?.(Number(chipId));
            const params = new URLSearchParams(searchParams.toString());
            params.set('chip', chipId);
            router.push(`?${params.toString()}`);
        } else {
            setIsSettingsOpen((prev) => !prev);
        }
    };

    useEffect(() => {
        if (!isActive || isDragging) {
            setIsSettingsOpen(false);
        }
    }, [isActive, isDragging]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node;
            if (!settingsRef.current?.contains(target)) {
                setIsSettingsOpen(false);
            }
        };

        if (isSettingsOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, [isSettingsOpen]);

    return (
        <div className="relative z-10">
            <button
                type="button"
                onClick={handleChipClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`flex w-full cursor-pointer items-center justify-stretch rounded-lg border border-[var(--color-border)] ${
                    variant === 'primary'
                        ? 'bg-[var(--color-button-primary)]'
                        : 'bg-[var(--color-button-secondary)]'
                } px-[0.25rem] py-[.4rem] transition-all duration-100 ease-in focus:shadow-[var(--shadow-focus)] focus:ring-[var(--color-icon-flag)] focus:outline-[.5px] ${
                    isActive
                        ? 'border-none bg-[var(--color-button-secondary)] shadow-[var(--shadow-active)]'
                        : 'text-[var(--color-text-inactive)] hover:bg-[var(--color-button-hover)]'
                }`}
            >
                <IconLabel label={label} variant={variant}>
                    {children}
                </IconLabel>

                {isActive && variant !== 'secondary' && (
                    <span
                        {...dragListeners}
                        className="ml-1 cursor-grab focus:outline-none"
                        role="button"
                        tabIndex={-1}
                    >
                        <DragIcon
                            color={
                                isSettingsOpen
                                    ? 'var(--color-icon-flag)'
                                    : isHovered
                                      ? 'var(--color-chip-focus)'
                                      : isDragging
                                        ? 'var(--color-icon-active)'
                                        : ''
                            }
                        />
                    </span>
                )}
            </button>
            {isSettingsOpen && variant !== 'secondary' && (
                <div
                    ref={settingsRef}
                    className="absolute top-full left-0 z-20"
                >
                    <SettingsMenu />
                </div>
            )}
        </div>
    );
}
