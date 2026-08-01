import type { Meta, StoryObj } from '@storybook/react-vite';

import { NAV_USER } from './fixtures.js';
import { NavbarDemo } from './NavbarDemo.js';

/* One mobile shell per app so responsiveness can be checked in every accent. */
const meta = {
	title: 'Shell/Navbar/Mobile',
	component: NavbarDemo,
	parameters: {
		layout: 'fullscreen',
	},
	globals: {
		viewport: { value: 'mobile1', isRotated: false },
	},
	args: {
		user: NAV_USER,
	},
} satisfies Meta<typeof NavbarDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Community: Story = {
	args: { initialApp: 'community' },
};

export const ArtCorner: Story = {
	args: { initialApp: 'art-corner' },
};

export const Blog: Story = {
	args: { initialApp: 'blog' },
};

export const Support: Story = {
	args: { initialApp: 'support' },
};

export const Moderation: Story = {
	args: { initialApp: 'moderation' },
};
