'use client';

import { IconMap, iconNames } from '@/utils/IconMap';
import { Icons } from '@/components/icons';
import { NavChipConfig } from '@/types/navChip';
import { useSearchParams } from 'next/navigation';

/**
 * Generates an array of nav chip objects with icon components
 * A new page "+" button chip (with variant 'new') is inserted between each chip
 * */
export const useNavChip = (chips: NavChipConfig[]): NavChipConfig[] => {
    const searchParams = useSearchParams();

    const activeChip = searchParams.get('chip') ?? 1;

    return chips.flatMap(({ icon, label }, index) => {
        const iconKey = iconNames[icon as keyof IconMap];
        const IconComponent = Icons[iconKey] ?? Icons['File'];
        const isActiveChip = Number(activeChip) === index + 1;
        const chipColor = isActiveChip ? 'var(--color-icon-active)' : '';

        const navChip: NavChipConfig = {
            chipId: (index + 1).toString(),
            label,
            variant: 'primary',
            isActive: isActiveChip,
            component: <IconComponent color={chipColor} />,
        };

        return [navChip, { variant: 'new' }];
    });
};
