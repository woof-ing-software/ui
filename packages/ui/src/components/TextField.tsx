import type { ReactNode } from 'react';
import { TextField as RACTextField, composeRenderProps } from 'react-aria-components';
import type { TextFieldProps as RACTextFieldProps, ValidationResult } from 'react-aria-components';

import { cx } from '../styles/cva.js';
import { Description, FieldError, Input, Label } from './Field.js';

export type TextFieldProps = RACTextFieldProps & {
	description?: ReactNode;
	errorMessage?: string | ((validation: ValidationResult) => string);
	label?: ReactNode;
	placeholder?: string;
};

export function TextField({ label, description, errorMessage, placeholder, ...props }: TextFieldProps) {
	return (
		<RACTextField
			{...props}
			className={composeRenderProps(props.className, (className) => cx('flex flex-col gap-1.5', className))}
		>
			{label ? <Label>{label}</Label> : null}
			{description ? <Description>{description}</Description> : null}
			<Input placeholder={placeholder} />
			<FieldError>{errorMessage}</FieldError>
		</RACTextField>
	);
}
