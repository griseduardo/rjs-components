import eslint from "@eslint/js";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  eslintPluginPrettierRecommended,
  {
    ignores: ["**/*.stories.tsx"],
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "no-console": "warn",
      "no-duplicate-imports": "error",
      eqeqeq: "error",
      "react/destructuring-assignment": "error",
      "react/no-array-index-key": "error",
      "react/jsx-no-useless-fragment": "error",
      "@typescript-eslint/no-unused-vars": "off",
    }
  },
  {
    files: ["**/*.test.tsx"],
    rules: {
      "@typescript-eslint/no-unused-expressions": "off",
    },
  }
);
