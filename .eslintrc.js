module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ["plugin:react/recommended", "airbnb", "plugin:prettier/recommended"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 13,
		sourceType: "module",
	},
	plugins: ["react", "eslint-plugin-import-helpers", "prettier"],
	rules: {
		"no-restricted-syntax": "off",
		"react/react-in-jsx-scope": "off",
		"react/jsx-filename-extension": "off",
		"jsx-a11y/anchor-is-valid": "off",
		"jsx-a11y/label-has-associated-control": "off",
		"react/jsx-props-no-spreading": "off",
		"react/prop-types": "off",
		"react/destructuring-assignment": "off",
		"import/prefer-default-export": "off",
		"react/no-array-index-key": "off",
		"jsx-a11y/no-static-element-interactions": "off",
		"jsx-a11y/click-events-have-key-events": "off",
		radix: "off",
		"no-console": "error",
		"global-require": "off",
		"react/jsx-no-constructed-context-values": "off",
		"import/no-named-default": "off",
		"no-nested-ternary": "off",
		"no-return-assign": "off",
		"class-methods-use-this": "off",
		"no-param-reassign": "off",
		"jsx-a11y/no-noninteractive-element-interactions": "off",
		"no-underscore-dangle": "off",
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
				semi: false,
				doubleQuote: true,
				jsxSingleQuote: true,
				singleQuote: false,
				useTabs: true,
				tabWidth: 4,
				printWidth: 160,
			},
		],
	},
}
