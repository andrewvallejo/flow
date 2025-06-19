'use client';

import DashedDivider from './DashedDivider';
import NavChip from './NavChip';
import NavNewPage from './NavNewPage';
import { NewNavChip, useNavChip } from '@/hooks/useNavChip';

export default function NavBar() {
    const navItems: NewNavChip[] = [
        { label: 'Info', icon: 'info', isActive: true, variant: 'secondary' },
        { label: 'Details', icon: 'file', isActive: false },
        { label: 'Other', icon: 'file', isActive: false },
        { label: 'Ending', icon: 'checkmark', isActive: false },
        { label: 'Add Page', icon: 'plus', isActive: false },
    ];

    const navChips = useNavChip(navItems);

    return (
        <nav className="flex h-20 w-full bg-[var(--color-navbar-background)] px-4">
            <div className="relative flex w-fit items-center">
                <DashedDivider />
                {navChips.map((item, index) =>
                    !['primary', 'secondary'].includes(item?.variant || '') ? (
                        <NavNewPage key={index} />
                    ) : (
                        <NavChip
                            key={index}
                            chipId={item.chipId}
                            label={item?.label}
                        >
                            {item.component}
                        </NavChip>
                    )
                )}
            </div>
        </nav>
    );
}
