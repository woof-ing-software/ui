import browser from 'eslint-config-neon/oxlint/browser';
import common from 'eslint-config-neon/oxlint/common';
import jsxA11y from 'eslint-config-neon/oxlint/jsx-a11y';
import prettier from 'eslint-config-neon/oxlint/prettier';
import react from 'eslint-config-neon/oxlint/react';
import typescript from 'eslint-config-neon/oxlint/typescript';
import { defineConfig } from 'oxlint';

export default defineConfig({
	extends: [common, browser, react, jsxA11y, typescript, prettier],
	ignorePatterns: ['**/dist/**', '**/storybook-static/**', '**/node_modules/**'],
	options: {
		typeAware: true,
		typeCheck: true,
		reportUnusedDisableDirectives: 'warn',
	},
});
