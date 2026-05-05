import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.astro"],
    rules: {
      "astro/no-set-html-directive": "error",
    },
  },
  eslintConfigPrettier,
];
