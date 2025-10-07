import type { SiteConfig, FaqItem, NavItem, PlanItem } from "~/types/marketing";


export const siteConfig: SiteConfig = {
	name: "Scheduler",
	description: "This is an amazing description",
	defaultOgImage: "/default-og-image.png",
	links: {
		x: "https://twitter.com/",
		instagram: "https://instagram.com/",
	},
	email: "hello@graphiqo.app",
};

export const pricing = [
	{
		label: "Free",
		price: "0",
		description: "Create and share up to 5 charts using our essential tools and templates.",
		features: [
			"Up to 5 charts",
			"Unlimited shares",
			"Access to basic templates",
			"Basic color schemes",
			"Graphiqo watermark on charts",
		],
	},
	{
		label: "Pro",
		price: "14",
		description: "Unlock full customization, premium templates, and advanced branding features.",
		features: [
			"Custom colors & fonts",
			"Access to all premium templates",
			"Remove Graphiqo watermark",
			"Add your own logo or watermark",
			"Priority support",
		],
	},
];



export const faqs: FaqItem[] = [
	{
		question: "What is this tool exactly?",
		answer: "It’s a fast, intuitive way to create stunning charts without the mess of complex software. No steep learning curve, no clutter — just charts that look as good as your data deserves.",
	},
	{
		question: "Do I need to know anything about data visualization?",
		answer: "Not at all! Whether you're a spreadsheet wizard or just need to show some stats quickly, we’ve made it easy for anyone to jump in and create a great-looking chart in seconds.",
	},
	{
		question: "Can I customize my charts?",
		answer: "Yes — fully. Fonts, colors, gridlines, legends, styles… it’s all in your hands. Make your charts match your vibe.",
	},
	{
		question: "Is this free?",
		answer: "The beta is totally free while we’re testing and improving the product. Once we launch, we’ll have a free tier and a Pro plan with extra features.",
	},
	{
		question: "What formats can I export my charts in?",
		answer: "You can export as PNG, or JPG. Or just grab a link and share it instantly — no downloads required.",
	},
];
