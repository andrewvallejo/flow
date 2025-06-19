import IconLabel from '@/components/IconLabel';

interface NavChipProps {
  label?: string;
  isActive?: boolean;
  variant?: 'primary' | 'secondary' | 'new';
  children: React.ReactNode;
  onClick?: () => void;
}

export default function NavChip({
  label = '',
  isActive = false,
  variant = 'primary',
  children,
  onClick,
}: NavChipProps) {
  const bg =
    variant === 'secondary'
      ? 'bg-[var(--color-button-secondary)]'
      : 'bg-[var(--color-button-primary)]';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-x-[.25rem] rounded-lg px-[0.25rem] py-[.4rem] z-10 border border-[var(--color-button-border)] ${bg}`}
    >
      <IconLabel label={label} isActive={isActive}>
        {children}
      </IconLabel>
    </button>
  );
}
