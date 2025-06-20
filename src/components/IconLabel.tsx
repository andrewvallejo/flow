export default function IconLabel({
    label,
    variant,
    children,
}: {
    /** Text label displayed on the chip */
    label: string;
    /** Text label displayed on the chip */
    variant?: 'primary' | 'secondary';
    /** Content to be rendered inside the chip */
    children: React.ReactNode;
}) {
    const deleteClass =
        label === 'Delete' ? 'text-[var(--color-icon-delete)]' : '';

    return (
        <div className="flex w-fit items-center gap-2 px-2">
            {children}
            <span
                title={label}
                className={`min-w-fit overflow-hidden text-ellipsis ${deleteClass} ${
                    variant === 'secondary'
                        ? 'text-[var(--color-text-default)]'
                        : ''
                }`}
            >
                {label}
            </span>
        </div>
    );
}
