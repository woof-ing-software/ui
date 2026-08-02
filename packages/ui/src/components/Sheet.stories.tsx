import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { DialogTrigger } from 'react-aria-components';

import { Button } from './Button.js';
import { AppMenu } from './navbar/AppSelector.js';
import { LOCALES, NAV_APPS, SETTINGS_HINT } from './navbar/fixtures.js';
import { DeviceSettingsPane } from './navbar/NavbarSettings.js';
import type { DeviceSettings as DeviceSettingsState } from './navbar/types.js';
import { Sheet } from './Sheet.js';

function BasicDemo() {
	return (
		<DialogTrigger defaultOpen>
			<Button variant="secondary">Open sheet</Button>
			<Sheet aria-label="Example sheet">
				<p className="text-muted px-3 py-2 text-sm">
					Slide-up drawer for mobile: dimmed backdrop, drag handle, safe-area bottom padding. Dismiss by tapping the
					backdrop or pressing Escape.
				</p>
			</Sheet>
		</DialogTrigger>
	);
}

function AppSwitcherDemo() {
	const [currentApp, setCurrentApp] = useState('community');

	return (
		<DialogTrigger defaultOpen>
			<Button variant="secondary">Switch app</Button>
			<Sheet aria-label="Switch app">
				{({ close }) => (
					<AppMenu
						apps={NAV_APPS}
						currentAppId={currentApp}
						onAction={(appId) => {
							setCurrentApp(appId);
							document.documentElement.dataset.accent = appId;
							close();
						}}
					/>
				)}
			</Sheet>
		</DialogTrigger>
	);
}

function DeviceSettingsDemo() {
	const [settings, setSettings] = useState<DeviceSettingsState>({ hourCycle: '24h', locale: 'en-US', theme: 'dark' });

	return (
		<DialogTrigger defaultOpen>
			<Button variant="secondary">Device settings</Button>
			<Sheet aria-label="Device settings">
				<DeviceSettingsPane
					hint={SETTINGS_HINT}
					locales={LOCALES}
					onChange={(next) => {
						setSettings(next);
						if (next.theme !== 'system') {
							document.documentElement.dataset.theme = next.theme;
						}
					}}
					value={settings}
				/>
			</Sheet>
		</DialogTrigger>
	);
}

const meta = {
	title: 'Components/Sheet',
	parameters: {
		layout: 'fullscreen',
	},
	globals: {
		viewport: { value: 'mobile1' },
	},
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	render: () => <BasicDemo />,
};

export const AppSwitcher: Story = {
	render: () => <AppSwitcherDemo />,
};

export const DeviceSettings: Story = {
	render: () => <DeviceSettingsDemo />,
};
