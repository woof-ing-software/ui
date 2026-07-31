import type { Meta, StoryObj } from '@storybook/react-vite';

import { Switch } from './Switch';

const meta = {
	title: 'Components/Switch',
	component: Switch,
	tags: ['autodocs'],
	args: {
		children: 'Email notifications',
	},
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = {
	args: {
		defaultSelected: true,
	},
};

export const Disabled: Story = {
	args: {
		defaultSelected: true,
		isDisabled: true,
	},
};
