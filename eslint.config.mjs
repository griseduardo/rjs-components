import eslint from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
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
      "@typescript-eslint/unbound-method": "off",
    },
  }
);
