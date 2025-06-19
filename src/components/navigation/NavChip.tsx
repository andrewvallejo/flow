import IconLabel from "@/components/IconLabel";

interface NavChipProps {
  label?: string;
  isActive?: boolean;
  variant?: "primary" | "secondary" | "new";
  children: React.ReactNode;
  onClick?: () => void;
}

export default function NavChip({
  label = "",
  isActive = false,
  variant = "primary",
  children,
  onClick,
}: NavChipProps) {
  const bg =
    variant === "secondary"
      ? "bg-[var(--color-button-secondary)]"
      : "bg-[var(--color-button-primary)]";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`z-10 flex items-center rounded-lg border border-[var(--color-button-border)] px-[0.25rem] py-[.4rem] ${bg}`}
    >
      <IconLabel label={label} isActive={isActive}>
        {children}
      </IconLabel>
    </button>
  );
}
