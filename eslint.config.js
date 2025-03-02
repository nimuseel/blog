import prettier from 'eslint-plugin-prettier';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import unusedImports from 'eslint-plugin-unused-imports';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends('next/core-web-vitals', 'prettier'),
  {
    plugins: {
      'unused-imports': unusedImports,
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',

      'import/no-anonymous-default-export': [
        'none',
        {
          allowObject: true,
        },
      ],
      'unused-imports/no-unused-imports': 'error',
    },
  },
];
