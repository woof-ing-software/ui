import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [
		dts({
			include: ['src'],
			exclude: ['src/**/*.stories.tsx'],
		}),
	],
	build: {
		lib: {
			entry: 'src/index.ts',
			formats: ['es'],
			fileName: 'index',
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'react/jsx-runtime', 'react-aria-components', 'cva', 'tailwind-merge'],
		},
	},
});
