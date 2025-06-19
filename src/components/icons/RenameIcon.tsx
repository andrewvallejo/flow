import { iconColors } from '@/utils/iconColors';
import { IconProps } from '@/types/icon';

export function RenameIcon({ width = 17, height = 16, color }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.01333 14.1667H14.6667M2.33333 11.6213V14.1667H4.87872C5.05471 14.1667 5.2235 14.0967 5.34794 13.9723L14.4723 4.84794C14.7314 4.5888 14.7314 4.16864 14.4723 3.90949L12.5905 2.02769C12.3314 1.76854 11.9112 1.76854 11.652 2.02769L2.52769 11.152C2.40324 11.2765 2.33333 11.4453 2.33333 11.6213Z"
        stroke={color || iconColors.settings}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
