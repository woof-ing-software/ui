/*
 * One "visitor" button replacing the settings gear + account button: identity
 * (login / mini profile), shortcuts contributed by the current app, device
 * settings and account actions in a single panel.
 * Mock: meta/design/frags/navbar-visitor.html.
 */
import type { ReactNode } from 'react';
import { Button as RACButton, DialogTrigger, Link as RACLink } from 'react-aria-components';

import { useMediaQuery } from '../../hooks/useMediaQuery.js';
import { cva, cx } from '../../styles/cva.js';
import { Avatar } from '../Avatar.js';
import { Button } from '../Button.js';
import { Link } from '../Link.js';
import { Popover, PopoverDialog } from '../Popover.js';
import { Sheet } from '../Sheet.js';
import { ChevronDownIcon, GearIcon, SignOutIcon, UserIcon } from './icons.js';
import { DeviceSettingsPane } from './NavbarSettings.js';
import type { DeviceSettingsPaneProps } from './NavbarSettings.js';
import type { NavUser } from './types.js';

const triggerStyles = cva({
	base: [
		'text-text flex cursor-pointer items-center gap-2 rounded-full border-0 bg-transparent p-1 font-sans',
		'hover:bg-text/8 pressed:bg-text/12 transition-colors',
		'focus-visible:outline-accent outline-0 focus-visible:outline-2 focus-visible:outline-offset-2',
	],
});

const rowStyles = cva({
	base: [
		'text-text flex w-full cursor-pointer items-center gap-2.5 rounded-[10px] px-2.5 py-2 text-left font-sans text-[13.5px] font-medium no-underline outline-0 transition-colors',
		'hover:bg-accent/12 pressed:bg-accent/18 focus-visible:bg-accent/12',
		'[&_svg]:text-muted [&_svg]:size-[17px] [&_svg]:shrink-0',
	],
	variants: {
		isDestructive: {
			true: 'text-danger hover:bg-danger/12 pressed:bg-danger/16 [&_svg]:text-danger',
		},
	},
});

export type VisitorAppLink = {
	readonly href?: string;
	readonly icon?: ReactNode;
	readonly id: string;
	readonly label: string;
	/** Trailing hint, e.g. an unread/open count. */
	readonly meta?: string;
};

function SectionLabel({ children, className }: { readonly children: ReactNode; readonly className?: string }) {
	return (
		<p
			className={cx('text-muted px-2.5 pt-1.5 pb-1 text-[10.5px] font-extrabold tracking-[.07em] uppercase', className)}
		>
			{children}
		</p>
	);
}

function PanelLink(link: VisitorAppLink) {
	return (
		<RACLink className={rowStyles()} href={link.href}>
			{link.icon}
			{link.label}
			{link.meta ? <span className="text-muted ml-auto text-[11.5px] font-semibold">{link.meta}</span> : null}
		</RACLink>
	);
}

export type NavbarVisitorProps = {
	readonly accountSettingsHref?: string;
	/** Shortcuts contributed by the current app (community → your profile page, art corner → your commissions, …). */
	readonly appLinks?: readonly VisitorAppLink[];
	/** Section label above appLinks — the current app's name. */
	readonly appName?: string;
	onLogin?(): void;
	onSignOut?(): void;
	readonly profileHref?: string;
	readonly settings: DeviceSettingsPaneProps;
	/** null renders the logged-out state: a dashed "empty avatar" trigger and a login panel. */
	readonly user: NavUser | null;
};

export function NavbarVisitor(props: NavbarVisitorProps) {
	const { user } = props;
	const isMobile = useMediaQuery('(max-width: 639px)');

	const panel = (
		<>
			{user ? (
				<div className="flex items-center gap-3 p-3.5">
					<Avatar initials={user.initials} name={user.name} size="lg" src={user.avatarSrc} />
					<div className="min-w-0 flex-1">
						<p className="truncate text-sm font-bold">{user.name}</p>
						<p className="text-muted text-xs">Signed in on every app</p>
					</div>
					<Link className="text-[12.5px]" href={props.profileHref}>
						View profile
					</Link>
				</div>
			) : (
				<div className="px-3.5 pt-4 pb-3.5">
					<p className="text-sm font-bold">Browsing as a visitor</p>
					<p className="text-muted mt-0.5 mb-3 text-xs">
						One account for every woof.ing app — sign in and sign up are the same flow.
					</p>
					<Button className="w-full" onPress={() => props.onLogin?.()}>
						Log in
					</Button>
				</div>
			)}

			{user && props.appLinks?.length ? (
				<div className="border-line border-t p-2">
					{props.appName ? <SectionLabel className="text-accent-ink">{props.appName}</SectionLabel> : null}
					{props.appLinks.map((link) => (
						<PanelLink key={link.id} {...link} />
					))}
				</div>
			) : null}

			<div className="border-line border-t">
				<SectionLabel className="px-3.5 pt-3 pb-0">Device settings</SectionLabel>
				<DeviceSettingsPane {...props.settings} />
			</div>

			{user ? (
				<div className="border-line border-t p-2">
					<PanelLink
						href={props.accountSettingsHref}
						icon={<GearIcon />}
						id="account-settings"
						label="Account settings"
					/>
					<RACButton className={rowStyles({ isDestructive: true })} onPress={() => props.onSignOut?.()}>
						<SignOutIcon />
						Sign out
					</RACButton>
				</div>
			) : null}
		</>
	);

	return (
		<DialogTrigger>
			{user ? (
				<RACButton aria-label={`Account: ${user.name}`} className={triggerStyles({ className: 'pr-2.5 max-sm:pr-1' })}>
					<Avatar initials={user.initials} name={user.name} src={user.avatarSrc} />
					<span className="max-sm:hidden text-sm font-[650]">{user.name}</span>
					<ChevronDownIcon className="text-muted max-sm:hidden size-3" />
				</RACButton>
			) : (
				<RACButton aria-label="Visitor: log in" className={triggerStyles({ className: 'pr-2.5 max-sm:pr-1.5' })}>
					<span className="border-muted/60 text-muted grid size-7 place-items-center rounded-full border-[1.5px] border-dashed">
						<UserIcon className="size-[15px]" />
					</span>
					{/* "Visitor" as the username + accent login hint — guides toward the account slot */}
					<span className="max-sm:hidden flex flex-col items-start text-left leading-[1.15]">
						<span className="text-[13px] font-[650]">Visitor</span>
						<span className="text-accent-ink text-[10.5px] font-bold">Log in</span>
					</span>
					<ChevronDownIcon className="text-muted max-sm:hidden size-3" />
				</RACButton>
			)}
			{isMobile ? (
				<Sheet aria-label={user ? `Account: ${user.name}` : 'Visitor menu'}>{panel}</Sheet>
			) : (
				<Popover placement="bottom end">
					<PopoverDialog className="w-[318px]">{panel}</PopoverDialog>
				</Popover>
			)}
		</DialogTrigger>
	);
}
