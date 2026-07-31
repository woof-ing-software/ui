import {
	Menu as RACMenu,
	MenuItem as RACMenuItem,
	Separator as RACSeparator,
	composeRenderProps,
} from 'react-aria-components';
import type {
	MenuItemProps as RACMenuItemProps,
	MenuProps as RACMenuProps,
	SeparatorProps as RACSeparatorProps,
} from 'react-aria-components';

import { cva, cx } from '../styles/cva.js';
import { Popover } from './Popover.js';
import type { PopoverProps } from './Popover.js';

export type MenuProps<TItem extends object> = RACMenuProps<TItem> & {
	placement?: PopoverProps['placement'];
};

export function Menu<TItem extends object>({ placement, ...props }: MenuProps<TItem>) {
	return (
		<Popover placement={placement} className="min-w-[180px]">
			<RACMenu
				{...props}
				className={composeRenderProps(props.className, (className) =>
					cx('max-h-[inherit] overflow-auto p-1.5 outline-0', className),
				)}
			/>
		</Popover>
	);
}

const menuItemStyles = cva({
	base: [
		'text-text flex cursor-pointer items-center gap-2.5 rounded-[10px] px-3 py-2 font-sans text-sm font-medium outline-0 transition-colors',
		'focused:bg-accent/15 focused:text-accent-ink',
		'selected:text-accent-ink selected:font-bold',
		'disabled:cursor-default disabled:opacity-45',
		'[&_svg]:size-4 [&_svg]:shrink-0',
	],
	variants: {
		isDestructive: {
			true: 'text-danger focused:bg-danger/12 focused:text-danger',
		},
	},
});

export type MenuItemProps = RACMenuItemProps & {
	isDestructive?: boolean;
};

export function MenuItem({ isDestructive, ...props }: MenuItemProps) {
	return (
		<RACMenuItem
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				menuItemStyles({ ...renderProps, isDestructive, className }),
			)}
		/>
	);
}

export function MenuSeparator(props: RACSeparatorProps) {
	return <RACSeparator {...props} className={cx('bg-line mx-1 my-1.5 h-px', props.className)} />;
}
