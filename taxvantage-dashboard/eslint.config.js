import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Ignore specific directories
  { ignores: ['dist', 'node_modules'] },

  // Main configuration for JavaScript and JSX files
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest', // Use the latest ECMAScript version
      globals: {
        ...globals.browser, // Browser globals (e.g., `window`, `document`)
        ...globals.node, // Node.js globals (e.g., `process`, `require`)
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX support
        },
        sourceType: 'module', // Use ES modules
      },
    },
    plugins: {
      'react-hooks': reactHooks, // React Hooks plugin
      'react-refresh': reactRefresh, // React Refresh plugin
    },
    rules: {
      // Recommended rules from eslint:recommended
      ...js.configs.recommended.rules,

      // Recommended rules from react-hooks
      ...reactHooks.configs.recommended.rules,

      // Custom rules
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^[A-Z_]', // Ignore variables starting with uppercase or underscores
          argsIgnorePattern: '^_', // Ignore unused arguments starting with an underscore
        },
      ],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // Allow exporting constants
      ],
      'react/jsx-uses-vars': 'error', // Prevent unused JSX variables
      'react/jsx-uses-react': 'error', // Prevent unused React imports
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
  },
];