import { cva, type VariantProps } from "class-variance-authority";

export const badgeVariants = cva(
	"relative inline-flex items-center rounded-lg border font-medium shrink-0",
	{
		variants: {
			variant: {
				primary:
					"bg-yellow-400 border-yellow-500 shadow-[inset_0_2px_2px_1px_rgba(241,177,0)] dark:text-dark-950",
				secondary:
					"text-white bg-violet-600 border-violet-600 shadow-[inset_0_2px_2px_1px_rgba(255,255,255,0.4)] [text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]",
				destructive:
					"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
				outline: "border-border text-foreground",
			},
			size: {
				xl: "text-xl px-4 py-1",
				lg: "text-lg px-4 py-1",
				base: "text-base px-2 h-6",
				sm: "text-xs px-2 h-5",
				xs: "text-xs px-2 py-0.5",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "sm",
		},
	}
);

export type BadgeProps = VariantProps<typeof badgeVariants>;
