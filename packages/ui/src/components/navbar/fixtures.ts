/* Fake data for Storybook / gallery demos only — not exported from the package. */
import type { LocaleOption } from './NavbarSettings';
import type { NavApp, NavNotification, NavUser } from './types';

export const NAV_APPS: readonly NavApp[] = [
	{ id: 'community', name: 'Community', description: 'The fandom home — posts, packs, events', href: '#' },
	{ id: 'art-corner', name: 'Art Corner', description: 'Auctions, commissions, and galleries', href: '#' },
	{ id: 'blog', name: 'Blog', description: 'News and stories from the pack', href: '#' },
	{ id: 'support', name: 'Support', description: 'Help center and tickets', href: '#' },
	{ id: 'moderation', name: 'Moderation', description: 'Trust & safety tools', href: '#', isStaffOnly: true },
];

export const NAV_USER: NavUser = { name: 'Riza' };

export const NAV_NOTIFICATIONS: readonly NavNotification[] = [
	{ id: '1', isUnread: true, message: 'Riza commented on your post', time: '2 minutes ago' },
	{ id: '2', isUnread: true, message: 'Your commission slot was accepted', time: '1 hour ago' },
	{ id: '3', message: 'Weekly digest: 12 new posts in your packs', time: 'yesterday' },
];

export const LOCALES: readonly LocaleOption[] = [
	{ id: 'en-US', label: 'English' },
	{ id: 'ro-RO', label: 'Română' },
	{ id: 'de-DE', label: 'Deutsch' },
	{ id: 'ja-JP', label: '日本語' },
];

export const SETTINGS_HINT = 'Stored on this device. Syncs to your account when you sign in.';
