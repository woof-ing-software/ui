import type { Meta, StoryObj } from '@storybook/react-vite';

const BASE_TOKENS = ['bg', 'surface', 'surface-2', 'line', 'text', 'muted', 'accent', 'accent-ink', 'danger'] as const;
const APPS = ['community', 'art-corner', 'blog', 'support', 'moderation'] as const;

function Swatch({ label, varName }: { readonly label: string; readonly varName: string }) {
	return (
		<div className="flex items-center gap-3">
			<span className="border-line size-9 shrink-0 rounded-lg border" style={{ background: `var(${varName})` }} />
			<div className="font-sans">
				<p className="text-text text-[13px] font-semibold">{label}</p>
				<p className="text-muted font-mono text-[11px]">{varName}</p>
			</div>
		</div>
	);
}

function TokenBoard() {
	return (
		<div className="flex flex-col gap-8 font-sans">
			<section>
				<h2 className="text-muted mb-3 text-[11px] font-extrabold tracking-widest uppercase">Base tokens</h2>
				<div className="grid grid-cols-3 gap-x-10 gap-y-3">
					<Swatch label="bg" varName="--bg" />
					<Swatch label="surface" varName="--surface" />
					<Swatch label="surface-2" varName="--surface-2" />
					<Swatch label="line" varName="--line" />
					<Swatch label="text" varName="--text" />
					<Swatch label="muted" varName="--muted" />
					<Swatch label="accent" varName="--accent" />
					<Swatch label="danger" varName="--danger" />
				</div>
			</section>
			<section>
				<h2 className="text-muted mb-3 text-[11px] font-extrabold tracking-widest uppercase">App accents</h2>
				<div className="grid grid-cols-3 gap-x-10 gap-y-3">
					{APPS.map((app) => (
						<Swatch key={app} label={app} varName={`--accent-${app}`} />
					))}
				</div>
			</section>
			<section>
				<h2 className="text-muted mb-3 text-[11px] font-extrabold tracking-widest uppercase">
					Accent ink (use-site computed)
				</h2>
				<div className="flex flex-col gap-2">
					{APPS.map((app) => (
						<p key={app} className="text-accent-ink text-sm font-bold" data-accent={app}>
							{app} — accent-ink stays readable on every theme
						</p>
					))}
				</div>
			</section>
			<section>
				<h2 className="text-muted mb-3 text-[11px] font-extrabold tracking-widest uppercase">Utilities</h2>
				<p className="text-muted max-w-lg text-[13px]">
					Semantic utilities only: {BASE_TOKENS.map((token) => `bg-${token}`).join(', ')} … never raw palette values.
				</p>
			</section>
		</div>
	);
}

const meta = {
	title: 'Theme/Tokens',
	component: TokenBoard,
	parameters: {
		layout: 'padded',
	},
} satisfies Meta<typeof TokenBoard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Tokens: Story = {};
