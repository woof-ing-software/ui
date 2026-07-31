import {
	AppSelector,
	Button,
	IconButton,
	Link,
	Menu,
	MenuItem,
	MenuSeparator,
	Navbar,
	NavbarAccount,
	NavbarBrand,
	NavbarCrumb,
	NavbarNotifications,
	NavbarSettings,
	NavbarSpacer,
	Popover,
	PopoverDialog,
	Separator,
	Switch,
	TextField,
} from '@woofing/ui';
import type { DeviceSettings, NavApp, NavNotification } from '@woofing/ui';
import { Bell, Heart, LogOut, Settings, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { DialogTrigger, Heading, MenuTrigger } from 'react-aria-components';

const THEMES = ['dark', 'light', 'black'] as const;
const APPS = ['community', 'art-corner', 'blog', 'support', 'moderation'] as const;

const NAV_APPS: readonly NavApp[] = [
	{ id: 'community', name: 'Community', description: 'The fandom home — posts, packs, events', href: '#' },
	{ id: 'art-corner', name: 'Art Corner', description: 'Auctions, commissions, and galleries', href: '#' },
	{ id: 'blog', name: 'Blog', description: 'News and stories from the pack', href: '#' },
	{ id: 'support', name: 'Support', description: 'Help center and tickets', href: '#' },
	{ id: 'moderation', name: 'Moderation', description: 'Trust & safety tools', href: '#', isStaffOnly: true },
];

const NAV_NOTIFICATIONS: readonly NavNotification[] = [
	{ id: '1', isUnread: true, message: 'Riza commented on your post', time: '2 minutes ago' },
	{ id: '2', isUnread: true, message: 'Your commission slot was accepted', time: '1 hour ago' },
	{ id: '3', message: 'Weekly digest: 12 new posts in your packs', time: 'yesterday' },
];

const LOCALES = [
	{ id: 'en-US', label: 'English' },
	{ id: 'ro-RO', label: 'Română' },
	{ id: 'de-DE', label: 'Deutsch' },
	{ id: 'ja-JP', label: '日本語' },
] as const;

function resolveTheme(theme: DeviceSettings['theme']) {
	if (theme !== 'system') {
		return theme;
	}

	return globalThis.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function Segmented<TOption extends string>(props: {
	readonly label: string;
	onChange(next: TOption): void;
	readonly options: readonly TOption[];
	readonly value: TOption;
}) {
	return (
		<div className="flex min-w-0 max-w-full items-center gap-2">
			<span className="text-muted shrink-0 text-[11px] font-bold tracking-wider uppercase">{props.label}</span>
			<div className="border-line bg-bg flex min-w-0 gap-0.5 overflow-x-auto rounded-[9px] border p-0.5">
				{props.options.map((option) => (
					<button
						className={`shrink-0 cursor-pointer rounded-[7px] border-0 px-2.5 py-1.5 font-sans text-xs font-semibold whitespace-nowrap transition-colors ${
							option === props.value ? 'bg-surface-2 text-text' : 'text-muted bg-transparent'
						}`}
						key={option}
						onClick={() => props.onChange(option)}
						type="button"
					>
						{option}
					</button>
				))}
			</div>
		</div>
	);
}

function Section({ children, title }: { readonly children: React.ReactNode; readonly title: string }) {
	return (
		<section>
			<h2 className="text-muted mb-3 flex items-center gap-2 text-[11px] font-extrabold tracking-widest uppercase before:h-0.5 before:w-3.5 before:rounded before:bg-(--accent) before:content-['']">
				{title}
			</h2>
			<div className="border-line bg-surface rounded-2xl border p-4 sm:p-5">{children}</div>
		</section>
	);
}

export function App() {
	const [settings, setSettings] = useState<DeviceSettings>({ hourCycle: '24h', locale: 'en-US', theme: 'dark' });
	const [accent, setAccent] = useState<(typeof APPS)[number]>('community');
	const theme = resolveTheme(settings.theme);

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		document.documentElement.dataset.accent = accent;
	}, [accent, theme]);

	return (
		<>
			<Navbar>
				<NavbarBrand />
				<NavbarCrumb />
				<AppSelector
					apps={NAV_APPS}
					currentAppId={accent}
					onSelect={(appId) => {
						const known = APPS.find((app) => app === appId);
						if (known) {
							setAccent(known);
						}
					}}
				/>
				<NavbarSpacer />
				<NavbarSettings
					hint="Stored on this device. Syncs to your account when you sign in."
					locales={LOCALES}
					onChange={setSettings}
					value={settings}
				/>
				<NavbarAccount accountSettingsHref="#" profileHref="#" user={{ name: 'Riza' }} />
				<NavbarNotifications allHref="#" notifications={NAV_NOTIFICATIONS} />
			</Navbar>
			<div className="px-safe pb-safe">
				<main className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-7 sm:gap-8 sm:px-6 sm:py-10">
					<header className="flex flex-wrap items-center justify-between gap-4">
						<h1 className="font-rounded text-xl font-extrabold tracking-tight">
							woof<b className="text-accent-ink">.ing</b> UI
						</h1>
						<div className="flex min-w-0 max-w-full flex-wrap gap-5">
							<Segmented
								label="Theme"
								onChange={(next) => setSettings((prev) => ({ ...prev, theme: next }))}
								options={THEMES}
								value={theme}
							/>
							<Segmented label="App" onChange={(next) => setAccent(next)} options={APPS} value={accent} />
						</div>
					</header>

					<Section title="Buttons">
						<div className="flex flex-wrap items-center gap-3">
							<Button>Log in</Button>
							<Button variant="secondary">Cancel</Button>
							<Button variant="ghost">Skip</Button>
							<Button variant="destructive">Delete</Button>
							<Button isDisabled>Disabled</Button>
							<IconButton aria-label="Notifications">
								<Bell size={19} />
							</IconButton>
							<IconButton aria-label="Like" variant="solid">
								<Heart size={19} />
							</IconButton>
							<IconButton aria-label="Like" variant="accent">
								<Heart size={19} />
							</IconButton>
						</div>
						<div className="mt-4 flex items-center gap-3">
							<Button size="sm">Small</Button>
							<Button size="md">Medium</Button>
							<Button size="lg">Large</Button>
						</div>
					</Section>

					<Section title="Links">
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
					</Section>

					<Section title="Form">
						<div className="flex max-w-xs flex-col gap-4">
							<TextField description="Shown on your profile." label="Display name" placeholder="Riza" />
							<TextField
								errorMessage="Enter a valid email address."
								isInvalid
								label="Email"
								placeholder="riza@woof.ing"
								type="email"
							/>
							<Switch defaultSelected>Email notifications</Switch>
							<Switch>Public profile</Switch>
						</div>
					</Section>

					<Section title="Overlays">
						<div className="flex items-center gap-3">
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
							<DialogTrigger>
								<IconButton aria-label="Notifications" variant="solid">
									<Bell size={19} />
								</IconButton>
								<Popover placement="bottom end">
									<PopoverDialog className="w-80">
										<div className="flex items-center justify-between px-3.5 py-3">
											<Heading className="text-[13px] font-bold" slot="title">
												Notifications
											</Heading>
											<span className="text-muted text-xs font-semibold">Mark all read</span>
										</div>
										<Separator />
										<p className="px-3.5 py-3 text-[13px]">
											<b className="font-semibold">Riza</b> commented on your post
											<time className="text-muted mt-0.5 block text-[11px]">2 minutes ago</time>
										</p>
									</PopoverDialog>
								</Popover>
							</DialogTrigger>
						</div>
					</Section>

					<Section title="Tokens">
						<div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
							{(['bg', 'surface', 'surface-2', 'line', 'text', 'muted', 'accent', 'danger'] as const).map((token) => (
								<div className="flex items-center gap-2.5" key={token}>
									<span
										className="border-line size-8 shrink-0 rounded-lg border"
										style={{ background: `var(--${token})` }}
									/>
									<span className="text-muted font-mono text-[11px]">--{token}</span>
								</div>
							))}
						</div>
						<div className="mt-4 flex flex-col gap-1">
							{APPS.map((app) => (
								<p className="text-accent-ink text-sm font-bold" data-accent={app} key={app}>
									{app} — accent-ink stays readable on every theme
								</p>
							))}
						</div>
					</Section>
				</main>
			</div>
		</>
	);
}
