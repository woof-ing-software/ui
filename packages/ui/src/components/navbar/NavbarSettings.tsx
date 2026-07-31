import type { ReactNode } from 'react';
import { DialogTrigger } from 'react-aria-components';

import { IconButton } from '../Button';
import { Label } from '../Field';
import { Popover, PopoverDialog } from '../Popover';
import { SegmentedControl } from '../SegmentedControl';
import { Select, SelectItem } from '../Select';
import { SlidersIcon } from './icons';
import type { DeviceSettings } from './types';

const THEME_OPTIONS = [
	{ id: 'system', label: 'System' },
	{ id: 'light', label: 'Light' },
	{ id: 'dark', label: 'Dark' },
	{ id: 'black', label: 'Black' },
] as const;

const HOUR_OPTIONS = [
	{ id: '12h', label: '12-hour' },
	{ id: '24h', label: '24-hour' },
] as const;

export type LocaleOption = {
	readonly id: string;
	readonly label: string;
};

export type DeviceSettingsPaneProps = {
	readonly hint?: ReactNode;
	readonly locales: readonly LocaleOption[];
	onChange(next: DeviceSettings): void;
	readonly value: DeviceSettings;
};

/**
 * Device preferences (layout.md): work logged-out, stored per device.
 * Presentational — persistence/sync is the consumer's job.
 * Also embedded in the account app's settings page later.
 */
export function DeviceSettingsPane(props: DeviceSettingsPaneProps) {
	return (
		<div className="grid w-[290px] gap-[13px] p-3.5">
			<div className="grid gap-1.5">
				<Label>Theme</Label>
				<SegmentedControl
					aria-label="Theme"
					onChange={(theme) => props.onChange({ ...props.value, theme })}
					options={THEME_OPTIONS}
					value={props.value.theme}
				/>
			</div>
			<Select
				aria-label="Language"
				label="Language"
				onSelectionChange={(key) => props.onChange({ ...props.value, locale: String(key) })}
				selectedKey={props.value.locale}
			>
				{props.locales.map((locale) => (
					<SelectItem id={locale.id} key={locale.id}>
						{locale.label}
					</SelectItem>
				))}
			</Select>
			<div className="grid gap-1.5">
				<Label>Time format</Label>
				<SegmentedControl
					aria-label="Time format"
					onChange={(hourCycle) => props.onChange({ ...props.value, hourCycle })}
					options={HOUR_OPTIONS}
					value={props.value.hourCycle}
				/>
			</div>
			{props.hint ? <p className="text-muted text-[11.5px]">{props.hint}</p> : null}
		</div>
	);
}

export type NavbarSettingsProps = DeviceSettingsPaneProps;

/** The always-visible settings gear + device-preferences popover. */
export function NavbarSettings(props: NavbarSettingsProps) {
	return (
		<DialogTrigger>
			<IconButton aria-label="Device settings">
				<SlidersIcon />
			</IconButton>
			<Popover placement="bottom end">
				<PopoverDialog>
					<DeviceSettingsPane {...props} />
				</PopoverDialog>
			</Popover>
		</DialogTrigger>
	);
}
