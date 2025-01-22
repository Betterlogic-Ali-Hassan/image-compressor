import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		spacing: {
			'custom': 'calc(33.33% - 30px)',
		  },
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground-color)',
  			text: 'var(--text-color)',
  			primary: {
  				DEFAULT: 'var(--primary-color)',
  				border: 'var(--card-border)'
  			},
			"gray-color" : 'var(--gray-color)',
  			border: 'var(--border-color)',
  			myShadow: 'var(--my-shadow)',
  			headShadow: 'var(--head-shadow)'
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
