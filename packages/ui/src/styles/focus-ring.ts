import { cva } from './cva.js';

export const focusRing = cva({
	base: 'outline-accent outline-offset-2 forced-colors:outline-[Highlight]',
	variants: {
		isFocusVisible: {
			false: 'outline-0',
			true: 'outline-2',
		},
	},
	defaultVariants: {
		isFocusVisible: false,
	},
});
