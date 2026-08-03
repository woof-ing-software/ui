import { DialogTrigger, Heading } from 'react-aria-components';

import { IconButton } from '../Button.js';
import { Link } from '../Link.js';
import { Popover, PopoverDialog } from '../Popover.js';
import { BellIcon } from './icons.js';
import type { NavNotification } from './types.js';

export type NavbarNotificationsProps = {
	readonly allHref?: string;
	readonly notifications: readonly NavNotification[];
	onMarkAllRead?(): void;
};

/** Bell + unread badge + recent-notifications popover. Only render when logged in (layout.md). */
export function NavbarNotifications(props: NavbarNotificationsProps) {
	const unreadCount = props.notifications.filter((notification) => notification.isUnread).length;

	return (
		<DialogTrigger>
			<IconButton
				aria-label={unreadCount > 0 ? `Notifications (${unreadCount} unread)` : 'Notifications'}
				className={`[&_svg]:size-[21px] ${unreadCount > 0 ? 'text-accent-ink hover:text-accent-ink' : ''}`}
			>
				<BellIcon isFilled={unreadCount > 0} />
				{/* dot only — the count lives in the aria-label and the popover (a number is illegible at this size) */}
				{unreadCount > 0 ? (
					<span aria-hidden className="bg-accent border-bg absolute top-[3px] right-[3px] size-3 rounded-full border-2" />
				) : null}
			</IconButton>
			<Popover className="w-[330px]" placement="bottom end">
				<PopoverDialog>
					<div className="border-line flex items-center justify-between border-b px-3.5 py-3">
						<Heading className="text-[13px] font-bold" slot="title">
							Notifications
						</Heading>
						{props.onMarkAllRead ? (
							<button
								className="text-muted hover:text-text cursor-pointer border-0 bg-transparent font-sans text-xs font-semibold"
								onClick={() => props.onMarkAllRead?.()}
								type="button"
							>
								Mark all read
							</button>
						) : null}
					</div>
					<ul className="m-0 list-none p-0">
						{props.notifications.map((notification) => (
							<li className="border-line flex items-start gap-2.5 border-b px-3.5 py-[11px]" key={notification.id}>
								<p className="flex-1 text-[13px]">
									{notification.message}
									<time className="text-muted mt-0.5 block text-[11px]">{notification.time}</time>
								</p>
								{notification.isUnread ? (
									<span aria-hidden className="bg-accent mt-1.5 size-[7px] shrink-0 rounded-full" />
								) : null}
							</li>
						))}
					</ul>
					{props.allHref ? (
						<Link className="block px-3.5 py-[11px] text-center text-[12.5px] font-[650]" href={props.allHref}>
							See all notifications
						</Link>
					) : null}
				</PopoverDialog>
			</Popover>
		</DialogTrigger>
	);
}
