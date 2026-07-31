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

export function BellIcon({ className }: { readonly className?: string }) {
	return (
		<StrokeIcon className={className}>
			<path d="M18 15.5v-5.3a6 6 0 1 0-12 0v5.3L4.4 18h15.2z" />
			<path d="M10.3 20.5a1.9 1.9 0 0 0 3.4 0" />
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

export function ChevronDownIcon({ className }: { readonly className?: string }) {
	return (
		<svg aria-hidden className={className} fill="none" viewBox="0 0 12 12">
			<path d="M3 4.5 6 7.5 9 4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
		</svg>
	);
}
