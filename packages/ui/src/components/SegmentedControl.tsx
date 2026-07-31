import type { ReactNode } from 'react';
import { ToggleButton, ToggleButtonGroup } from 'react-aria-components';

import { cva, cx } from '../styles/cva.js';

const segmentStyles = cva({
	base: [
		'flex-1 cursor-pointer rounded-[7px] border-0 bg-transparent px-2.5 py-[7px] text-center font-sans text-[12.5px] font-semibold whitespace-nowrap transition-colors',
		'text-muted hover:text-text',
		'selected:bg-surface-2 selected:text-text',
		'focus-visible:outline-accent focus-visible:outline-2 focus-visible:-outline-offset-2 outline-0',
		'disabled:cursor-default disabled:opacity-45',
	],
});

export type SegmentedControlOption<TValue extends string> = {
	readonly id: TValue;
	readonly label: ReactNode;
};

export type SegmentedControlProps<TValue extends string> = {
	readonly 'aria-label': string;
	readonly className?: string;
	readonly isDisabled?: boolean;
	onChange(next: TValue): void;
	readonly options: readonly SegmentedControlOption<TValue>[];
	readonly value: TValue;
};

export function SegmentedControl<TValue extends string>(props: SegmentedControlProps<TValue>) {
	return (
		<ToggleButtonGroup
			aria-label={props['aria-label']}
			className={cx('bg-bg border-line flex gap-0.5 rounded-[9px] border p-[3px]', props.className)}
			disallowEmptySelection
			isDisabled={props.isDisabled}
			onSelectionChange={(keys) => {
				const [next] = keys;
				if (next !== undefined && next !== props.value) {
					props.onChange(next as TValue);
				}
			}}
			selectedKeys={[props.value]}
			selectionMode="single"
		>
			{props.options.map((option) => (
				<ToggleButton className={segmentStyles()} id={option.id} key={option.id}>
					{option.label}
				</ToggleButton>
			))}
		</ToggleButtonGroup>
	);
}
