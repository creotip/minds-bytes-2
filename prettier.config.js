/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
	plugins: ['prettier-plugin-tailwindcss'],
	singleQuote: true,
	jsxSingleQuote: false,
	semi: false,
	printWidth: 100,
	// useTabs: true,
}

export default config
