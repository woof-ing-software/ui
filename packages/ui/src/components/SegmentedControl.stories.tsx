import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { SegmentedControl } from './SegmentedControl';

function Demo() {
	const [value, setValue] = useState('dark');

	return (
		<SegmentedControl
			aria-label="Theme"
			className="w-64"
			onChange={setValue}
			options={[
				{ id: 'system', label: 'System' },
				{ id: 'light', label: 'Light' },
				{ id: 'dark', label: 'Dark' },
				{ id: 'black', label: 'Black' },
			]}
			value={value}
		/>
	);
}

const meta = {
	title: 'Components/SegmentedControl',
	component: Demo,
} satisfies Meta<typeof Demo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
