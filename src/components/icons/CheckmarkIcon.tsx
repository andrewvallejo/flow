import { iconColors } from "@/utils/iconColors";
import { IconProps } from "@/types/icon";

export function CheckmarkIcon({ width = 18, height = 18, color }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 6.91666L7.74999 11.5L6.08332 9.83333M16.7083 9C16.7083 13.2572 13.2572 16.7083 8.99999 16.7083C4.74279 16.7083 1.29166 13.2572 1.29166 9C1.29166 4.7428 4.74279 1.29166 8.99999 1.29166C13.2572 1.29166 16.7083 4.7428 16.7083 9Z"
        stroke={color || iconColors.inactive}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
