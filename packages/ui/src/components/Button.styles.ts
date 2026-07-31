import { cva } from '../styles/cva';
import { focusRing } from '../styles/focus-ring';

export const buttonStyles = cva({
	composes: [focusRing],
	base: 'inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-transparent font-sans font-bold whitespace-nowrap transition-colors disabled:cursor-default disabled:opacity-45',
	variants: {
		variant: {
			primary: 'bg-accent text-on-accent hover:bg-accent/85 pressed:bg-accent/75',
			secondary: 'border-line bg-surface-2 text-text hover:bg-surface-2/70 pressed:bg-surface-2/55',
			ghost: 'text-muted hover:bg-text/8 hover:text-text pressed:bg-text/12',
			destructive: 'bg-danger text-on-accent hover:bg-danger/85 pressed:bg-danger/75',
		},
		size: {
			sm: 'h-8 px-3.5 text-xs',
			md: 'h-9 px-4 text-sm',
			lg: 'h-11 px-5 text-base',
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'md',
	},
});

export const iconButtonStyles = cva({
	composes: [focusRing],
	base: 'relative inline-grid cursor-pointer place-items-center rounded-full border border-transparent transition-colors disabled:cursor-default disabled:opacity-45',
	variants: {
		variant: {
			ghost: 'text-muted hover:bg-text/8 hover:text-text pressed:bg-text/12',
			solid: 'border-line bg-surface-2 text-text hover:bg-surface-2/70 pressed:bg-surface-2/55',
			accent: 'bg-accent text-on-accent hover:bg-accent/85 pressed:bg-accent/75',
		},
		size: {
			sm: 'size-7.5 [&_svg]:size-4',
			md: 'size-8.5 [&_svg]:size-[19px]',
			lg: 'size-10 [&_svg]:size-5.5',
		},
	},
	defaultVariants: {
		variant: 'ghost',
		size: 'md',
	},
});
