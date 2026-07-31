import { useEffect } from 'react';

/** Applies the toolbar-selected theme + app accent to <html> so portalled overlays inherit them. */
export function PlatformGlobals({ accent, theme }: { readonly accent: string; readonly theme: string }) {
	useEffect(() => {
		document.documentElement.dataset.theme = theme;
		document.documentElement.dataset.accent = accent;
	}, [accent, theme]);

	return null;
}
