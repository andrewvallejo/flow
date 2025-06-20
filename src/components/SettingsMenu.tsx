import IconLabel from './IconLabel';
import { CopyIcon } from './icons/CopyIcon';
import { DeleteIcon } from './icons/DeleteIcon';
import { DuplicateIcon } from './icons/DuplicateIcon';
import { FlagIcon } from './icons/FlagIcon';
import { RenameIcon } from './icons/RenameIcon';

export function SettingsMenu() {
    return (
        <div className="absolute bottom-12 -left-0 z-50 mb-2 w-[11rem] rounded-lg border-[0.5px] border-[var(--color-border)] bg-[var(--color-background-secondary)] shadow-lg">
            <header className="flex border-b-[0.5px] border-[var(--color-border)] px-4 py-2 text-sm font-semibold">
                Settings
            </header>
            <ul className="px-2 py-1 text-sm">
                <li className="flex cursor-pointer items-center gap-2 py-2 hover:font-semibold">
                    <IconLabel label="Set as first page">
                        <FlagIcon />
                    </IconLabel>
                </li>
                <li className="flex cursor-pointer items-center gap-2 py-2 hover:font-semibold">
                    <IconLabel label="Rename">
                        <RenameIcon />
                    </IconLabel>
                </li>
                <li className="flex cursor-pointer items-center gap-2 py-2 hover:font-semibold">
                    <IconLabel label="Copy">
                        <CopyIcon color="" />
                    </IconLabel>
                </li>
                <li className="flex cursor-pointer items-center gap-2 py-2 hover:font-semibold">
                    <IconLabel label="Duplicate">
                        <DuplicateIcon />
                    </IconLabel>
                </li>
                <li className="gap mt-1 flex cursor-pointer items-center border-t-[0.5px] border-[var(--color-border)] py-2 hover:font-semibold">
                    <IconLabel label="Delete">
                        <DeleteIcon />
                    </IconLabel>
                </li>
            </ul>
        </div>
    );
}
