import {
	Button as RACButton,
	Menu as RACMenu,
	MenuItem as RACMenuItem,
	MenuTrigger,
	Separator as RACSeparator,
} from 'react-aria-components';

import { cva, cx } from '../../styles/cva.js';
import { Popover } from '../Popover.js';
import { ChevronDownIcon } from './icons.js';
import type { NavApp } from './types.js';

const pillStyles = cva({
	base: [
		'bg-pill text-pill-ink flex cursor-pointer items-center gap-1.5 rounded-full border-0 px-3 py-[7px] font-sans text-sm font-[650] whitespace-nowrap',
		'hover:brightness-110',
		'focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2 outline-0',
	],
});

const appCardStyles = cva({
	base: [
		'flex w-full cursor-pointer items-center gap-3 rounded-xl px-[13px] py-[11px] outline-0 transition-colors',
		'bg-[color-mix(in_srgb,var(--accent)_15%,transparent)]',
		'hovered:bg-[color-mix(in_srgb,var(--accent)_22%,transparent)]',
		'focused:bg-[color-mix(in_srgb,var(--accent)_22%,transparent)]',
	],
	variants: {
		isCurrent: {
			true: 'bg-[color-mix(in_srgb,var(--accent)_26%,transparent)] shadow-[inset_0_0_0_1px_color-mix(in_srgb,var(--accent)_45%,transparent)] hovered:bg-[color-mix(in_srgb,var(--accent)_26%,transparent)]',
		},
	},
});

function AppCard({ app, isCurrent }: { readonly app: NavApp; readonly isCurrent: boolean }) {
	return (
		<RACMenuItem
			className={cx(appCardStyles({ isCurrent }), 'mt-[7px] first:mt-0')}
			data-accent={app.id}
			href={app.href}
			id={app.id}
			textValue={app.name}
		>
			{app.icon ? (
				<span
					aria-hidden
					className="shrink-0 text-[color-mix(in_srgb,var(--accent)_75%,var(--text))] [&_svg]:size-[23px]"
				>
					{app.icon}
				</span>
			) : null}
			<div className="flex-1">
				<span className="block text-[13.5px] font-[650] text-[color-mix(in_srgb,var(--accent)_75%,var(--text))]">
					{app.name}
					{app.isStaffOnly ? (
						<span className="ml-2 inline-block rounded-full bg-[color-mix(in_srgb,var(--accent-moderation)_22%,transparent)] px-1.5 py-px align-middle text-[10px] font-extrabold tracking-[0.06em] text-[color-mix(in_srgb,var(--accent-moderation)_65%,var(--text))]">
							STAFF
						</span>
					) : null}
				</span>
				{app.description ? <span className="text-muted mt-px block text-[11.5px]">{app.description}</span> : null}
			</div>
			{isCurrent ? (
				<span aria-hidden className="text-xs font-extrabold text-[color-mix(in_srgb,var(--accent)_75%,var(--text))]">
					✓
				</span>
			) : null}
		</RACMenuItem>
	);
}

export type AppSelectorProps = {
	readonly apps: readonly NavApp[];
	readonly currentAppId: string;
	onSelect?(appId: string): void;
};

/** App-pill trigger + the tinted app-card switcher (desktop popover; bottom sheet is a later pass). */
export function AppSelector(props: AppSelectorProps) {
	const current = props.apps.find((app) => app.id === props.currentAppId);
	const publicApps = props.apps.filter((app) => !app.isStaffOnly);
	const staffApps = props.apps.filter((app) => app.isStaffOnly);

	return (
		<MenuTrigger>
			<RACButton className={pillStyles()}>
				{current?.icon ? (
					<span aria-hidden className="-ml-0.5 [&_svg]:size-[21px]">
						{current.icon}
					</span>
				) : null}
				{/* with an icon present the name collapses on mobile — the icon is the compact form */}
				<span className={current?.icon ? 'max-sm:hidden' : undefined}>{current?.name}</span>
				<ChevronDownIcon className="size-3 opacity-70" />
			</RACButton>
			<Popover className="w-[330px]" placement="bottom start">
				<RACMenu className="p-[7px] outline-0" onAction={(key) => props.onSelect?.(String(key))}>
					{publicApps.map((app) => (
						<AppCard app={app} isCurrent={app.id === props.currentAppId} key={app.id} />
					))}
					{staffApps.length > 0 ? <RACSeparator className="bg-line mx-1 mt-[7px] h-px border-0" /> : null}
					{staffApps.map((app) => (
						<AppCard app={app} isCurrent={app.id === props.currentAppId} key={app.id} />
					))}
				</RACMenu>
			</Popover>
		</MenuTrigger>
	);
}
