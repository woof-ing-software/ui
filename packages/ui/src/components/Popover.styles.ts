import { cva } from '../styles/cva.js';

export const popoverStyles = cva({
	base: [
		'bg-surface border-line text-text rounded-[14px] border shadow-[0_24px_50px_rgba(0,0,0,0.5)]',
		'entering:animate-in entering:fade-in entering:zoom-in-95 entering:duration-150 entering:ease-out',
		'exiting:animate-out exiting:fade-out exiting:zoom-out-95 exiting:duration-100 exiting:ease-in',
		'placement-top:slide-in-from-bottom-1 placement-bottom:slide-in-from-top-1',
		'placement-left:slide-in-from-right-1 placement-right:slide-in-from-left-1',
	],
});
