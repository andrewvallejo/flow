export default function IconLabel({
    label,
    variant,
    ref,
    children,
}: {
    /** Text label displayed on the chip */
    label: string;
    /** Text label displayed on the chip */
    variant?: 'primary' | 'secondary';
    /** Optional ref for the root div element */
    ref?: React.Ref<HTMLDivElement>;
    /** Content to be rendered inside the chip */
    children: React.ReactNode;
}) {
    const deleteClass =
        label === 'Delete' ? 'text-[var(--color-icon-delete)]' : '';

    return (
        <div ref={ref} className="flex w-fit items-center gap-2 px-2">
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
