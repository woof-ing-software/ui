import { Button as RACButton, composeRenderProps } from 'react-aria-components';
import type { ButtonProps as RACButtonProps } from 'react-aria-components';

import type { VariantProps } from '../styles/cva.js';
import { buttonStyles, iconButtonStyles } from './Button.styles.js';

export type ButtonProps = RACButtonProps & VariantProps<typeof buttonStyles>;

export function Button({ variant, size, ...props }: ButtonProps) {
	return (
		<RACButton
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				buttonStyles({ ...renderProps, variant, size, className }),
			)}
		/>
	);
}

export type IconButtonProps = RACButtonProps &
	VariantProps<typeof iconButtonStyles> & {
		/** Required: icon-only buttons have no visible text. */
		'aria-label': string;
	};

export function IconButton({ variant, size, ...props }: IconButtonProps) {
	return (
		<RACButton
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				iconButtonStyles({ ...renderProps, variant, size, className }),
			)}
		/>
	);
}
