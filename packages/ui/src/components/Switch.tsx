import type { ReactNode } from 'react';
import { Switch as RACSwitch, composeRenderProps } from 'react-aria-components';
import type { SwitchProps as RACSwitchProps } from 'react-aria-components';

import { cva, cx } from '../styles/cva.js';

const trackStyles = cva({
	base: [
		'border-line bg-surface-2 flex h-5.5 w-9.5 shrink-0 cursor-pointer items-center rounded-full border px-0.5 transition-colors',
		'group-selected:border-transparent group-selected:bg-accent',
		'group-focus-visible:outline-accent group-focus-visible:outline-2 group-focus-visible:outline-offset-2 outline-0',
		'forced-colors:outline-[Highlight]',
	],
});

const thumbStyles = cva({
	base: ['bg-muted size-4 rounded-full transition-all', 'group-selected:bg-on-accent group-selected:translate-x-4'],
});

export type SwitchProps = Omit<RACSwitchProps, 'children'> & {
	children?: ReactNode;
};

export function Switch({ children, ...props }: SwitchProps) {
	return (
		<RACSwitch
			{...props}
			className={composeRenderProps(props.className, (className) =>
				cx('group text-text flex items-center gap-2.5 font-sans text-sm disabled:opacity-45', className),
			)}
		>
			<span className={trackStyles()}>
				<span className={thumbStyles()} />
			</span>
			{children}
		</RACSwitch>
	);
}
