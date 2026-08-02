import { useCallback, useSyncExternalStore } from 'react';

/** SSR-safe media query state — false on the server and during hydration's first paint. */
export function useMediaQuery(query: string) {
	const subscribe = useCallback(
		(onChange: () => void) => {
			const mql = globalThis.matchMedia(query);
			mql.addEventListener('change', onChange);
			return () => mql.removeEventListener('change', onChange);
		},
		[query],
	);

	return useSyncExternalStore(
		subscribe,
		() => globalThis.matchMedia(query).matches,
		() => false,
	);
}
