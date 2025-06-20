'use client';

import React, { useEffect, useRef } from 'react';
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

    const nodeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const node = nodeRef.current;
        if (!node) return;

        if (isDragging) {
            const { width, height } = node.getBoundingClientRect();
            node.style.width = `${width}px`;
            node.style.height = `${height}px`;
        } else {
            node.style.removeProperty('width');
            node.style.removeProperty('height');
        }
    }, [isDragging]);

    return (
        <div
            ref={(el) => {
                nodeRef.current = el;
                setNodeRef(el);
            }}
            style={{
                transform: CSS.Transform.toString(transform),
                transition,
                zIndex: isDragging ? 50 : 'auto',
            }}
            {...attributes}
            className={`inline-flex items-center justify-center ${
                isDragging ? 'pointer-events-none' : ''
            }`}
            aria-describedby="DndDescribedBy-0"
            tabIndex={-1}
        >
            <div className="h-full min-w-[6.5rem]">
                {React.cloneElement(children, {
                    dragListeners: listeners,
                    isDragging,
                })}
            </div>
        </div>
    );
}
