import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{html,js,svelte,ts}'], theme: { extend: { colors: { medical: '#0b5ed7', ai: '#7c3aed' }, boxShadow: { soft:'0 10px 30px rgba(11,94,215,.12)' } } }, plugins: [require('@tailwindcss/forms')]};
export default config;
