import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

// Builds one self-contained dist/index.html for the Claude Design project.
export default defineConfig({
	plugins: [react(), tailwindcss(), viteSingleFile()],
});
