const {
    defineConfig,
} = require("eslint/config");

const globals = require("globals");
const parser = require("astro-eslint-parser");
const tsParser = require("@typescript-eslint/parser");
const astro = require("eslint-plugin-astro");
const react = require("eslint-plugin-react");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const js = require("@eslint/js");
const importPlugin = require("eslint-plugin-import");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        globals: {
            ...globals.browser,
        },

        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module",
        parserOptions: {},
    },

    extends: compat.extends(
        "eslint:recommended",
        "plugin:astro/recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ),

    plugins: {
        astro,
        react,
        "@typescript-eslint": typescriptEslint,
        "import": importPlugin,
    },

    rules: {
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off",

        "react/jsx-filename-extension": [2, {
            extensions: [".js", ".jsx", ".ts", ".tsx", ".astro"],
        }],

        "import/no-unresolved": "error",

        "import/extensions": ["error", "ignorePackages", {
            js: "never",
            jsx: "never",
            ts: "never",
            tsx: "never",
            astro: "never",
        }],
    },

    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            node: {
                paths: ["src"],
                extensions: [".js", ".jsx", ".ts", ".tsx", ".astro"],
            },

            typescript: {},
        },
    },
}, {
    files: ["**/*.astro"],

    languageOptions: {
        parser: parser,

        parserOptions: {
            parser: "@typescript-eslint/parser",
            extraFileExtensions: [".astro"],
        },
    },

    rules: {
        "astro/no-set-html-directive": "error",
        "react/no-unknown-property": "off",
    },
}]);
