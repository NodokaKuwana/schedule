module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'plugin:nuxt/recommended'
  ],
  globals: {
    vue: true
  },
  plugins: [
    'prettier',
    'vue',
    'nuxt'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off'
  }
}
