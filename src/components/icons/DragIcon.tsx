import { iconColors } from '@/utils/iconColors';
import { IconProps } from '@/types/icon';

export function DragIcon({ width = 17, height = 17, color }: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.49999 3.66668C8.86818 3.66668 9.16666 3.3682 9.16666 3.00001C9.16666 2.63182 8.86818 2.33334 8.49999 2.33334C8.13181 2.33334 7.83333 2.63182 7.83333 3.00001C7.83333 3.3682 8.13181 3.66668 8.49999 3.66668Z"
                fill={color || iconColors.settings}
            />
            <path
                d="M8.49999 9.16668C8.86818 9.16668 9.16666 8.8682 9.16666 8.50001C9.16666 8.13182 8.86818 7.83334 8.49999 7.83334C8.13181 7.83334 7.83333 8.13182 7.83333 8.50001C7.83333 8.8682 8.13181 9.16668 8.49999 9.16668Z"
                fill={color || iconColors.settings}
            />
            <path
                d="M8.49999 14.6667C8.86818 14.6667 9.16666 14.3682 9.16666 14C9.16666 13.6318 8.86818 13.3333 8.49999 13.3333C8.13181 13.3333 7.83333 13.6318 7.83333 14C7.83333 14.3682 8.13181 14.6667 8.49999 14.6667Z"
                fill={color || iconColors.settings}
            />
            <path
                d="M8.49999 3.66668C8.86818 3.66668 9.16666 3.3682 9.16666 3.00001C9.16666 2.63182 8.86818 2.33334 8.49999 2.33334C8.13181 2.33334 7.83333 2.63182 7.83333 3.00001C7.83333 3.3682 8.13181 3.66668 8.49999 3.66668Z"
                stroke={color || iconColors.settings}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.49999 9.16668C8.86818 9.16668 9.16666 8.8682 9.16666 8.50001C9.16666 8.13182 8.86818 7.83334 8.49999 7.83334C8.13181 7.83334 7.83333 8.13182 7.83333 8.50001C7.83333 8.8682 8.13181 9.16668 8.49999 9.16668Z"
                stroke={color || iconColors.settings}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.49999 14.6667C8.86818 14.6667 9.16666 14.3682 9.16666 14C9.16666 13.6318 8.86818 13.3333 8.49999 13.3333C8.13181 13.3333 7.83333 13.6318 7.83333 14C7.83333 14.3682 8.13181 14.6667 8.49999 14.6667Z"
                stroke={color || iconColors.settings}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
