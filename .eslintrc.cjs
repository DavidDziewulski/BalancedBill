module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'prettier',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: [
        '@typescript-eslint',
        'react',
    ],
    rules: {
        'react/react-in-jsx-scope': 0,
        "import/prefer-default-export": "off",
        "react/function-component-definition": "off",
        "import/extensions": "off",
        "react/jsx-wrap-multilines": ["error", {
            declaration: "parens-new-line", 
            assignment: "parens-new-line",  
            return: "parens-new-line",      
            arrow: "parens-new-line",       
            condition: "parens-new-line",   
            logical: "parens-new-line",     
            prop: "parens-new-line",        
        }],
        "react/jsx-one-expression-per-line": ["error", {
            allow: "single-child",
        }],
        indent: ['error', 4],
        "react/jsx-indent": ["error", 4],
        "no-multi-spaces": ["error"],
        "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
    },
};
