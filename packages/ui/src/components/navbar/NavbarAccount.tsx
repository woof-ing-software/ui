import { Button as RACButton, MenuTrigger } from 'react-aria-components';

import { cva } from '../../styles/cva';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { Menu, MenuItem, MenuSeparator } from '../Menu';
import type { NavUser } from './types';

const accountButtonStyles = cva({
	base: [
		'text-text flex cursor-pointer items-center gap-2 rounded-full border-0 bg-transparent py-1 pl-1 font-sans',
		'pr-2.5 max-sm:pr-1', // the name is hidden below sm — keep the highlight pill symmetric around the avatar
		'hover:bg-text/8 pressed:bg-text/12 transition-colors',
		'focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2 outline-0',
	],
});

export type NavbarAccountProps = {
	readonly accountSettingsHref?: string;
	onLogin?(): void;
	onSignOut?(): void;
	readonly profileHref?: string;
	/** null renders the logged-out state: a single login button (sign in and sign up are the same flow). */
	readonly user: NavUser | null;
};

export function NavbarAccount(props: NavbarAccountProps) {
	if (!props.user) {
		return (
			<Button onPress={() => props.onLogin?.()} size="sm">
				Log in
			</Button>
		);
	}

	const { user } = props;

	return (
		<MenuTrigger>
			<RACButton aria-label={`Account: ${user.name}`} className={accountButtonStyles()}>
				<Avatar initials={user.initials} name={user.name} src={user.avatarSrc} />
				<span className="max-sm:hidden text-sm font-[650]">{user.name}</span>
			</RACButton>
			<Menu placement="bottom end">
				<MenuItem href={props.profileHref}>View profile</MenuItem>
				<MenuItem href={props.accountSettingsHref}>Account settings</MenuItem>
				<MenuSeparator />
				<MenuItem isDestructive onAction={() => props.onSignOut?.()}>
					Sign out
				</MenuItem>
			</Menu>
		</MenuTrigger>
	);
}
