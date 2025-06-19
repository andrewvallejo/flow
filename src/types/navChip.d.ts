export interface NavChipConfig {
    chipId?: string;
    /** The text displayed on the nav chip **/
    label?: string;
    /** The icon component suffix to render alongside the label */
    icon?: IconType;
    /** The background style of the chip. Use 'new' to create a new page "+" button  */
    variant?: 'primary' | 'secondary' | 'new';
    /** Indicates whether the chip is active */
    isActive?: boolean;
    /** The icon component to render  */
    component?: React.ReactNode;
}
