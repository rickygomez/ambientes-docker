import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';

/* ref para regras | https://eslint.vuejs.org/rules/ */
/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,vue}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    {
        rules: {
            'indent': ['error', 4],
            'linebreak-style': ['error', 'unix'],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
            'comma-spacing': [
                'error',
                { before: false, after: true }
            ],
            'vue/multi-word-component-names': 'off',
            'vue/html-indent': [
                'error',
                4,
                {
                    'attribute': 1,
                    'closeBracket': 0,
                    'alignAttributesVertically': false
                }
            ],
            'vue/html-quotes': [
                'error',
                'double',
                {
                    'avoidEscape': true
                }
            ],
            'vue/first-attribute-linebreak': ['error', {
                'singleline': 'beside',
                'multiline': 'beside'
            }],
            'vue/max-attributes-per-line': ['error', {
                'singleline': {
                    'max': 3
                },
                'multiline': {
                    'max': 1
                }
            }],
            'vue/html-closing-bracket-newline': [
                'error',
                {
                    'singleline': 'never',
                    'multiline': 'always',
                    'selfClosingTag': {
                        'singleline': 'never',
                        'multiline': 'always'
                    }
                }
            ],
            'vue/html-closing-bracket-spacing': ['error', {
                'startTag': 'never',
                'endTag': 'never',
                'selfClosingTag': 'always'
            }],
            'vue/html-self-closing': ['error', {
                'html': {
                    'void': 'never',
                    'normal': 'never',
                    'component': 'always'
                },
                'svg': 'always',
                'math': 'always'
            }],
            'vue/multiline-html-element-content-newline': ['error', {
                'ignoreWhenEmpty': true,
                'allowEmptyLines': true
            }],
            'key-spacing': [
                'error', {
                    'multiLine': {
                        'beforeColon': false,
                        'afterColon': true

                    },
                    'align': {
                        'beforeColon': true,
                        'afterColon': true,
                        'on': 'colon'
                    }
                }],
            /* 'vue/no-undef-properties': ['error', {
                'ignores': ['/^\\route(/']
            }] */
            //'vue/no-mutating-props': 'off'
        }
    }
];
