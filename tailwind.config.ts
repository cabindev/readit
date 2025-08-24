import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                seppuri: ['var(--font-seppuri)', 'sans-serif'],
            },
            colors: {
                primary: {
                    50: '#fef7ed',
                    100: '#fdedd3',
                    200: '#fbd6a5',
                    300: '#f8b86d',
                    400: '#f59332',
                    500: '#f37516',
                    600: '#e4570b',
                    700: '#bd410b',
                    800: '#973411',
                    900: '#7c2d12',
                    950: '#431407',
                },
                secondary: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                    950: '#020617',
                }
            },
            fontSize: {
                'xs': '0.75rem',
                'sm': '0.8rem',
                'base': '0.85rem',
                'lg': '0.9rem',
                'xl': '1rem',
                '2xl': '1.25rem',
                '3xl': '1.5rem',
                '4xl': '2rem',
            }
        },
    },
    plugins: [],
};
export default config;
