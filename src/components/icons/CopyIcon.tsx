import { iconColors } from '@/utils/iconColors';
import { IconProps } from '@/types/icon';

export function CopyIcon({ width = 20, height = 20, color }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6667 3.16666H12.6667C13.0349 3.16666 13.3333 3.46514 13.3333 3.83333V13.5C13.3333 13.8682 13.0349 14.1667 12.6667 14.1667H4.33334C3.96515 14.1667 3.66667 13.8682 3.66667 13.5V3.83333C3.66667 3.46514 3.96515 3.16666 4.33334 3.16666H6.33334M7 4.83333H10C10.3682 4.83333 10.6667 4.53485 10.6667 4.16666V2.49999C10.6667 2.13181 10.3682 1.83333 10 1.83333H7C6.63182 1.83333 6.33334 2.13181 6.33334 2.49999V4.16666C6.33334 4.53485 6.63182 4.83333 7 4.83333Z"
        stroke={color || iconColors.settings}
        stroke-width="1.5"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
    </svg>
  );
}
