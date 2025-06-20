'use client';

import DashedDivider from './DashedDivider';
import NavChip from './NavChip';
import NavNewPage from './NavNewPage';
import SortableChipWrapper from './SortableChipWrapper';
import {
    arrayMove,
    horizontalListSortingStrategy,
    SortableContext,
} from '@dnd-kit/sortable';
import {
    closestCenter,
    DndContext,
    MeasuringStrategy,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import { NavChipConfig } from '@/types/navChip';
import { navChipsConfig } from '@/utils/navChipsConfig';
import { PlusIcon } from '../icons/PlusIcon';
import { useNavChip } from '@/hooks/useNavChip';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function NavBar() {
    const [navItems, setNavItems] = useState<NavChipConfig[]>(navChipsConfig);

    const navChips = useNavChip(navItems);
    const sensors = useSensors(useSensor(PointerSensor));
    const router = useRouter();
    const searchParams = useSearchParams();

    const draggableChips = navChips
        .filter((chip) => chip.variant !== 'new')
        .map((c) => c.chipId ?? '');

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

    const handleDragEnd = ({ active, over }: DragEndEvent) => {
        if (!over || active.id === over.id) return;

        const ids = navChips
            .filter((c) => c.variant !== 'new')
            .map((c) => c.chipId ?? '');

        const oldIndex = ids.findIndex((id) => id === active.id);
        const newIndex = ids.findIndex((id) => id === over.id);

        if (oldIndex !== -1 && newIndex !== -1) {
            setNavItems((prev) => arrayMove(prev, oldIndex, newIndex));

            const params = new URLSearchParams(searchParams.toString());
            params.set('chip', (newIndex + 1).toString());
            router.push(`?${params.toString()}`);
        }
    };

    return (
        <nav className="flex h-20 w-full bg-[var(--color-navbar-background)]">
            <div className="relative flex items-center px-4">
                <DashedDivider />
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                    measuring={{
                        droppable: {
                            strategy: MeasuringStrategy.Always,
                        },
                    }}
                >
                    <SortableContext
                        items={draggableChips}
                        strategy={horizontalListSortingStrategy}
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
