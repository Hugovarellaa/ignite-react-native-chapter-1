module.exports = {
    env: {
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },

    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'interface',
                format: ['PascalCase'],
                custom: {
                    regex: '^I[A-Z]',
                    match: true,
                },
            },
        ],
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.jsx', '.js'],
            },
        ],
        'import/prefer-default-export': 'off',
        'react/state-in-constructor': 'off',
        'react/static-property-placement': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'no-param-reassign': 'off',
        'no-console': 'off',
    },
}
