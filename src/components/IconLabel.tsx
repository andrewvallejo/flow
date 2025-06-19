export default function IconLabel({
    label,
    isActive = false,
    children,
}: {
    label: string;
    isActive?: boolean;
    children: React.ReactNode;
}) {
    const deleteClass =
        label === 'Delete' ? 'text-[var(--color-icon-delete)]' : '';

    return (
        <div className="flex items-center gap-2 px-2">
            {children}
            <span className={deleteClass}>{label}</span>
        </div>
    );
}
