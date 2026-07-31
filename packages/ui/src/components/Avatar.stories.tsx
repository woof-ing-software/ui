import type { Meta, StoryObj } from '@storybook/react-vite';

import { Avatar } from './Avatar';

const meta = {
	title: 'Components/Avatar',
	component: Avatar,
	tags: ['autodocs'],
	args: {
		name: 'Riza Zerova',
	},
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Initials: Story = {};

export const Sizes: Story = {
	render: (args) => (
		<div className="flex items-center gap-3">
			<Avatar {...args} size="sm" />
			<Avatar {...args} size="md" />
			<Avatar {...args} size="lg" />
			<Avatar {...args} size="xl" />
		</div>
	),
};
