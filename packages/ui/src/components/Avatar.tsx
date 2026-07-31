import { cva, cx } from '../styles/cva';
import type { VariantProps } from '../styles/cva';

const avatarStyles = cva({
	base: 'grid shrink-0 select-none place-items-center overflow-hidden rounded-full font-extrabold text-[#1c1522] [background:linear-gradient(135deg,#c99ef0,#8f7bf5)]',
	variants: {
		size: {
			sm: 'size-6 text-[9px]',
			md: 'size-7 text-[11px]',
			lg: 'size-10 text-sm',
			xl: 'size-16 text-xl',
		},
	},
	defaultVariants: {
		size: 'md',
	},
});

export type AvatarProps = VariantProps<typeof avatarStyles> & {
	readonly className?: string;
	/** Overrides the initials derived from name. */
	readonly initials?: string;
	readonly name: string;
	readonly src?: string;
};

function deriveInitials(name: string) {
	return name
		.split(/\s+/)
		.slice(0, 2)
		.map((word) => word.charAt(0))
		.join('')
		.toUpperCase();
}

export function Avatar({ className, initials, name, size, src }: AvatarProps) {
	return (
		<span aria-hidden className={cx(avatarStyles({ size }), className)}>
			{src ? <img alt="" className="size-full object-cover" src={src} /> : (initials ?? deriveInitials(name))}
		</span>
	);
}
