/* Story/demo-only composition of the navbar shell with fake data — not exported from the package. */
import { useEffect, useState } from 'react';

import { AppSelector } from './AppSelector.js';
import { AppShell } from './AppShell.js';
import { LOCALES, NAV_APPS, NAV_NOTIFICATIONS, SETTINGS_HINT } from './fixtures.js';
import { Navbar, NavbarBrand, NavbarCrumb, NavbarSpacer } from './Navbar.js';
import { NavbarAccount } from './NavbarAccount.js';
import { NavbarNotifications } from './NavbarNotifications.js';
import { NavbarSettings } from './NavbarSettings.js';
import type { DeviceSettings, NavUser } from './types.js';

function resolveTheme(theme: DeviceSettings['theme']) {
	if (theme !== 'system') {
		return theme;
	}

	return globalThis.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export function NavbarDemo({
	initialApp = 'community',
	user,
}: {
	readonly initialApp?: string;
	readonly user: NavUser | null;
}) {
	const [currentApp, setCurrentApp] = useState(initialApp);
	const [settings, setSettings] = useState<DeviceSettings>({ hourCycle: '24h', locale: 'en-US', theme: 'dark' });

	useEffect(() => {
		setCurrentApp(initialApp);
	}, [initialApp]);

	useEffect(() => {
		document.documentElement.dataset.accent = currentApp;
	}, [currentApp]);

	useEffect(() => {
		document.documentElement.dataset.theme = resolveTheme(settings.theme);
	}, [settings.theme]);

	return (
		<AppShell
			navbar={
				<Navbar>
					<NavbarBrand />
					<NavbarCrumb />
					<AppSelector apps={NAV_APPS} currentAppId={currentApp} onSelect={setCurrentApp} />
					<NavbarSpacer />
					<NavbarSettings hint={SETTINGS_HINT} locales={LOCALES} onChange={setSettings} value={settings} />
					<NavbarAccount accountSettingsHref="#" profileHref="#" user={user} />
					{user ? <NavbarNotifications allHref="#" notifications={NAV_NOTIFICATIONS} /> : null}
				</Navbar>
			}
		>
			<div className="mx-auto grid max-w-[1160px] grid-cols-3 gap-4 p-5 max-sm:grid-cols-1">
				{Array.from({ length: 18 }, (_, index) => (
					<div className="border-line bg-surface h-36 rounded-2xl border" key={index} />
				))}
			</div>
		</AppShell>
	);
}
