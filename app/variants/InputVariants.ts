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
	"absolute bg-red-500 z-50 mt-1 origin-top-right overflow-hidden focus:outline-none flex flex-col gap-y-1 rounded-xl px-2 py-4 shadow border border-slate-50",
	{
		variants: {
			popoverVariant: {
				primary: "bg-white [&>*]:mt-4 [&>*]:text-2xl",
				secondary: "",
				contrast: "bg-popover-contrast text-contrastForeground",
			},
			popoverSize: {
				fit: "w-fit max-w-xs",
				full: "w-full max-w-xs",
				sm: "",
				xs: "",
				icon: "",
				none: "",
			},
			popoverPosition: {
				left: "left-0",
				right: "right-0",
			},
		},
		defaultVariants: {
			popoverVariant: "primary",
			popoverSize: "full",
			popoverPosition: "left",
		},
	}
);

export type InputProps = VariantProps<typeof inputVariants>;
export type PopoverProps = VariantProps<typeof popoverVariants>;