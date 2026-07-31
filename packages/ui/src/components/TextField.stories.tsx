import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button.js';
import { TextField } from './TextField.js';

const meta = {
	title: 'Components/TextField',
	component: TextField,
	tags: ['autodocs'],
	args: {
		label: 'Display name',
		placeholder: 'Riza',
	},
	decorators: [(Story) => <div className="w-72">{Story()}</div>],
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDescription: Story = {
	args: {
		description: 'Shown on your profile and next to your posts.',
	},
};

export const Invalid: Story = {
	render: (args) => (
		<form className="flex flex-col items-start gap-3">
			<TextField {...args} isRequired label="Email" type="email" errorMessage="Enter a valid email address." />
			<Button type="submit" size="sm">
				Continue
			</Button>
		</form>
	),
};

export const Disabled: Story = {
	args: {
		isDisabled: true,
		defaultValue: 'riza@woof.ing',
		label: 'Email',
	},
};
