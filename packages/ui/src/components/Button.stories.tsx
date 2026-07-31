import type { Meta, StoryObj } from '@storybook/react-vite';
import { Bell, Heart, LogIn } from 'lucide-react';

import { Button, IconButton } from './Button.js';

const meta = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
	args: {
		children: 'Log in',
	},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Variants: Story = {
	render: (args) => (
		<div className="flex items-center gap-3">
			<Button {...args} variant="primary" />
			<Button {...args} variant="secondary">
				Cancel
			</Button>
			<Button {...args} variant="ghost">
				Skip
			</Button>
			<Button {...args} variant="destructive">
				Delete
			</Button>
			<Button {...args} isDisabled>
				Disabled
			</Button>
		</div>
	),
};

export const Sizes: Story = {
	render: (args) => (
		<div className="flex items-center gap-3">
			<Button {...args} size="sm" />
			<Button {...args} size="md" />
			<Button {...args} size="lg" />
		</div>
	),
};

export const WithIcon: Story = {
	render: (args) => (
		<Button {...args}>
			<LogIn aria-hidden size={16} /> Log in
		</Button>
	),
};

export const Icons: Story = {
	render: () => (
		<div className="flex items-center gap-3">
			<IconButton aria-label="Notifications" variant="ghost">
				<Bell />
			</IconButton>
			<IconButton aria-label="Like" variant="solid">
				<Heart />
			</IconButton>
			<IconButton aria-label="Like" variant="accent">
				<Heart />
			</IconButton>
		</div>
	),
};
