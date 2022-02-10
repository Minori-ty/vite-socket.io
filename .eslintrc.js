module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        // 'plugin:@typescript-eslint/recommended',
        '@vue/prettier',
    ],
    parserOptions: {
        ecmaVersion: 13,
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/no-explicit-any': ['off'],
        '@typescript-eslint/indent': ['off'],
        '@typescript-eslint/no-unused-vars': ['error'],
    },
    globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineComponent: 'readonly',
        defineExpose: 'readonly',
    },
}
