import { IconName, IconType } from '@/types/icon';

export type IconMap = Record<IconType, IconName>;
/**
 * A map of semantic icon keys to their corresponding component suffixes.
 *
 * These keys (e.g. "checkmark") are used in the app as icon identifiers,
 * while the values (e.g. "Checkmark") match the exported component names
 * from the `Icons` object.
 *
 * Example:
 *   iconNames['checkmark'] -> 'Checkmark' -> Icons.Checkmark
 */
export const iconNames: IconMap = {
    checkmark: 'Checkmark',
    copy: 'Copy',
    duplicate: 'Duplicate',
    drag: 'Drag',
    file: 'File',
    flag: 'Flag',
    info: 'Info',
    plus: 'Plus',
    rename: 'Rename',
};
