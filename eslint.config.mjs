// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginImport from "eslint-plugin-import-x";

export default [{
  files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      }
    }
  },
  settings: {
    react: {
      version: "detect"
    },
    "import-x/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      },
      typescript: true
    }
  }
}, pluginJs.configs.recommended, ...tseslint.configs.recommended, pluginReact.configs.flat.recommended, {
  plugins: {
    "react-hooks": pluginReactHooks,
    "import": pluginImport
  },
  rules: {
    ...pluginReactHooks.configs.recommended.rules,
    
    // Custom Rules from package.json
    "import/newline-after-import": "error",
    "import/no-anonymous-default-export": "off",
    "import/order": [
      "error",
      {
        "alphabetize": {
          "caseInsensitive": true,
          "order": "asc"
        },
        "groups": [
          ["builtin", "external"],
          ["internal", "parent", "sibling", "index"]
        ],
        "newlines-between": "always"
      }
    ],
    "no-console": "warn",
    
    // React specific overrides
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off", // TypeScript handles this
    
    // Relax strict TypeScript rules to match legacy behavior
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "warn",
  }
}, {
  ignores: [
    "dist/**",
    "dist-styleguide/**",
    "build/**",
    "node_modules/**",
    "resources/**",
    "src/icons/*Icon.tsx"
  ]
}, ...storybook.configs["flat/recommended"]];
