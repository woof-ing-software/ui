import type { Meta, StoryObj } from '@storybook/react-vite';
import { Bell } from 'lucide-react';
import { DialogTrigger, Heading } from 'react-aria-components';

import { IconButton } from './Button';
import { Popover, PopoverDialog } from './Popover';
import { Separator } from './Separator';

const meta = {
	title: 'Components/Popover',
	component: Popover,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Notifications: Story = {
	render: () => (
		<DialogTrigger>
			<IconButton aria-label="Notifications">
				<Bell />
			</IconButton>
			<Popover placement="bottom end">
				<PopoverDialog className="w-80">
					<div className="flex items-center justify-between px-3.5 py-3">
						<Heading className="text-text font-sans text-[13px] font-bold" slot="title">
							Notifications
						</Heading>
						<span className="text-muted text-xs font-semibold">Mark all read</span>
					</div>
					<Separator />
					<p className="text-text px-3.5 py-3 font-sans text-[13px]">
						<b className="font-semibold">Riza</b> commented on your post
						<time className="text-muted mt-0.5 block text-[11px]">2 minutes ago</time>
					</p>
				</PopoverDialog>
			</Popover>
		</DialogTrigger>
	),
};
