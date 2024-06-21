module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh", "security", "import"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"security/detect-non-literal-regexp": "warn",
		"security/detect-buffer-noassert": "warn",
		"react-refresh/only-export-components": "off",
		"react-hooks/exhaustive-deps": "off",
		"import/no-duplicates": "warn",
		"no-duplicate-case": "warn",	
	},
};
