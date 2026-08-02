import { cva } from '../styles/cva.js';

export const sheetOverlayStyles = cva({
	base: [
		'fixed inset-0 z-50 bg-black/50',
		'entering:animate-in entering:fade-in entering:duration-200 entering:ease-out',
		// exit must match the modal's 200ms and hold its end state — a shorter fade snaps
		// back to full dim for the remaining frames (visible backdrop flash)
		'exiting:animate-out exiting:fade-out exiting:duration-200 exiting:ease-in exiting:fill-mode-forwards',
	],
});

export const sheetStyles = cva({
	base: [
		'bg-surface fixed inset-x-0 bottom-0 z-50 max-h-[85dvh] rounded-t-[18px] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] outline-0',
		'entering:animate-in entering:slide-in-from-bottom-full entering:duration-300 entering:ease-out',
		'exiting:animate-out exiting:slide-out-to-bottom-full exiting:duration-200 exiting:ease-in exiting:fill-mode-forwards',
	],
});
