'use client';

import DashedDivider from './DashedDivider';
import NavChip from './NavChip';
import NavNewPage from './NavNewPage';
import { navChipsConfig } from '@/utils/navChipsConfig';
import { NewNavChip, useNavChip } from '@/hooks/useNavChip';
import { PlusIcon } from '../icons/PlusIcon';
import { useState } from 'react';

export default function NavBar() {
    const [navItems, setNavItems] = useState<NewNavChip[]>(navChipsConfig);

    const navChips = useNavChip(navItems);

    const updateNavItems = (position: number) => {
        setNavItems((prev) => {
            const updatedNavItemConfig = [...prev];
            updatedNavItemConfig.splice(position, 0, {
                type: 'file',
                label: 'New Page',
                variant: 'new',
            } as NewNavChip);
            return updatedNavItemConfig;
        });
    };

    return (
        <nav className="flex h-20 w-full bg-[var(--color-navbar-background)]">
            <div className="relative flex items-center px-4">
                <DashedDivider />
                {navChips.map((item, index) => {
                    return !['primary', 'secondary'].includes(
                        item?.variant || ''
                    ) ? (
                        <NavNewPage
                            key={index}
                            position={index}
                            onClick={updateNavItems}
                        />
                    ) : (
                        <NavChip
                            key={index}
                            chipId={item.chipId}
                            label={item?.label}
                            variant={
                                item?.variant === 'secondary'
                                    ? 'secondary'
                                    : 'primary'
                            }
                        >
                            {item.component}
                        </NavChip>
                    );
                })}
                <NavChip
                    onClick={updateNavItems}
                    chipId={(navChips.length / 2 + 1).toString()}
                    label="Add Page"
                    variant="secondary"
                >
                    <PlusIcon />
                </NavChip>
            </div>
        </nav>
    );
}
