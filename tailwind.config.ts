import type { Config } from 'tailwindcss';
import { withColidyUI } from '@colidy/ui-utils';

const config: Config = {
	darkMode: 'class',
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				body: 'hsl(var(--body))',
				card: 'hsl(var(--card))',
			},
		},

		container: {
			center: true,
			screens: {
				sm: '100%',
				md: '100%',
				lg: '1024px',
				xl: '1280px',
			},
		},
	},
	plugins: [],
};

export default withColidyUI(config);
