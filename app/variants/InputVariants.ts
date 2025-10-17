import { cva, type VariantProps } from "class-variance-authority";

export const inputVariants = cva("", {
	variants: {
		variant: {
			primary:
				"group flex items-center gap-x-2 bg-stone-200 text-stone-950 font-medium w-full transition-all duration-100 ease-linear border-2 border-transparent disabled:cursor-not-allowed disable:opacity-50 dark:bg-dark-900 dark:text-dark-200",
			secondary: "",
			outline: "",
			contrast: "group flex items-center gap-x-2 bg-stone-200 text-stone-950 font-medium w-full transition-all duration-100 ease-linear border-2 border-transparent disabled:cursor-not-allowed disable:opacity-50 dark:bg-dark-950 dark:text-dark-200"
		},
		size: {
			xl: "",
			lg: "",
			base: "h-12 px-3.5 rounded-xl",
			sm: "h-9 px-0.5 text-sm rounded-lg",
			xs: "",
			icon: "",
			none: "",
			checkbox: "h-6 w-6",
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "base",
	},
});

export const popoverVariants = cva(
	"backdrop-blur-xl rounded-2xl py-0.5 px-2 shadow-lg focus:outline-none",
	{
		variants: {
			popoverVariant: {
				primary: "w-72 bg-white ring-1 ring-black/5 dark:bg-dark-950",
				secondary: "",
				contrast: "bg-[hsl(0_0%_15%_/_98%)] ring-black/5 dark:bg-dark-950",
			},
			popoverSize: {
				fit: "w-fit max-w-xs",
				full: "w-full max-w-xs",
				xs: "w-xs",
				sm: "w-sm",
				md: "w-md",
			},
		},
		defaultVariants: {
			popoverVariant: "primary",
			popoverSize: "fit",
		},
	}
);

export type InputProps = VariantProps<typeof inputVariants>;
export type PopoverProps = VariantProps<typeof popoverVariants>;