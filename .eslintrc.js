module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        // "plugin:vue/base",
        'plugin:vue/vue3-recommended',
        // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    ],
    parserOptions: {
        ecmaVersion: 2022, // Add this line
    },
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
    }
}