import type { Meta, StoryObj } from '@storybook/react-vite';

import { Link } from './Link';

const meta = {
	title: 'Components/Link',
	component: Link,
	tags: ['autodocs'],
	args: {
		children: 'See all notifications',
		href: '#',
	},
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Accent: Story = {};

export const Variants: Story = {
	render: (args) => (
		<div className="flex flex-col gap-2">
			<Link {...args} variant="accent" />
			<Link {...args} variant="default">
				Read the community guidelines
			</Link>
			<Link {...args} variant="muted">
				Privacy policy
			</Link>
		</div>
	),
};

export const InProse: Story = {
	render: () => (
		<p className="text-text max-w-md font-sans text-sm">
			By continuing you agree to the <Link href="#">terms of service</Link> and confirm you have read the{' '}
			<Link href="#" variant="default">
				privacy policy
			</Link>
			.
		</p>
	),
};
