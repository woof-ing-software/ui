import type { ReactNode } from 'react';
import {
	Button as RACButton,
	ListBox as RACListBox,
	ListBoxItem as RACListBoxItem,
	Select as RACSelect,
	SelectValue,
	composeRenderProps,
} from 'react-aria-components';
import type { ListBoxItemProps as RACListBoxItemProps, SelectProps as RACSelectProps } from 'react-aria-components';

import { cva, cx } from '../styles/cva.js';
import { Description, Label } from './Field.js';
import { Popover } from './Popover.js';

const selectTriggerStyles = cva({
	base: [
		'bg-bg text-text border-line flex w-full cursor-pointer items-center justify-between gap-2 rounded-[9px] border px-2.5 py-2 text-left font-sans text-[13px] transition-colors',
		'hover:border-accent/40',
		'focus-visible:outline-accent focus-visible:outline-2 focus-visible:-outline-offset-1 outline-0',
		'disabled:cursor-default disabled:opacity-45',
	],
});

const selectItemStyles = cva({
	base: [
		'text-text flex cursor-pointer items-center justify-between gap-2.5 rounded-[7px] px-2.5 py-1.5 font-sans text-[13px] outline-0 transition-colors',
		'focused:bg-accent/15 focused:text-accent-ink',
		'selected:text-accent-ink selected:font-bold',
		'disabled:cursor-default disabled:opacity-45',
	],
});

export type SelectProps<TItem extends object> = Omit<RACSelectProps<TItem>, 'children'> & {
	readonly children: ((item: TItem) => ReactNode) | ReactNode;
	readonly description?: ReactNode;
	readonly items?: Iterable<TItem>;
	readonly label?: ReactNode;
};

export function Select<TItem extends object>({ children, description, items, label, ...props }: SelectProps<TItem>) {
	return (
		<RACSelect
			{...props}
			className={composeRenderProps(props.className, (className) => cx('flex flex-col gap-1.5', className))}
		>
			{label ? <Label>{label}</Label> : null}
			<RACButton className={selectTriggerStyles()}>
				<SelectValue />
				<svg aria-hidden className="text-muted size-3" fill="none" viewBox="0 0 12 12">
					<path
						d="M3 4.5 6 7.5 9 4.5"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
					/>
				</svg>
			</RACButton>
			{description ? <Description>{description}</Description> : null}
			<Popover className="min-w-(--trigger-width)">
				<RACListBox className="max-h-60 overflow-auto p-1 outline-0" items={items}>
					{children}
				</RACListBox>
			</Popover>
		</RACSelect>
	);
}

export function SelectItem(props: RACListBoxItemProps & { readonly children: ReactNode }) {
	return (
		<RACListBoxItem
			{...props}
			className={composeRenderProps(props.className, (className) => selectItemStyles({ className }))}
		/>
	);
}
