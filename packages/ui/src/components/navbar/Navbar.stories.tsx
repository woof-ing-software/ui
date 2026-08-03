import type { Meta, StoryObj } from '@storybook/react-vite';

import { NAV_NOTIFICATIONS, NAV_USER } from './fixtures.js';
import { NavbarDemo } from './NavbarDemo.js';

const meta = {
	title: 'Shell/Navbar',
	component: NavbarDemo,
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof NavbarDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
	args: {
		user: NAV_USER,
	},
};

export const LoggedOut: Story = {
	args: {
		user: null,
	},
};

/** No unread — bell stays outline; with unread it fills in (see LoggedIn). */
export const AllCaughtUp: Story = {
	args: {
		notifications: NAV_NOTIFICATIONS.map((notification) => ({ ...notification, isUnread: false })),
		user: NAV_USER,
	},
};
