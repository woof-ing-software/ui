import { cva } from '../styles/cva.js';

export const inputStyles = cva({
	base: [
		'bg-bg text-text border-line placeholder-muted/70 w-full rounded-lg border px-2.5 py-2 font-sans text-sm outline-0 transition-colors',
		'focus:border-accent/60 focus-visible:outline-accent focus-visible:outline-2 focus-visible:-outline-offset-1',
		'invalid:border-danger/60 disabled:opacity-45',
	],
});
