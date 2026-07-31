import type { Meta, StoryObj } from '@storybook/react-vite';
import { LogOut, Settings, User } from 'lucide-react';
import { MenuTrigger } from 'react-aria-components';

import { Button } from './Button.js';
import { Menu, MenuItem, MenuSeparator } from './Menu.js';

const meta = {
	title: 'Components/Menu',
	component: Menu,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<MenuTrigger>
			<Button variant="secondary">Account</Button>
			<Menu>
				<MenuItem>
					<User aria-hidden /> Profile
				</MenuItem>
				<MenuItem>
					<Settings aria-hidden /> Settings
				</MenuItem>
				<MenuSeparator />
				<MenuItem isDestructive>
					<LogOut aria-hidden /> Log out
				</MenuItem>
			</Menu>
		</MenuTrigger>
	),
};

export const Selection: Story = {
	render: () => (
		<MenuTrigger>
			<Button variant="secondary">Theme</Button>
			<Menu defaultSelectedKeys={['dark']} selectionMode="single">
				<MenuItem id="light">Light</MenuItem>
				<MenuItem id="dark">Dark</MenuItem>
				<MenuItem id="black">Black</MenuItem>
			</Menu>
		</MenuTrigger>
	),
};
