import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { LOCALES, SETTINGS_HINT } from './fixtures';
import { DeviceSettingsPane } from './NavbarSettings';
import type { DeviceSettings } from './types';

function PaneDemo() {
	const [settings, setSettings] = useState<DeviceSettings>({ hourCycle: '24h', locale: 'en-US', theme: 'dark' });

	return (
		<div className="border-line bg-surface rounded-[14px] border">
			<DeviceSettingsPane hint={SETTINGS_HINT} locales={LOCALES} onChange={setSettings} value={settings} />
		</div>
	);
}

const meta = {
	title: 'Shell/DeviceSettingsPane',
	component: PaneDemo,
} satisfies Meta<typeof PaneDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
