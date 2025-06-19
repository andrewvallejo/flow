'use client';

import React from 'react';
import { CSS } from '@dnd-kit/utilities';
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';
import { useSortable } from '@dnd-kit/sortable';

export default function SortableChipWrapper({
    id,
    children,
}: {
    /** The chip Id */
    id: string;
    /** The chip component that will be rendered inside the sortable wrapper */
    children: React.ReactElement<{
        dragListeners?: SyntheticListenerMap;
        isDragging?: boolean;
    }>;
}) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id,
        transition: {
            duration: 150,
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        },
    });

    return (
        <div
            ref={setNodeRef}
            style={{
                transform: CSS.Transform.toString(transform),
                transition,
                zIndex: isDragging ? 50 : 'auto',
            }}
            {...attributes}
            className={isDragging ? 'pointer-events-none' : ''}
            aria-describedby="DndDescribedBy-0"
            tabIndex={-1}
        >
            {React.cloneElement(children, {
                dragListeners: listeners,
                isDragging,
            })}
        </div>
    );
}
