'use client';

import DashedDivider from './DashedDivider';
import NavChip from './NavChip';
import NavNewPage from './NavNewPage';
import { navItems } from '@/utils/navItems';
import { useNavChip } from '@/hooks/useNavChip';

export default function NavBar() {
    const navChips = useNavChip(navItems);

    return (
        <nav className="flex h-20 w-full bg-[var(--color-navbar-background)]">
            <div className="relative flex items-center px-4">
                <DashedDivider />

                {navChips.map((item, index) =>
                    !['primary', 'secondary'].includes(item?.variant || '') ? (
                        <NavNewPage key={index} />
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
                    )
                )}
            </div>
        </nav>
    );
}
