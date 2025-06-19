export default function IconLabel({
    label,
    children,
}: {
    label: string;
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
