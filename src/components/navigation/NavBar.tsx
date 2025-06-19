'use client';

import DashedDivider from './DashedDivider';
import NavChip from './NavChip';
import NavNewPage from './NavNewPage';
import SortableChipWrapper from './dnd/SortableChipWrapper';
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import {
    closestCenter,
    DndContext,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import { NavChipConfig } from '@/types/navChip';
import { navChipsConfig } from '@/utils/navChipsConfig';
import { PlusIcon } from '../icons/PlusIcon';
import { useNavChip } from '@/hooks/useNavChip';
import { useState } from 'react';

export default function NavBar() {
    const [navItems, setNavItems] = useState<NavChipConfig[]>(navChipsConfig);

    const navChips = useNavChip(navItems);

    const sensors = useSensors(useSensor(PointerSensor));

    const updateNavItems = (position: number) => {
        setNavItems((prev) => {
            const updateNavItems = [...prev];
            updateNavItems.splice(position, 0, {
                type: 'file',
                label: 'New Page',
                variant: 'new',
            } as NavChipConfig);
            return updateNavItems;
        });
    };

    const handleDragEnd = ({ active, over }: any) => {
        if (!over || active.id === over.id) return;

        const ids = navChips
            .map((c) => c.variant !== 'new' && c.chipId)
            .filter(Boolean);

        const oldIndex = ids.findIndex((id) => id === active.id);
        const newIndex = ids.findIndex((id) => id === over.id);

        if (oldIndex !== -1 && newIndex !== -1) {
            setNavItems((prev) => arrayMove(prev, oldIndex, newIndex));
        }
    };

    const draggableChips = navChips.filter((chip) => chip.variant !== 'new');

    return (
        <nav className="flex h-20 w-full bg-[var(--color-navbar-background)]">
            <div className="relative flex items-center px-4">
                <DashedDivider />
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext
                        items={draggableChips.map((c) => c.chipId ?? '')}
                        strategy={verticalListSortingStrategy}
                    >
                        {navChips.map((item, index) => {
                            if (item.variant === 'new') {
                                return (
                                    <NavNewPage
                                        key={`new-${index}`}
                                        position={index}
                                        onClick={updateNavItems}
                                    />
                                );
                            }

                            return (
                                <SortableChipWrapper
                                    key={item.chipId}
                                    id={item.chipId ?? ''}
                                >
                                    <NavChip
                                        chipId={item.chipId}
                                        label={item.label}
                                        variant={item.variant}
                                    >
                                        {item.component}
                                    </NavChip>
                                </SortableChipWrapper>
                            );
                        })}
                    </SortableContext>
                </DndContext>

                <NavChip
                    onClick={updateNavItems}
                    chipId={(navChips.length / 2 + 1).toString()}
                    label="Add Page"
                    variant="secondary"
                >
                    <PlusIcon />
                </NavChip>
            </div>
        </nav>
    );
}
