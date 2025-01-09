import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import babelParser from "@babel/eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [{
  ignores: ["**/*.stories.tsx"],
}, ...fixupConfigRules(compat.extends(
  "eslint:recommended",
  "plugin:react/recommended",
  "plugin:react-hooks/recommended",
  "plugin:@typescript-eslint/recommended",
  "prettier",
)), {
  plugins: {
    prettier,
    react: fixupPluginRules(react),
    reactHooks,
    typescriptEslint,
  },

  languageOptions: {
    globals: {
      ...globals.jest,
    },

    parser: babelParser,
    ecmaVersion: "latest",
    sourceType: "module",
  },

  settings: {
    react: {
      version: "detect",
    },
  },

  rules: {
    "prettier/prettier": ["error"],
    "no-console": "warn",
    "no-duplicate-imports": "error",
    eqeqeq: "error",
    "react/destructuring-assignment": "error",
    "react/no-array-index-key": "error",
    "react/jsx-no-useless-fragment": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-unused-vars": "off",
  },
}, {
  files: ["**/*.test.tsx"],

  rules: {
    "@typescript-eslint/no-unused-expressions": "off",
  },
}];
