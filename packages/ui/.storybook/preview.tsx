import type { Decorator, Preview } from '@storybook/react-vite';

import { PlatformGlobals } from './PlatformGlobals.js';

import './preview.css';

const withPlatformGlobals: Decorator = (Story, context) => (
	<>
		<PlatformGlobals accent={context.globals.accent as string} theme={context.globals.theme as string} />
		<Story />
	</>
);

const preview: Preview = {
	decorators: [withPlatformGlobals],
	globalTypes: {
		theme: {
			description: 'Color theme',
			toolbar: {
				title: 'Theme',
				icon: 'mirror',
				items: ['dark', 'light', 'black'],
				dynamicTitle: true,
			},
		},
		accent: {
			description: 'Per-app accent',
			toolbar: {
				title: 'Accent',
				icon: 'paintbrush',
				items: ['community', 'art-corner', 'blog', 'support', 'moderation'],
				dynamicTitle: true,
			},
		},
	},
	initialGlobals: {
		theme: 'dark',
		accent: 'community',
	},
	parameters: {
		layout: 'centered',
	},
};

export default preview;
