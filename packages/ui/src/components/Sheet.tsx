import { useRef } from 'react';
import {
	Dialog as RACDialog,
	Modal as RACModal,
	ModalOverlay as RACModalOverlay,
	composeRenderProps,
} from 'react-aria-components';
import type { DialogProps as RACDialogProps, ModalOverlayProps as RACModalOverlayProps } from 'react-aria-components';

import { sheetOverlayStyles, sheetStyles } from './Sheet.styles.js';

export type SheetProps = Omit<RACModalOverlayProps, 'children'> & {
	readonly 'aria-label'?: string;
	readonly children: RACDialogProps['children'];
};

/**
 * Bottom sheet (mobile drawer): dimmed overlay + panel sliding up from the bottom
 * edge, with safe-area padding. Open it from a DialogTrigger; children may be a
 * render prop receiving `{ close }`. Dismiss by tapping the backdrop, pressing
 * Escape, or dragging the handle down past the threshold.
 */
export function Sheet({ 'aria-label': ariaLabel, children, className, ...props }: SheetProps) {
	const modalRef = useRef<HTMLDivElement>(null);
	const drag = useRef<{ dy: number; startY: number } | null>(null);

	return (
		<RACModalOverlay
			isDismissable
			{...props}
			className={composeRenderProps(className, (cls, renderProps) =>
				sheetOverlayStyles({ ...renderProps, className: cls }),
			)}
		>
			<RACModal className={sheetStyles()} ref={modalRef}>
				<RACDialog aria-label={ariaLabel} className="pb-safe flex max-h-[85dvh] flex-col overflow-y-auto p-2 outline-0">
					{(renderProps) => (
						<>
							<div
								aria-hidden
								className="flex h-6 shrink-0 cursor-grab touch-none items-center justify-center active:cursor-grabbing"
								onPointerDown={(event) => {
									if (!event.isPrimary) {
										return;
									}

									drag.current = { dy: 0, startY: event.clientY };
									event.currentTarget.setPointerCapture(event.pointerId);
									if (modalRef.current) {
										modalRef.current.style.transition = 'none';
									}
								}}
								onPointerMove={(event) => {
									if (!drag.current) {
										return;
									}

									// only follow downward drags — the sheet never moves up past its rest position
									drag.current.dy = Math.max(0, event.clientY - drag.current.startY);
									if (modalRef.current) {
										modalRef.current.style.transform = `translateY(${drag.current.dy}px)`;
									}
								}}
								onPointerUp={() => {
									const dy = drag.current?.dy ?? 0;
									drag.current = null;
									if (dy > 80) {
										renderProps.close();
										return;
									}

									if (modalRef.current) {
										modalRef.current.style.transition = 'transform 200ms ease';
										modalRef.current.style.transform = 'translateY(0)';
									}
								}}
								onPointerCancel={() => {
									drag.current = null;
									if (modalRef.current) {
										modalRef.current.style.transition = 'transform 200ms ease';
										modalRef.current.style.transform = 'translateY(0)';
									}
								}}
							>
								<div className="bg-text/20 h-1 w-9 rounded-full" />
							</div>
							{typeof children === 'function' ? children(renderProps) : children}
						</>
					)}
				</RACDialog>
			</RACModal>
		</RACModalOverlay>
	);
}
