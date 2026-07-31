import type { ReactNode } from 'react';

import { cx } from '../../styles/cva.js';
import { Link } from '../Link.js';
import { PawIcon } from './icons.js';

/**
 * The shared platform shell bar (layout.md): pinned, frosted, accent-tinted.
 * Purely presentational — compose NavbarBrand / AppSelector / NavbarSpacer /
 * NavbarSettings / NavbarAccount / NavbarNotifications inside it.
 */
export function Navbar({ children, className }: { readonly children: ReactNode; readonly className?: string }) {
	return (
		<header
			className={cx(
				'bg-nav border-nav-line pt-safe px-safe sticky top-0 z-40 border-b backdrop-blur-[16px] backdrop-saturate-150',
				className,
			)}
		>
			<div className="mx-auto flex h-14 max-w-[1160px] items-center gap-2 px-3 sm:px-5">{children}</div>
		</header>
	);
}

export function NavbarBrand({ href = '/' }: { readonly href?: string }) {
	return (
		<Link className="text-text flex items-center gap-2 no-underline hover:no-underline" href={href} variant="default">
			<PawIcon className="text-accent-ink size-[21px]" />
			<span className="font-rounded max-sm:hidden text-[17px] font-extrabold tracking-tight">
				woof<b className="text-accent-ink">.ing</b>
			</span>
		</Link>
	);
}

/** The `›` between brand and app selector. */
export function NavbarCrumb() {
	return (
		<span aria-hidden className="text-muted mx-0.5 text-[15px]">
			›
		</span>
	);
}

export function NavbarSpacer() {
	return <div className="flex-1" />;
}
