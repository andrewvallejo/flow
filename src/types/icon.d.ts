import { Icons } from '@/components/icons';

/**
 * Represents an icon with optional dimensions and color
 *
 * @property [width] - The width of the icon in pixels
 * @property [height] - The height of the icon in pixels
 * @property [color] - The color of the icon
 */
export interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

/**
 * Derives the type from the icon components
 *
 * This type is used to ensure that predefined icon
 * can be referenced dynamically throughout the app.
 */
export type IconName = keyof typeof Icons;

/** A union of all available icons */
export type IconType =
  | 'checkmark'
  | 'copy'
  | 'duplicate'
  | 'file'
  | 'flag'
  | 'info'
  | 'menu'
  | 'plus'
  | 'rename';
