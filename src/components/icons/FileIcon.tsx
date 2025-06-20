import { iconColors } from '@/utils/iconColors';
import { IconProps } from '@/types/icon';

export function FileIcon({ width = 20, height = 20, color }: IconProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M10.2798 2.29166H4.79167C4.33143 2.29166 3.95833 2.66476 3.95833 3.125V16.875C3.95833 17.3352 4.33143 17.7083 4.79167 17.7083H15.2083C15.6686 17.7083 16.0417 17.3352 16.0417 16.875V8.05351C16.0417 7.8325 15.9539 7.62053 15.7976 7.46425L10.8691 2.53574C10.7128 2.37946 10.5008 2.29166 10.2798 2.29166Z"
                stroke={color || iconColors.inactive}
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M7.29166 11.0417H10.2083M7.29166 14.375H12.7083"
                stroke={color || iconColors.inactive}
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M10.625 2.70834V6.875C10.625 7.33524 10.9981 7.70834 11.4583 7.70834H15.625"
                stroke={color || iconColors.inactive}
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
}
