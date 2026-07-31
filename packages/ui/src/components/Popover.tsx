import { Dialog as RACDialog, Popover as RACPopover, composeRenderProps } from 'react-aria-components';
import type { DialogProps as RACDialogProps, PopoverProps as RACPopoverProps } from 'react-aria-components';

import { popoverStyles } from './Popover.styles';

export type PopoverProps = RACPopoverProps;

export function Popover(props: PopoverProps) {
	return (
		<RACPopover
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				popoverStyles({ ...renderProps, className }),
			)}
		/>
	);
}

/** Accessible container for popover content opened from a trigger (DialogTrigger). */
export function PopoverDialog(props: RACDialogProps) {
	return <RACDialog {...props} className={`outline-0 ${props.className ?? ''}`} />;
}
