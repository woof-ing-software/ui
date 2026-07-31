import {
	FieldError as RACFieldError,
	Input as RACInput,
	Label as RACLabel,
	Text,
	composeRenderProps,
} from 'react-aria-components';
import type {
	FieldErrorProps as RACFieldErrorProps,
	InputProps as RACInputProps,
	LabelProps as RACLabelProps,
	TextProps,
} from 'react-aria-components';

import { cx } from '../styles/cva';
import { inputStyles } from './Field.styles';

export function Label(props: RACLabelProps) {
	return (
		<RACLabel
			{...props}
			className={cx('text-muted block text-[11.5px] font-bold tracking-wider uppercase', props.className)}
		/>
	);
}

export function Description(props: TextProps) {
	return <Text {...props} slot="description" className={cx('text-muted text-xs', props.className)} />;
}

export function FieldError(props: RACFieldErrorProps) {
	return (
		<RACFieldError
			{...props}
			className={composeRenderProps(props.className, (className) => cx('text-danger text-xs font-semibold', className))}
		/>
	);
}

export function Input(props: RACInputProps) {
	return (
		<RACInput
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				inputStyles({ ...renderProps, className }),
			)}
		/>
	);
}
