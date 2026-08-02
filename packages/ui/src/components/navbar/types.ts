import type { ReactNode } from 'react';

export type NavApp = {
	/** Matches a `data-accent` id (community, art-corner, blog, support, moderation) to pick up the app's accent. */
	readonly id: string;
	readonly description?: string;
	readonly href?: string;
	/** Shown in the pill (icon-only below sm) and the selector cards. */
	readonly icon?: ReactNode;
	readonly isStaffOnly?: boolean;
	readonly name: string;
};

export type NavUser = {
	readonly avatarSrc?: string;
	readonly initials?: string;
	readonly name: string;
};

export type NavNotification = {
	readonly id: string;
	readonly isUnread?: boolean;
	readonly message: ReactNode;
	readonly time: string;
};

export type DeviceSettings = {
	readonly hourCycle: '12h' | '24h';
	readonly locale: string;
	readonly theme: 'black' | 'dark' | 'light' | 'system';
};
