import { Link as RACLink, composeRenderProps } from 'react-aria-components';
import type { LinkProps as RACLinkProps } from 'react-aria-components';

import { compose, cva } from '../styles/cva';
import type { VariantProps } from '../styles/cva';
import { focusRing } from '../styles/focus-ring';

const linkStyles = compose(
	focusRing,
	cva({
		base: 'cursor-pointer rounded-xs font-sans transition-colors disabled:cursor-default disabled:opacity-45',
		variants: {
			variant: {
				accent: 'text-accent-ink font-semibold hover:underline',
				default: 'text-text underline underline-offset-2 hover:text-accent-ink',
				muted: 'text-muted hover:text-text',
			},
		},
		defaultVariants: {
			variant: 'accent',
		},
	}),
);

export type LinkProps = RACLinkProps & VariantProps<typeof linkStyles>;

export function Link({ variant, ...props }: LinkProps) {
	return (
		<RACLink
			{...props}
			className={composeRenderProps(props.className, (className, renderProps) =>
				linkStyles({ ...renderProps, variant, className }),
			)}
		/>
	);
}
