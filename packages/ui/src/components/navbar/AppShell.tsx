import type { ReactNode } from 'react';

import { cx } from '../../styles/cva.js';

/*
 * Full-viewport layout: navbar pinned on top, content scrolling in its own container
 * below it — so the page scrollbar starts under the bar instead of running behind it.
 * Trade-off: content no longer passes beneath the navbar, so its backdrop blur is inert
 * (the accent tint still applies).
 */
export function AppShell({
	children,
	className,
	navbar,
}: {
	readonly children: ReactNode;
	readonly className?: string;
	readonly navbar: ReactNode;
}) {
	return (
		<div className="bg-bg text-text flex h-dvh flex-col">
			{navbar}
			{/* relative: RAC's hidden absolute elements must anchor to the scroller, not the root */}
			<main className={cx('relative min-h-0 flex-1 overflow-y-auto', className)}>{children}</main>
		</div>
	);
}
