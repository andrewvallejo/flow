'use client';

import DashedDivider from './DashedDivider';
import NavChip from './NavChip';
import NavNewPageChip from './NavNewPageChip';
import { NewNavChip, useNavChip } from '@/hooks/useNavChip';

export default function NavBar() {
  // TODO: Implement this when doing active page logic∏
  // const searchParams = useSearchParams();
  // const page = searchParams.get('page');

  const navItems: NewNavChip[] = [
    { label: 'Info', icon: 'info', isActive: true, variant: 'secondary' },
    { label: 'Details', icon: 'file', isActive: false },
    { label: 'Other', icon: 'file', isActive: false },
    { label: 'Ending', icon: 'checkmark', isActive: false },
    { label: 'Add Page', icon: 'plus', isActive: false },
  ];

  const navChips = useNavChip(navItems);

  return (
    <nav className="flex h-20 w-full px-4 bg-[var(--color-navbar)]">
      <div className="relative flex items-center  w-fit">
        <DashedDivider />
        {navChips.map((item, index) => {
          if (
            !item.variant ||
            !['primary', 'secondary'].includes(item.variant)
          ) {
            return <NavNewPageChip key={index} />;
          }
          return (
            <NavChip key={index} label={item?.label} isActive={item.isActive}>
              {item.component}
            </NavChip>
          );
        })}
      </div>
    </nav>
  );
}
