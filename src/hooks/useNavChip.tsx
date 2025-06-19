'use client';

import { IconMap, iconNames } from '@/utils/IconMap';
import { Icons } from '@/components/icons';
import { IconType } from '@/types/icon';
import { useSearchParams } from 'next/navigation';

export interface NewNavChip {
    chipId?: string;
    /** The text displayed on the nav chip **/
    label?: string;
    /** The icon component suffix to render alongside the label */
    icon?: IconType;
    /** The background style of the chip. Use 'new' to create a new page "+" button  */
    variant?: 'primary' | 'secondary' | 'new';
    /** Indicates whether the chip is active */
    isActive?: boolean;
    /** The icon component to render  */
    component?: React.ReactNode;
}

/**
 * Generates an array of nav chip objects with icon components
 * A new page "+" button chip (with variant 'new') is inserted between each chip
 * */
export const useNavChip = (chips: NewNavChip[]): NewNavChip[] => {
    const searchParams = useSearchParams();

    const activeChip = searchParams.get('chip') ?? 1;

    return chips.flatMap(({ icon, isActive, variant, label }, index) => {
        const iconKey = iconNames[icon as keyof IconMap];
        const IconComponent = Icons[iconKey] ?? Icons['File'];
        const isActiveChip = Number(activeChip) === index + 1;
        const chipColor = isActiveChip ? 'var(--color-icon-active)' : '';

        const navChip: NewNavChip = {
            chipId: (index + 1).toString(),
            label,
            variant: 'primary',
            isActive: isActiveChip,
            component: <IconComponent color={chipColor} />,
        };

        return [navChip, { variant: 'new' }];
    });
};
