import { defineConfig } from 'oxfmt';

export default defineConfig({
	printWidth: 120,
	useTabs: true,
	singleQuote: true,
	sortImports: true,
	ignorePatterns: ['**/dist/**', '**/storybook-static/**'],
});
