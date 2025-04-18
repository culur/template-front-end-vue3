const inProductionEnv = process.env.NODE_ENV === 'production'
const rulesSeverityOff = inProductionEnv ? 'warn' : 'off'

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['@antfu'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
    '@typescript-eslint/no-explicit-any': rulesSeverityOff,
    'no-console': rulesSeverityOff,
    'no-debugger': rulesSeverityOff,
    'max-len': [
      'warn',
      {
        code: 200,
        tabWidth: 2,
      },
    ],
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
}
