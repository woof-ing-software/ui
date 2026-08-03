import type { Meta, StoryObj } from '@storybook/react-vite';

import { NAV_NOTIFICATIONS } from './fixtures.js';
import { NavbarNotifications } from './NavbarNotifications.js';

const meta = {
	title: 'Shell/NavbarNotifications',
	component: NavbarNotifications,
	args: {
		allHref: '#',
		notifications: NAV_NOTIFICATIONS,
	},
} satisfies Meta<typeof NavbarNotifications>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Unread: Story = {};

export const AllRead: Story = {
	args: {
		notifications: NAV_NOTIFICATIONS.map((notification) => ({ ...notification, isUnread: false })),
	},
};
