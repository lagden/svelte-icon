const ignoreWarnings = new Set([
	'a11y-no-onchange',
	'a11y-label-has-associated-control',
	'css-unused-selector',
])

const config = {
	compilerOptions: {
		css: true,
	},
	extensions: ['.svelte'],
	onwarn(warning, handler) {
		// console.log('warning.code', warning.code)
		if (ignoreWarnings.has(warning.code)) {
			return
		}
		handler(warning)
	},
}

export default config
