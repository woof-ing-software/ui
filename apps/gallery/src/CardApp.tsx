/* Per-component preview card for the Claude Design project — built once per
   component by scripts/build-cards.mjs (VITE_CARD selects the demo). */
import {
	Avatar,
	Button,
	DeviceSettingsPane,
	DialogTrigger,
	IconButton,
	Link,
	Menu,
	MenuItem,
	MenuSeparator,
	MenuTrigger,
	SegmentedControl,
	Select,
	SelectItem,
	Sheet,
	Switch,
	TextField,
} from '@woofing/ui';
import type { DeviceSettings } from '@woofing/ui';
import { Bell, Heart, LogOut, Settings, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { ComponentType } from 'react';

import { Segmented } from './Segmented.js';

const THEMES = ['dark', 'light', 'black'] as const;
const APPS = ['community', 'art-corner', 'blog', 'support', 'moderation'] as const;

const LOCALES = [
	{ id: 'en-US', label: 'English' },
	{ id: 'ro-RO', label: 'Română' },
	{ id: 'de-DE', label: 'Deutsch' },
	{ id: 'ja-JP', label: '日本語' },
] as const;

function Row({ children, label }: { readonly children: React.ReactNode; readonly label: string }) {
	return (
		<div className="mb-5 last:mb-0">
			<p className="text-muted mb-2 text-[11px] font-bold tracking-wider uppercase">{label}</p>
			<div className="flex flex-wrap items-center gap-3">{children}</div>
		</div>
	);
}

function ButtonCard() {
	return (
		<>
			<Row label="Variants">
				<Button>Log in</Button>
				<Button variant="secondary">Cancel</Button>
				<Button variant="ghost">Skip</Button>
				<Button variant="destructive">Delete</Button>
				<Button isDisabled>Disabled</Button>
			</Row>
			<Row label="Sizes">
				<Button size="sm">Small</Button>
				<Button size="md">Medium</Button>
				<Button size="lg">Large</Button>
			</Row>
			<Row label="Icon buttons">
				<IconButton aria-label="Notifications">
					<Bell size={19} />
				</IconButton>
				<IconButton aria-label="Like" variant="solid">
					<Heart size={19} />
				</IconButton>
				<IconButton aria-label="Like" variant="accent">
					<Heart size={19} />
				</IconButton>
			</Row>
		</>
	);
}

function LinkCard() {
	return (
		<p className="text-text max-w-md text-sm">
			By continuing you agree to the <Link href="#">terms of service</Link> and confirm you have read the{' '}
			<Link href="#" variant="default">
				privacy policy
			</Link>
			.{' '}
			<Link href="#" variant="muted">
				Learn more
			</Link>
		</p>
	);
}

function FieldCard() {
	return (
		<div className="flex max-w-xs flex-col gap-4">
			<TextField label="Display name" placeholder="Riza" />
			<TextField description="Shown on your profile." label="With description" placeholder="Riza" />
			<TextField
				errorMessage="Enter a valid email address."
				isInvalid
				label="Invalid"
				placeholder="riza@woof.ing"
				type="email"
			/>
			<TextField isDisabled label="Disabled" placeholder="Can't touch this" />
		</div>
	);
}

function SwitchCard() {
	return (
		<div className="flex flex-col gap-3">
			<Switch defaultSelected>Email notifications</Switch>
			<Switch>Public profile</Switch>
			<Switch isDisabled>Disabled</Switch>
		</div>
	);
}

function SelectCard() {
	return (
		<div className="max-w-xs">
			<Select defaultSelectedKey="en-US" label="Language">
				{LOCALES.map((locale) => (
					<SelectItem id={locale.id} key={locale.id}>
						{locale.label}
					</SelectItem>
				))}
			</Select>
		</div>
	);
}

function SegmentedControlCard() {
	const [value, setValue] = useState('dark');

	return (
		<div className="max-w-xs">
			<SegmentedControl
				aria-label="Theme"
				onChange={(next) => setValue(next)}
				options={[
					{ id: 'system', label: 'System' },
					{ id: 'light', label: 'Light' },
					{ id: 'dark', label: 'Dark' },
					{ id: 'black', label: 'Black' },
				]}
				value={value}
			/>
		</div>
	);
}

function MenuCard() {
	return (
		<MenuTrigger>
			<Button variant="secondary">Account menu</Button>
			<Menu>
				<MenuItem>
					<User aria-hidden /> Profile
				</MenuItem>
				<MenuItem>
					<Settings aria-hidden /> Settings
				</MenuItem>
				<MenuSeparator />
				<MenuItem isDestructive>
					<LogOut aria-hidden /> Log out
				</MenuItem>
			</Menu>
		</MenuTrigger>
	);
}

function AvatarCard() {
	return (
		<Row label="Sizes">
			<Avatar name="Riza" size="sm" />
			<Avatar name="Riza" size="md" />
			<Avatar name="Riza" size="lg" />
			<Avatar name="Riza" size="xl" />
			<Avatar initials="MP" name="Moonpaw" size="xl" />
		</Row>
	);
}

function SheetCard() {
	const [settings, setSettings] = useState<DeviceSettings>({ hourCycle: '24h', locale: 'en-US', theme: 'dark' });

	return (
		<>
			<p className="text-muted mb-3 text-sm">
				Bottom drawer for mobile. Opens from the button; dismiss by tapping the backdrop, pressing Escape, or dragging
				the handle down.
			</p>
			<DialogTrigger>
				<Button variant="secondary">Open device settings</Button>
				<Sheet aria-label="Device settings">
					<DeviceSettingsPane
						hint="Stored on this device. Syncs to your account when you sign in."
						locales={LOCALES}
						onChange={(next) => setSettings(next)}
						value={settings}
					/>
				</Sheet>
			</DialogTrigger>
		</>
	);
}

const DEMOS: Record<string, { readonly Demo: ComponentType; readonly title: string }> = {
	avatar: { Demo: AvatarCard, title: 'Avatar' },
	button: { Demo: ButtonCard, title: 'Buttons' },
	field: { Demo: FieldCard, title: 'Text fields' },
	link: { Demo: LinkCard, title: 'Links' },
	menu: { Demo: MenuCard, title: 'Menu' },
	'segmented-control': { Demo: SegmentedControlCard, title: 'Segmented control' },
	select: { Demo: SelectCard, title: 'Select' },
	sheet: { Demo: SheetCard, title: 'Bottom sheet' },
	switch: { Demo: SwitchCard, title: 'Switch' },
};

export function CardApp({ card }: { readonly card: string }) {
	const [theme, setTheme] = useState<(typeof THEMES)[number]>('dark');
	const [accent, setAccent] = useState<(typeof APPS)[number]>('community');
	const entry = DEMOS[card];

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		document.documentElement.dataset.accent = accent;
	}, [accent, theme]);

	useEffect(() => {
		document.title = `woof.ing UI — ${entry?.title ?? card}`;
	}, [card, entry]);

	if (!entry) {
		return <p className="text-danger p-5 font-mono text-sm">Unknown card: {card}</p>;
	}

	return (
		<div className="bg-bg text-text min-h-dvh p-5">
			<header className="mb-5 flex flex-wrap items-center justify-between gap-4">
				<h1 className="font-rounded text-lg font-extrabold tracking-tight">
					{entry.title}
					<span className="text-muted ml-2 text-xs font-semibold">@woofing/ui</span>
				</h1>
				<div className="flex min-w-0 max-w-full flex-wrap gap-4">
					<Segmented label="Theme" onChange={(next) => setTheme(next)} options={THEMES} value={theme} />
					<Segmented label="App" onChange={(next) => setAccent(next)} options={APPS} value={accent} />
				</div>
			</header>
			<div className="border-line bg-surface rounded-2xl border p-5">
				<entry.Demo />
			</div>
		</div>
	);
}
