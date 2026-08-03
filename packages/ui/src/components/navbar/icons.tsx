/* Icon paths lifted verbatim from meta/design frags so the shell matches the mocks. */

export function PawIcon({ className }: { readonly className?: string }) {
	return (
		<svg aria-hidden className={className} fill="currentColor" viewBox="0 0 24 24">
			<ellipse cx="12" cy="15.7" rx="5.1" ry="4.4" />
			<circle cx="5" cy="10.7" r="2.1" />
			<circle cx="9.2" cy="7.3" r="2.2" />
			<circle cx="14.8" cy="7.3" r="2.2" />
			<circle cx="19" cy="10.7" r="2.1" />
		</svg>
	);
}

function StrokeIcon({ children, className }: { readonly children: React.ReactNode; readonly className?: string }) {
	return (
		<svg
			aria-hidden
			className={className}
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="1.7"
			viewBox="0 0 24 24"
		>
			{children}
		</svg>
	);
}

export function BellIcon({ className, isFilled }: { readonly className?: string; readonly isFilled?: boolean }) {
	const fill = isFilled ? 'currentColor' : undefined;

	return (
		<StrokeIcon className={className}>
			<path d="M18 15.5v-5.3a6 6 0 1 0-12 0v5.3L4.4 18h15.2z" fill={fill} />
			<path d="M10.3 20.5a1.9 1.9 0 0 0 3.4 0" fill={fill} />
		</StrokeIcon>
	);
}

export function SlidersIcon({ className }: { readonly className?: string }) {
	return (
		<StrokeIcon className={className}>
			<path d="M4 7h7M17 7h3M4 17h3M13 17h7" />
			<circle cx="14" cy="7" r="2.6" />
			<circle cx="10" cy="17" r="2.6" />
		</StrokeIcon>
	);
}

export function UserIcon({ className }: { readonly className?: string }) {
	return (
		<StrokeIcon className={className}>
			<circle cx="12" cy="8.2" r="3.4" />
			<path d="M5.5 19.5a6.5 6.5 0 0 1 13 0" />
		</StrokeIcon>
	);
}

export function GearIcon({ className }: { readonly className?: string }) {
	return (
		<StrokeIcon className={className}>
			<circle cx="12" cy="12" r="3" />
			<path d="M12 4.5v2M12 17.5v2M4.5 12h2M17.5 12h2M6.7 6.7l1.4 1.4M15.9 15.9l1.4 1.4M17.3 6.7l-1.4 1.4M8.1 15.9l-1.4 1.4" />
		</StrokeIcon>
	);
}

export function SignOutIcon({ className }: { readonly className?: string }) {
	return (
		<StrokeIcon className={className}>
			<path d="M14 4H6v16h8" />
			<path d="M10 12h9M16 8.5 19.5 12 16 15.5" />
		</StrokeIcon>
	);
}

/* Per-app icons — shown in the app pill (icon-only on mobile) and the selector cards. */

export function CampfireIcon({ className }: { readonly className?: string }) {
	return (
		<StrokeIcon className={className}>
			<path d="M12 4.5c2 2.3 3.4 3.8 3.4 5.8a3.4 3.4 0 1 1-6.8 0c0-2 1.4-3.5 3.4-5.8z" />
			<path d="M5.5 20 18.5 16.5M18.5 20 5.5 16.5" />
		</StrokeIcon>
	);
}

export function PaletteIcon({ className }: { readonly className?: string }) {
	return (
		<StrokeIcon className={className}>
			<path d="M12 4a8 8 0 1 0 0 16c1.5 0 2.1-.9 2.1-1.8 0-.8-.6-1.3-.6-2.1 0-1 .8-1.7 1.9-1.7h1.5c1.7 0 3.1-1.5 3.1-3.4C20 7 16.4 4 12 4z" />
			<circle cx="7.5" cy="10.5" r="1" />
			<circle cx="10.5" cy="7.5" r="1" />
			<circle cx="14.5" cy="7.5" r="1" />
		</StrokeIcon>
	);
}

export function NewspaperIcon({ className }: { readonly className?: string }) {
	return (
		<StrokeIcon className={className}>
			<rect height="14" rx="2.5" width="16" x="4" y="5" />
			<path d="M8 9.5h8M8 12.5h8M8 15.5h5" />
		</StrokeIcon>
	);
}

export function LifebuoyIcon({ className }: { readonly className?: string }) {
	return (
		<StrokeIcon className={className}>
			<circle cx="12" cy="12" r="8" />
			<circle cx="12" cy="12" r="3.4" />
			<path d="m6.3 6.3 3.3 3.3M14.4 14.4l3.3 3.3M17.7 6.3l-3.3 3.3M9.6 14.4l-3.3 3.3" />
		</StrokeIcon>
	);
}

export function ShieldIcon({ className }: { readonly className?: string }) {
	return (
		<StrokeIcon className={className}>
			<path d="M12 3.5 19 6v5.5c0 4.4-3 7.7-7 9-4-1.3-7-4.6-7-9V6z" />
		</StrokeIcon>
	);
}

export function ChevronDownIcon({ className }: { readonly className?: string }) {
	return (
		<svg aria-hidden className={className} fill="none" viewBox="0 0 12 12">
			<path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
		</svg>
	);
}
