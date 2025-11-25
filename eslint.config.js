import globals from "globals";
import js from "@eslint/js";
import vueParser from "vue-eslint-parser";
import tsParser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,

  {
    files: ["**/*.ts", "**/*.vue"],

    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2023,
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
      },
    },

    rules: {
      "no-unused-vars": "warn",
    },
  },
];
