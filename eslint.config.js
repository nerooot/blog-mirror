// @ts-check

import js from "@eslint/js";
import ts from "typescript-eslint";
import astro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["dist/**", ".astro/**"],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  .../** @type {any} */ (astro.configs["flat/recommended"]),
  {
    languageOptions: {
      globals: { ...globals.node, ...globals.browser },
    },
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: ts.parser,
        extraFileExtensions: [".astro"],
      },
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.astro"],
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double", { allowTemplateLiterals: true }],
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
];
