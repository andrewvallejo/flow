
export default function IconLabel({
  label,
  isActive = false,
  children
}:{
  label: string;
  isActive?: boolean;
  children: React.ReactNode;
}) {


  return (
    <div className="flex items-center gap-2 px-2">
      {children}
       <span className={isActive ? 'text-active-text' : 'text-[var(--color-inactive-text)]'}>{label}</span>
    </div>
  );
}
