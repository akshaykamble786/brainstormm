/** @type {import('tailwindcss').Config} */

const config = {
	darkMode: ["class"],
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
    	extend: {
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			'washed-blue-50': '#f0f3ff',
    			'washed-blue-100': '#d0daff',
    			'washed-blue-200': '#bac9ff',
    			'washed-blue-300': '#9ab0ff',
    			'washed-blue-400': '#86a1ff',
    			'washed-blue-500': '#6889ff',
    			'washed-blue-600': '#5f7de8',
    			'washed-blue-700': '#4a61b5',
    			'washed-blue-800': '#394b8c',
    			'washed-blue-900': '#2c3a6b',
    			'washed-purple-50': '#f8f7ff',
    			'washed-purple-100': '#e8e7ff',
    			'washed-purple-200': '#dddcff',
    			'washed-purple-300': '#cecbff',
    			'washed-purple-400': '#c5c1ff',
    			'washed-purple-500': '#b6b2ff',
    			'washed-purple-600': '#a6a2e8',
    			'washed-purple-700': '#817eb5',
    			'washed-purple-800': '#64628c',
    			'washed-purple-900': '#4c4b6b',
    			'primary-blue-50': '#e6f0ff',
    			'primary-blue-100': '#b2d1ff',
    			'primary-blue-200': '#8cbaff',
    			'primary-blue-300': '#589bff',
    			'primary-blue-400': '#3787ff',
    			'primary-blue-500': '#0569ff',
    			'primary-blue-600': '#0560e8',
    			'primary-blue-700': '#044bb5',
    			'primary-blue-800': '#033a8c',
    			'primary-blue-900': '#022c6b',
    			'primary-purple-50': '#f1e6ff',
    			'primary-purple-100': '#d3b0ff',
    			'primary-purple-200': '#bd8aff',
    			'primary-purple-300': '#9f54ff',
    			'primary-purple-400': '#8d33ff',
    			'primary-purple-500': '#7000ff',
    			'primary-purple-600': '#6600e8',
    			'primary-purple-700': '#5000b5',
    			'primary-purple-800': '#3e008c',
    			'primary-purple-900': '#2f006b',
    			'Neutrals/neutrals-1': '#ffffff',
    			'Neutrals/neutrals-2': '#fcfcfd',
    			'Neutrals/neutrals-3': '#f5f5f6',
    			'Neutrals/neutrals-4': '#f0f0f1',
    			'Neutrals/neutrals-5': '#d9d9dc',
    			'Neutrals/neutrals-6': '#c0bfc4',
    			'Neutrals/neutrals-7': '#8d8c95',
    			'Neutrals/neutrals-8': '#5b5966',
    			'Neutrals/neutrals-9': '#464553',
    			'Neutrals/neutrals-10': '#282637',
    			'Neutrals/neutrals-11': '#201f30',
    			'Neutrals/neutrals-12': '#161427',
    			'Neutrals/neutrals-13': '#020014',
    			'brand-washedPurple': '#b5b2ff',
    			'brand-washedBlue': '#6889ff',
    			'brand-primaryBlue': '#0469ff',
    			'brand-primaryPurple': '#7000ff',
    			'brand-dark': '#030014',
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
	plugins: ["tailwindcss-animate", require("tailwindcss-animate")],
};

export default config;