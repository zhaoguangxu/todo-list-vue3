import eslint from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tseslintParser from '@typescript-eslint/parser'
import vuePlugin from 'eslint-plugin-vue'
import prettierConfig from '@vue/eslint-config-prettier'

export default [
  eslint.configs.recommended,
  {
    files: ['**/*.{js,ts,vue}'],
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      vue: vuePlugin,
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      ...tseslint.configs.recommended.rules,
      ...vuePlugin.configs.base.rules,
      ...vuePlugin.configs.essential.rules,
    },
  },
  prettierConfig,
]
