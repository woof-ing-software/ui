import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useState } from 'react';

import { AppSelector } from './AppSelector';
import { LOCALES, NAV_APPS, NAV_NOTIFICATIONS, NAV_USER, SETTINGS_HINT } from './fixtures';
import { Navbar, NavbarBrand, NavbarCrumb, NavbarSpacer } from './Navbar';
import { NavbarAccount } from './NavbarAccount';
import { NavbarNotifications } from './NavbarNotifications';
import { NavbarSettings } from './NavbarSettings';
import type { DeviceSettings, NavUser } from './types';

function resolveTheme(theme: DeviceSettings['theme']) {
	if (theme !== 'system') {
		return theme;
	}

	return globalThis.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function NavbarDemo({ user }: { readonly user: NavUser | null }) {
	const [currentApp, setCurrentApp] = useState('community');
	const [settings, setSettings] = useState<DeviceSettings>({ hourCycle: '24h', locale: 'en-US', theme: 'dark' });

	useEffect(() => {
		document.documentElement.dataset.accent = currentApp;
	}, [currentApp]);

	useEffect(() => {
		document.documentElement.dataset.theme = resolveTheme(settings.theme);
	}, [settings.theme]);

	return (
		<div className="min-h-screen">
			<Navbar>
				<NavbarBrand />
				<NavbarCrumb />
				<AppSelector apps={NAV_APPS} currentAppId={currentApp} onSelect={setCurrentApp} />
				<NavbarSpacer />
				<NavbarSettings hint={SETTINGS_HINT} locales={LOCALES} onChange={setSettings} value={settings} />
				<NavbarAccount accountSettingsHref="#" profileHref="#" user={user} />
				{user ? <NavbarNotifications allHref="#" notifications={NAV_NOTIFICATIONS} /> : null}
			</Navbar>
			<div className="mx-auto grid max-w-[1160px] grid-cols-3 gap-4 p-5 max-sm:grid-cols-1">
				{Array.from({ length: 9 }, (_, index) => (
					<div className="border-line bg-surface h-36 rounded-2xl border" key={index} />
				))}
			</div>
		</div>
	);
}

const meta = {
	title: 'Shell/Navbar',
	component: NavbarDemo,
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof NavbarDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
	args: {
		user: NAV_USER,
	},
};

export const LoggedOut: Story = {
	args: {
		user: null,
	},
};

export const Mobile: Story = {
	args: {
		user: NAV_USER,
	},
	globals: {
		viewport: { value: 'mobile1', isRotated: false },
	},
};
