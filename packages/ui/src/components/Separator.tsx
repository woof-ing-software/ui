import { Separator as RACSeparator } from 'react-aria-components';
import type { SeparatorProps as RACSeparatorProps } from 'react-aria-components';

import { cx } from '../styles/cva.js';

export function Separator(props: RACSeparatorProps) {
	return (
		<RACSeparator
			{...props}
			className={cx(
				'bg-line border-0',
				props.orientation === 'vertical' ? 'mx-1 h-full w-px self-stretch' : 'my-1 h-px w-full',
				props.className,
			)}
		/>
	);
}
