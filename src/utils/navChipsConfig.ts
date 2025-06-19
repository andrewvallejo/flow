import { NewNavChip } from '@/hooks/useNavChip';

export const navChipsConfig: NewNavChip[] = [
    { icon: 'info', label: 'Info', variant: 'secondary', isActive: true },
    { icon: 'file', label: 'Details', isActive: false },
    { icon: 'file', label: 'Other', isActive: false },
    { icon: 'checkmark', label: 'Ending', isActive: false },
];
