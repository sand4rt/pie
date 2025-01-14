module.exports = {
    extends: [
        require.resolve('@justeattakeaway/eslint-config-pie/strict'),
        'plugin:@typescript-eslint/recommended'
    ],
    plugins: [
        'json-format',
        '@typescript-eslint'
    ],
    root: true,
    settings: {
        'json/sort-package-json': false,
    },
    rules: {
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'class-methods-use-this': 'off',
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './tsconfig.json',
            },
        }
    ],
};
