export function Segmented<TOption extends string>(props: {
	readonly label: string;
	onChange(next: TOption): void;
	readonly options: readonly TOption[];
	readonly value: TOption;
}) {
	return (
		<div className="flex min-w-0 max-w-full items-center gap-2">
			<span className="text-muted shrink-0 text-[11px] font-bold tracking-wider uppercase">{props.label}</span>
			<div className="border-line bg-bg flex min-w-0 gap-0.5 overflow-x-auto rounded-[9px] border p-0.5">
				{props.options.map((option) => (
					<button
						className={`shrink-0 cursor-pointer rounded-[7px] border-0 px-2.5 py-1.5 font-sans text-xs font-semibold whitespace-nowrap transition-colors ${
							option === props.value ? 'bg-surface-2 text-text' : 'text-muted bg-transparent'
						}`}
						key={option}
						onClick={() => props.onChange(option)}
						type="button"
					>
						{option}
					</button>
				))}
			</div>
		</div>
	);
}
