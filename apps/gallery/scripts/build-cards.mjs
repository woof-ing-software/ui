/* Builds one self-contained HTML per component demo (VITE_CARD picks the demo in
   src/main.tsx) and stamps the Claude Design card marker. Output: dist-cards/. */
import { execSync } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const CARDS = ['avatar', 'button', 'field', 'link', 'menu', 'segmented-control', 'select', 'sheet', 'switch'];

const appDir = fileURLToPath(new URL('..', import.meta.url));
mkdirSync(new URL('../dist-cards', import.meta.url), { recursive: true });

for (const card of CARDS) {
	console.log(`\n▶ ${card}`);
	execSync('pnpm exec vite build', { cwd: appDir, env: { ...process.env, VITE_CARD: card }, stdio: 'inherit' });
	const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
	writeFileSync(
		new URL(`../dist-cards/ui-${card}.html`, import.meta.url),
		`<!-- @dsCard group="Components" -->\n${html}`,
	);
}

console.log(`\nbuilt ${CARDS.length} cards -> dist-cards/`);
