module.exports = {
    parser: "@typescript-eslint/parser",
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        "@typescript-eslint/interface-name-prefix": ['off'],
        "@typescript-eslint/ban-ts-ignore": ['off'],
        "react/prop-types": ['off'],
        "@typescript-eslint/explicit-function-return-type": ['off'],
        "@typescript-eslint/no-unused-vars": [2]
    },
    settings: {
        react: {
            version: "detect"
        }
    }
};