/* Fake data for Storybook / gallery demos only — not exported from the package. */
import { Bookmark, Brush, Gavel, Image, LifeBuoy, Shield, User, Users } from 'lucide-react';

import { CampfireIcon, LifebuoyIcon, NewspaperIcon, PaletteIcon, ShieldIcon } from './icons.js';
import type { LocaleOption } from './NavbarSettings.js';
import type { VisitorAppLink } from './NavbarVisitor.js';
import type { NavApp, NavNotification, NavUser } from './types.js';

export const NAV_APPS: readonly NavApp[] = [
	{
		id: 'community',
		name: 'Community',
		description: 'The fandom home — posts, packs, events',
		href: '#',
		icon: <CampfireIcon />,
	},
	{
		id: 'art-corner',
		name: 'Art Corner',
		description: 'Auctions, commissions, and galleries',
		href: '#',
		icon: <PaletteIcon />,
	},
	{ id: 'blog', name: 'Blog', description: 'News and stories from the pack', href: '#', icon: <NewspaperIcon /> },
	{ id: 'support', name: 'Support', description: 'Help center and tickets', href: '#', icon: <LifebuoyIcon /> },
	{
		id: 'moderation',
		name: 'Moderation',
		description: 'Trust & safety tools',
		href: '#',
		icon: <ShieldIcon />,
		isStaffOnly: true,
	},
];

/** What each app contributes to the visitor panel. */
export const VISITOR_APP_LINKS: Record<string, readonly VisitorAppLink[]> = {
	community: [
		{ id: 'profile', href: '#', icon: <User aria-hidden />, label: 'Your profile page' },
		{ id: 'packs', href: '#', icon: <Users aria-hidden />, label: 'Your packs', meta: '4' },
	],
	'art-corner': [
		{ id: 'commissions', href: '#', icon: <Brush aria-hidden />, label: 'Your commissions', meta: '2 open' },
		{ id: 'auctions', href: '#', icon: <Gavel aria-hidden />, label: 'Watched auctions' },
		{ id: 'gallery', href: '#', icon: <Image aria-hidden />, label: 'Your gallery' },
	],
	blog: [{ id: 'saved', href: '#', icon: <Bookmark aria-hidden />, label: 'Saved posts' }],
	support: [{ id: 'tickets', href: '#', icon: <LifeBuoy aria-hidden />, label: 'Your tickets', meta: '1 open' }],
	moderation: [{ id: 'queue', href: '#', icon: <Shield aria-hidden />, label: 'Your review queue', meta: '12' }],
};

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
